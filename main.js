// Toggle edit mode for Name
function toggleEditName() {
    var nameElement = document.getElementById("name");
    var editNameButton = document.getElementById("edit-name");
    if (nameElement.contentEditable === 'true') {
        nameElement.contentEditable = 'false';
        editNameButton.textContent = 'Edit Name';
    }
    else {
        nameElement.contentEditable = 'true';
        nameElement.focus();
        editNameButton.textContent = 'Save Name';
    }
}
// Toggle edit mode for Front-End Role
function toggleEditFrontend() {
    var frontendElement = document.getElementById("frontend");
    var editFrontendButton = document.getElementById("edit-frontend");
    if (frontendElement.contentEditable === 'true') {
        frontendElement.contentEditable = 'false';
        editFrontendButton.textContent = 'Edit Front-End';
    }
    else {
        frontendElement.contentEditable = 'true';
        frontendElement.focus();
        editFrontendButton.textContent = 'Save Front-End';
    }
}
// Toggle edit mode for Profile Image
function toggleEditImage() {
    var profileImage = document.getElementById("profile-image");
    var editImageButton = document.getElementById("edit-image");
    if (profileImage.getAttribute("contenteditable") === 'true') {
        profileImage.setAttribute("contenteditable", 'false');
        editImageButton.textContent = 'Edit Image';
    }
    else {
        profileImage.setAttribute("contenteditable", 'true');
        editImageButton.textContent = 'Save Image';
    }
}
// About Section
function toggleAbout() {
    var toggleAboutBtn = document.getElementById("toggle-about");
    var shortPara = document.getElementById("short-para");
    var fullPara = "I hold a Master's degree in Mathematics from Karachi University, which has honed my analytical thinking and problem-solving skills. In addition to my strong mathematical foundation, I am gaining hands-on experience in cutting-edge technologies through the Certified Cloud Applied Generative AI course, part of the Governor Sindh Pakistan Initiative. I am also diving deep into web and mobile app development at Saylani Mass IT Training. Proficient in TypeScript, HTML, and JavaScript, I am passionate about combining my skills in technology and mathematics to contribute to innovative projects.";
    if (shortPara.innerHTML === fullPara) {
        shortPara.innerHTML = "I hold a Master's degree in Mathematics from Karachi University, with strong analytical thinking and problem-solving skills. Currently gaining hands-on experience in AI and web development.";
        toggleAboutBtn.innerText = "Read More";
    }
    else {
        shortPara.innerHTML = fullPara;
        toggleAboutBtn.innerText = "Show Less";
    }
}
// Edit Short Paragraph
function toggleEditShortPara() {
    var shortPara = document.getElementById("short-para");
    var editShortParaButton = document.getElementById("toggle-edit-short-para");
    if (shortPara.contentEditable === 'true') {
        shortPara.contentEditable = 'false';
        editShortParaButton.textContent = 'Edit';
    }
    else {
        shortPara.contentEditable = 'true';
        shortPara.focus();
        editShortParaButton.textContent = 'Save';
    }
}
// Edit Experience Section
function toggleEditExperience() {
    var experience = document.getElementById("experience");
    var editExperienceButton = document.getElementById("toggle-edit-experience");
    if (experience.contentEditable === 'true') {
        experience.contentEditable = 'false';
        editExperienceButton.textContent = 'Edit Experience';
    }
    else {
        experience.contentEditable = 'true';
        experience.focus();
        editExperienceButton.textContent = 'Save Experience';
    }
}
// Toggle visibility of Experience section
function experienceBtn() {
    var experienceSection = document.getElementById("experience");
    var experienceButton = document.getElementById("toggle-experience");
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        experienceButton.textContent = 'Hide Experience';
    }
    else {
        experienceSection.style.display = 'none';
        experienceButton.textContent = 'Show Experience';
    }
}
// Edit Projects Section
function toggleEditProjects() {
    var projects = document.getElementById("projects");
    var editProjectsButton = document.getElementById("toggle-projects-edit");
    if (projects.contentEditable === 'true') {
        projects.contentEditable = 'false';
        editProjectsButton.textContent = 'Edit Projects';
    }
    else {
        projects.contentEditable = 'true';
        projects.focus();
        editProjectsButton.textContent = 'Save Projects';
    }
}
// Toggle visibility of Projects section
function projectsBtn() {
    var projectsSection = document.getElementById("projects");
    var projectsButton = document.getElementById("toggle-projects");
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
        projectsButton.textContent = 'Hide Projects';
    }
    else {
        projectsSection.style.display = 'none';
        projectsButton.textContent = 'Show Projects';
    }
}
// Toggle visibility of Education section
function educationBtn() {
    var educationSection = document.getElementById("education");
    var educationButton = document.getElementById("toggle-education");
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        educationButton.textContent = 'Hide Education';
    }
    else {
        educationSection.style.display = 'none';
        educationButton.textContent = 'Show Education';
    }
}
