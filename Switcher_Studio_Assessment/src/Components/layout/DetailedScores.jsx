import React from 'react';
import PropTypes from 'prop-types';

const DetailedScores = (detailedscores) =>{
    
      return (
          
            <ul className="a" id={detailedscores.detailedscores.id} >
              <label htmlFor={detailedscores.detailedscores.id}></label>
                <li>{detailedscores.detailedscores.label}</li>
                  <li id="detailslabel">{detailedscores.detailedscores.int_value ?  detailedscores.detailedscores.int_value:detailedscores.detailedscores.float_value?detailedscores.detailedscores.float_value:detailedscores.detailedscores.percent_value? detailedscores.detailedscores.percent_value*100:detailedscores.detailedscores.currency_dollar_value?detailedscores.detailedscores.currency_dollar_value:detailedscores.detailedscores.string_value?detailedscores.detailedscores.string_value:detailedscores.detailedscores.url_value?detailedscores.detailedscores.url_value:detailedscores.detailedscores.url_value}</li>
            </ul>
               
        )
}

DetailedScores.propTypes = {
    detailedscores: PropTypes.object.isRequired,
}

export default DetailedScores
