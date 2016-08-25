import React from 'react';
import ReactDOM  from 'react-dom'
const data =[1,2,3,4,5,6,9,4,7,8];
class Hello extends React.Component {
    render() {
        console.log(this);
        let id= this.props.data1.map(function (value,index){
            return <div key={index}>{value}- {index}</div>
        });
        return <h3>Hello js gfg {id}</h3>
    }
}

ReactDOM.render(<Hello data1 ={data}/>,document.getElementById('hello'));




