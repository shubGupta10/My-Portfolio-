const about = document.getElementById('about');
const aboutbtn = document.getElementById('aboutBtn');

aboutbtn.addEventListener('click', function(){
    console.log("click");
    about.scrollIntoView();
})

const skills = document.getElementById('skills');
const skillsBtn = document.getElementById('skillsBtn');
const skillsContainer = document.getElementById('containerbox');

skillsBtn.addEventListener('click', function(){
    console.log("skills button working");
    skillsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

