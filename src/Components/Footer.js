import '../App.css';
import '../index.css';
import telegram from '../images/telegram.png';
import x from '../images/x.png';

function Footer() {



  return (
    <div className="footer">
        <footer>
          <div className="logo">
            <a href="/">
              DePin
            </a>
            <p>
              With the huge inflow of projects, demand and DePin markets emerging in many fields,we decided to connect the needy with suppliers * owners with users.
            </p>
            
          </div>
          <div className="company">
            <p className="p-1">Company</p>
            <ul>
              <li>
                <a href="#feature">Features</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#tokenomics">Tokenomics</a>
              </li>
              <li>
                <a href="#map">Roadmap</a>
              </li>
            </ul>
          </div>
          <div className="Support">
            <p className="p-1">Support</p>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#knowledge">Knowledge Base</a>
              </li>
            </ul>
          </div>
          <div className="policy">
            <p className="p-1">Policy</p>
            <ul>
              <li >
                <a href='#terms' >Terms of use</a>
              </li>
              <li>
                <a href='#privacy'  >Privacy Policy</a>
              </li>
              <li>
                <a href='/'>Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <p className="p-1">Socials</p>
            <div className="socials">
              <a href="/">
                <img src={telegram} alt="logo" />
              </a>
              <a href="/">
                <img src={x} alt="logo" />
              </a>
            </div>
          </div>
        </footer>

        <div className="copyright">
          <p>Copyright © 2024 DePin. All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
