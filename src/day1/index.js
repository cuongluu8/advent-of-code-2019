import {readLines} from '../file-utils';

const input = readLines('day1/input.txt');
const calculateMass = (number) => {
  return Math.floor(number / 3) - 2;
};

const result = input
  .filter((numAsString) => numAsString)
  .map((numAsString) => parseInt(numAsString))
  .reduce((acc, num) => {
    return acc + calculateMass(num);
  }, 0);

console.log({result});
