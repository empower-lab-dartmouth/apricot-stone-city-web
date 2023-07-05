/* eslint-disable require-jsdoc */
import React from 'react';

export default function Selections() {
  return (
    <div className="bar">
      <label>
        <input type="radio" id="highlights" name="view"
          value="No Highlights" className='radio'/>
                No Highlights
      </label>

      <label>
        <input type="radio" id="events" name="view"
          value="Story Events" className='radio'/>
                Story Events
      </label>

      <label>
        <input type="radio" id="groups" name="view"
          value="Content Creator Group" className='radio'/>
                Story Events
      </label>
    </div>
  );
}
