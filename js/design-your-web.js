function pickImage(){
    options=["hoangdz.jpg"];
    // options = ["me3.jpg","me11.jpg","me10.jpg","me12.jpg","me4.jpg","me2.jpgs"];
randomImg = "images1/" + options[Math.floor(Math.random() * options.length)];
img = document.querySelector("#header_img");
img.setAttribute("src",randomImg);
img.setAttribute("alt","");
}
