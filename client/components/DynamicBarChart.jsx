import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
import ReactDOM from 'react-dom';




class DynamicBarChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.comments, 
      activeIndex: 0,
    }

  }
  handleClick(data, index) {
    this.setState({
      activeIndex: index, 
    })
  }

  render () {
    const dbData = this.props.comments;
    console.log(dbData);

    var numInc = 20;
    var videoLength = 50;
    var incrementLength = videoLength/numInc;
    var barData = [];
    // var barDatum = {timeName: "", timeUpper: null, timeLower: null, count: 0}

    class BarDatum {
      constructor (timeName, timeLower, timeUpper) {
        this.timeName = timeName; //not as important
        this.timeLower = timeLower;
        this.timeUpper = timeUpper;
        this.count = 0;
      }
    }
    //create array of time increments
    for (var i = 0; i < numInc; i++){
      var barDatumCopy = new BarDatum(i*(incrementLength)+(incrementLength), (i*(incrementLength)), i*(incrementLength)+(incrementLength));
      barData.push(barDatumCopy);
    }

    // loop through array of dbData
    for (var i = 0; i < dbData.length; i++){
      var BarDatumIndex = Math.floor(dbData[i]["time_stamp"]/incrementLength);
      barData[BarDatumIndex]["count"] += 1;
      // console.log(BarDatumIndex);
    }

    const { activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    
    return (
      <div>
        <BarChart width={500} height={150} data={barData}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="timeName"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Bar dataKey="count" fill="#8884d8" onClick={this.handleClick.bind(this)}>
          {
            data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#f47d42' : '#721111' } key={`cell-${index}`} />
            ))
          }
        </Bar>
        </BarChart>

      </div>
    );
  }
}

export default DynamicBarChart;

// ReactDOM.render(
//   <SimpleBarChart />,
//   document.getElementById('container')
// );