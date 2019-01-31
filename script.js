
(function() {

  document.addEventListener('DOMContentLoaded',function() {
      document.querySelector('textarea[name="ice-cream"]').onchange=changeEventHandler;
  },false);

  function changeEventHandler(event) {
    data = event.target.value;
    data = data.split("\n");
    data = data.map(x => x.split("\t").map(x => parseInt(x, 10)));
    draw(data);
  }

  function draw(data) {
    console.log(data);

    var scaleFactor = 100;

    var height = 1000,
        width = 1000;

    d3.select("svg").remove();

    var svg = d3.select('body').append('svg')
        .attr('height', height)
        .attr('width', width)
      .append('g')
        .attr('transform', 'translate(30, 30)');

    var circleRow = svg.selectAll('.row')
        .data(data)
      .enter().append('g')
        .attr('transform', function(d, i) {
            return 'translate('+scaleFactor+',' + i * scaleFactor + ')';
        });

    circleRow.selectAll('.circle')
        .data(function(d, i) { return data[i]; })
      .enter().append('circle')
        .attr('r', function(d) { return d; })
        .attr('cx', function(d, i) { return i * scaleFactor; })
        .attr('cy', 0);

       // /* Create the text for each block */
       // elemEnter.append("text")
       //   .attr("dx", function(d){return -20})
       //   .text(function(d){return d.label})
  }


})();
