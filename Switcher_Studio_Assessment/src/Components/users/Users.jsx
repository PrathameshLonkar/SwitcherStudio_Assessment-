import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types'
import Summary from './Summary'
import Details from './Details'
import Tag from '../layout/Tag';

const Users = ({cities,loading,cities1,city1,city2,summary1,summary2,details1,details2}) => {
        
        var summ = []
        var taag =[]
        var suum=[]
        var det1=[]
        var det2=[]
        
        if (summary1 != "" && summary2!=""){summ.push({"id":1,"summary":summary1,"city":city1})
          summ.push({"id":2,"summary":summary2,"city":city2})
          taag.push({"id":1,tag:"LifeQuality Score"});
          suum.push({"id":1,tag:"Summaries"})
          det1.push({"id":1,tag:"Detailed Overview of "+city1})
          det2.push({"id":1,tag:"Detailed Overview of "+city2})
        }
        
        
        return (
          <div>
            <div>
              {
                suum.map((tag,index) => (<Tag key = {taag.id} tag={tag}/>))
              }
              {
                summ.map((summary,index) => ( 
                <div>
                  <Summary key={summary.id} summary={summary["summary"]} city = {summary["city"]} />
                </div>))}
            </div>
            <div>
              {
                taag.map((tag,index) => (<Tag key = {taag.id} tag={tag}/>))
              }
              {
                cities.map((City,index) => ( 
                <UserItem key ={City.name} City = {City} cities1={cities1[index]} color = '#19ad51' color1='#f3c32c' city1={city1} city2= {city2}/>))}
            </div>
            <div>
              {
                det1.map((tag,index) => (<Tag key = {taag.id} tag={tag}/>))
              }
              {
                details1.map((details,index) => (
                <Details key={details.id} details={details.data} id={details.id} />))
              }
            </div>
            <div>
              {
                det2.map((tag,index) => (<Tag key = {taag.id} tag={tag}/>))
              }
              {
                details2.map((details,index) => (
                <Details key={details.id} details={details.data} id={details.id} />))
              }
            </div>
          </div>
        )
}

Users.propTypes ={
    cities: PropTypes.array.isRequired,
    cities1: PropTypes.array.isRequired,
    city1: PropTypes.string.isRequired,
    city2: PropTypes.string.isRequired,
    summary1:PropTypes.string.isRequired,
    summary2:PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    details1: PropTypes.array.isRequired,
    details2: PropTypes.array.isRequired,
};

export default Users
