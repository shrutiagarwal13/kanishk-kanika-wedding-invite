import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VenueCard from './VenueCard';
import WeddingBG from '../images/wedding-bg.jpg';
import SangeetBG from '../images/sangeet-bg.jpg';
// import ReceptionBG from '../images/reception-bg.jpeg';
import WeddingIcon from '../images/wedding-icon1.png';
import SangeetIcon from '../images/sangeet-icon1.png';
// import ReceptionIcon from '../images/reception-icon.png';

const VenueSection = () => {
  let sangeetVenue = `
  <div class='venue-name mb-2 mt-4'>Haveli Banquet & Resort</div>
  <div>Fun City, Pilibhit Bypass Rd <br/> Bareilly, Uttar Pradesh</div>
  `;

  return (
    <div>
      <section className='venue-section'>
        {/* <video
          loop={true}
          autoPlay='autoplay'
          id='videoBG'
          className='friends-msgs-video'
          // controls='true'
          playsinline='true'
          disablePictureInPicture='true'
          muted
        >
          <source src={FireworksVideo} type='video/mp4' />
        </video> */}
        <div className='section-heading venue-heading'>Place & Time</div>
        <div>
          <Container>
            <Row>
              <Col md={6} sm={12}>
                <VenueCard
                  background={SangeetBG}
                  icon={SangeetIcon}
                  functionName='Sangeet & Ring Ceremony'
                  date='Saturday, 19/02/2022'
                  time='5:00 PM onwards'
                  address={sangeetVenue}
                  mapsLink='https://www.google.com/maps/place/OYO+24944+Haveli+Banquet+And+Resort/@28.4044578,79.4575176,17z/data=!3m1!4b1!4m8!3m7!1s0x39a0067d4c4a7dfb:0x9517d68883a5c0c2!5m2!4m1!1i2!8m2!3d28.4044578!4d79.4597063'
                  customClass='sangeet-function-name'
                />
              </Col>
              <Col md={6} sm={12}>
                <VenueCard
                  background={WeddingBG}
                  icon={WeddingIcon}
                  functionName='The Wedding'
                  date='Sunday, 20/02/2022'
                  time='7:00PM onwards'
                  address={sangeetVenue}
                  mapsLink='https://www.google.com/maps/place/OYO+24944+Haveli+Banquet+And+Resort/@28.4044578,79.4575176,17z/data=!3m1!4b1!4m8!3m7!1s0x39a0067d4c4a7dfb:0x9517d68883a5c0c2!5m2!4m1!1i2!8m2!3d28.4044578!4d79.4597063'
                />
              </Col>
              {/* <Col md={4} sm={12}>
                <VenueCard
                  background={ReceptionBG}
                  icon={ReceptionIcon}
                  functionName='Reception'
                  date='Friday, 07/12/2021'
                  time='8:00PM onwards'
                  address='ABC, Rajendra Nagar, Bareilly, UP'
                />
              </Col> */}
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default VenueSection;
