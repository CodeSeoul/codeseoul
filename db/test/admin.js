let Admin = require('models/Admin');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);
const agent = chai.request.agent(server);

describe('Admins', () => {
    before((done) => {
        Admin.drop();
        done();
    })
    beforeEach((done) => {
        done();
    });

    describe('/admin', () => {
        it('/exists/helow1 should tell admin helow1 not exists', (done) => {
            agent
                .get('/api/v1.0/admin/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(false);
                    done();
                });
        });
        it('/register/local should add a new admin', (done) => {
            agent
                .post('/api/v1.0/admin/register/local')
                .send({
                    "username": "helow1",
                    "password": "asdasd"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
        it('/exists/helow1 should tell admin helow1 now exists', (done) => {
            agent
                .get('/api/v1.0/admin/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(true);
                    done();
                });
        });
        it('/login should fail with incorrect password', (done) => {
            agent
                .post('/api/v1.0/admin/login')
                .send({
                    "username": "helow1",
                    "password": "asdasd2"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(false);
                    done();
                });
        });
        it('/login should success with correct password', (done) => {
            agent
                .post('/api/v1.0/admin/login')
                .send({
                    "username": "helow1",
                    "password": "asdasd"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(true);
                    done();
                });
        });
    });
});