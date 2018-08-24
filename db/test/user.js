let User = require('models/User');

describe('Users', () => {
    before((done) => {
        User.drop();
        done();
    })
    beforeEach((done) => {
        done();
    });

    describe('/user', () => {
        it('/exists/helow1 should tell user helow1 not exists', (done) => {
            agent
                .get('/api/v1.0/user/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(false);
                    done();
                });
        });
        it('/register/local should fail with invalid password', (done) => {
            agent
                .post('/api/v1.0/user/register/local')
                .send({
                    'username': 'helow1',
                    'password': 'asdasd',
                    'role': 'admin', 
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
        it('/register/local should add a new user', (done) => {
            agent
                .post('/api/v1.0/user/register/local')
                .send({
                    'username': 'helow1',
                    'password': 'asdasdasd',
                    'role': 'admin', 
                })
                .end((err, res) => {
                    if(res.error) {
                        console.log(res.error);
                        done();
                    }
                    res.should.have.status(201);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
        it('/exists/helow1 should tell user helow1 now exists', (done) => {
            agent
                .get('/api/v1.0/user/exists/name/helow1')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.exists).to.equal(true);
                    done();
                });
        });
        it('/login should fail with incorrect password', (done) => {
            agent
                .post('/api/v1.0/user/login')
                .send({
                    "username": "helow1",
                    "password": "asdasd2"
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
        it('/login should success with correct password', (done) => {
            agent
                .post('/api/v1.0/user/login')
                .send({
                    "username": "helow1",
                    "password": "asdasdasd"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    user = res.body.user;
                    
                    done();
                });
        });
        it('/me/info should success after login', (done) => {
            agent
                .get('/api/v1.0/user/me/info')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.user.username).to.be.string('helow1');
                    done();
                });
        });
    });
});