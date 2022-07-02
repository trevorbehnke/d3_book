function getLetters(d, i, n) {
  console.log("------------");
  console.log("this: ", this);
  console.log("d: ", d);
  console.log("i: ", i);
  console.log("n: ", n);
  return d;
}

function getPeople(d, i, n) {
  console.log("------------");
  console.log("this: ", this);
  console.log("d: ", d);
  console.log("i: ", i);
  console.log("n: ", n);
  return d.first;
}
