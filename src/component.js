import styles from './style.css';

export default (text = 'Hello Miku') => {
  const element = document.createElement('div');

  element.className = styles.main;
  element.innerHTML = text;

  return element;
};
