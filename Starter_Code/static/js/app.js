

d3.json("samples.json").then(function(data) {

    console.log(data);
    let otu_ids = data.samples.otu_ids;
    console.log(`OTU_IDS: ${otu_ids}`);

}).catch((error) => console.log(error));




// function buildPlot(sample) {

//     d3.json("sample.json").then((data) => {
//       console.log(data);
//       let otu_ids = data.samples.otu_ids;
//       let otu_labels = data.samples.otu_labels;
//       let sample_values = data.samples.sample_values;
      
    //   Making Pie Chart

//       let pieData = [
//         {
//           values: sample_values.slice(0, 10),
//           labels: otu_ids.slice(0, 10),
//           hovertext: otu_labels.slice(0, 10),
//           hoverinfo: "hovertext",
//           type: "pie"
//         }
//       ];
      
//       let pieLayout = {
//         margin: { t: 0, l: 0 }
//       };
  
//       Plotly.plot("pie", pieData, pieLayout)

//       //Making bubble chart
//       let bubbleLayout = {
//         margin: { t: 0 },
//         hovermode: "closests",
//         xaxis: { title: "OTU ID"}
//       }
  
//       let bubbleData = [
//         {
//           x: otu_ids,
//           y: sample_values,
//           text: otu_labels,
//           mode: "markers",
//           marker: {
//             size: sample_values,
//             color: otu_ids,
//             colorscale: "Earth"
//           }
//         }
//       ]
  
//       Plotly.plot("bubble", bubbleData, bubbleLayout);
//   })
//   }

//   buildPlot();