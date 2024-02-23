const about = document.getElementById('about');
const aboutbtn = document.getElementById('aboutBtn');

aboutbtn.addEventListener('click', function(){
    console.log("click");
    about.scrollIntoView();
})


//resume download button
document.getElementById('viewButton').addEventListener('click', function() {
    var driveLink = 'https://drive.google.com/file/d/16Zpyf6xtr-J8eBPjTCttzCYTDQrL8qZi/view?usp=drive_link';
    window.open(driveLink, '_blank');
});


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

