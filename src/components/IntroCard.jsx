import React from 'react';

const IntroCard = (props) => {
  return (
    <div className='card card-profile '>
      <div className='card-avatar'>
        <img
          className='card-profile-pic'
          src={props.profilepic}
          alt={props.name}
        />
      </div>
      <div className='table'>
        <div className='card-caption my-3'>{props.name}</div>
        <p
          className='card-description'
          dangerouslySetInnerHTML={{ __html: props.description }}
        >
          {/* {props.description} */}
        </p>
      </div>
    </div>
  );
};

export default IntroCard;
