const darkThemeBtn = document.querySelector('.toggle-darktheme-btn');
const noWatchedText = document.querySelector('.no-watched-text');
const noQueueText = document.querySelector('.no-queue-text');
if (!darkThemeBtn) {
  return;
}
darkThemeBtn.addEventListener('click', () => {
  console.log('click');
  if (document.body.classList.contains('darkTheme')) {
    onLigthTheme();
  } else {
    onDarkTheme();
  }
});

function onLigthTheme() {
  document.body.classList.remove('darkTheme');
  darkThemeBtn.textContent = '🌛';
  localStorage.theme = 'ligth';

  if (!noWatchedText || !noQueueText) {
    return;
  }
  noWatchedText.classList.remove('darkText');
  noQueueText.classList.remove('darkText');
}

function onDarkTheme() {
  document.body.classList.add('darkTheme');
  darkThemeBtn.textContent = '☀️';
  localStorage.theme = 'darkTheme';

  if (!noWatchedText || !noQueueText) {
    return;
  }
  noWatchedText.classList.add('darkText');
  noQueueText.classList.add('darkText');
}

if (localStorage.theme === 'darkTheme') {
  onDarkTheme();
}
