let user = {
    name: 'Jonny',
    surname: 'Depp'

};


let response = await fetch('',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);