// Toggle edit mode for Name
function toggleEditName(): void {
    const nameElement = document.getElementById("name") as HTMLElement;
    const editNameButton = document.getElementById("edit-name") as HTMLButtonElement;

    if (nameElement.contentEditable === 'true') {
        nameElement.contentEditable = 'false';
        editNameButton.textContent = 'Edit Name';
    } else {
        nameElement.contentEditable = 'true';
        nameElement.focus();
        editNameButton.textContent = 'Save Name';
    }
}

// Toggle edit mode for Front-End Role
function toggleEditFrontend(): void {
    const frontendElement = document.getElementById("frontend") as HTMLElement;
    const editFrontendButton = document.getElementById("edit-frontend") as HTMLButtonElement;

    if (frontendElement.contentEditable === 'true') {
        frontendElement.contentEditable = 'false';
        editFrontendButton.textContent = 'Edit Front-End';
    } else {
        frontendElement.contentEditable = 'true';
        frontendElement.focus();
        editFrontendButton.textContent = 'Save Front-End';
    }
}

// Toggle edit mode for Profile Image
function toggleEditImage(): void {
    const profileImage = document.getElementById("profile-image") as HTMLImageElement;
    const editImageButton = document.getElementById("edit-image") as HTMLButtonElement;

    if (profileImage.getAttribute("contenteditable") === 'true') {
        profileImage.setAttribute("contenteditable", 'false');
        editImageButton.textContent = 'Edit Image';
    } else {
        profileImage.setAttribute("contenteditable", 'true');
        editImageButton.textContent = 'Save Image';
    }
}

// About Section
function toggleAbout(): void {
    const toggleAboutBtn = document.getElementById("toggle-about") as HTMLButtonElement;
    const shortPara = document.getElementById("short-para") as HTMLElement;

    const fullPara: string = "I hold a Master's degree in Mathematics from Karachi University, which has honed my analytical thinking and problem-solving skills. In addition to my strong mathematical foundation, I am gaining hands-on experience in cutting-edge technologies through the Certified Cloud Applied Generative AI course, part of the Governor Sindh Pakistan Initiative. I am also diving deep into web and mobile app development at Saylani Mass IT Training. Proficient in TypeScript, HTML, and JavaScript, I am passionate about combining my skills in technology and mathematics to contribute to innovative projects.";

    if (shortPara.innerHTML === fullPara) {
        shortPara.innerHTML = "I hold a Master's degree in Mathematics from Karachi University, with strong analytical thinking and problem-solving skills. Currently gaining hands-on experience in AI and web development.";
        toggleAboutBtn.innerText = "Read More";
    } else {
        shortPara.innerHTML = fullPara;
        toggleAboutBtn.innerText = "Show Less";
    }
}

// Edit Short Paragraph
function toggleEditShortPara(): void {
    const shortPara = document.getElementById("short-para") as HTMLElement;
    const editShortParaButton = document.getElementById("toggle-edit-short-para") as HTMLButtonElement;

    if (shortPara.contentEditable === 'true') {
        shortPara.contentEditable = 'false';
        editShortParaButton.textContent = 'Edit';
    } else {
        shortPara.contentEditable = 'true';
        shortPara.focus();
        editShortParaButton.textContent = 'Save';
    }
}

// Edit Experience Section
function toggleEditExperience(): void {
    const experience = document.getElementById("experience") as HTMLElement;
    const editExperienceButton = document.getElementById("toggle-edit-experience") as HTMLButtonElement;

    if (experience.contentEditable === 'true') {
        experience.contentEditable = 'false';
        editExperienceButton.textContent = 'Edit Experience';
    } else {
        experience.contentEditable = 'true';
        experience.focus();
        editExperienceButton.textContent = 'Save Experience';
    }
}

// Toggle visibility of Experience section
function experienceBtn(): void {
    const experienceSection = document.getElementById("experience") as HTMLElement;
    const experienceButton = document.getElementById("toggle-experience") as HTMLButtonElement;

    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        experienceButton.textContent = 'Hide Experience';
    } else {
        experienceSection.style.display = 'none';
        experienceButton.textContent = 'Show Experience';
    }
}

// Edit Projects Section
function toggleEditProjects(): void {
    const projects = document.getElementById("projects") as HTMLElement;
    const editProjectsButton = document.getElementById("toggle-projects-edit") as HTMLButtonElement;

    if (projects.contentEditable === 'true') {
        projects.contentEditable = 'false';
        editProjectsButton.textContent = 'Edit Projects';
    } else {
        projects.contentEditable = 'true';
        projects.focus();
        editProjectsButton.textContent = 'Save Projects';
    }
}

// Toggle visibility of Projects section
function projectsBtn(): void {
    const projectsSection = document.getElementById("projects") as HTMLElement;
    const projectsButton = document.getElementById("toggle-projects") as HTMLButtonElement;

    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
        projectsButton.textContent = 'Hide Projects';
    } else {
        projectsSection.style.display = 'none';
        projectsButton.textContent = 'Show Projects';
    }
}

// Toggle visibility of Education section
function educationBtn(): void {
    const educationSection = document.getElementById("education") as HTMLElement;
    const educationButton = document.getElementById("toggle-education") as HTMLButtonElement;

    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        educationButton.textContent = 'Hide Education';
    } else {
        educationSection.style.display = 'none';
        educationButton.textContent = 'Show Education';
    }
}




