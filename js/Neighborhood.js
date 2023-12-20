function setImages() {
  options = ["me4.jpg", "me5.jpg", "fr2.jpg",
             "fr5.jpg", "me14.jpg", "fr6.jpg",
             "fr7.jpg", "me11.jpg", "fr9.jpg"];
  currentImages = document.querySelectorAll(".flex img")
  for (var i = 0; i < currentImages.length; i++) {
    console.log("Image" + i);
    randomImg = "images1/" + options[Math.floor(Math.random() *
     options.length)];
    currentImages[i].src = randomImg;
  }
}