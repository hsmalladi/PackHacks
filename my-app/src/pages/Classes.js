import React, {Component} from 'react'
import ClassBlock from './ClassBlock.js';

function Classes(props) {
    const classList = props.map(course => <ClassBlock courseName={course}/>)
    return(
        <div>
            {classList}
        </div>
    );
}

export default Classes;