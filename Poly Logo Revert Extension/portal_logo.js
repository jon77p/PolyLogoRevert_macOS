

window.addEventListener('DOMContentLoaded', function () {
    let loginContainers = document.getElementsByClassName("container");
    for (const element of loginContainers) {
        if (window.getComputedStyle(element).borderTopColor.includes("rgb(198, 146, 20)")) {
            element.style.borderTopColor = "#024434";
        }
    }
                        
    let images = document.getElementsByTagName("img");
    let svgs = document.getElementsByTagName("svg");
    console.log(images);
    console.log(svgs);
    for (const img of images) {
        if (img.src.includes('logo') || img.alt.includes("Cal Poly")) {
            img.src = "http://web.archive.org/web/20180725211956if_/https://uaweb.calpoly.edu/cp/images/CalPoly_Logo_Green22_1.png";
        }
    }
    for (const svg of svgs) {
        var img = document.createElement('img');
        img.src = "http://web.archive.org/web/20180725211956if_/https://uaweb.calpoly.edu/cp/images/CalPoly_Logo_Green22_1.png";
        svg.parentNode.replaceChild(img, svg);
    }
})
