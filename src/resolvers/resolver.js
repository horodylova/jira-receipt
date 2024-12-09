import Resolver from '@forge/resolver';
import { fetchBoards } from '../handlers/createIssueHandler.js';

const resolver = new Resolver();

resolver.define('getBoards', async () => {
    try {
        const boards = await fetchBoards(); 
        console.log('Fetched boards in resolver:', boards); 
        return boards; 
    } catch (error) {
        console.error('Error in resolver while fetching boards:', error);
        throw error;
    }
});

export default resolver;







