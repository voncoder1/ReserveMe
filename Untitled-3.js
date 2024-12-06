// Placeholder for geolocation API or other functionalities

// Example function for geolocation
function findRestaurants() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

document.querySelector('.locate-restaurants button').addEventListener('click', findRestaurants);

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menuDrawer = document.querySelector('.menu-drawer');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuDrawer.classList.toggle('menu-open');
    document.body.style.transition = 'left 0.3s ease';
});

closeIcon.addEventListener('click', () => {
    menuDrawer.classList.remove('menu-open');
    document.body.style.transition = 'left 0.3s ease';
});

document.addEventListener('click', (event) => {
    if (!menuDrawer.contains(event.target) && !header.contains(event.target)) {
        menuDrawer.classList.remove('menu-open');
    }
});

const foodMenu = document.querySelector('.food-menu');
const foodItems = foodMenu.querySelectorAll('.food-item');

foodItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});

// Show search bar on hover
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.header-search-input');

searchIcon.addEventListener('mouseenter', () => {
    searchInput.classList.add('active');
});

searchIcon.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!searchInput.matches(':focus')) {
            searchInput.classList.remove('active');
        }
    }, 200);
});

searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('active');
});

// Show login info on hover
const userIcon = document.querySelector('.user-icon');
const loginInfo = document.createElement('div');
loginInfo.className = 'header-user';
loginInfo.innerHTML = `
    <p>Username: example_user</p>
    <p>Email: user@example.com</p>
    <a href="#">Logout</a>
`;
header.appendChild(loginInfo);

userIcon.addEventListener('mouseenter', () => {
    loginInfo.classList.add('active');
});

userIcon.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!loginInfo.matches(':hover')) {
            loginInfo.classList.remove('active');
        }
    }, 200);
});

// Show saved items on hover
const archiveIcon = document.querySelector('.archive-icon');
const archiveInfo = document.createElement('div');
archiveInfo.className = 'header-archive';
archiveInfo.innerHTML = `
    <p>Saved Item 1</p>
    <p>Saved Item 2</p>
    <p>Saved Item 3</p>
`;
header.appendChild(archiveInfo);

archiveIcon.addEventListener('mouseenter', () => {
    archiveInfo.classList.add('active');
});

archiveIcon.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!archiveInfo.matches(':hover')) {
            archiveInfo.classList.remove('active');
        }
    }, 200);
});
