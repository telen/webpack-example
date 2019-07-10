export default (text = 'Hello Miku') => {
  const element = document.createElement('div');

  element.className = 'main';
  element.innerHTML = text;

  return element;
};
