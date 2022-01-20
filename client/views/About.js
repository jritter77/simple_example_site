import { AlertButton } from "../components/AlertButton";

function About() {
    const APP = $('#app'); 

    // Clear existing html
    APP.html('');
    
    APP.append('<h1>About Page</h1>');

    const names = ['alpha', 'bravo', 'charlie', 'delta'];


    // Create dynamic components that automatically adjust to different data
    function List(values) {
       return `
            <ul>
                ${values.map(e => '<li>' + e + '</li>').join('')}
            </ul>
        `;
    }

    APP.append(List(names));


    APP.append(AlertButton());
}

export {About}