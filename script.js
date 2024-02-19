function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const image = document.querySelector('.sectionPic');
image.src = '/'
var imgSrcArray  = ['./assets/grad.JPG', './assets/coffee.jpg', './assets/GENX1B.jpg', './assets/CFMG.jpg', './assets/grads.jpg'], counter = 0
  
setInterval(function() {
 counter++;
 if(counter == 5)
 {
  counter = 0;
 }
  image.src = imgSrcArray[counter]
}, 2000); 

