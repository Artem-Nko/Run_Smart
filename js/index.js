$(document).ready(function(){
  $('.carousel__inner').slick({
    // infinite: true,
    // dots:true,
    speed: 1500,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    // cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron-right.svg"></img></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal 

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  
  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlenght: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        } 
      },
      messages: {
        name: {
          required:"Пожалуйста, введите свое имя",
          minlenght: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Ваш email должен быть (name@domain.com)"
        }
      }
    });
  };
  
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+38 (099) 999-99-99");

  $(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
  });

  new WOW().init();
});



// function checkPrize() {
//     // Генерируем случайное число от 1 до 100
//     var randomNumber = Math.floor(Math.random() * 100) + 1;

//     // Если случайное число меньше или равно 2, то приз выпадает (вероятность 2%)
//     if (randomNumber <= 2) {
//       var prizeOutput = document.getElementById('prizeOutput');
//       prizeOutput.innerHTML = "Поздравляем, вы выиграли приз!";
//       // Добавляем анимацию
//       prizeOutput.style.animation = "prizeAnimation 2s ease";
//     } else {
//       var prizeOutput = document.getElementById('prizeOutput');
//       prizeOutput.innerHTML = "Увы, приз не выпал. Попробуйте снова!";
//       prizeOutput.style.animation = "none"; // Сброс анимации
//     }
//   }