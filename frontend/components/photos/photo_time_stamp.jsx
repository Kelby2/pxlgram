import React from 'react';
import moment from 'moment';

const TimeStamp = ( { photoCreationTime } ) => {

  let creationTimeStamp;
  const createdAtTime = moment(photoCreationTime);
  const stampCreationLimit = moment().subtract(6, 'days');

  //creationTimeStamp shows the date if the photo was created
  //more than a week ago
  if (createdAtTime.format() < stampCreationLimit.format()) {
    creationTimeStamp = createdAtTime.format('LL').split(',')[0].toUpperCase();
  } else {
    creationTimeStamp = createdAtTime.fromNow().toUpperCase();
  }

  return (
    <div className='photo-creation-timestamp'>
      { creationTimeStamp }
    </div>
  )
}

export default TimeStamp;
