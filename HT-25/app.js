const socket = new WebSocket('wss://fep-app.herokuapp.com/');

const $messageList = $('#container');
const $nameInput = $('#name');
const $textInput = $('#text');


$('#form').on('submit', sendMessage);



socket.onopen = () => {

    const onConnectionMsg = {
        type: 'message',
        payload: {
            username: `${$nameInput.val()}`,
            message: `Присоединился к чату`
        }
    }
  
    socket.send(JSON.stringify(onConnectionMsg));

    console.log('Socket opened');
}


socket.onclose = () => {

    const onCloseMsg = {
        type: 'message',
        payload: {
            username: `${$nameInput.val()}`,
            message: `Покинул чат`
        }
    }

    socket.send(JSON.stringify(onCloseMsg));
    
    console.log('Socket closed');
}


socket.onmessage = (e) => {

    const inMsg = JSON.parse(e.data);

    const msgTemplate = `<li>${inMsg.payload.username}: ${inMsg.payload.message}</li>`

    $messageList.prepend(msgTemplate);
}


function sendMessage(e) {

    const name = $nameInput.val();
    const text = $textInput.val();

    e.preventDefault();

    const outMsg = {
        type: 'message',
        payload: {
            username: `${name}`,
            message: `${text}`
        }
    }

    socket.send(JSON.stringify(outMsg));

    $textInput.val('');
}

socket.onerror = () => {
    alert('Сервер временно недоступен!')
}