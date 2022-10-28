import Search from './models/Search';
import { dom } from './domStrings';

// change HTML Collection into array to make it iterable
const types = Array.from(dom.type);
const state = {
  type: '',
  number: '',
};

const randomHandler = async (e) => {
  e.preventDefault();
  const randomSearch = new Search('random', state.type);
  console.log(await randomSearch.getFact());
};

['click', 'touchstart'].forEach((e) => {
  dom.random.addEventListener(e, randomHandler);
});
// type conntroller

const typeHandler = (e) => {
  for (let i = 0; i < types.length; i++) {
    types[i].classList.remove('selected');
  }
  e.target.classList.toggle('selected');
  state.type = e.target.dataset.id;
};
types.forEach((type) => {
  ['click', 'touchstart'].forEach((e) => {
    type.addEventListener(e, typeHandler);
  });
});

// submit controller
const submitHandler = async (e) => {
  e.preventDefault();
  state.number = dom.input.value;
  if (state.number || state.number === 0) {
    const submitSearch = new Search(state.number, state.type);
    console.log(await submitSearch.getFact());
  }
};
['click', 'touchstart'].forEach((e) => {
  dom.submit.addEventListener(e, submitHandler);
});
