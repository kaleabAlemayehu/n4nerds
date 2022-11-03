import { dom } from '../domStrings';
export const renderFact = (fact) => {
  dom.fact.innerText = fact;
  dom.fact.classList.remove('error');
};
const addErrorStyle = () => {
  const classes = dom.fact.className.split(' ');
  if (!classes.includes('error')) {
    dom.fact.classList.add('error');
  }
};
export const typeError = () => {
  dom.fact.innerText = 'select type first broooooooo';
  addErrorStyle();
};

export const numberError = () => {
  dom.fact.innerText = 'Enter the number broooooooo';
  addErrorStyle();
};

export const dateError = () => {
  dom.fact.innerText = 'Enter the number between 1 and 365';
  addErrorStyle();
};
