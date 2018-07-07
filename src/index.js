import other from './other.js';

const otherFunc = async function() {
  const result = await other(1, 2, 3);
  console.log(result);
}

otherFunc();
