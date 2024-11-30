import "./mycssbasis.css";
import "./styles.css";

console.log("this is a whollz new test");


//on loading the page, add image enlarging and shrinking functionality
document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".contentImage");
    const body = document.querySelector("body");

    function enlargeImage() {
        image.classList.add("enlarged");
        body.classList.add("dimmed");
    }

    function shrinkImage(e) {
        //both conditions check for a click outside the image, with the first condition added for the case that descendants were to be are added to the img element
        if (!image.contains(e.target) || e.target !== image) {
            image.classList.remove("enlarged");
            body.classList.remove("dimmed");
        }
    }

    image.addEventListener("click", (e) => {
        e.stopPropagation();
        enlargeImage();
    });

    document.addEventListener("click", shrinkImage);
});
