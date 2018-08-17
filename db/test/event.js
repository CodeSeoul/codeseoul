let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe('event api', () => {

    it('/event/meetup/events should return meetup event data', (done) => {
        chai.request(server)
            .get('/api/v1.0/event/meetup/events?page=2')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.be.an('object');
                expect(JSON.parse(res.body.data)).to.have.lengthOf(2);
                done();
            });
    });
});