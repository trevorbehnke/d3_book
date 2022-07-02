// CSV;
d3.csv("fib.csv").then(function (data) {
  let colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateRgb("yellow", "purple"))
    .domain([0, d3.max(data, (d, i) => i)]);

  const anchor = d3.select("body").style("background-color", "black");
  const svg = anchor
    .append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);
  svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => d.r * 3)
    .attr("cy", (d) => d.r * 3)
    .attr("r", (d) => d.r)
    .attr("fill", function (d, i) {
      return colorScale(i);
    });
});
