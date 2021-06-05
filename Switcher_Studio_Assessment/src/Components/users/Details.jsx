import React from 'react';
import PropTypes from 'prop-types';
import DetailedScores from '../layout/DetailedScores';

const Details = (details) =>{
        
        return (
            <section className="accordion">
              <input type="radio" name="collapse" id={details.id}checked="defaultChecked"/>
                <h2 className="handle">
                  <label htmlFor="handle1">{details.id}</label>
                </h2>
  
              <div className="content">
                <p>{details.details.map((details,index) => (
                  <DetailedScores key={details.id} detailedscores = {details}/>))}
                </p>  
              </div>
            </section>     
        )
    
}

Details.propTypes = {
    details: PropTypes.array.isRequired
}

export default Details
