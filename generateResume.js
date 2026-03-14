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

        div.innerHTML = `<div class="resume2">

        <aside>

            <h2>${inputs[0].value}</h2>
            <p>${inputs[1].value}</p>
             <p>${inputs[2].value}</p>

            <h3>Skills</h3>

            <ul>
                <li>${inputs[4].value}</li>
                
            </ul>

        </aside>

        <main>

            <h2>${inputs[5].value}</h2>

        </main>

    </div>`

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