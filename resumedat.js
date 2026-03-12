export function resmueData() {
    const resumeData = {
        name: "Aryan Rajput",
        role: "Frontend Developer",
        email: "aryan@email.com",
        phone: "+91 9876543210",
        location: "Bihar, India",

        skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],

        education: [
            {
                degree: "BCA",
                college: "XYZ College",
                year: "2023 - 2026"
            }
        ],

        projects: [
            {
                name: "Inventory Management",
                description: "Web app to manage products."
            },
            {
                name: "Music Player",
                description: "JavaScript music player project."
            }
        ]
    }

    document.getElementById("name").textContent = resumeData.name;
    document.getElementById("role").textContent = resumeData.role;
    document.getElementById("email").textContent = resumeData.email;
    document.getElementById("phone").textContent = resumeData.phone;
    document.getElementById("location").textContent = resumeData.location;


    // skills
    let skillBox = document.getElementById("skills");
    skillBox.innerHTML = "";

    resumeData.skills.forEach(skill => {
        let li = document.createElement("li")
        li.textContent = skill
        skillBox.appendChild(li)
    })


    // education
    let eduBox = document.getElementById("education");
    eduBox.innerHTML = ""

    resumeData.education.forEach(e => {
        let div = document.createElement("div")

        div.classList.add("edu")

        div.innerHTML = `
<h4>${e.degree}</h4>
<p>${e.college}</p>
<span>${e.year}</span>
`

        eduBox.appendChild(div)
    })


    // projects
    let projectBox = document.getElementById("projects")
    projectBox.innerHTML = ""

    resumeData.projects.forEach(p => {
        let div = document.createElement("div")

        div.classList.add("project")

        div.innerHTML = `
<h4>${p.name}</h4>
<p>${p.description}</p>
`

        projectBox.appendChild(div)
    })


}

