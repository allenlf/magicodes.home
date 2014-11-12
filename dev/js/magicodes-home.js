/* ========================================
 * Magicodes Home Front-end JavaScript
 * ver. 0.0.000
 * by taojiachun
 * ======================================== */




/* ========================================
 * Homepage
 * 顶部 topbar & 底部 footer 背景变色
 * ======================================== */

+function ($) {
  'use strict';
  
  $(".m-home").animate({opacity: "1"}, 1000);
  
}(jQuery);




/* ========================================
 * Homepage
 * 顶部 topbar & 底部 footer 背景变色
 * ======================================== */

+function ($) {
  'use strict';
  
  $(window).scroll(function () {
    
    /* topbar */
    if ($(window).scrollTop() > 30) {
      $(".topbar").css("background", "rgba(0, 0, 0, 0.8)");
    }
    if ($(window).scrollTop() < 30) {
      $(".topbar").css("background", "none");
    }
    
    /* footer */
    if ($(window).scrollTop() > 1) {
      $(".footer").css("background", "rgba(0, 0, 0, 0.8)");
    }
    if ($(window).scrollTop() < 1) {
      $(".footer").css("background", "none");
    }
    
  });
  

}(jQuery);




/* ========================================
 * Homepage
 * 巨幕 face
 * ======================================== */

+function ($) {
  'use strict';
  
  $(".face").css("height", window.innerHeight);
  
}(jQuery);




/* ========================================
 * Homepage
 * m-introduce 介绍文字切换
 * ======================================== */

+function ($) {
  'use strict';
  
  var bTitle, bText, fTitle, fText, $thisTitle, $thisText;
  
  /* 后端 */
  bTitle = $("#intro-back").find(".intro-title");
  bText = $("#intro-back").find(".intro-text");
  
  /* 前端 */
  fTitle = $("#intro-front").find(".intro-title");
  fText = $("#intro-front").find(".intro-text");
  
  bTitle.mouseup(function () {
    
    var bId;
    $thisTitle = $(this);
    bId = $thisTitle.data("btitleid");

    bText.each(function () {
      $thisText = $(this);
      if ($thisText.data("btextid") === bId) {
        $thisText.slideDown(1000);
      } else {
        $thisText.slideUp(800);
      }
    });

  });
  
  fTitle.mouseup(function () {
    
    var fId;
    $thisTitle = $(this);
    fId = $thisTitle.data("ftitleid");

    fText.each(function () {
      $thisText = $(this);
      if ($thisText.data("ftextid") === fId) {
        $thisText.slideDown(1000);
      } else {
        $thisText.slideUp(800);
      }
    });

  });
  
}(jQuery);