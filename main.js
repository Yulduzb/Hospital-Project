const navItems=document.querySelector('#nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
  navItems.style.display='flex';
  openNavBtn.style.display='none';
  closeNavBtn.style.display='inline-block'
})


//Kapatma Fonksiyonu
 const closeNav = () => {
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
  }

  closeNavBtn.addEventListener('click', closeNav);

  
// to close the pop-up menu when clicked
  if (window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
      navItem.addEventListener('click', () => {
        closeNav();
      });
    });
  }

 
  



  //yorum
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


    breakpoints:{
      //eğer ekran 600den buyuk yada eşitsa 
       600:{
        slidesPerView:2
       },

       1024: {
        slidesPerView:3
       }

    }

   
    
  });