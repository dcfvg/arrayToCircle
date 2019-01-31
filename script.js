
(function() {

  var data = []


  document.addEventListener('DOMContentLoaded',function() {
      document.querySelector('textarea[name="ice-cream"]').onchange=changeEventHandler;
      document.querySelector('input[name="slider"]').onchange=updateSlider;

  },false);


    function updateSlider(event) {
      var slideAmount = event.target.value;
      draw(data, event.target.value);

      var sliderDiv = document.getElementById("sliderAmount");
      sliderDiv.innerHTML = slideAmount;
    }

  function changeEventHandler(event) {
    data = event.target.value;
    data = data.split("\n");
    data = data.map(x => x.split("\t").map(x => parseInt(x, 10)));
    var scaleFactor = 100;
    draw(data, 100);
  }

  function draw(data, scaleFactor) {
    console.log(data);

    var height = 1000,
        width = 1000;

    d3.select("svg").remove();

    var svg = d3.select('body').append('svg')
        .attr('height', height)
        .attr('width', width)
      .append('g')
        .attr('transform', 'translate('+scaleFactor+', '+scaleFactor+')');

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
