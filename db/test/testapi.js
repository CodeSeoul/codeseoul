//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");

const config = require('config');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
// let app = require('index');
// var server;
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe('Test api', () => {
    before((done) => {
        // server = app.start(done);
        done();
    })

    after((done)=>{
        // server.close();
        done();
    });

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