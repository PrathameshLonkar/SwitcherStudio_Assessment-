import React from 'react';
import PropTypes from 'prop-types';


const UserItem = (City,color) =>{
        return (
            
            <div className="container">
              <p>{City.City["name"]}</p>
              <div className="skills" style={{"width": `${City.City["score_out_of_10"]}`*100, "backgroundColor":`${City.color}`}}>{Math.round(City.City["score_out_of_10"] * 100) / 100}
                <label >{City.city1}</label>
              </div>
              <br/>
              <div className="skills" style={{"width": `${City.cities1["score_out_of_10"]}`*100, "backgroundColor":`${City.color1}`}}>{Math.round(City.cities1["score_out_of_10"] * 100) / 100}
                <label >{City.city2}</label>
              </div>
              <br/><br/>
            </div>  
               
        )
    
}

UserItem.propTypes = {
    City: PropTypes.object.isRequired 
}

export default UserItem
