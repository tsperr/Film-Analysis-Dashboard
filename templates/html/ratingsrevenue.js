d3.json("../../movie_data.json", callback)
    function callback(data) {
        // console.log(data)
        console.log(data[budget])
        var budget = []
        var revenue = []

        Object.entries(data["budget"]).forEach(function([key,value]){
            budget.push(value)
        }
        console.log(budget)

    ///scatter plot budget vs income
    var trace1 = {
          x: budget,
          y: revenue,
          mode:"markers",
          type: "scatter"
        };
    var data = [trace1];
    Plotly.newPlot("budgvsrev",data);
    };




// d3.json("/ratings").then(data=> console.log(data)).catch(error => console.log(error))
// function callback(data) {
//     console.log(data)
//     console.log(data)
// }
// function init() {
// d3.json("http://localhost:5000/data", callback)



// }
// init()



// function init() {

//     d3.json("http://localhost:5000/data", callback) 
//     function callback(data) {
//         console.log(data)
//         var budget = [];
//         var revenue = [];

//         for (var i = 0; i<data.length; i++) {
//             item = data[i]["budget"]
//             budget.push(item)
//             item2 = data[i]["worlwide_gross_income"]
//             revenue.push(item2)
//         }
//     //     data.forEach(function(row) {
//     //       console.log(row)
        
//     //     budget.push(row["budget"]);
//     //     console.log(budget)  
        
//     //     revenue.push(row["worlwide_gross_income"]);
//     //   });
//       ///scatter plot budget vs income
//       var trace1 = {
//           x: budget,
//           y: revenue,
//           mode:"markers",
//           type: "scatter"
//       };
//       var data = [trace1];
//       Plotly.newPlot("budgvsrev",data);
//     }
// }
// init()




