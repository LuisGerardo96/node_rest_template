const express = require('express');
const cors = require('cors');
const { json } = require('express');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();

        //
    }

    middlewares() {
        this.app.use(cors());
        //Parse body to JSON
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/users', require('../routes/user.routes'));
    }
    listening() {
        this.app.listen(this.port, () => {
            console.log('server status:ok');
        })
    }

}
module.exports = Server;