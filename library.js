const getHello = () => {
  console.log("hello from library");
};
const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};
const helloNepal = () => {
  console.log("my name is pawan");
};
module.exports = { getHello, getNamaste, helloNepal };
