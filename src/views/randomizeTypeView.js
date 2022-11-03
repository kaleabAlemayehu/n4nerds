import { dom } from '../domStrings';
export const typeSelector = (type) => {
  const types = Array.from(dom.type);
  for (let i = 0; i < types.length; i++) {
    types[i].classList.remove('selected');
  }
  for (let i = 0; i < types.length; i++) {
    if (types[i].dataset.id === type) {
      types[i].classList.toggle('selected');
    }
  }
};
