function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  }
  ver = iOSversion();
  
  if (ver[0] >= 13) {
    alert('This is running iOS 13 or later.');
    }