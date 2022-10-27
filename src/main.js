const btn = document.getElementById('random');
const labelNumber = document.getElementById('number-label');
const events = ['click', 'touchstart'];
const randomNum = () => {
  return Math.round(Math.random() * 10000);
};
const handler = (e) => {
  e.preventDefault();
  document.getElementById('number').value = randomNum();
};
events.forEach((e) => btn.addEventListener(e, handler));

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(document.getElementById('number').value);
  document.getElementById('number').value = '';
});
