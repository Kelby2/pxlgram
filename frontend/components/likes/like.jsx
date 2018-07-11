import React from 'react';

const Like = props => {

  const handleLikeAction = () => {
    const { photo_id, deleteLike, addLike } = props;

    if (props.likeState) {
      deleteLike(photo_id);
    } else {
      addLike(photo_id);
    }
  };

  const classes =
  `fa fa-lg ${props.likeState ?
    "fa-heart liked-icon" :
    "fa-heart-o likes-icon"}`;

  return (
    <div
      onClick={handleLikeAction}
      className={classes} />
  );
};

export default Like;
