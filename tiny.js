class Exception extends Error {
  constructor(...args) {
    super(...args);
    this.code = 400;
  }
}

function tiny(string) {
  if (typeof string !== `string`) {
    throw new Exception(`Tiny wants a string!`);
  }

  return string.replace(/\s/g, ``);
}

module.exports = tiny;
