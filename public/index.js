const formPost = document.getElementById('formPost');
const formGet = document.getElementById('formGet');
const div = document.getElementById('received');

function appendData(data) {
    div.innerHTML = '';
    data.forEach(item => {
        const mes = document.createElement('div')
        mes.innerHTML = `<strong>Remetente:</strong> ${item.sentBy} <strong> Mensagem:</strong> ${item.message}`;
        div.appendChild(mes);
    });
}

formPost.addEventListener('submit', event => {
    event.preventDefault();
    let object = {};
    
    const sentBy = document.getElementById('sentBy').value
    const sentTo = document.getElementById('sentTo').value
    const message = document.getElementById('message').value
    
    Object.assign(object, { sentBy, sentTo, message });
    
    const url = 'http://localhost:3000/messages';
    const options = { method: 'POST', body: JSON.stringify(object), headers: {'Content-Type': 'application/json'}};
    fetch(url, options);
});

formGet.addEventListener('click', event => {
    event.preventDefault();

    const sentBy = document.getElementById('sentBy').value

    const url = `http://localhost:3000/messages/${sentBy}`;
    fetch(url).then(res => res.json()).then(data => {
        appendData(data);
    });
});