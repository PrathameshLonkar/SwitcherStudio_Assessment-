import React from 'react';
import PropTypes from 'prop-types';

const Tag = (tag) =>{
        return (
            <div id="tag">
              <h1>{tag["tag"].tag}</h1>
            </div>    
        )
    
}
Tag.propTypes = {
    tag: PropTypes.object.isRequired
}

export default Tag
