import React , {useState, useEffect} from 'react'
import './Body.scss';
import arrow from '../../images/icon-arrow-down.svg'
import eggM from '../../images/mobile/image-transform.jpg'
import pinkM from '../../images/mobile/image-stand-out.jpg'
import thomas from '../../images/image-thomas.jpg'
import jennie from '../../images/image-jennie.jpg'
import emily from '../../images/image-emily.jpg'
import square1M from '../../images/mobile/image-gallery-sugar-cubes.jpg'
import square2M from '../../images/mobile/image-gallery-orange.jpg'
import square3M from '../../images/mobile/image-gallery-milkbottles.jpg'
import square4M from '../../images/mobile/image-gallery-cone.jpg'

import eggD from '../../images/desktop/image-transform.jpg'
import pinkD from '../../images/desktop/image-stand-out.jpg'
import square1D from '../../images/desktop/image-gallery-sugarcubes.jpg'
import square2D from '../../images/desktop/image-gallery-orange.jpg'
import square3D from '../../images/desktop/image-gallery-milkbottles.jpg'
import square4D from '../../images/desktop/image-gallery-cone.jpg'

function getWindowDimensions() {
  const { innerWidth: width } = window;
  console.log(width)
  return {
    width
  };
}

const Body = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [images, setImages] = useState({
    'egg':eggM,
    'pink': pinkM,
    'square1': square1M,
    'square2': square2M,
    'square3': square3M,
    'square4': square4M,
  })
  

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(getWindowDimensions())
      if(getWindowDimensions().width > 900 ){
        setImages({
          'egg':eggD,
          'pink': pinkD,
          'square1': square1D,
          'square2': square2D,
          'square3': square3D,
          'square4': square4D,
        })
        console.log('big')
      }else{
        console.log('small')
        setImages({
          'egg':eggM,
          'pink': pinkM,
          'square1': square1M,
          'square2': square2M,
          'square3': square3M,
          'square4': square4M,
        })
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="body">
      <div id="section1" >
        <p className=" mainTitle">We are creatives </p>
        <img src={arrow} />
      </div>
      <div id="section2">
        <img src={images.egg} />
        <div className="textContainer">
          <p className="title">Transform your brand</p>
          <p className="subtext"> We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <p className="learn">Learn more</p>
        </div>
      </div>
      <div id="section3">
        <img src={images.pink} />
        <div className="textContainer">
          <p className="title"> Stand out to the right audience</p>
          <p className="subtext"> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <p className="learn">Learn more</p>
        </div>
      </div>
      <div className="section-4-5">
        <div id="section4">
          <div className="textContainer end">
              <p className="titleCyan">   Graphic design</p>
              <p className="subtextCyan"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>
        <div id="section5">
          <div className="textContainer end">
              <p className="titleCyan">Photography</p>
              <p className="subtextCyan"> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </div>
      <div id="testimonials">
        <p className="clientTitle">Client testimonials</p>
        <div className="client-container">
          <div className="client">
            <img src={emily} />
            <p className="subtext dark">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <p className="name">Emily R.</p>
            <p className="subName">Marketing Director</p>
          </div>
          <div className="client">
            <img src={thomas} />
            <p className="subtext dark">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <p className="name">  Thomas S.</p>
            <p className="subName">Chief Operating Officer</p>
          </div>
          <div className="client">
            <img src={jennie} />
            <p className="subtext dark">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <p className="name">Jennie F.</p>
            <p className="subName">Business Owner</p>
          </div>
        </div>
      </div>
      <div id="images">
        <img src={images.square1} />
        <img src={images.square2} />
        <img src={images.square3} />
        <img src={images.square4} />
      </div>
    </div>
  );
}

export default Body;
