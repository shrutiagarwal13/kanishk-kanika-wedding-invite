import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import SpeechBubble from '../components/SpeechBubble';
import SpeechBubble from '../components/SpeechBubble.jsx';
import ParentsSpeechBubble from '../components/ParentsSpeechBubble.jsx';

import MolikaParentsPic from '../images/family/molika-parents.jpg';
import ChaitanyaParentsPic from '../images/family/chaitanya_parents.jpg';
import MolikaBrotherPic from '../images/family/animesh.jpg';

import PranetaPic from '../images/family/praneta1.jpeg';
import VikramPic from '../images/family/vikram1.jpg';

import AditPic from '../images/family/adit.jpeg';
import MuditPic from '../images/family/mudit.jpeg';
import KanuPic from '../images/family/kanu.jpeg';
import VasuPic from '../images/family/vasu.jpg';
import VinniPic from '../images/family/vinni.jpg';
import ShrutiShreshthaPic from '../images/family/shruti_shreshtha.jpg';

import VaibhavPic from '../images/family/vaibhav.jpg';
import VatsalaPic from '../images/family/vatsala.jpeg';
import RichaPic from '../images/family/richa.jpeg';
// import AarohiPic from '../images/family/aarohi.jpeg';
// import ShikhaPic from '../images/family/shikha.jpeg';
// import KashviPic from '../images/family/kashvi.jpg';
// import RahulPic from '../images/family/rahul.jpg';
// import AnshulPic from '../images/family/anshul.jpeg';

