import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import Users from './Components/users/Users';
import axios from 'axios';

import './App.css';


class App extends Component {

  state = {
    cities: [],
    cities1:[],
    summary1:'',
    summary2:'',
    city1: '',
    city2: '',
    details1:[],
    details2:[],
    loading: false,
    alert: null
  };

  AquireData = async (text) =>{
    const res = await axios.get(`https://api.teleport.org/api/cities/?search=${text}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores`);
    return res;
  }

  ExtractData = (res) => {
    const data = res.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["categories"];

    const summary = res.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["summary"];
    const link = res.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:details"];

    return {data,summary,link};
  }

  ExtractData1 = (res1) => {
    const data1 = res1.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["categories"];

    const summary1 = res1.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["summary"];

    const link1 = res1.data["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:details"];
    

    return {data1,summary1,link1};
  }

  AquireDetails = async (text) =>{
    const res = await axios.get(text);
    return res;
  }
  searchUsers = async (text,text1) => {
    
    this.setState({ loading: true });
    const res = await this.AquireData(text)
    const res1 = await this.AquireData(text1)
    var {data,summary,link} = this.ExtractData(res);
    var {data1,summary1,link1} = this.ExtractData1(res1)
    var details = await this.AquireDetails(link.href)
    var details1 = await this.AquireDetails(link1.href)
    this.setState({ cities: data, loading: false,cities1:data1, city1:text,city2:text1, summary1:summary, summary2:summary1,details1:details.data.categories,details2:details1.data.categories
    })
    
  }
  clearUsers = () => {
    this.setState({ cities: [],cities1:[], loading: false,city1:'',city2:'', summary1:'', summary2:'',details1:[],details2:[] })
    document.getElementById("tag").innerHTML=''
  }
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    const { cities, loading,cities1,city1,city2,summary1,summary2,details1,details2 } = this.state;
    return (

      <Router>
        <div className="App">
          <div className="container">
            <Alert alert={this.state.alert} />
              <Switch>
                React⚛️ + Vite⚡ + Replit🌀
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      ExtractData={this.ExtractData}
                      ExtractData1={this.ExtractData1}
                      AquireData={this.AquireData}
                      AquireDetails={this.AquireDetails}
                      clearUsers={this.clearUsers}
                      showClear={cities.length > 0 ? true : false}
                      setAlert={this.setAlert} />
                      <Users loading={loading} cities={cities} cities1={cities1} city1={city1} city2={city2} summary1={summary1} summary2={summary2} details1={details1} details2={details2} />
                  </Fragment>)}
                />
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;