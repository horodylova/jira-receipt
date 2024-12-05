import Resolver from '@forge/resolver';
import { fetchUserFromBoard } from '../handlers/createIssueHandler';  

const resolver = new Resolver();

resolver.define('findUserOnBoard', async ({ payload }) => {
    const { boardName, userName } = payload;
    if (!boardName || !userName) {
        throw new Error('Both boardName and userName are required.');
    }
    return await fetchUserFromBoard(boardName, userName);
});

export default resolver;





