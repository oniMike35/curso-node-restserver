const express = require('express');
var cors = require('cors');



class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios'
        //Midlewares
        this.midlewares();
        this.routes();

    }

    midlewares() {
        this.app.use(cors());
        //directorio puplico
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en -',this.port);
        })
    }
}

module.exports = Server;
