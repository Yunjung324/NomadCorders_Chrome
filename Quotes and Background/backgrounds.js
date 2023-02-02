const images = [
    "0back.jpg", "1back.jpg", "2back.jpg", "3back.jpg", "4back.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);  //body에 html을 추가하는 코드