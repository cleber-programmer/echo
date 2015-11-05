this.Atomic.module('$echo', [

  '$cond',
  '$forEach',
  '$push',
  '$t'

], function ($cond, $forEach, $push, $t) {

  var handlers = [];

  function echo() {
    $forEach(handlers, scan());
  }

  function inView(element) {
    (element.inView || stub)();
  }

  function outView(element) {
    (element.outView || stub)();
  }

  function scan() {
    return $cond([
      [scrolledIntoView, inView],
      [$t, outView]
    ]);
  }

  function scrolledIntoView(element) {
    return compare(element.getBoundingClientRect());
  }

  function compare(rect) {
    return (rect.top <= document.documentElement.clientHeight); // && (rect.bottom <= 0);
  }

  function stub() {

  }

  window.addEventListener('scroll', echo, false);

  return Object.defineProperty(echo, 'push', { value: $push(handlers) });

});