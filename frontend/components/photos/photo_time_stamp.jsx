import React from 'react';
var moment = require('moment');

const TimeStamp = ( { creationTime } ) => {
  let timeStamp;

  let createdAtTimeStamp = moment(creationTime).fromNow();

  if (moment(creationTime).format() < moment().subtract(25, 'days').format()) {
    createdAtTimeStamp = moment(creationTime).format('ll');
  }

  return (
    <div className='photo-creation-timestamp'>
      { createdAtTimeStamp }
    </div>
  )
}

export default TimeStamp;
