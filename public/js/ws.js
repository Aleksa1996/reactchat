const socket = new WebSocket('ws://reactchat.com/ws-server');

socket.onopen = function(e) {
    console.log(e);
    console.log('Connected!');
};

socket.onmessage = function(e) {
    console.log(e);
    console.log(e.data);
};
