// This is an example of a component created using jquery.
// This is possible in classes as well.

function AlertButton() {

    // create new button element using jquery
    const btn = $('<button class="btn btn-primary">Click Me!</button>');   
    
    // assign click action using jquery
    btn.click(() => {
        alert('This is an alert!');
    })

    return btn;
}

export {AlertButton}