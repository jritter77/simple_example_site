import { Form } from "../components/Form";
import { getAllUsers, addNewUser } from "../models/user";

function Users() {
    const APP = $('#app'); 
    let users = [];


    // Clear existing html
    APP.html('');
    
    // Set title of page
    APP.append('<h1>Users Page</h1>');

    // Create container to hold info about current users
    const userContainer = $('<div style="margin:64px"></div>');
    APP.append(userContainer);

    // Fetch and display all current users
    getUsers();



    // Create new form for adding new users
    const form = new Form();

    // Add input fields to form
    form.addField('User');
    form.addField('Password', 'password');

    // set form's submit action
    form.submit.click(() => {
        const user = form.getField('User');
        const pass = form.getField('Password');
        addUser(user, pass);
        form.clearFields();
    });

    // change text of submit button
    form.submit.html('Add User');

    // add form to page
    APP.append(form.container);



    
    // fetches all current users from database, then calls showUsers()
    async function getUsers() {
        users = await getAllUsers();
        showUsers();
    }

    // adds a new user to the database
    async function addUser(user, pass) {
        if (user && pass) {
            await addNewUser(user, pass);
            getUsers();
        }
    }


    // Writes currents user info to userContainer
    function showUsers() {
        userContainer.html('');

        for (let u of users) {
            userContainer.append(`
            <div class='row'>
                <div class='col'>ID: ${u.user_id}</div>
                <div class='col'>Username: ${u.user_name}</div>
                <div class='col'>Password: ${u.user_pass}</div>
            </div>
            `);
        }
    }

}

export {Users}