class Form {

    constructor() {
        // Create main form element
        this.container = $('<form></form>');

        // Create form submit button
        this.submit = $(`<button type='submit' class='btn btn-primary'>Submit</button>`);

        // This object will hold all refereces to our forms input fields
        this.fields = {};

        // append submit button to form
        this.container.append(this.submit);

    }

    
    // This adds a new input field to the form
    addField(name, type='text', placeholder='') {

        const group = $('<div class="form-group"></div>');
        const label = $(`<label for=${name}>${name}</label>`);
        const field = $(`<input type=${type} class='form-control' id=${name} placeholder=${placeholder}>`);

        group.append(label, field);
        group.insertBefore(this.submit);

        this.fields[name] = field;
    }


    // Returns the given field's current value
    getField(name) {
        return this.fields[name].val();
    }


    // Clears all input fields
    clearFields() {
        for (let field in this.fields) {
            this.fields[field].val('');
        }
    }

}

export {Form}