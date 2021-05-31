import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CardList from '../components/CardList';
import {ogs} from '../ogs';
import SearchBox from '../components/SearchBox';

class  App extends Component{
    constructor(){
        super()
        this.state={
            ogs: ogs,
            searchfield:''
        }
    }
    onSearchChange=(event) =>{
        this.setState({ searchfield: event.target.value })
        
        console.log(event.target.value);
    }
    render(){ 
        const filteredOgs =this.state.ogs.filter(ogs =>{
            return ogs.Name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })  
        return(
            <div className='tc'>
                
                <h1>OG WHOLESOME</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList ogs={filteredOgs}/>
            </div>
        )
    }
}

export default App;