import { dom } from '../domStrings';
export const renderFact = (fact) => {
  console.log(fact);
  dom.fact.innerText = fact;
};

export const typeError = () => {
  dom.fact.innerText = 'select type first broooooooo';
};

export const numberError = () => {
  dom.fact.innerText = 'enter the number broooooooo';
};
