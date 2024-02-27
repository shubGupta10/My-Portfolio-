const about = document.getElementById('about');
const aboutbtn = document.getElementById('aboutBtn');

aboutbtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("click");
    about.scrollIntoView();
})


// resume download button
document.getElementById('viewButton').addEventListener('click', function() {
    var resumeUrl = 'ProjectImages/Resume_New.pdf'; 
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume_New.pdf'; 
    link.click();
});


// skills target
const skills = document.getElementById('skills');
const skillsBtn = document.getElementById('skillsBtn');
const skillsContainer = document.getElementById('targetskillSection');

skillsBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("skills button working");
    skillsContainer.scrollIntoView();
});


//education target
const education = document.getElementById('EducationBtn');
const educationContainer = document.getElementById('targeteducationSection');

education.addEventListener('click', function(event){
    event.preventDefault();
    educationContainer.scrollIntoView();
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

