const fetch = require('node-fetch');

async function fetchBoards() {
    try {
        const url = 'https://jira-receipt.atlassian.net/rest/agile/1.0/board';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer <access_token>', 
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching boards: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Boards:', data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { fetchBoards };
