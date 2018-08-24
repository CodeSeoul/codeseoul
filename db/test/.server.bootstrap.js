const config = require('config');

let app = require('index');

global.chai = require('chai');
global.chaiHttp = require('chai-http');
global.should = chai.should();
global.expect = chai.expect;
chai.use(chaiHttp);

global.app = app;
global.server = app.listen(config.PORT, () => {
    console.log(`server is running at port: ${config.PORT}`)
});