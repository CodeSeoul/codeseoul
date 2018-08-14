let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe('Test api', () => {

    it('/testApi should return 418 im a teapot error', (done) => {
        chai.request(server)
            .get('/api/v1.0/testApi')
            .end((err, res) => {
                res.should.have.status(418);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});