console.log("hello");
d3.json("/data").then((data) => {
    console.log(data);
    console.log("test33");
    //filter data for only USA - add of statement
    console.log(data[0].budget);
    var budget = [];
    var revenue = [];
    var movies = []
    for (var i = 0; i<data.length; i++) {
        if ( data[i].country === "USA") {
            item = data[i].budget
            budget.push(item)
            item2 = data[i].worlwide_gross_income
            revenue.push(item2);
            item3 = data[i].title
            movies.push(item3);
    
    
    };
    
    };
    

    console.log(budget);
    console.log(revenue);
    console.log(movies);
var test = []
for (var i = 0; i<budget.length; i++) {
    if (typeof budget[i] === "number") {
        test2 = budget[i]
        test.push(test2);

    };
}
console.log(test)

var budget_min = Math.min.apply(null, budget);
var budget_max = Math.max.apply(null, budget);
var revenue_min = Math.min.apply(null, revenue);
var revenue_max = Math.max.apply(null, revenue);

console.log(budget_min);
console.log(budget_max);
console.log(revenue_max);
console.log(revenue_min);


    //scatter plot budget vs income
      var trace1 = {
          x: budget,
          y: revenue,
          mode:"markers",
          type: "scatter"
      };

      var layout = {
        
        xaxis:{title: "Movie Budget (in Dollars)",range: [ budget_min, budget_max]},
        yaxis: {title:"Movie Income (in Dollars)", range: [revenue_min, revenue_max]}
        // xaxis: {
        //     range: [ budget_min, budget_max]
        //   },
        //   yaxis: {
        //     range: [revenue_min, revenue_max]
        //   }
      };

      var data = [trace1];
      Plotly.newPlot("budgvsrev",data, layout);



var top_10 = (revenue.sort(function (a, b) {  return b -a;  })).slice(0,10);

console.log(top_10)
var movie_10 = []

for (var i = 0; i<top_10.length; i++) {
    value = top_10[i]
    console.log(value)
    ind = revenue.indexOf(value)
    console.log(ind)
    movie = movies[ind]
    movie_10.push(movie)
};

console.log(movie_10)

/// bar chart - top 10 revenue
var data = [{
    type: 'bar',
    x: movie_10,
    y: top_10,
    orientation: 'v'
  }];
  
  Plotly.newPlot('highgross', data);


});

d3.json("ratings_data.json").then((data) => {
    console.log(data);   });

// candle stick chart- ratings by genre 

// google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(drawChart);   
    
/// id= ratsvsgenre


    
    // console.log("test33");
    // console.log(data[2].Ratings);
    //   function drawChart() {
    //     var data = google.visualization.arrayToDataTable([
          
    //         ['data[1].genre', data[2].Ratings
         
    //       // Treat first row as data as well.
    //     ], true );

    //     var options = {
    //         legend:'none'
    //       };
    //       var chart = new google.visualization.CandlestickChart(document.getElementById('ratsvsgenre'));
    //       chart.draw(data, options);
      
