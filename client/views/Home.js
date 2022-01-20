import { getAllUsers } from "../models/user";

function Home() {
    const APP = $('#app');      // this is how we can grab an element using jquery
                                // it returns a jquery object that is different 
                                // than the standard node element returned by document.getElementById().

                                // use '#' to select elements by their id

    // Clear existing html
    APP.html('');

     // jquery's append() method allows
     // us to type element literals. 
    APP.append('Jquerys .append() creates the element: <h1>Home Page</h1>');
    
    // This is nice becuase the standard append does not allow this.

    document.getElementById('app').append('The standard .append() just prints the string: <h1>Home Page</h1>');


    // when using bootstrap we will make use of the bootstrap
    // grid which makes scaling across multiple devices much easier.

    // use 'row' and 'col' as class names on div elements to decalare 
    // them to bootstrap. 

    // you can have different numbers of columns for each row.
    // you can also nest rows within columns to create sub grids. 

    APP.append(`
        <h3>Bootstrap Grid Example</h3>
        <div class='row' style='color: white'>
            <div class='col bg-primary'>Col 0</div>
            <div class='col bg-danger'>Col 1</div>
        </div>
        <div class='row' style='color: white'>
            <div class='col bg-secondary'>Col 2</div>
            <div class='col bg-success'>Col 3</div>
            <div class='col bg-warning'>Col 4</div>
        </div>
        <div class='row'>
            <button id='changeColBtn' class='btn btn-primary' style='margin:32px'>Change Col 3</button>
        </div>
        
    `)

    // You can use jquery to get an array of all column elements
    // so that they can be manipulated further. The elements in the
    // returned array are standard node elements, not jquery objects!

    const cols = $('.col');     // use '.' to select elements by their class

    // set click action of changeColBtn with jquery and anonymous arrow function
    $('#changeColBtn').click(() => {
        cols[3].innerHTML = 'Changed!';
    })

    async function getUsers() {
        console.log(await getAllUsers());
    }

    getUsers();
    
    
    
    
}

export {Home}