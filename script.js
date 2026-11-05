(function () {
  var dlg = document.getElementById('lb');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = document.getElementById('lbimg');
  var cap = document.getElementById('lbcap');
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.zoom');
    if (b) {
      var im = b.querySelector('img');
      img.src = im.src;
      img.alt = im.alt;
      var f = b.closest('figure');
      var fc = f ? f.querySelector('figcaption') : null;
      cap.textContent = fc ? fc.textContent : '';
      dlg.showModal();
    } else if (e.target === dlg) {
      dlg.close();
    }
  });
  document.getElementById('lbclose').addEventListener('click', function () { dlg.close(); });
})();
