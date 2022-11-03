import Search from './models/Search';
import { dom } from './domStrings';
import * as searchView from './views/searchView';

// change HTML Collection into array to make it iterable
const types = Array.from(dom.type);
const state = {
  type: '',
  number: '',
  fact: '',
};
const init = () => {
  state.fact = '';
  state.type = '';
  state.number = '';
};
const randomHandler = async (e) => {
  e.preventDefault();
  const randomSearch = new Search('random', state.type);
  try {
    state.fact = await randomSearch.getFact();
    if (state.fact.found) {
      searchView.renderFact(state.fact.text);
      init();
    }
  } catch (error) {
    console.error(error);
  }
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
  if (state.type) {
    if (state.number || state.number === 0) {
      const submitSearch = new Search(state.number, state.type);
      try {
        state.fact = await submitSearch.getFact();
        searchView.renderFact(state.fact);
      } catch (error) {
        console.error(error);
      }
    } else {
      searchView.numberError();
    }
  } else {
    searchView.typeError();
  }
};
['click', 'touchstart'].forEach((e) => {
  dom.submit.addEventListener(e, submitHandler);
});

init();
