const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function accessElementInArray(kittens, index) {
  return kittens[index];
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift([0]);
}

function appendKitten(kittens, name) {
  return [...kittens, name];
}








