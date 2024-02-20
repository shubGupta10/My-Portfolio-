const about = document.getElementById('about');
const aboutbtn = document.getElementById('aboutBtn');

aboutbtn.addEventListener('click', function(){
    console.log("click");
    about.scrollIntoView();
})


// skills target
const skills = document.getElementById('skills');
const skillsBtn = document.getElementById('skillsBtn');
const skillsContainer = document.getElementById('targetskillSection');

skillsBtn.addEventListener('click', function(){
    console.log("skills button working");
    skillsContainer.scrollIntoView();
});


//education target
const education = document.getElementById('EducationBtn');
const educationContainer = document.getElementById('targeteducationSection');

education.addEventListener('click', function(){
    educationContainer.scrollIntoView();
});

