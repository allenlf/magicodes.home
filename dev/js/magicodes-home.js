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