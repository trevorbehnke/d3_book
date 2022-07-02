// // JSON
// d3.json("nums.json").then(function (data) {
//   console.log("data: ", data);
//   let anchor = d3.select("body");
//   let ptags = anchor.selectAll("p").data(data).join("p").text(getLetters);
// });
// CSV;
d3.csv("people.csv").then(function (data) {
  console.log("data: ", data);
  d3.select("body").selectAll("p").data(data).join("p").text(getPeople);
});
