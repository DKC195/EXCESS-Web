function darkmode() {
  if (mode) {
    // Darktheme
    document.body.style.setProperty('--bodybg', 'black');
    document.body.style.setProperty('--txt', 'white');
    document.body.style.setProperty('--txt2', 'black');
    document.body.style.setProperty('--navbar', '#0F3F7A');
    document.body.style.setProperty('--hoverbg', '#141414');
    document.body.style.setProperty('--abg', '#141414');
    document.body.style.setProperty('--bbg', '#0F3F7A');
    document.body.style.setProperty('--darkicon', '0deg');
    localStorage.darkmode = 1;
    mode = 0;
  }
  else {
    // lighttheme
    document.body.style.setProperty('--bodybg', 'white');
    document.body.style.setProperty('--txt', 'black');
    document.body.style.setProperty('--txt2', 'white');
    document.body.style.setProperty('--navbar', '#141414');
    document.body.style.setProperty('--hoverbg', '#0F3F7A');
    document.body.style.setProperty('--abg', '#E3E1DE');
    document.body.style.setProperty('--bbg', '#76ACEE');
    document.body.style.setProperty('--darkicon', '180deg');
    localStorage.darkmode = 0;
    mode = 1;
  }
}

function load() {
  if (localStorage.darkmode == 0) mode = 0;
  else mode = 1;
  darkmode();
}
