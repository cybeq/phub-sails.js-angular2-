import { Injectable } from '@angular/core';

declare const io:any;
@Injectable({
  providedIn: 'root'
})
export class UserSocketService {
  socket:any;
  url ="http://localhost:1337/api/"
  constructor() {
    // wersja na produkcje
    io.sails.url = 'http://localhost:1337';

    // wersja na builda
    // io.sails.url = '/';

    io.sails.transports = ['polling'];
    this.socket = io.sails.connect();

    // Subscribe to the 'connect' event:
    this.socket.on('connect', function socketConnected() {
      console.log(`Connected to Sails.js app at: `);
    });

    // Subscribe to the 'disconnect' event:
    this.socket.on('disconnect', function socketDisconnected() {
      console.log('Disconnected from Sails.js app');
    });
  }

  joinUserToRoom(){
    this.socket.get(`${this.url}addusertosocket`, function (data:any, jwres:any) {
      console.log(`GET request to '/hello' endpoint returned:`, data);
    });
  }
}
