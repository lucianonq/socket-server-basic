class Sockets {
    constructor( io ) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', ( socket ) => { 
            //Escuchar eventos: mensaje-a-servidor
            socket.on('mensaje-a-servidor', ( data ) => {
                console.log( data );
                this.io.emit('mensaje-de-servidor', data);
            });
        });
    }
}

module.exports = Sockets;