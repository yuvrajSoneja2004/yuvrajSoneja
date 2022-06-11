

// AOS FUNCTION CALL 
  AOS.init();
let ham = document.getElementById('ham_items');
let hamMenu = document.getElementById('hamMenu');

// MOBILE IMPORTS 

let mobileNavImports = {
    home: document.getElementById('home_m'),
    aboutMe: document.getElementById('abtm_m'),
    skills: document.getElementById('skills_m'),
    projects: document.getElementById('projects_m'),
    reviews: document.getElementById('reviews_m')
};

mobileNavImports.home.addEventListener('click' , () => {
    ham.style.top = "-32rem";
});
mobileNavImports.aboutMe.addEventListener('click' , () => {
    ham.style.top = "-32rem";
});
mobileNavImports.skills.addEventListener('click' , () => {
    ham.style.top = "-32rem";
});

mobileNavImports.projects.addEventListener('click' , () => {
    ham.style.top = "-32rem";
});

mobileNavImports.reviews.addEventListener('click' , () => {
    ham.style.top = "-32rem";
});


ham.style.top = "-54rem";

hamMenu.addEventListener("click" , () => {
    if(ham.style.top != "-54rem") {
        ham.style.top = "-54rem";
    }
    else {
        ham.style.top = "8rem";
    }
})






