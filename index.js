const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const Login = async() => {
 try{
    return await axios({
        method: 'POST',
        URL: '/login',
        data: {
            firstName: 'Travis',
            lastName: 'Scott'
        }
    });
    
}
catch(error){
    console.log(error);
}
}
const Registration = async() => {
    try{
        return await axios({
            method:'POST',
            URL: '/registration',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            image:'',
            birthday:'',
        });
    }
    catch(error){
        console.log(error);
    }
}


