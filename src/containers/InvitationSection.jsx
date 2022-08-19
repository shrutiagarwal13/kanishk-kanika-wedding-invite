import React from 'react';
import InviteContainer from './InviteContainer';
// import party from 'party-js';
import Video from '../images/videoinvite.mp4';
import VideoPoster from '../images/video-poster.jpg';

const InvitationSection = () => {
  return (
    <section className='invitation-section alternate-section-1'>
      {/* <img
        src={Invitation}
        alt='invitation poster'
        className='invitation-poster'
      /> */}
      <InviteContainer dataAos='fade-up' />
      <div>
        <video
          width='95%'
          controls
          autoPlay
          className='video-invitation'
          poster={VideoPoster}
          playsInline
        >
          <source src={Video} type='video/mp4'></source>
        </video>
      </div>
    </section>
  );
};

export default InvitationSection;
