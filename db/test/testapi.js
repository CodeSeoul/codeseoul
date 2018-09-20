describe('Test api', () => {
    it('/testApi should return 418 im a teapot error', (done) => {
        agent
            .get('/api/v1.0/testApi')
            .end((err, res) => {
                res.should.have.status(418);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});