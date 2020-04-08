import React, { Component }from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      title:'React CRUD Application by Chamali Basnayake',
      act:0,
      index:'',
      datas:[]
    }
  }
  componentDidMount(){
    this.refs.name.focus();
  }
  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let degree = this.refs.degree.value;

if(this.state.act === 0)
{
  let data ={
    name, degree
  }
  datas.push(data);
}
else{
let index = this.state.index;
datas[index].name = name;
datas[index].degree = degree;
}

    this.setState({
      datas: datas,
      act: 0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fEdit = (i) =>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.degree.value = data.degree;

    this.setState({
        act: 1,
        index: i
    });
    this.refs.name.focus();
  }

  fRemove =(i) => {
    let datas =this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  render(){
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
        <input type="text" ref="name" placeholder="Your Name" className="formField" />
        <input type="text" ref="degree" placeholder="Your Degree" className="formField" />
        <button onClick={this.fSubmit} className="myButton" class="btn btn-success btn-block">Submit</button>
        </form>
        <pre>
        <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Degree</th>
        <th>Edit</th>
        <th>Delete</th>        
      </tr>
    </thead>
    <tbody>  
    {datas.map((data, i) =>
      <tr key={i} className="myList">
    
        <td>{data.name}</td>
        <td>{data.degree}</td>
        <td>
        <button onClick={()=>this.fEdit(i)} className="myListButton" class="btn btn-warning" >Edit</button>
        </td>
        <td>
        <button onClick={()=>this.fRemove(i)} className="myListButton" class="btn btn-danger">Delete</button>
        </td>
       
       
      </tr>
       )}
    </tbody>
  </table>
          
        </pre>
      </div>
    );
  }
  }
  

export default App;
