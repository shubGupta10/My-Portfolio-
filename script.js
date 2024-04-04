const about = document.getElementById('about');
const aboutbtn = document.getElementById('aboutBtn');

aboutbtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("click");
    about.scrollIntoView();
});



const aboutNew = document.getElementById('aboutNew');
const aboutBtn = document.getElementById('aboutBtn');

aboutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("click");
    aboutNew.scrollIntoView();
});




// skills target
const skillsBtn = document.getElementById('skillsBtn');

skillsBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("skills button working");
    document.getElementById('targetskillSection').scrollIntoView();
});


//education target
const education = document.getElementById('EducationBtn');
const educationContainer = document.getElementById('eduSec');

education.addEventListener('click', function(event) {
  event.preventDefault();
  educationContainer.scrollIntoView({ behavior: 'smooth' });
});


//project target

const project = document.getElementById('projectsBtn');
const projectContainer = document.getElementById('projectSection');

project.addEventListener('click', function(event){
    event.preventDefault();
    projectContainer.scrollIntoView();
})

//contact target

const contact = document.getElementById('contactBtn');
const contactContainer = document.getElementById('contactMe');

contact.addEventListener('click', function(event){
    event.preventDefault();
    contactContainer.scrollIntoView();
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show')
        }
    })
});


const hiddenElements = document.querySelectorAll('.goodlook');
hiddenElements.forEach((el) => observer.observe(el));



