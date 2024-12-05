import api, { route } from '@forge/api';

export async function fetchBoards() {
    try {
        const response = await api.asApp().requestJira(route`/rest/agile/1.0/board`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching boards: ${response.status} ${response.statusText}`);
        }

        const boards = await response.json();
        console.log('Fetched boards:', boards);
        return boards.values;
    } catch (error) {
        console.error(`Failed to fetch boards: ${error.message}`);
        throw error;
    }
}


export async function findBoardByName(boardName) {
    try {
        const boards = await fetchBoards();
        const board = boards.find((b) => b.name === boardName);

        if (!board) {
            throw new Error(`Board "${boardName}" not found.`);
        }

        console.log('Found board:', board);
        return { boardId: board.id, projectId: board.location.projectId };
    } catch (error) {
        console.error(`Failed to find board by name: ${error.message}`);
        throw error;
    }
}


export async function fetchProjectRoles(projectId) {
    try {
        const response = await api.asApp().requestJira(route`/rest/api/3/project/${projectId}/role`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`Error fetching project roles: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching project roles: ${response.status} ${response.statusText}`);
        }

        const roles = await response.json();
        console.log('Fetched project roles:', roles); 

        const usersUrls = Object.values(roles)
            .filter((role) => role.name === 'Developers' || role.name === 'Administrators')
            .map((role) => role.self);

        if (usersUrls.length === 0) {
            console.warn('No user URLs found in project roles.'); 
        }

        const allUsers = [];
        for (const url of usersUrls) {
            console.log(`Fetching users from role URL: ${url}`); 
            const userResponse = await api.asApp().requestJira(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!userResponse.ok) {
                console.error(`Error fetching users from role URL: ${userResponse.status} ${userResponse.statusText}`);
                throw new Error(`Error fetching users from role URL: ${userResponse.status} ${userResponse.statusText}`);
            }

            const users = await userResponse.json();
            console.log('Users fetched from role:', users); 
            allUsers.push(...users);
        }

        console.log('All users fetched from roles:', allUsers);
        return allUsers;
    } catch (error) {
        console.error(`Failed to fetch project roles or users: ${error.message}`);
        throw error;
    }
}


export async function fetchUsersFromRole(roleUrl) {
    try {
        const response = await api.asApp().requestJira(roleUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching users from role: ${response.status} ${response.statusText}`);
        }

        const users = await response.json();
        console.log('Fetched users from role:', users);
        return users;
    } catch (error) {
        console.error(`Failed to fetch users from role: ${error.message}`);
        throw error;
    }
}


export async function findUserByName(projectId, userName) {
    try {
        const roles = await fetchProjectRoles(projectId);

        const users = [];
        for (const [roleName, roleData] of Object.entries(roles)) {
            if (roleName === 'Developers' || roleName === 'Administrators') {
                const roleUsers = await fetchUsersFromRole(roleData.self);
                users.push(...roleUsers);
            }
        }

        const user = users.find((u) => u.displayName === userName);

        if (!user) {
            throw new Error(`User "${userName}" not found in project "${projectId}".`);
        }

        console.log('Found user:', user);
        return user;
    } catch (error) {
        console.error(`Failed to find user by name: ${error.message}`);
        throw error;
    }
}


export async function fetchUserFromBoard(boardName, userName) {
    try {
        const { projectId } = await findBoardByName(boardName);
        const user = await findUserByName(projectId, userName);
        console.log(`User "${userName}" found in board "${boardName}":`, user);
        return user;
    } catch (error) {
        console.error(`Failed to fetch user from board: ${error.message}`);
        throw error;
    }
}



