function getModeIcon() {
  const modeIcon = document.createElement('img');
  modeIcon.id = 'modeIcon';
  modeIcon.src = './images/sun.svg';
  modeIcon.alt = 'moon';

  return modeIcon;
}

export { getModeIcon };
