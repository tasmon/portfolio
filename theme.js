(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  if (!btn) return;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function effective() {
    var t = root.getAttribute('data-theme');
    return t || (mq.matches ? 'dark' : 'light');
  }
  function sync() {
    var m = effective();
    btn.setAttribute('data-mode', m);
    btn.setAttribute('aria-pressed', m === 'dark' ? 'true' : 'false');
  }
  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  if (mq.addEventListener) mq.addEventListener('change', sync);
  sync();
})();
