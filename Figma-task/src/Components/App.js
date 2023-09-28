import React from 'react'
import '../Scss/App.scss';
import logo from '../Assets/Union.svg';

import Hero3 from '../Assets/hero-e@3x.png';
import Vector4 from '../Assets/Vector-4.svg';
import Solararrowuplinear from '../Assets/Solararrowuplinear.svg';
import vector from '../Assets/vector.svg';
import vector1 from '../Assets/Vector1.svg';
import subtract from '../Assets/subtract.svg';
import subtract1 from '../Assets/subtract1.svg';
import polygon1 from '../Assets/polygon1.svg';



const App = () => {
  return (
    <div className="desktop">
      <div className="hero-e">
        <div className="hero-e-child" />
        <div className="logo">
          <img className="union-icon" alt="logo" src={logo} />
          <div className="logo1">LOGO</div>
        </div>
        <div className="body-l">
          <div className="about-us-parent">
            <div className="about-us">About Us</div>
            <div className="div">私たちについて</div>
          </div>
          <div className="the-largest-community-of-photo">
            <div className="the-largest-community">
              Lorem ipsum dolor sit amet
            </div>
          </div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="scroll-parent">
          <div className="about-us">scroll</div>
          <img className="instance-child" alt="" src={Vector4} />
        </div>
      </div>
      <div className="body-l1">
        <div className="body-l-child" />
        <div className="about-us-group">
          <div className="about-us1">Lorem</div>
          <div className="div">subtitle</div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle">
            <div className="div2">01</div>
            <div className="no1">Lorem ipsum dolor sit</div>
            <div className="div3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="rectangle1">
            <div className="div2">02</div>
            <div className="no11">Lorem ipsum dolor sit</div>
            <div className="div3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="rectangle2">
            <div className="div2">03</div>
            <div className="no11">Lorem ipsum dolor sit</div>
            <div className="div3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
      <div className="body-e">
        <div className="body-l-child" />
        <img className="rectangle-icon" alt="" src={Hero3} />
        <div className="frame-parent">
          <div className="frame-group">
            <div className="wrapper">
              <div className="about-us">{`Lorem ipsum `}</div>
            </div>
            <div className="div9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="parent">
            <div className="about-us">Lorem ipsum</div>
            <img
              className="solararrow-up-linear-icon"
              alt="Solararrowuplinear"
              src={Solararrowuplinear}
            />
          </div>
        </div>
      </div>
      <div className="body-e1">
        <div className="rectangle-group">
          <div className="group-child" />
          <div className="group-item" />
          <img className="group-inner" alt="polygon" src={polygon1} />
        </div>
      </div>
      <div className="footer-c">
        <div className="group">
          <div className="about-us">Home</div>
          <div className="about-us">Page 1</div>
          <div className="about-us">Page 2</div>
          <div className="div14">採用情報</div>
        </div>
        <div className="logo1-3-parent">
          <img className="logo1-3-icon" alt="#" src="#" />
          <div className="rectangle3" />
          <div className="facebook-parent">
            <div className="facebook">
              <img className="vector-icon" alt="" src={vector} />
            </div>
            <div className="facebook">
              <img className="vector-icon" alt="" src={vector1} />
            </div>
            <div className="instagram">
              <img className="vector-icon" alt="" src={subtract} />
            </div>
            <div className="instagram">
              <img className="vector-icon" alt="" src={subtract1} />
            </div>
          </div>
        </div>
        <div className="taiko-juki-inc">© Logo, Inc.</div>
      </div>
      <div className="navigation-a">
        <div className="logo2">
          <img className="union-icon1" alt="logo" src={logo} />
          <div className="logo3">LOGO</div>
        </div>
        <div className="container">
          <div className="about-us">Home</div>
          <div className="about-us">Page 1</div>
          <div className="about-us">Page 2</div>
        </div>
        <div className="logo4">
          <div className="div18">
            <p className="blank-line">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
