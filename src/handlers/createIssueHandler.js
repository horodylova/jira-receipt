import api, { route } from '@forge/api';

export async function fetchBoards({ boardName }) {
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
        const board = boards.values.find((b) => b.name === boardName);
            
        if(!board) {
            throw new Error (`Board "{boardName}" not found.`)
        }
        return board;
    } catch (error) {
        console.error(`Failed to fetch board: ${error.message}`);
        throw error;
    }
}

