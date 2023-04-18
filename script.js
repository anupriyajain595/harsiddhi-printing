function openForm() {
    document.getElementById("chatbot").style.display = "block";
    // document.querySelector(".chat-btn").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("chatbot").style.display = "none";
    document.querySelector(".chat-btn").style.display = "block";
  }
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

  //toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('#navbar .menu-inside').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

   