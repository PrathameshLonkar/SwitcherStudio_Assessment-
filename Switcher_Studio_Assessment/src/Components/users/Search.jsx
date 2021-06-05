import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    state={
        text:'',
        text1:''
    };

    static propTypes={
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        ExtractData: PropTypes.func.isRequired,
        ExtractData1: PropTypes.func.isRequired,
        AquireData: PropTypes.func.isRequired,
        AquireDetails:PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired

    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''||this.state.text1 === ''){
            this.props.setAlert('Please Enter Something', 'light');
        }else if(this.state.text===this.state.text1){
          this.props.setAlert('Please Enter Different Values', 'light');
        }
        else{
          
            this.props.searchUsers(this.state.text,this.state.text1);
            this.setState({text: '',text1:''});
        }
        
    }
    onChange = (e) =>this.setState({[e.target.name]: e.target.value})
    

    render() {
        const {clearUsers, showClear} = this.props;
        return (
            <div>
                <form 
                onSubmit={this.onSubmit} 
                className="form">
                    <input type="text" 
                    name="text" 
                    placeholder ="Search First City..." 
                    value={this.state.text} 
                    onChange={this.onChange}/>
                    <input type="text" 
                    name="text1" 
                    placeholder ="Search Second City..." 
                    value={this.state.text1} 
                    onChange={this.onChange}/>
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>
                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>)}
                
            </div>
        )
    }
}

export default Search
