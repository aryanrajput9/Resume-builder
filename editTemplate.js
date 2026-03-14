export function editTemplateFn() {

    let edittemBtn = document.querySelectorAll(".edittembtn");
    let allResume = document.querySelector(".allResume");
    let tempeditForm = document.querySelector(".tempeditForm");
    let resumelist = document.querySelector(".resume-list");
    let templates = document.querySelector(".templates");
    let generate = document.querySelector("#generatee");
    let allResumeCount = document.querySelector("#allResumeCount");

    let allinput = tempeditForm.querySelectorAll("input, textarea");
    let closeBtn = document.querySelector(".closeBtn");
    let pdfDownload = document.querySelector(".pdfDownload")

    let savedResumes = JSON.parse(sessionStorage.getItem("resumes")) || [];

    // form open
    edittemBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            tempeditForm.style.display = "flex";
        });
    });

    // form close
    closeBtn.addEventListener("click", () => {
        tempeditForm.style.display = "none";
    });

    // template select
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {

            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");

        });
    });

    // existing resumes load
    savedResumes.forEach((data) => {
        createResume(data);
    });

    allResumeCount.innerText = savedResumes.length;

    generate.addEventListener("click", () => {

        for (let input of allinput) {
            if (input.value === "") {
                alert("Please fill the form");
                return;
            }
        }

        let resumeData = {
            name: allinput[0].value,
            role: allinput[1].value,
            email: allinput[2].value,
            phone: allinput[3].value,
            skills: allinput[4].value,
            project: allinput[5].value,
            template: cards[0].classList.contains("active") ? 1 : 2
        };

        savedResumes.push(resumeData);

        sessionStorage.setItem("resumes", JSON.stringify(savedResumes));

        createResume(resumeData);

        allResumeCount.innerText = savedResumes.length;

        tempeditForm.style.display = "none";

    });

    function createResume(data) {

        // resume list card
        let resumeDiv = document.createElement("div");
        resumeDiv.classList.add("resume-card");

        resumeDiv.innerHTML = `
            <h3>${data.role}</h3>
            <p>${data.name}</p>

            <div class="buttons">
                <button class="download">Download</button>
                <button class="deletee">Delete</button>
            </div>
        `;

        resumelist.append(resumeDiv);

        // resume preview
        let div = document.createElement("div");

        if (data.template === 1) {

            div.innerHTML = `
            <div class="resume1">

                <header>
                    <h1>${data.name}</h1>
                    <p>${data.role}</p>

                    <div class="contact">
                        <span>Email: ${data.email}</span>
                        <span>Phone: +91 ${data.phone}</span>
                    </div>

                </header>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>${data.skills}</li>
                    </ul>
                </section>

                <section>
                    <h2>Projects</h2>

                    <div class="project">
                        <h4>${data.project}</h4>
                    </div>

                </section>

            </div>
            `;

        } else {

            div.innerHTML = `
            <div class="resume2">

                     <header>
                    <h1>${data.name}</h1>
                    <p>${data.role}</p>

                    <div class="contact">
                        <span>Email: ${data.email}</span>
                        <span>Phone: +91 ${data.phone}</span>
                    </div>

                </header>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>${data.skills}</li>
                    </ul>
                </section>

                <section>
                    <h2>Projects</h2>

                    <div class="project">
                        <h4>${data.project}</h4>
                    </div>

                </section>


            </div>
            `;

        }

        allResume.append(div);

        // delete button
        let deleteBtn = resumeDiv.querySelector(".deletee");

        deleteBtn.addEventListener("click", () => {

            resumeDiv.remove();
            div.remove();

            savedResumes = savedResumes.filter((r) => r !== data);

            sessionStorage.setItem("resumes", JSON.stringify(savedResumes));

            allResumeCount.innerText = savedResumes.length;

        });

        // download button
        let downloadBtn = resumeDiv.querySelector(".download");

        let pdfCount = 0;
        downloadBtn.addEventListener("click", () => {

            html2pdf().from(div).save("resume.pdf");
            pdfCount++
            pdfDownload.innerText = pdfCount

        });

    }

}