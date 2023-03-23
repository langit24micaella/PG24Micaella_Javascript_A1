// Copyright (C) 2023 Micaella Langit
'use strict';

import Express from 'express'
import HTTP from 'http'

import FileSystem from 'fs-extra'
import Path from 'path'

const __dirname = Path.resolve();

const PORT = 5000;


class Server {

    constructor( api, port = PORT ) {

        console.log("Creating server");

        this.api = Express();
        this.port = port;
        this.title = "Sample client Server App"

        this.api
            .use( Express.json() )
            .use( Express.urlencoded({ extended: false }))
            .use('/', Express.static(`${Path.join(__dirname,'/')}`));

        this.api.get('/', (request, response) => {
            console.log('Request for static files');
            let file = `${Path.join(__dirname, '/..')}/index.html`;
            response.sendFile( file );
        })

        this.api.get('/css/:id', (request, response) => {
            console.log('Request for css files');
            let file = `${Path.join(__dirname, '/..')}/css/${request.params.id}`;
            response.sendFile( file );
        })

        this.api.get('/scripts/:id', (request, response) => {
            console.log('Request for javascript files');
            let file = `${Path.join(__dirname, '/..')}/scripts/${request.params.id}`;
            response.sendFile( file );
        })
    }


    run() {

        console.log("Server running");

        this.api.set('port', this.port );
        this.listener = HTTP.createServer( this.api );
        this.listener.listen( this.port );

        this.listener.on('listening', event => this.handleListenerListening( event ));
    }

    handleListenerListening( event ) {

        let address = this.listener.address();
        let bind = "";
        if (typeof address === `string`) {
            bind = `pipe ${address}`
        }
        else {
            bind = `port ${address.port}`
        }
        console.log(`Listening on ${bind}`)
    }
}

const server = new Server();
server.run();