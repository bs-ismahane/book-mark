// nav
const nav_toggle = document.querySelector("header .nav"); // Select the toggle image
const header = document.querySelector("header"); // Select the header

nav_toggle.addEventListener("click", () => { 
    header.classList.toggle('active'); // Toggle the 'active' class on the header
    if (header.classList.contains('active')) {
        nav_toggle.src = "./images/icon-close.svg"; // Update to close icon
    } else {
        nav_toggle.src = "./images/icon-hamburger.svg"; // Update to hamburger icon
    }
});

// features
const linksOfTabs = document.querySelectorAll(".features ul li");
const tabs = document.querySelectorAll(".features .content > div");

linksOfTabs.forEach(link => {
    link.addEventListener("click", () => { 
        // Remove active class from all links
        linksOfTabs.forEach(ele => ele.classList.remove('active'));
        link.classList.add("active");
        const tabId = link.id;
        tabs.forEach(tab => tab.classList.remove('active'));
        const activeTab = document.querySelector(`.features .content > div.${link.id}`);
        if (activeTab) {
            activeTab.classList.add("active");
        }
    });
});
//questions
const questions = document.querySelectorAll(".questions ul li");

questions.forEach(question => {
    questions.forEach(ele => {
        ele.classList.remove('active');
    });
    question.addEventListener("click", () => { 
        question.classList.toggle('active');
    });
});

//footer
const form = document.querySelector('footer form');
const emailInput = form.querySelector('input');
const emailDiv = form.querySelector('div');
const button = form.querySelector('button');
button.addEventListener('click', (event) => {
    if (!emailInput.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        event.preventDefault();
        emailDiv.classList.add('error');
        emailDiv.setAttribute('data-error', 'Enter a valid email');
    } else {
        emailDiv.classList.remove('error');
        emailDiv.removeAttribute('data-error');
    }
});

