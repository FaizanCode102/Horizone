// for pagination
document.addEventListener('DOMContentLoaded', function () {
    const paginationLinks = document.querySelectorAll('.pagination a[data-page]');
    const previousPageLink = document.querySelector('.pagination .left-arrow');
    const nextPageLink = document.querySelector('.pagination .right-arrow');

    paginationLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.pagination a.active').classList.remove('active');
            this.classList.add('active');
            // Add code here to load the content for the selected page
            console.log('Page ' + this.getAttribute('data-page') + ' clicked.');
        });
    });

    previousPageLink.addEventListener('click', function (event) {
        event.preventDefault();
        let activePage = document.querySelector('.pagination a.active');
        let prevPage = activePage.previousElementSibling;
        if (prevPage && prevPage.hasAttribute('data-page')) {
            activePage.classList.remove('active');
            prevPage.classList.add('active');
            // Add code here to load the content for the previous page
            console.log('Previous page clicked, now on page ' + prevPage.getAttribute('data-page'));
        }
    });

    nextPageLink.addEventListener('click', function (event) {
        event.preventDefault();
        let activePage = document.querySelector('.pagination a.active');
        let nextPage = activePage.nextElementSibling;
        if (nextPage && nextPage.hasAttribute('data-page')) {
            activePage.classList.remove('active');
            nextPage.classList.add('active');
            // Add code here to load the content for the next page
            console.log('Next page clicked, now on page ' + nextPage.getAttribute('data-page'));
        }
    });
});

// for scroller menu
const scrollAmount = 300;
const scroller = document.getElementById('scroller');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

function updateButtonVisibility() {
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    scrollLeftButton.classList.toggle('hidden', scroller.scrollLeft === 0);
    scrollRightButton.classList.toggle('hidden', scroller.scrollLeft >= maxScrollLeft);
}

scrollRightButton.addEventListener('click', function () {
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateButtonVisibility();
});

scrollLeftButton.addEventListener('click', function () {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateButtonVisibility();
});

scroller.addEventListener('scroll', updateButtonVisibility);

// Initial button visibility check
updateButtonVisibility();

// for blog category menu
// slect all category buttons and cards
const categoryButtons = document.querySelectorAll(".category-scroller button")
const cardsList = document.querySelectorAll(".card-list .card")

// define the fitercards functions

const categoryCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")

    // iterate over each category cards
    cardsList.forEach(card => {
        // add "hide" class to hide the card initially
        card.classList.add("hide");
        // check if the card matches the selected filter or "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};
// add click event listner to each filter button
categoryButtons.forEach(button => button.addEventListener("click", categoryCards));



// JavaScript code to handle the click event
// document.addEventListener('DOMContentLoaded', function () {
//     var creatorLink = document.getElementById('creator-link');

//     if (creatorLink) {
//         creatorLink.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent the default action if inside a link
//             window.location.href = 'https://creatorchannel.com'; // Replace with the actual URL
//         });
//     }
// });






// Show Login form popup
document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});

// Show Signup form popup
document.getElementById('signup-btn').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

// Hide Popup with Close Button:
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('popup-container').style.display = 'none';
});

// Hide Popup by Clicking Outside:
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popup-container')) {
        document.getElementById('popup-container').style.display = 'none';
    }
});


// for form password
const forms = document.querySelector(".loginformcontainer"),
    pwShowHide = document.querySelectorAll(".pw-eye"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                // Show password
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            // Hide password
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

// for login and signup link 
// Get the form container and links
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.querySelector('.link[href="#"]'); // Adjust selector if needed
const signupLink = document.querySelector('.link[href="#create-account"]'); // Adjust selector if needed

// Function to show login form and hide signup form
function showLoginForm() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

// Function to show signup form and hide login form
function showSignupForm() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
}

// Event listeners for toggling forms
loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    showLoginForm();
});

signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    showSignupForm();
});

// Initial setup: hide the signup form by default
showLoginForm();
