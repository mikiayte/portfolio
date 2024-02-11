function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const image = document.querySelector('.sectionPic');
image.src = '/'
var imgSrcArray  = ['./assets/grad.JPG', './assets/coffee.jpg', './assets/cfm.jpg', './assets/grads.jpg'], counter = 0
  
setInterval(function() {
 counter++;
 if(counter ==3)
 {
  counter = 0;
 }
  image.src = imgSrcArray[counter]
}, 1000); 

