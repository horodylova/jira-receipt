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

        const data = await response.json();
        console.log('Boards:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch boards:', error);
        throw error;
    }
}