import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from "react-html-parser";

const Summary = (summary,city) =>{
        return (
              <div className="wrap-collabsible"> 
                <input id="collapsible2" className="toggle" type="checkbox" checked="defaultChecked" /> 
                <label htmlFor="collapsible2" className="lbl-toggle" >{summary.city}'s Summary</label>
                <div className="collapsible-content" >
                  <div id="summary" className="content-inner">
                    {ReactHtmlParser(summary.summary)}
                  </div>
                </div>
              </div>   
        )
    
}

Summary.propTypes = {
    summary: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}

export default Summary
