describe('API Post functional test', () => {
    it('should return a list of posts', async() => {
        const { body , status} = await global.testRequest.get('/posts');
        expect(status).toBe(200)
        expect(body).toEqual([
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          ])
    });
});