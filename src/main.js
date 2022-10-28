import Search from './models/Search';
import { dom } from './domStrings';

const getType = () => {
  // change HTML Collection into array to make it iterable
  const types = Array.from(dom.type);
  // iterate over the the list to find selected class
  for (let i = 0; i < types.length; i++) {
    const classTokens = Array.from(types[i].classList);
    if (classTokens.includes('selected')) {
      // geting data-* attribute from the list
      return types[i].dataset.id;
    }
  }
};

const randomHandler = async (e) => {
  const type = getType();
  const randomSearch = new Search('random', type);
  console.log(await randomSearch.getFact());
};

['click', 'touchstart'].forEach((e) => {
  dom.random.addEventListener(e, randomHandler);
});
