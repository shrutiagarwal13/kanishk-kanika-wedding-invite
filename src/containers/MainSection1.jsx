import React from 'react';
import CountdownContainer from './CountdownContainer';
// import CouplePic from '../images/Couple-Laughing-Together.jpeg';
// import MainTitleName from '../images/text-1633725554538.png';
// import ChaitanyaName from '../images/chaitanya2.png';
// import MolikaName from '../images/dummy-image.jpeg';
// import AndName from '../images/and2.png';

import { useMediaQuery } from '../components/useMediaQuery';
import CoupleVector from '../images/Chaitanya-Molika-Caricature-Couple.png';
import { Container, Row, Col } from 'react-bootstrap';
// import CircleType from 'circletype';
import WeddingOfFontImage from '../images/the-wedding-of-min.png';

const MainSection = () => {
  let isMobile = useMediaQuery('(max-width: 500px)');
  //   const circle = new CircleType(document.getElementById('myElement'));
  //   circle.radius(150);

  return (
    <div className='main-section'>
      <section className='main-section'>
        {/* <div>
          <img src={CoupleVector} className='main-section-couple-pic'></img>
        </div> */}
        <div className='layer'>
          {!isMobile && (
            <>
              <Container>
                <Row>
                  <Col sm={12} md={6}>
                    <div className='main-title-container'>
                      <div>
                        <img
                          src={WeddingOfFontImage}
                          className='wedding-of-img'
                        ></img>
                      </div>
                      <div className='main-title'>
                        Kanishk <br />
                        <span style={{ 'font-family': 'cursive' }}>
                          {' '}
                          &{' '}
                        </span>{' '}
                        <br />
                        Kanika
                      </div>
                      <div className='main-section-rsvp'>
                        <a href='#rsvp-sec' className='main-section-rsvp'>
                          RSVP &#62;
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <img
                      src={CoupleVector}
                      className='main-section-couple-pic'
                    />
                  </Col>
                </Row>
              </Container>
            </>
          )}

          <CountdownContainer />
        </div>
      </section>
    </div>
  );
};

export default MainSection;
