const images = ["image0.jpg", "image1.jpg", "image2.jpg", "image3.jpg"];
const chosenImage = images[ Math.floor( Math.random() * images.length ) ];
const bgImage = document.createElement("img");
bgImage.src = `css/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
