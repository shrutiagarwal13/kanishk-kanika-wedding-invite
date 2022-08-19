import { React } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import FriendPic from '../images/friend-avatar.png';
import FriendsCard from '../components/FriendsCard';

import VikasPic from '../images/friends/vikas.jpg';
import NAVPic from '../images/friends/nav.jpg';
import MaulikPic from '../images/friends/maulik.jpg';
import RakshitPic from '../images/friends/rakshit.jpeg';
import ArjunPic from '../images/friends/arjun.jpg';
import SuyashPic from '../images/friends/suyash.jpeg';
import PratikPic from '../images/friends/pratik.jpeg';
import ChiragPic from '../images/friends/chirag.jpg';
import JenishPic from '../images/friends/jenish.jpeg';
import PriyaPic from '../images/friends/priya.jpeg';
import ArshiPic from '../images/friends/arshi.jpg';
import NishaPic from '../images/friends/nisha.jpg';
import PradeepPic from '../images/friends/pradeep.jpg';
import HarshitaPic from '../images/friends/harshita.jpg';
import ApoorvaPic from '../images/friends/apoorva.jpeg';
import RamyaPic from '../images/friends/ramya.jpeg';

const FriendsSection1 = () => {
  let msgVikas = `<div class='friends-msg'>
  <p>
  "Bhai apna United ka fan <br>
Par aloo kai paranthe le jaye uska chain <br>
Bhai apna hai bahut shai insaan <br>
Hai wo har party ki jaan <br>
Bhai kai dance moves hai too good <br>
He is a rockstar and a chill dude <br>
Bhai late night kya special maggi banata <br>
Kitna bhi khalo ki mann nahi bharta <br> 
Chaahe ho Poker, cricket ya football <br>
Bhai apna khelta hai dil sai aur pelta hai goal pe goal <br>
Bhai apna hai thoda lazy <br>
Par party aur masti kai liye he is always ready. <br>
Bhai tu rahna humesha awesome and cool <br>
kyonki tu hai humara Bro and  Bhaijaan 😘 <br>
  </p>
  <p>
  Wishing you all the love and happiness for 
the next and most important chapter in your
life. And always remember never to laugh
at your better half choices because you 
are her biggest one. 😛😉 "
  </p>
  </div>`;

  let msgNAV = `
<div class='friends-msg'>
  <p>
  "Congratulations Chaitanya and Molika ❤️ </p> <p> We are really happy for you both.. </p>
  <p>
Chaitanya you have this amazing quality to nurture and maintain all relationships which is truly inspiring for all of us..
</p>
<p>
On behalf of the "Groom squad" I would like to tell you Molika you are a very lucky girl because Chai is an amazingly adjusting, funny and cool guy! </p>
<p>We wish you both a happy married life ❤️"</p>
</div>`;

  let msgMaulik = `
<div class='friends-msg'>
    <p>
  "Congratulations brother! </p>
  <p>
  Finally  the much awaited wedding is here. We have been waiting for this from our first year though. 😂
  </p>
  <p>
  Wish you a very happy married life ahead and all the best for your new beginning. You know we share a very special bond and I know each and every thing about you. So Molika can contact me for the grocery shopping to random shoes to clothes shopping. Excited for the wedding day. 😍 " </p>
</div>
`;

  let msgRakshit = `
<div class='friends-msg'>
<p> "Hey Chintu ! Wishing you the best as you embark on this next chapter of life ! Today you break the heart of millions of girls and some guys as well around the GLOBE who deeply loved you, How do you feel ? </p>
<p>
If we begin writing about you there will be endless things to write about, your kisse in Bareilly where you sat ulta on a bike and killed people with your looks, the controversial shorts your wore while playing cricket etc etc etc baaki kisse bhabhi ji ko personal sunaenge ! All the very best veere ! #yaaronkayaar" </p>
</div>`;

  let msgArjun = `
<div class='friends-msg'>
<p> "Chintu and Molika, many congratulations! 🎉 </p>
<p> Molika I am giving a piece of my heart with Chai 😉 .... Chai we have seen fun, togetherness, late night hang-outs and what not.... I love you for all the happiness and support we had all these year's for eachother. Wish you infinite happiness in this new venture of Life. Our bachelorhood will be missed. 🤪🍻 </p>
<p> Lots of love to both of you!" </p>
</div>
`;

  let msgSuyash = `
<div class = 'friends-msg'>
<p> "You are going to start this new journey in life. Let it be crazy, fantastic, wonderful and as awesome as you are!! </p>
<p> Wishing you all the happiness and love ❤️❤️ "</p>
</div>
`;

  let msgPratik = `
<div class='friends-msg'>
<p> "Chaitanya and Molika </p>

<p>A big congratulations on your conjugality. </p>

<p>I would like to share few moments of my life that wouldn’t have been possible without Chaitanya’s presence. </p>

<p>First Day : Warm hearted gentleman who likes to spike his hair and create his own aura . I still remember, he is someone who never let me be alone in spite of me telling that I prefer to be alone on our first encounter. </p>
<p>College days: His absence would have taken away 5 years of my college life. There isn’t a moment where we haven’t shared every single day beginning from bunking college, eating in mess, walking to college together, late night snacks, playing cricket (on field or room), this one’s little embarrassing- falling asleep while watching movies on same bed in one blanket😜. Funnily he was the first and last person I would see each day. He is very amiable and cordial and will always make you feel his own. </p>

</p> Words are short to describe his cordialness to this world. He is a charmer by smile and enchanting by heart. Brothers are known and well, but a friend like Chaitanya is unknown and rare. I am glad that I have him much much more than just a friend or brother. Chintu, Fnatic loves you Bhai ❤️❤️❤️ "</p>
</div>`;

  let msgChirag = `
<div class='friends-msg'> 
<p>Chait.. Chait.. Chait.. probably one person who defines the word "Friend" in its real sense.. you are the most cheerful and full of life person that I have ever met.. purest soul with a genuine heart. A very big congratulations as you embark the next phase of life.. I might not be there physically to celebrate with you on the big-day but my good wishes certainly will. Enjoy every moment my friend! On a lighter note, hope you have already received permission from wifey to allow you to continue our boys-trips 😜 (hope that is part of the marriage agreement.. yes?).. stay blessed! Cheers!</p>
</div>
`;

  let msgPriya = `
<div class='friends-msg'>
<p>Dear Chintu, I think of you and my mind immediately goes back to a hundred thousand stupid, nonsensical moments we have spent together. Like .. I cant seem to track any logic in these memories but my heart feels so full. I can only remember what FUN we had, how hard we danced, how much we ate, how much we bunked and just chilled… </p>
<p>Those deep moments when all of us sat on marine drive ( we thought you were reflecting on life and you were actually counting there are 108 street lights there 😛)  or walking along the beach and landing up on Devdas street subway…
Shirpur days, thumps up and lays, the exam hall… i mean i cant even write everything down here… because in all true sense we just grew up together and got mature together ( aise he keh rahe hoon tera confirm nai hae matlab) But all and all you have been such a great friend.. A friend one can count on , a friend who supports no matter what.. </p>
<p>You are one of the few souls who have managed to remain innocent and I cherish that about you. </p>
<p>I hope this next chapter of your life is filled with more joy, more love and many more great memories. </p>


</div>

`;

  let msgJenish = `
<div class='friends-msg'>
<p>
Congratulations Bhai!! You have finally found that one person you get to annoy all through your life.  </p>
<p>Here's to a lifetime full of happiness and love. Cheers 🥂 <br />
Thanks for inviting us to eat and drink while you get married 😆 </p>
<p>And, Molika welcome to the crazy Fnatic family!! </p>
</p>


</div>

`;

  let msgArshi = `
<div class = 'friends-msg'>
<p>"I can’t believe someone is finally marrying you. With all your tantrums and bad jokes, may God help Chaitanya. 
I just hope that Chaitanya has the same amount of patience as I have had. </p>
<p>
Well the upside to your wedding is that now you have someone else who you can irritate when you are bored. HaHa congratulations to both of us!!!" 
</p>
</div>
`;

  let msgHarshita = `
<div class='friends-msg'>
<p>"Pat on my back, for tolerating this crazy human for such a long time. <br />
She’s a complete package full of energy and life.  <br />
Dances with all her heart , head and hair out.  <br />
Workout sessions for her are like do or die challenges.  <br />
Office work for her is incomplete if she doesn’t crib about it .  <br />
She’s too bad at cracking jokes, but too good at laughing on the same.  <br />
In short, she’s ‘Ko-Molika’😉 ( All my wishes and prayers for you , Chaitanya 😜)  <p />

<p>Molika, my retard friend, I am really happy that you have found your person you want to annoy for the rest of your life and be happy about it. Congratulations and Lots of love to you guys ❤️" </p>
</div>`;

  let msgNisha = `
<div class='friends-msg'>
<p> "Hey Molika , Knowing you for such a long time is a blessing and I cannot think of two people who are more deserving of true love, happiness and a lifetime of both❤️. Cheers on your wedding, you are a great friend to know and I am sure that Chaitanya is going to keep you smiling , happy and cheerful all your life . 
I wish for you both a beautiful fairytale to live. <br />
Love you ❤️ "</p></div>`;

  let msgPradeep = `
<div class='friends-msg'>
<p>"Molu as she is popularly known among all her friends is like a four-leaf clover; hard to find and lucky to have.  I am glad we have been the best of friends. Even though she ignores all my calls 😋 I knew she is always there when you need her - Very genuine, caring and true from heart. Now that you will be soon married to Chaitanya and both of you are going to become two peas in a pod. May the butter of love melt all around you and the salt of happiness sprinkle over you. Happy Wedding!!" </p>
</div>`;

  let msgApoorva = `
<div class='friends-msg'>
<p>"We first met at college, became friends and I knew it's gonna be lifetime deal with person like you Mola. <br />
Just know you are a great person with pure soul. I Love you ❤️ and Let your mister know that you are mine before his .okay?? Molika & Chaitanya, Two special people, one amazing love!  Dear friends, enjoy your love that grows with every single day and knows no ending. the most heart congratulations on your wedding day!"</p>
</div>
`;

  let msgRamya = `
<div class='friends-msg'>
<p><br />"Chaitanya, Congratulations!! <br/>
Creative, Talkative, Bold, Beautiful, full of energy , witty dialogues that can make anyone laugh anddd knows to cook!  that's the deal you've got !!!"</p>
</div>
`;

  return (
    <div>
      <section className='friends-section'>
        {/* <div className='video-container'>
          <video
            loop={true}
            autoPlay='autoplay'
            id='vid'
            className='friends-msgs-video'
            // controls='true'
            playsinline='true'
            disablePictureInPicture='true'
            muted
          >
            <source type='video/mp4' src={MessagesBg}></source>
          </video>
        </div> */}
        <div className='friends-msgs-container'>
          <div className='section-heading friends-heading'>Our Friends</div>
          <Container className='friends-slider-container'>
            <Row>
              <Col md={8}>
                <div className='sub-heading'>Team Groom</div>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  interval={30000}
                  fade
                  // vertical
                >
                  <Carousel.Item interval={300000}>
                    <FriendsCard
                      pic={MaulikPic}
                      name='Maulik'
                      intro="Chaitanya's Friend"
                      message={msgMaulik}
                      charLength={350}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={RakshitPic}
                      name='Rakshit'
                      intro="Chaitanya's Friend"
                      message={msgRakshit}
                      charLength={600}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={PratikPic}
                      name='Pratik'
                      // intro="Chaitanya's Friend"
                      message={msgPratik}
                      charLength={300}
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <FriendsCard
                      pic={JenishPic}
                      name='Jenish'
                      // intro="Chaitanya's Friend"
                      message={msgJenish}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={PriyaPic}
                      name='Priya'
                      // intro="Chaitanya's Friend"
                      message={msgPriya}
                      charLength={420}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ChiragPic}
                      name='Chirag Jain'
                      // intro="Chaitanya's Friend"
                      message={msgChirag}
                      charLength={700}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ArjunPic}
                      name='Arjun'
                      intro="Chaitanya's Friend"
                      message={msgArjun}
                      charLength={600}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={NAVPic}
                      name='Neha, Akash and Vineet'
                      intro="Chaitanya's Friend"
                      message={msgNAV}
                      charLength={300}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    {/* <Row>
                        <Col > */}
                    <FriendsCard
                      pic={VikasPic}
                      name='Vikas'
                      intro="Chaitanya's Friend"
                      message={msgVikas}
                      charLength={340}
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <FriendsCard
                      pic={SuyashPic}
                      name='Suyash'
                      intro="Chaitanya's Friend"
                      message={msgSuyash}
                      charLength={300}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row>
              <Col md={4}> </Col>
              <Col md={8}>
                <div className='sub-heading bridesmaid-heading'>Team Bride</div>

                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  interval={30000}
                  fade
                >
                  <Carousel.Item interval={300000}>
                    <FriendsCard
                      pic={ArshiPic}
                      name='Arshi'
                      //   intro="Chaitanya's Friend"
                      message={msgArshi}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={HarshitaPic}
                      name='Harshita'
                      //   intro="Chaitanya's Friend"
                      message={msgHarshita}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={NishaPic}
                      name='Nisha'
                      //   intro="Chaitanya's Friend"
                      message={msgNisha}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={PradeepPic}
                      name='Pradeep'
                      //   intro="Chaitanya's Friend"
                      message={msgPradeep}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ApoorvaPic}
                      name='Apoorva'
                      //   intro="Chaitanya's Friend"
                      message={msgApoorva}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={RamyaPic}
                      name='Ramya'
                      //   intro="Chaitanya's Friend"
                      message={msgRamya}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default FriendsSection1;
