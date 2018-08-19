let chai = require('chai');
let chaiHttp = require('chai-http');

const config = require('config');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);
const agent = chai.request.agent(server);

describe('event api', () => {

    it('/event/meetup/events get should return meetup event data', (done) => {
        agent
            .get(`/api/v1.0/event/meetup/events?page=2`)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.be.an('object');
                expect(JSON.parse(res.body.data)).to.have.lengthOf(2);
                done();
            });
    });
    
    it('/event/meetup/events post should create a meetup event', (done) => {
        agent
            .post(`/api/v1.0/event/meetup/events?sign=true&key=${config.MEETUPKEY}`)
            .send({name:'test event name'})
            .end((err, res) => {
                res.should.have.status(201);
                expect(res.body).to.be.an('object');
                expect(JSON.parse(res.body.data)).to.have.lengthOf(1);
                done();
            });
    });
});