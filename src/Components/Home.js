import '../App.css';
import '../index.css';

import star from '../images/star.png';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import hero_circle from '../images/hero-circle.png';
import hero_circle_bg from '../images/hero-circle-bg.png';

import sector1 from '../images/sector1.png';
import sector2 from '../images/sector2.png';
import sector3 from '../images/sector3.png';
import sector4 from '../images/sector4.png';
import sector5 from '../images/sector5.png';
import sector6 from '../images/sector6.png';
import sector7 from '../images/sector7.png';
import sector8 from '../images/sector8.png';
import sector9 from '../images/sector9.png';
import sector10 from '../images/sector10.png';
import sector11 from '../images/sector11.png';
import sector12 from '../images/sector12.png';

import web3 from '../images/web3.png';
import web3bg from '../images/Web3-bg.png';
import web3bg1 from '../images/web3-bg1.png';

import token_left_bg from '../images/token-left-bg.png';
import token_img from '../images/token-img.png'

import roadmap_bg from '../images/roadmap-bg.png';
import roadmap from '../images/roadmap.png';

import secure1 from '../images/secure1.png';
import secure2 from '../images/secure2.png';
import AnimatedDots from './Animateddots';
function Home() {



  return (
    <div className="home">
        {/* ----------hero-section------ */}

        <div className='hero_section'>
          <div className='left'>
            <p className='sp'>#1 BLOCKCHAIN SECURITY APP</p>
            <h1>Depin AI & Rwa Smart marketplace Search on Web 3.0</h1>
            <div className='buttons'>
              <a href='/' className='btn'>
                Whitepaper
              </a>
              <a href='/' className='btn1'>
                Trade
              </a>
            </div>
          </div>
          <div className='right'>
          <AnimatedDots className="dots1" dotCount={200} />
            <img className='circle' src={hero_circle} alt='logo' />
            <img className='circle-bg' src={hero_circle_bg} alt='logo' />
          </div>
          <img src={star} alt='logo' className='s1' />
          <img src={star} alt='logo' className='s2' />
          <img src={star} alt='logo' className='s3' />
          <img src={star} alt='logo' className='s4' />
        </div>

        {/* ------------partners------------- */}

        <div className='partners'>
          <a href='/'>
            <img src={p1} alt='logo' />
          </a>
          <a href='/'>
            <img src={p2} alt='logo' />
          </a>
          <a href='/'>
            <img src={p3} alt='logo' />
          </a>
          <a href='/'>
            <img src={p4} alt='logo' />
          </a>
          <a href='/'>
            <img src={p5} alt='logo' />
          </a>
        </div>

        {/* ---------------features---------- */}

        <div className='sectors' id='feature'>
          <h2>Sectors</h2>
          <div className='content'>
            <div className='box'>
              <img src={sector1} alt='loog' />
              <h3>GPU (CPU/TPU)</h3>
            </div>
            <div className='box'>
              <img src={sector2} alt='loog' />
              <h3>HARDWARE</h3>
            </div>
            <div className='box'>
              <img src={sector3} alt='loog' />
              <h3>NODES</h3>
            </div>
            <div className='box'>
              <img src={sector4} alt='loog' />
              <h3>HASHING POWER</h3>
            </div>
            <div className='box'>
              <img src={sector5} alt='loog' />
              <h3>MINING</h3>
            </div>
            <div className='box'>
              <img src={sector6} alt='loog' />
              <h3>MACHINE LEARNING</h3>
            </div>
            <div className='box'>
              <img src={sector7} alt='loog' />
              <h3>VPS</h3>
            </div>
            <div className='box'>
              <img src={sector8} alt='loog' />
              <h3>DATA</h3>
            </div>
            <div className='box'>
              <img src={sector9} alt='loog' />
              <h3>SECURITY</h3>
            </div>
            <div className='box'>
              <img src={sector10} alt='loog' />
              <h3>WIFI</h3>
            </div>
            <div className='box'>
              <img src={sector11} alt='loog' />
              <h3>WIFI</h3>
            </div>
            <div className='box'>
              <img src={sector12} alt='loog' />
              <h3>MAPS</h3>
            </div>
          </div>
        </div>

        {/* ---------------web3---------- */}

        <div className='web3' id='about'>
          <div className='left'>
            <img src={web3} alt='logo'/>
            <img className='bg' src={web3bg} alt='logo'/>
            <AnimatedDots className="dots2" dotCount={100} />
          </div>
          <div className='right'>
          <img className='bg' src={web3bg1} alt='logo'/>
            <p className='sp'>
              Bringing  Infrastructure owners & users together 
            </p>
            <h2>Our AI algohrytms <br/> search the web3.0 daily for opportunities  in DePin, AI and RWA field.</h2>
            <p>We Arbitrage and use this data for revenue generation mechanism like above (Remote mining, Gpu Arbitrage, power/energy outsourcing and many more. )</p>
          </div>
        </div>

        {/* -------------tokenomics------------- */}

        <div className='tokenomics' id='tokenomics'>
          <div className='left'>
            <img className='bg' src={token_left_bg} alt='logo' />
            <p className='sp'>TOKEN METRICS</p>
            <h2>RWA DePin - <br/> Token Contract</h2>
            <div className='content'>
              <ul>
                <li>Buy/sell tax: 4.9%</li>
                <li>Development & Infrastructure: 2.5%</li>
                <li>Marketing: 2.4%</li>
              </ul>
              <ul>
                <li>Liquidity will be locked</li>
                <li>Contract will be renounced</li>
                <li>No transfer tax</li>
                <li>No max buy/-wallet limits</li>
                <li>Anti-snipe precautions</li>
              </ul>
            </div>
          </div>
          <div className='right'>
            <img src={token_img} alt='logo'/>
            <img className='bg' src={web3bg} alt='logo'/>
            <AnimatedDots className="dots3" dotCount={100}/>
          </div>
        </div>
        <div className='started'>
        <AnimatedDots className="dots4" dotCount={50} />
          <div className='left'>
            <h2>Lorem ipsum dolor sit</h2>
            <p>We work hard every day to make life of our clients better and happier</p>
          </div>
          <div className='right'>
            <a href='/' className='btn1'>
              Get started
            </a>
          </div>
        </div>

        {/* -------------roadmap------------- */}

        <div className='roadmap' id='roadmap'>
          <p className='sp'>STEPS WE FOLLOW</p>
          <h2>Our Roadmap</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
          <div className='box'>
            <ul>
              <li>Ideation</li>
              <li>Concept Prototype</li>
              <li>Targeted Market Research</li>
              <li>Feature Design Development</li>
              <li>Revenue Model Formulation</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Platform Functional Refinements</li>
              <li>Strategic Product Marketing Initiatives</li>
              <li>Launch of Mobile Applications</li>
              <li>Integration of Telegram Features</li>
              <li>Establishment of Investors Club</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Token Presale/Launch</li>
              <li>Official Product Launch</li>
              <li>Additional Trading Bots Integration</li>
              <li>Premium Influencer Area Launch</li>
              <li>Exclusive Trading Channels Openin</li>
            </ul>
          </div>
          <div className='box'>
            <ul>
              <li>Traders Connect - Social Media <br/> for Traders</li>
              <li>Beta Testing of New Features</li>
              <li>Integration of Multiple Markets</li>
              <li>Alpha Release of Market Prediction Tools</li>
              <li>AI Powered Trading</li>
            </ul>
          </div>
          <img src={roadmap_bg} alt='logo' className='bg' />
          <img src={roadmap} alt='logo' className='map' />
          <img src={web3} alt='logo' className='eth' />
          <AnimatedDots className="dots5" dotCount={100}/>
        </div>

        {/* -------------secure------------- */}

        <div className='secure'>
          <p className='sp'>PEACE OF MIND IS OUR #1 PRIORITY</p>
          <h2>Start securing from today</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href='/' className='btn1'>
            Get started
          </a>
          <img src={secure1} className='img1' alt='logo' />
          <img src={secure2} className='img2' alt='logo' />
          <AnimatedDots className="dots6" dotCount={100}/>
        </div>

        <p className='disclaimer'>
          <span>⚠️</span> DISCLAIMER <span> ⚠️</span> <br/>
          We support natural buyers. Any tool-assisted buying, like the use of sniper bots, or other ways of executing buys automatically, is not recommended. We view this as an attempt to get an unfair advantage over others,
          and the contract is designed to detect and punish activity like
          this with high taxes. We are not responsible of any sanctions, as a result of tool-assisted buying at launch.
        </p>

    </div>
  );
}

export default Home;
