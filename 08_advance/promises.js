//promise is an object representing eventual completion
//3 states of promises: pending, fulfilled, rejected
//Q or Bluebird libraries 

//consume and create a promise. mostly we consume only

//creation:
const promiseOne = new Promise(function(resolve, reject){
    //do an asyn task
    //DB calls. cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },2000)
})

promiseOne.then(function(){
    console.log('Promise consumed');  
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 is resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'ayushi', email: 'ayushi@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username: 'ayushi', password: '12345'})
        }
        else
        {
            reject('ERROR!!')
        }
    },2000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
    //chaining
})
.then( (username) => {
    console.log(username);
})
.catch(function(err){
    console.log('ERROR');
})
.finally(() => {
    console.log('The promise was either resolved or rejected');  
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username: 'javascript', password: '12345'})
        }
        else
        {
            reject('ERROR in promise 5!!')
        }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/ayushinarnolia')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
