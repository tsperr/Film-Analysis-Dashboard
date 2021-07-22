d3.json("http://localhost:5000/top").then((data) => {
  
    console.log(data);
     var titles = [];
     var grosses = []
     for (var i = 0; i<data.length; i++) {
          title = data[i].title
          titles.push(title)
           gross = data[i].totalGross
           grosses.push(gross);
   };
    console.log(titles);
    console.log(grosses);

    var data = [{
      type: 'bar',
      x: titles,
      y: grosses,
      orientation: 'v'
    }];

    let layout = {
      title: "Top Ten Movies vs. Revenue", 
      xaxis:{
      autotick: false,
      ticks: 'outside',
      ticklen: 7,
      automargin: true,
      margin: 10
      }, 
      yaxis: {  
        automargin: true}
      };
      fig = layout=layout;
    Plotly.newPlot('bar', data, fig);
   
    
});
