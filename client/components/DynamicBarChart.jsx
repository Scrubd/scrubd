import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
import ReactDOM from 'react-dom';
// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
      {name: '02', uv: 4000},
      {name: '04', uv: 3000},
      {name: '06', uv: 2000, pv: 9800, amt: 2290},
      {name: '08', uv: 2780, pv: 3908, amt: 2000},
      {name: '10', uv: 1890, pv: 4800, amt: 2181},
      {name: '12', uv: 2390, pv: 3800, amt: 2500},
      {name: '14', uv: 3490, pv: 4300, amt: 2100},
      {name: '16', uv: 4000},
      {name: '18', uv: 3000},
      {name: '20', uv: 2000, pv: 0, amt: 2290},
      {name: '22', uv: 2780, pv: 3908, amt: 2000},
      {name: '24', uv: 1890, pv: 9800, amt: 2181},
      {name: '26', uv: 2390, pv: 3800, amt: 2500},
      {name: '28', uv: 3490, pv: 4300, amt: 2100},
      {name: '30', uv: 4000},
      {name: '32', uv: 3000},
      {name: '34', uv: 2000, pv: 1300, amt: 2290},
      {name: '36', uv: 2780, pv: 3908, amt: 2000},
      {name: '40', uv: 1890, pv: 4800, amt: 2181},
      {name: '48', uv: 2390, pv: 3800, amt: 2500},
      {name: '50', uv: 3490, pv: 4300, amt: 2100},

];
class DynamicBarChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data, 
      activeIndex: 0,
      targetTime: null
    }
  }
  handleClick(data, index) {
    this.setState({
      activeIndex: index, 
      targetTime: 
    })
  }

  render () {
    const { activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    
    return (
      <div>
        <BarChart width={500} height={150} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" onClick={this.handleClick.bind(this)}>
          {
            data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#f47d42' : '#721111' } key={`cell-${index}`} />
            ))
          }
        </Bar>
        </BarChart>
        <p class="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>

      </div>
    );
  }
}

export default DynamicBarChart;

// ReactDOM.render(
//   <SimpleBarChart />,
//   document.getElementById('container')
// );