export function editTemplateFn() {
    let edittemBtn = document.querySelectorAll(".edittembtn");
    let allResume = document.querySelector(".allResume")

    let rightSide = document.querySelector(".rigthside");
    let tempeditForm = document.querySelector(".tempeditForm");
    let resume1 = document.querySelector(".resume1")



    console.log(edittemBtn);
    let generate = document.querySelector("#generatee");
    let allinput = tempeditForm.querySelectorAll(["input", "textarea"])

    console.log(allinput)

    edittemBtn.forEach((elem, index) => {

        if (index === 0) {

            elem.addEventListener("click", () => {
                let tempeditForm = document.querySelector(".tempeditForm");
                tempeditForm.style.display = "flex";
                let closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    tempeditForm.style.display = "none";

                })

            })

        }
        if (index === 1) {

            elem.addEventListener("click", () => {
                let tempeditForm = document.querySelector(".tempeditForm");
                tempeditForm.style.display = "flex";
                let closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    tempeditForm.style.display = "none"
                })

            })

        }
        if (index === 2) {

            elem.addEventListener("click", () => {
                let tempeditForm = document.querySelector(".tempeditForm");
                tempeditForm.style.display = "flex";
                let closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    tempeditForm.style.display = "none"
                })
            })

        }


    })

    generate.addEventListener("click", () => {

        let div = document.createElement("div");
        div.innerHTML = `<div class="resume1">

        <header>
            <h1 id="name">${allinput[0].value}</h1>
            <p id="role">${allinput[1].value}</p>

            <div class="contact">
                <span>Email: ${allinput[2].value}</span>
                <span>Phone: +91 ${allinput[3].value}</span>
            </div>
        </header>

        <section>
            <h2>Skills</h2>
            <ul>
                <li>${allinput[4].value}</li>
                // <li>CSS</li>
                // <li>JavaScript</li>
                // <li>React</li>
            </ul>
        </section>

        <section>
            <h2>Projects</h2>

            <div class="project">
                <h4>${allinput[5].value}</h4>
                // <p>Web app to manage product inventory.</p>
            </div>

            // <div class="project">
            //     <h4>Music Player</h4>
            //     <p>JavaScript based music player.</p>
            // </div>

        </section>

    </div>`


        allResume.append(div);


    })
}
