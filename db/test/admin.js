//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
let users

let mongoose = require("mongoose");
let Admin = require('models/Admin');

const config = require('config');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
// let app = require('index');
// var server;
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe('Admins', () => {
    before((done) => {
        // server = app.start(done);
        // console.log('remove all admin');
        Admin.drop();
        done();
    })
    beforeEach((done) => { //Before each test
        done();
    });

    after((done)=>{
        // server.close();
        done();
    });

    describe('/admin', () => {
        it('/exists/helow1 should tell admin helow1 not exists', (done) => {
            chai.request(server)
                .get('/api/v1.0/admin/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(false);
                    done();
                });
        });
        it('/register/local should add a new admin', (done) => {
            chai.request(server)
                // .post(`{'name':'helow1','password':'asdasd'}`)
                .post('/api/v1.0/admin/register/local')
                .send({"username":"helow1","password":"asdasd"})
                .end((err, res) => {
                    res.should.have.status(201);
                    expect(res.body).to.be.an('object');
                    // expect(res.body.exists).to.equal(false);
                    done();
                });
        });
        it('/exists/helow1 should tell admin helow1 now exists', (done) => {
            chai.request(server)
                .get('/api/v1.0/admin/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(true);
                    done();
                });
        });
        it('/login should fail with incorrect password', (done) => {
            chai.request(server)
                .post('/api/v1.0/admin/login')
                .send({"username":"helow1","password":"asdasd2"})
                .end((err, res) => {
                    res.should.have.status(401);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(false);
                    done();
                });
        });
        it('/login should success with correct password', (done) => {
            chai.request(server)
                .post('/api/v1.0/admin/login')
                .send({"username":"helow1","password":"asdasd"})
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(true);
                    done();
                });
        });
    });
});