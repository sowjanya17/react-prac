import React,{Component} from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list-component';
import { SearchBox} from './components/search-box/search-box-component';

class App extends Component {

  constructor(){
    super()
    this.state = {
      products:[],
      searchFeild:''
    };
  }
  
changeName = () =>{
  this.setState({name:"Parimi Sowjanya Welcome !!!!..."})
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({products:users}));
}

handleChange = (e) =>{
  this.setState({searchFeild:e.target.value});
}

render(){
  const {products,searchFeild} = this.state;
  const filteredUsers = products.filter(item=>item.name.toLowerCase().includes(searchFeild.toLowerCase()));
  return (
    <div className="App">
      <SearchBox placeholder="Search by name" onSearchChange ={this.handleChange}/>
      <CardList list={filteredUsers}></CardList>
    </div>
  );
}
}

export default App;
