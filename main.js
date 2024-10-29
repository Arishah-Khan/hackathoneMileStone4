"use strict";
function addMoreSkills() {
    const skillsContainer = document.getElementById("skillsContainer");
    const skillField = document.createElement("div");
    skillField.classList.add("skillField");
    // Add HTML directly for the new skill input field
    skillField.innerHTML = `
        <input type="text" class="skill" placeholder="Skill Name (e.g., JavaScript)" required>
    `;
    // Append the newly created skill field to the skills container
    skillsContainer.appendChild(skillField);
}
// Attach the event listener to the "Add Skill" button
const addSkillButton = document.getElementById("addSkill");
if (addSkillButton) {
    addSkillButton.addEventListener("click", addMoreSkills);
}
// Function to add more education fields
function addMoreEducation() {
    const educationContainer = document.getElementById("educationContainer");
    const educationField = document.createElement("div");
    educationField.classList.add("educationField");
    educationField.innerHTML = `
    <label for="degree">Degree:</label>
    <input type="text" class="degree" id="degree" placeholder="Degree (e.g., B.Sc. Computer Science)" required>

    <label for="institution">Institution:</label>
    <input type="text" class="institution" id="institution" placeholder="Institution (e.g., XYZ University)" required>

    <label for="gradeYear">Graduation Year:</label>
    <input type="number" class="gradeYear" id="gradeYear" placeholder="Graduation Year (e.g., 2024)" required>
`;
    educationContainer.appendChild(educationField);
}
// Function to add more work experience fields
function addMoreExperience() {
    const experienceContainer = document.getElementById("experienceContainer");
    const experienceField = document.createElement("div");
    experienceField.classList.add("experienceField");
    experienceField.innerHTML = `
    <label for="company">Company Name:</label>
    <input type="text" class="company" id="company" placeholder="Company Name (e.g., ABC Corp)" required>

    <label for="role">Role/Position:</label>
    <input type="text" class="role" id="role" placeholder="Role/Position (e.g., Software Developer)" required>

    <label for="experienceYears">Years Worked:</label>
    <input type="number" class="experienceYears" id="experienceYears" placeholder="Years Worked (e.g., 2019-2022)" required>

    <label for="experienceDes">Experience Description:</label>
    <textarea id="experienceDes" placeholder="Summarize your experience at [Company Name] and describe your role." rows="4" required class="experienceDes"></textarea>
`;
    experienceContainer.appendChild(experienceField);
}
const addExperienceButton = document.getElementById("addExperience");
addExperienceButton?.addEventListener("click", addMoreExperience);
function collectSkills() {
    const skillFields = document.querySelectorAll("#skillsContainer .skillField"); // Update the selector
    return Array.from(skillFields).map(field => {
        const skillName = field.querySelector(".skill")?.value || 'Not provided';
        return { skillName };
    });
}
function updateSkillsDisplay() {
    const skillsContainer = document.getElementById("skillsContainer");
    const skills = collectSkills();
    skillsContainer.innerHTML = skills.map(skill => `
         <div id="skillsContainer">
            <div class="skillField name">
            <input type="text" class="skill"  value="${skill.skillName}" placeholder="Skill Name (e.g., JavaScript)" id="skills">
        </div>
    `).join('');
}
// Function to update experience display (for editing resume)
function updateExperienceDisplay() {
    const experienceContainer = document.getElementById("experienceContainer");
    const experiences = collectExperience(); // Collect experience data as an array of objects
    experienceContainer.innerHTML = experiences.map(exp => `

    <div class="experienceField">
    <label for="company">Company Name:</label>
    <input type="text" id="company" class="company" value="${exp.company}" placeholder="Company Name (e.g., ABC Corp)" required>

    <label for="role">Role/Position:</label>
    <input type="text" id="role" class="role" value="${exp.role}" placeholder="Role/Position (e.g., Software Developer)" required>

    <label for="experienceYears">Years Worked:</label>
    <input type="number" id="experienceYears" class="experienceYears" value="${exp.experienceYears}" placeholder="Years Worked (e.g., 2019-2022)" required>

    <label for="experienceDes">Experience Description:</label>
    <textarea id="experienceDes" placeholder="Summarize your experience at [Company Name] and describe your role." rows="4" required class="experienceDes">${exp.experienceDes}</textarea>
</div>



    `).join('');
}
function collectExperience() {
    const experienceFields = document.querySelectorAll("#experienceContainer .experienceField");
    return Array.from(experienceFields).map(field => {
        const company = field.querySelector(".company")?.value || 'Not provided';
        const role = field.querySelector(".role")?.value || 'Not provided';
        const experienceYears = field.querySelector(".experienceYears")?.value || 'Not provided';
        const experienceDes = field.querySelector(".experienceDes")?.value || 'Not provided';
        return { company, role, experienceYears, experienceDes };
    });
}
// Function to collect education details
function updateEducationDisplay() {
    const education = collectEducation();
    const resumeOutput = document.getElementById("resumeOutput");
    // Clear the previous display
    resumeOutput.innerHTML = ''; // Clear previous entries
    // Map over education data to create new display elements
    education.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("educationField");
        div.innerHTML = `
            <span class="degreeStyle">${item.degree}</span><br>
            <span class="instituteStyle">${item.institution}</span><br>
            <span class="instituteStyle">(${item.gradeYear})</span>
            <div class="line"></div> <!-- Optional line separator -->
        `;
        resumeOutput.appendChild(div);
    });
}
function collectEducation() {
    const educationFields = document.querySelectorAll("#educationContainer .educationField");
    return Array.from(educationFields).map(field => {
        const degreeInput = field.querySelector(".degree");
        const institutionInput = field.querySelector(".institution");
        const gradeYearInput = field.querySelector(".gradeYear");
        const degree = degreeInput ? degreeInput.value : 'Not provided';
        const institution = institutionInput ? institutionInput.value : 'Not provided';
        const gradeYear = gradeYearInput ? gradeYearInput.value : 'Not provided';
        return { degree, institution, gradeYear };
    });
}
// Function to collect contact details
function collectContactDetails() {
    return {
        email: document.getElementById("contactEmail").value,
        phone: document.getElementById("contactPhone").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        website: document.getElementById("website").value
    };
}
const addEduButton = document.getElementById("addMoreEducation");
addEduButton?.addEventListener("click", () => {
    addMoreEducation();
    updateEducationDisplay(); // Update display after adding
});
// Function to handle file input change
function handleFileInputChange(event) {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result;
            const imgPreview = document.getElementById("profileImagePreview");
            imgPreview.src = imageUrl;
        };
        reader.readAsDataURL(file);
    }
}
// Attach event listener to the file input
const profileImageInput = document.getElementById("profileImage");
profileImageInput?.addEventListener("change", handleFileInputChange);
function generatedResume(event) {
    event.preventDefault();
    // Collect form values
    const profileImage = document.getElementById("profileImagePreview").src;
    const name = document.getElementById("name").value;
    const subheading = document.getElementById("subheading").value;
    const profileSummary = document.getElementById("profileSummary").value;
    // Collect all other data
    const skills = collectSkills();
    const education = collectEducation();
    const experience = collectExperience();
    const contact = collectContactDetails();
    // Display the collected information in the resume output section
    const resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = `
        <div class="container">
        <div class="left">

        <div>
         ${profileImage ? `<div class="resume"><img src="${profileImage}" alt="Profile Image" style="max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;" class="img"></div>` : ''}</div>



<div>
 <h3 class="setWidth">About Me</h3>
            <p class="sizeChange">${profileSummary}</p>
</div>


<div>
<h3 class="setWidth">Contact Information</h3>
            <p class="sizeChange"><strong>Email:</strong> ${contact.email}</p>
            <p class="sizeChange"><strong>Phone Number:</strong> ${contact.phone}</p>
            <p class="sizeChange"><strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">${contact.linkedin}</a></p>
            <p class="sizeChange"><strong>GitHub:</strong> <a href="${contact.github}" target="_blank">${contact.github}</a></p>
            <p class="sizeChange"><strong>Website:</strong> <a href="${contact.website}" target="_blank">${contact.website}</a></p></div>

            <div>
                <h3 class="setWidth">Skills</h3>
<p class="setDiv">
  ${skills.map((skill, index) => `
    <div class="skill-item">
      <span class="circle"></span>
      ${skill.skillName}
      ${index < skills.length - 1 ? '<span class="line"></span>' : ''}
    </div>
  `).join('')}
</p>   </div>


         </div>
         <div class="right">
         <div class="bgColor">
                <h3 class="nameHeading">${name}</h3>
                <div class="styleline"></div>
                <h5 class="sub">${subheading}</h5>
            </div>
            <div class="paddingSet">
            <div>
<h3 class="nameHeadingStyle">Education</h3>
<div class="styleline"></div>

        <div class="educationSection">
                            ${education.map((item) => `
                                <div class="educationField">
                                <span class="diamond"></span>
                                    <span class="degreeStyle">${item.degree}</span><br>
                                    <span class="instituteStyle">${item.institution}</span><br>
                                    <span class="instituteStyle">${item.gradeYear}</span>
                                </div>
                            `).join('')}
                        </div>
</div>

<div>
                       <h3 class="nameHeadingStyle">Work Experience</h3>
<div class="styleline"></div>

<div class="educationSection">
    ${experience.map((exp) => `
        <div class="educationField">
<span class="diamond"></span>
            <span class="degreeStyle">${exp.company}</span><br>
            <span class="instituteStyle">${exp.role}</span><br>
            <span class="instituteStyle">${exp.experienceYears}</span><br>
            <span class="instituteStyle">${exp.experienceDes}</span>

        </div>
    `).join('')}
</div>


            </div>
         </div>
            
            </div>
           </div>
    
            
            <div class="editBtn">
            <button class="editResume" onclick="editResume()">Edit Resume</button>
            </div>
        
    `;
    // Hide the form and show the resume output
    document.getElementById("resumeForm").style.display = 'none';
    resumeOutput.style.display = 'block';
    // Change "Generate Resume" button to "Save Resume"
    const generateButton = document.querySelector("button[type='submit']");
    if (generateButton) {
        generateButton.textContent = 'Save Resume';
    }
}
// Attach event listener to the form
const resumeForm = document.getElementById("resumeForm");
resumeForm?.addEventListener("submit", generatedResume);
function editResume() {
    // Show the form and hide the resume output
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    form.style.display = 'block';
    resumeOutput.style.display = 'none';
    // Reset the form fields with current resume data
    const profileImagePreview = document.getElementById("profileImagePreview");
    const name = document.querySelector(".nameHeading")?.textContent || '';
    const subheading = document.querySelector(".sub")?.textContent || '';
    const profileSummary = document.querySelector(".sizeChange")?.textContent || '';
    document.getElementById("profileImage").value = '';
    profileImagePreview.src = '';
    document.getElementById("name").value = name;
    document.getElementById("subheading").value = subheading;
    document.getElementById("profileSummary").value = profileSummary;
    // Update the skills, education, and experience fields
    updateSkillsDisplay();
    updateEducationDisplay();
    updateExperienceDisplay();
}
