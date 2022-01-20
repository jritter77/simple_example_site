import { get, post } from "./webRequest";


async function getAllUsers() {

    const result = await get('./server/user/getAllUsers.php');

    try{
        return JSON.parse(result);
    }
    catch (err) {
        console.log('Error: ' + err);
        console.log('PHP result: ' + result);
    }
    
}

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