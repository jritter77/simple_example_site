// Basic Nav Bar used for navigating site


class NavBar {

    constructor() {
    
        this.nav = document.createElement('nav');
        this.nav.classList = 'navbar navbar-dark bg-dark';

        this.home = document.createElement('a');
        this.home.href = '#home';
        this.home.innerHTML = 'Home';
        this.home.style.color = 'white';
        this.nav.appendChild(this.home);

        this.about = document.createElement('a');
        this.about.href = '#about';
        this.about.innerHTML = 'About';
        this.about.style.color = 'white';
        this.nav.appendChild(this.about);

        this.users = document.createElement('a');
        this.users.href = '#users';
        this.users.innerHTML = 'Users';
        this.users.style.color = 'white';
        this.nav.appendChild(this.users);
        
        $('#header').append(this.nav);
        
    }

}

export {NavBar}


