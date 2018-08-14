const config = require('config');

let app = require('index');

global.app = app;
global.server = app.listen(config.PORT, () => {
    console.log(`server is running at port: ${config.PORT}`)
});