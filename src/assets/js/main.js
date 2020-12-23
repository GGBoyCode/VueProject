(function ($) {
    "use strict";
    /*--
        	全局变量
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');

     /**********************
     * 			粘性菜单
     ***********************/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".header-menu").removeClass("is-sticky");
        } else{
            $(".header-menu").addClass("is-sticky");
        }
    });


   
   
    /**********************
     * 价格区间
     ***********************/
    $("#slider-range").slider({
      range: true,
      orientation: "horizontal",
      min: 0,
      max: 1000,
      values: [0, 1000],
      step: 100,
    
      slide: function (event, ui) {
        if (ui.values[0] == ui.values[1]) {
          return false;
        }
        
        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
      }
    });


   

    

    
    /******************************************************
     * 商品详情  -  猜您喜欢  翻页
     ******************************************************/
    var productDefaultSlider5Grid = new Swiper('.product-default-slider-5grid', {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 500,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }
    });

   
   
    /******************************************************
     * 商品详情  -  水平布置（小图）
     ******************************************************/
    var galleryThumbsHorizontal = new Swiper('.product-image--thumb-horizontal ', {
      
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
      
    });

     /******************************************************
     * 商品详情  -  垂直布置（小图）
     ******************************************************/
    var galleryThumbsVertical = new Swiper('.product-image--thumb-vertical ', {
      direction: 'vertical',
      centeredSlidesBounds: true,
      slidesPerView: 4,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      freeMode: true,
    });

     /******************************************************
     * 商品详情  -  单层
     ******************************************************/
    var gallerySingleSlide = new Swiper('.product-image--single-slide ', {
      centeredSlidesBounds: true,
      slidesPerView: 5,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }
    });


  
  /******************************************************
  *  商品详情  -  图片缩放
  ******************************************************/
  $("#img-zoom").elevateZoom({
        gallery: "gallery-zoom",
        galleryActiveClass: "zoom-active",
        constrainSize:274, 
        zoomType: "lens", 
        containLensZoom: true,
    });


  
   

    /*----------------------------------
        回到顶部
    -----------------------------------*/
    $('body').materialScrollTop();

})(jQuery);

/*----------------------------------
        二维码
    -----------------------------------*/
   var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 100,
            height: 100
        });

        function makeCode() {
            var elText = document.getElementById("text");

            if (!elText.value) {
                alert("Input a text");
                elText.focus();
                return;
            }

            qrcode.makeCode(elText.value);
        }

        makeCode();

        $("#text").
        on("blur", function() {
            makeCode();
        }).
        on("keydown", function(e) {
            if (e.keyCode == 13) {
                makeCode();
            }
        });