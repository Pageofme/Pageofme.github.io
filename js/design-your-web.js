function pickImage(){
    options = ["fr1.jpg","fr3.jpg","me10.jpg","me12.jpg","fr5.jpg","me2.jpgs"];
randomImg = "images1/" + options[Math.floor(Math.random() * options.length)];
img = document.querySelector("#header_img");
img.setAttribute("src",randomImg);
img.setAttribute("alt","");
}
