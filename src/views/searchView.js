import { dom } from '../domStrings';
export const renderFact = (fact) => {
  console.log(fact);
  dom.fact.innerText = fact;
};
