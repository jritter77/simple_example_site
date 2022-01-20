import { get, post } from "./webRequest";

/**
 *  These functions are more or less the link betwen our server and client. 
 * 
 *  Each funcion makes an http request to the respective php script located on our server.
 *  Once the php script finishes executing it will return the data back to function on the 
 *  client that initiated the request. 
 * 
 *  These functions are declared "async", which basically means it will wait (where we tell it to with "await") for a process to be done before 
 *  moving on. This is important when fetching data over the web, because most of the time data is not returned instantaneously. 
 */


async function getAllUsers() {

    // First we send a GET request to our server. It will then wait for a response before executing the next line. 
    const result = await get('./server/user/getAllUsers.php');

    // We then try to decode the returned json and return the requested data. If an error is encountered it prints the error and returned result to the console. 
    try{
        return JSON.parse(result);
    }
    catch (err) {
        console.log('Error: ' + err);
        console.log('PHP result: ' + result);
    }
    
}


// This is very similar to the above function, however this time we use a POST request since we attempting to store new data.
// Thus we also have a "params" field that will hold the new username and password during transimission to the server. 
async function addNewUser(user, pass) {

    const params = JSON.stringify({user: user, pass: pass})
    const result = await post('./server/user/addUser.php', params);

    try {
        return JSON.parse(result);
    }
    catch (err) {
        console.log('Error: ' + err);
        console.log('PHP result: ' + result);
    }
    
}


export { getAllUsers, addNewUser}