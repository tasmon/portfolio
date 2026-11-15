(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  if (!btn) return;
  function effective() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
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
  sync();
})();
