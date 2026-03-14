export function geneteResume() {
    let container = document.querySelector(".form-section");
    let allResume = document.querySelector(".allResume");
    let resumelist = document.querySelector(".resume-list");



    let inputs = container.querySelectorAll(["input", "textarea"])

    let generate = container.querySelector("#generate");

    generate.addEventListener("click", () => {

        let resumeDiv = document.createElement("div");
        resumeDiv.classList.add("resume-card");

        resumeDiv.innerHTML = `
            <h3>${inputs[0].value}</h3>
            <p>${inputs[1].value}</p>

            <div class="buttons">
                <button class="download">Download</button>
                <button class="deletee">Delete</button>
            </div>
        `;

        resumelist.append(resumeDiv);


        let div = document.createElement("div");

        div.innerHTML = `   <div class="resume4">
         <header>
                    <h1>${inputs[0].value}</h1>
                    <p>${inputs[1].value}</p>

                    <div class="contact">
                        <span>Email: ${inputs[2].value}</span>
                        <span>Phone: +91 ${inputs[3].value}</span>
                    </div>

                </header>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>${inputs[4].value}</li>
                    </ul>
                </section>

                <section>
                    <h2>Projects</h2>

                    <div class="project">
                        <h4>${inputs[5].value}</h4>
                    </div>

                </section>

                </div>
`

        // delete button
        let deleteBtn = resumeDiv.querySelector(".deletee");

        deleteBtn.addEventListener("click", () => {

            resumeDiv.remove();
            div.remove();




        });

        // download button
        let downloadBtn = resumeDiv.querySelector(".download");

        let pdfCount = 0;
        downloadBtn.addEventListener("click", () => {

            html2pdf().from(div).save("resume.pdf");
            pdfCount++
            pdfDownload.innerText = pdfCount

        });

        allResume.append(div)

    })

}