const FamilySection = () => {
  let MolikaParentsMsg = `

<div className='family-msg'>
<p>"Always proud to be your parents Molika, It brings nothing but happiness to see you happy, on your wedding day. 
How time flies, you’re a big girl now! we are so happy for you that you’ve found your special one in Chaitanya with whom you’d now complete your family! </p> <p>
Congratulations to both of you, May this special day bring new sunshine of happiness, joy, and laughter into your life."</p>

</div>`;

  let chaitanyaParentsMsg = `
<div className='family-msg'>
<p>"Chaitanya beta is not only our only son but also the soul of our lives. His presence and intelligence makes our life so filled with love and respect. He is the kindest person and we are so proud of him since always. He thinks before talking, he smiles even if he is emotional, he cares for his sister dearly and respects all the elders like family. We are very happy that he found Molika and we are so excited to welcome her in our lives! We pray and wish for their happiness and bright future and our blessings are always with them." </p>
</div>
`;

  let MolikaBrotherMsg = `
<div className='family-msg'>
<p>
"My precious sister, <br />
It will never be enough to say about all the good and bad times spent with you so far.
so, Congratulations on your wedding day :*  <br />

Dear sis, you're a fun gal,undoubtedly. But good for me, you're Chaitanya jiju's headache now :D  <br />
From messes around the bathroom sink  <br />
To always challenging me to think,  <br />
I was raised with a tough sister,  <br />
But now you are going to be happy with new mister!  <br />
I've been your first call for 25 years, (sach mein!!) <br/> And been around to dry your tears.  <br />
Jiju better treat you right and always stay true, <br /> Or he'll have me to answer to! (Sweet gesture!)  <br />
So from all of us to dearest sister - have a wonderful life with my new brother! :)"</p>
</>

</div>
`;

  let pranetaMsg = `
<div className='family-msg'>

<p>"Chaitanya, you are the best thing that could have happened to me just one year after I was born. Our fights as kids, our going to school together, playing basketball, watching cricket, all reminds me of such a happy and eventful childhood - all thanks to you. You know I love you dearly and there is nothing in this world that I won’t do for you. You are my pride and I feel so blessed to have you. </p>
<p>Getting married is a big milestone and I am so happy that you have found that one person who will make it totally worthwhile for you. It’s very hard to find the person whom you want to spend your life with but Molika makes it sound so easy and genuine. I promise you, I will protect and love her like i do to you and I am always on her side from now!😉  </p>
<p>Can’t wait to dance, eat and do all crazy things in your wedding!! All the best brother, I love you ❤️ "</p>

</div>

`;

  let vikramMsg = `
<div className='family-msg'>

<p>"Many congratulations Kaku!! Wish you plenty of love, laughter on your new journey and ofcourse more ManU goals!  Waiting eagerly for the big day. Wish you both a happy and healthy life together. 😄 </p>

<p>God bless. "</p>

</div>
`;

  let aditMsg = `
<div className='family-msg'>
<p>"Kaku Bhaiya, it’s always been fun to spend time with you and we’ve had some really great memories together. Hope to create many more such memories in the future (with bhabhi too this time 😜) </p>
<p>Bhabhi, welcome to the family! Eagerly waiting to meet you. 🎉 </p>
<p>Wishing you both a very happy and healthy married life! Really excited for the wedding!🤩  "</p>
</div>
`;

  let vinniMsg = `
<div className='family-msg'>
<p>"You have always protected me like a big brother , you have always been there for me. Not only professional stuff but also personal things, I can share with you which makes me feel so blessed.
I know your advice will be the best advice I can get and nothing seems impossible when I talk to you.
You correct me when I am wrong but the way you do, makes me inspired.😇 </p>

<p>Special people like you, deserve only the best. As you have found your partner, I wish you all the very best as you are entering second and the most crucial phase of life brother!❣️ </p>
<p>May your marriage bring you all the happiness and adventures that you crave for! </p>
<p>I wish bhabhi a warm welcome!🌹🤗 " </p>

</div>
`;

  let muditMsg = `

<div className='family-msg'>
<p>"Congrats Kaku bhaiya and Molika bhabhi!❤️ Hope to meet an even better party person😛 ab to all the more reasons to celebrate❤️ Kaku bhaiya you have always been so fun to be with! You are always so supportive and inventive in solving our petty college issues🤪 Just stay the way you are!❤️ Wishing you both a very happy and exciting married life. Excited for the wedding!😍 </p>
<p>All the best!🤩 "</p>

</div>

`;

  let shrutiShreshthaMsg = `
<div className='family-msg'>

<p>"Congratulations Bhaiya and Bhabhii!!🥳</p>
<p>We have been waiting to meet our bhabhi for so long. The wait couldn’t have come to a better end!🥰 Bhaiya, from always having our back to pampering us, you have been no less than a real brother. From us spending our summer vacations in Bareilly playing cricket to you taking us out for clubbing, it has been hell of a journey!</p>
<p>We look forward to enjoying our vacations with the newly added member of our family. Bhabhi, so excited to partner up with you. Yes, you can count on us to be on your side, always!😉 </p>
<p> To the eldermost yet the coolest bhaiii and bhabhi, we wish you both the happiest married life. Can't keep calm for the most joyous celebrations!❤️ " </p>

</div>

`;

  // On every occasion, you have been real trouble for forcing us to choose a gift and eventually sending a fortune
  // Bhaiya, you've always treated us like your real sisters and pampered us with all our demands.
  let kanuMsg = `
<div className='family-msg'>
<p>
"Dear kaku bhaiya, <br />
You have been role model and torch bearer for all of your brothers.. </p>
<p>Dear bhabhi, <br /> Welcome to the family... this is the much awaited day in all our lives. Wish you both love, good health ahead in life. We will have lots of fun together!!🎉 " </p>

</>

</div>

`;

  let vasuMsg = `

<div className='family-msg'>
<p>"Finally The day is here for which we all have eagerly been waiting ⏰ </p>
<p>Congratulations bhaiya and bhabhi on your marriage 💥  </p>
<p>Kaku bhaiya you are the coolest brother one could've ever asked for, starting right from the part where you party with us like friends to the part where you give us serious advice be it for career or anything like a mentor👨‍💼 </p>
<p>You're an ideal big brother who's soon getting an ideal bhabhi for all of us to pamper❤️ </p>
</>I'm really excited for you to start this new journey with her, i hope and wish your love continues to grow stronger with every passing day🌈 </p>
<p>We await all the fun, dance, laughter and smiles on your wedding day, let's make memories for a lifetime🕺 "</p>


</div>
`;
  let vaibhavMsg = `
<div className='family-msg'>
<p>
"Dear Molika and Chaitanya !  <br /> As u begin this new journey of life, your bhaiya and bhabhi , wish you both the best of health, love, happiness together... may the rollercoaster you guys are about to sit in give you zillions of moments to laugh and none otherwise... God bless and congratulations!! Kush raho "
</p>
</div>
`;

  let vatsalaMsg = `
  <div className='family-msg'>
  <p>"Dear jiju, <br />
I must tell you that you’ll be truly blessed with the presence of Molika didi (read: bundle of joy) in your life. <br/>
She will entertain you with all the fun mimicry, will give you the most sensible suggestions, will always be ready to explore new places with you but will also be very particular about even one pinch of extra salt in food :p <br />
Now that you both are embarking on a new journey of your life, I wish it brings immense happiness, peace and beautiful adventures to experience. <br />
Congratulations!!! <br />
Lots of love <3 "  </p>

  </div>

  `;

  let richaMsg = `
  <div className='family-msg'>
  <p>"Marriage bonds two people in body and mind, <br />
An allows them to appreciate the miracles they find. <br />
 Romance and compassion carry them along, <br />
Respect and Acceptance makes the marriage strong, <br />  
Imparting words and actions of love from deep inside, <br />
Acknowledging each other while standing side by side. <br />
Great Marriages are created by husbands and wives, <br />
Eternally being grateful they are in each other lives. </p> 
<p> Respect each other, Romance will follow"</p>

  </div>

  `;

  //   let abhinavMsg = `
  // <div className='family-msg'>

  // <p>"A pretty woman and a handsome man, two bodies united into one beautiful soul. May the bond you share last forever and grow deeper day by day in the new chapter of life. </p>
  // <p>Stay happy an be blessed!! </p>
  // <p>With love," </p>
  // </div>

  // `;

  //   let aarohiMsg = `
  // <div className='family-msg'>
  // <p>
  // "You have pampered, we all three, since we are born. We'll never forget our funfilled late night talks with you bua. </p>
  // <p>You look awesome too to us! </p>
  // <p>About fufaji, eagerly waiting to play and enjoy with you. </p>
  // <Best> We love you bua and fufaji!!😘 <br /> Best wishes!" </p>

  // </div>

  // `;

  //   let shikhaMsg = `
  // <div className='family-msg'>
  // <p>"The Warmest congratulations to the newly weds. Wishing that you two have an amazing life ahead. First year of marriage is a blessing. It will get harder, but it doesn't mean that you won't cope with difficulties. Keep supporting each other and learn to compromise, and you'll stay together forever." </p>

  // </div>
  // `;

  //   let rahulMsg = `
  // <div className='family-msg'>

  // <p>"Two beautiful hearts joining together with a promise of never letting go of each other. Our warm wishes of lifetime happiness, joy, and prosperity for Molika and Chaitanya Ji... </p>
  // <p>Congratulations! May God always guide you both to lead a married life full of love, compassion, and purity. May you both find true happiness in the prayers! </p>
  // </div>
  // `;

  //   let kashviMsg = `
  // <div className='family-msg'>
  // <p>
  // Wishing you and Mausaji a happy  Marital bliss... God bless you both and Good Luck as you both are entering in your new phase of life...
  // </p>

  // </div>
  // `;

  //   let anshulMsg = `
  // <div className='family-msg'>
  // <p>
  // Many congratulations Molika!! </p>
  // <p>Wish you both happiness, love and joy as you embark on this new chapter of life!</p>
  // <p>Lots of Love!!
  // </p>
  // </div>
  // `;

  return (
    <section className='family-section'>
      <div className='section-heading'>Our Family</div>

      <div className='family-msgs-container'>
        {/* <div class='container'> */}
        {/* <div class='card-columns'> */}
        <div className='family-msg-container'>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <ParentsSpeechBubble
                  message={chaitanyaParentsMsg}
                  pic={ChaitanyaParentsPic}
                  name=''
                  relation="Groom's Parents"
                  customClass='parents-msg'
                  customPointerClass='parents-pointer'
                />
              </Col>
              <Col xs={12} sm={12} md={6}>
                <ParentsSpeechBubble
                  message={MolikaParentsMsg}
                  pic={MolikaParentsPic}
                  name=''
                  relation="Brides's Parents"
                  customClass='parents-msg'
                  customPointerClass='parents-pointer'
                />
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col md={12}>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  interval={30000}
                  fade
                >
                  <Carousel.Item interval={210000}>
                    {/* <Row>
                        <Col > */}
                    <SpeechBubble
                      message={pranetaMsg}
                      pic={PranetaPic}
                      name='Praneta'
                      relation="Groom's Sister"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                      charLength={420}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={vikramMsg}
                      pic={VikramPic}
                      name='Vikram'
                      relation="Groom's Jiju"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={kanuMsg}
                      pic={KanuPic}
                      name='Kanishk'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={aditMsg}
                      pic={AditPic}
                      name='Adit'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={vasuMsg}
                      pic={VasuPic}
                      name='Vatsal'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={shrutiShreshthaMsg}
                      pic={ShrutiShreshthaPic}
                      name='Shruti & Shreshtha'
                      relation="Groom's Cousins"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                      charLength={500}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={muditMsg}
                      pic={MuditPic}
                      name='Akarsh'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                      charLength={450}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={vinniMsg}
                      pic={VinniPic}
                      name='Shubhang'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                      imgOrder='order-md-1'
                      msgOrder='order-md-2'
                      charLength={400}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col md={12}>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  interval={30000}
                  fade
                  // vertical
                >
                  <Carousel.Item interval={210000}>
                    {/* <Row>
                        <Col > */}
                    <SpeechBubble
                      message={MolikaBrotherMsg}
                      pic={MolikaBrotherPic}
                      name='Animesh'
                      relation="Bride's Brother"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={vaibhavMsg}
                      pic={VaibhavPic}
                      name='Vaibhav & Megha'
                      relation="Bride's Cousins"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={vatsalaMsg}
                      pic={VatsalaPic}
                      name='Vatsala'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <SpeechBubble
                      message={richaMsg}
                      pic={RichaPic}
                      name='Richa & Rajat Jindal'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  {/*
                  <Carousel.Item>
                    <SpeechBubble
                      message={manishKirtiMsg}
                      pic={ManishKritiPic}
                      name='Manish, Kirti & Aarav'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={shikhaMsg}
                      pic={ShikhaPic}
                      name='Shikha & Amit'
                      relation="Bride's Cousins"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={abhinavMsg}
                      pic={AbhinavPic}
                      name='Abhinav & Divya'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={priyankaMsg}
                      pic={PriyankaPic}
                      name='Priyanka & Ashish'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={sonalMsg}
                      pic={SonalPic}
                      name='Sonal, Ankit & Anika'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={kashviMsg}
                      pic={KashviPic}
                      name='Kashvi & Yahvi'
                      relation="Bride's Nieces"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={rahulMsg}
                      pic={RahulPic}
                      name='Neha & Rahul'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <SpeechBubble
                      message={anshulMsg}
                      pic={AnshulPic}
                      name='Anshul & Anshika'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                      imgOrder='order-md-2'
                      msgOrder='order-md-1'
                    />
                  </Carousel.Item> */}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default FamilySection;
