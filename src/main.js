import Search from './models/Search';
import { dom } from './domStrings';

// change HTML Collection into array to make it iterable
const types = Array.from(dom.type);
const state = {
  type: '',
  number: '',
};

const randomHandler = async (e) => {
  const type = getType();
  const randomSearch = new Search('random', type);
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
