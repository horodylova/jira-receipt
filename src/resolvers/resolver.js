const { Resolver } = require('@forge/resolver');
const { fetchBoards } = require('../handlers/createIssueHandler'); // Подключаем функцию

const resolver = new Resolver();

resolver.define('getBoards', async () => {
    return await fetchBoards(); 
});

export default resolver;


