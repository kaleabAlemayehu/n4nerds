import Search from './models/Search';
import { dom } from './domStrings';
// change HTML Collection into array to make it iterable
const types = Array.from(dom.type);
const state = {
  type: '',
  number: '',
};

const getType = () => {
  // iterate over the the list to find selected class
  for (let i = 0; i < types.length; i++) {
    const classTokens = Array.from(types[i].classList);
    if (classTokens.includes('selected')) {
      // geting data-* attribute from the list
      state.type = types[i].dataset.id;
    }
  }
};

// Random Controller
const randomHandler = async (e) => {
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
