this.Atomic.module('$echo.image', ['$curry'], function ($curry) {
  
  function image(element, url) {

    (function (img) {

      img.onload = function () { element.src = this.src; };
      img.src = url;

    })(new Image());

  }

  return $curry(image);

});