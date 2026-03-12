import { resmueData } from "./resumedat.js";
import { editTemplateFn } from "./editTemplate.js";

let menu = document.querySelector(".menu");
let resume = document.querySelector(".resume");
let rightSide = document.querySelector(".rigthside");
let dashboard = document.querySelector(".dashboard");
let createResume = document.querySelector(".container");
let Alltemplates = document.querySelector(".templates");
let allResume = document.querySelector(".allResume")


let menuChild = Array.from(menu.children);




menuChild.forEach((elem, index) => {

    // function collectIndex(display, color) {
    //     elem.style.backgroundColor = color;
    //     elem.style.display = display;
    // }


    if (index === 0) {

        elem.addEventListener("click", () => {
            resume.style.display = "none";
            dashboard.style.display = "block";
            Alltemplates.style.display = "none"
            resmueData()
            rightSide.append(resume)
        })
    }
    if (index === 1) {

        elem.addEventListener("click", () => {
            resume.style.display = "block";
            allResume.style.display = "block"
            dashboard.style.display = "none";
            createResume.style.display = "none";
            Alltemplates.style.display = "none"
            resmueData()
            rightSide.append(resume)
            rightSide.append(allResume)



        })
    }
    if (index === 2) {

        elem.addEventListener("click", () => {
            createResume.style.display = "flex"
            allResume.style.display = "none"
            resume.style.display = "none";
            dashboard.style.display = "none";
            Alltemplates.style.display = "none"
            rightSide.append(createResume)
        })
    }
    if (index === 3) {

        elem.addEventListener("click", () => {
            Alltemplates.style.display = "flex";
            allResume.style.display = "none"
            createResume.style.display = "none";
            resume.style.display = "none";
            dashboard.style.display = "none";
            rightSide.append(Alltemplates)


        })
    }
    if (index === 4) {

        elem.addEventListener("click", () => {
            collectIndex("block", "red")
        })
    }
    if (index === 5) {

        elem.addEventListener("click", () => {
            collectIndex("block", "red")
        })
    }

});


editTemplateFn()