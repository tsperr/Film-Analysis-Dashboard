console.log("hello");
d3.json("http://localhost:5000/data").then((data) => {
    console.log(data);
    console.log("test33");
    console.log(data[0].budget);
    var budget = [];
    var revenue = [];
    for (var i = 0; i<data.length; i++) {
        item = data[i].budget
        budget.push(item)
        item2 = data[i].worlwide_gross_income
        revenue.push(item2) };

    console.log(budget);
    console.log(revenue);

    //scatter plot budget vs income
      var trace1 = {
          x: budget,
          y: revenue,
          mode:"markers",
          type: "scatter"
      };
      var data = [trace1];
      Plotly.newPlot("budgvsrev",data);


});

// callback(d3.json("http://localhost:5000/data"));
//  function callback(data) {
//      console.log(data);
//      console.log("test23");
//  }

// d3.json("http://localhost:5000/data", callback)
// function callback(data) {
//     console.log(data)
//     console,log("test") };

// d3.json("../../movie_data.json", callback)
//     function callback(data) {
//         console.log(data)
//         var budget = [];
//         var revenue = [];

//         for (var i = 0; i<data.length; i++) {
//             item = data.budget.0[i];
//             budget.push(item);
//             item2 = data.worlwide_gross_income[i];
//             revenue.push(item2)
//         }
//         console.log(budget)
//     }


    ////////////////////////////////////////
// d3.json("../../movie_data.json").then((data) => {
//     console.log(data);
// });






// d3.json("http://localhost:5000/data").then(data=> console.log(data)).catch(error => console.log(error))
// function callback(data) {
//     console.log(data);
//     console.log("test")
// };
// function init() {
// d3.json("http://localhost:5000/data", callback)



// }
// init()


// function init() {

//     d3.json("http://localhost:5000/data", callback) 
//     function callback(data) {
//         console.log(data) }; }


// function init() {

//     d3.json("http://localhost:5000/data", callback) 
//     function callback(data) {
//         console.log(data) };
// //         var budget = [];
// //         var revenue = [];

// //         for (var i = 0; i<data.length; i++) {
// //             item = data[i]["budget"]
// //             budget.push(item)
// //             item2 = data[i]["worlwide_gross_income"]
// //             revenue.push(item2)
// //         }
// //     //     data.forEach(function(row) {
// //     //       console.log(row)
        
// //     //     budget.push(row["budget"]);
// //     //     console.log(budget)  
        
// //     //     revenue.push(row["worlwide_gross_income"]);
// //     //   });
// //       ///scatter plot budget vs income
// //       var trace1 = {
// //           x: budget,
// //           y: revenue,
// //           mode:"markers",
// //           type: "scatter"
// //       };
// //       var data = [trace1];
// //       Plotly.newPlot("budgvsrev",data);
// //     }
// // // }
// init()




