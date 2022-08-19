import React from 'react';
import CountdownContainer from './CountdownContainer';
// import CouplePic from '../images/Couple-Laughing-Together.jpeg';
import MainTitleName from '../images/text-1633725554538.png';
import ChaitanyaName from '../images/chaitanya2.png';
import MolikaName from '../images/dummy-image.jpeg';
import AndName from '../images/and2.png';

import { useMediaQuery } from '../components/useMediaQuery';

const MainSection = () => {
  let isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <div className='main-section'>
      <section className='main-section'>
        <div className='layer'>
          {/* <div className='main-title'>Molika & Chaitanya</div> */}
          {!isMobile && (
            <img src={MainTitleName} alt='' className='main-names-img' />
          )}
          {isMobile && (
            <div className='mobile-main-names-img'>
              <img src={ChaitanyaName} alt='' className='main-names-img' />
              <br />
              <img
                src={AndName}
                alt=''
                // className=''
                className='mobile-title-img and-img main-names-img'
              />
              <br />
              <img src={MolikaName} alt='' className='main-names-img' />
            </div>
          )}

          <CountdownContainer />
        </div>

        {/* <img src={CouplePic} className='main-image' alt='Couple'></img> */}
      </section>
    </div>
  );
};

export default MainSection;
