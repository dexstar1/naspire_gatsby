import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { FaPhone, FaEnvelope } from "react-icons/fa"
// import Logo from "../logo.png"
// import Loader from "../loader.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import CheeseburgerMenu from "cheeseburger-menu"
// import HamburgerMenu from "react-hamburger-menu"
// import { AppContext } from "./AppContext"

function Sidebar() {
  //   const { sidebarOpened, closeSidebar, openSidebar, toggle } = useContext(
  //     AppContext
  //   )
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     menuOpen: false,
  //   };
  // }

  // openMenu() {
  //   this.setState({ menuOpen: true });
  // }

  // closeMenu() {
  //   this.setState({ menuOpen: false });
  // }

  // console.log(sidebarOpened);

  return (
    <div className="sidebar">
      <div>
        <li>
          <Link to="/Home">
            <div className="logo">{/* <img src={Logo} alt="" /> */}</div>
          </Link>
        </li>
        <li>
          <Link to="/Insights">
            <div className="nav-items main">Insights</div>
          </Link>
        </li>
        <li>
          <Link to="/marketResearch">
            <div className="nav-items main">MarketResearch</div>
          </Link>
        </li>
        <li>
          <Link to="/Consulting">
            <div className="nav-items main">Consulting</div>
          </Link>
        </li>
        <li>
          <Link to="/Subscriptions">
            <div className="nav-items main">Subscriptions</div>
          </Link>
        </li>
        <li>
          <Link to="/Resources">
            <div className="nav-items main">Resources</div>
          </Link>
        </li>
        <li>
          <Link to="/Opportunities">
            <div className="nav-items main">Opportunities</div>
          </Link>
        </li>
        <li className="more-btn">
          <div
            className="nav-items main"
            // isOpen={sidebarOpened}
            // menuClicked={toggle}
            // width={32}
            // height={24}
            // strokeWidth={3}
            // rotate={0}
            // color="black"
            // borderRadius={0}
            // animationDuration={0.5}
          >
            {/* <HamburgerMenu
              isOpen={sidebarOpened}
              menuClicked={toggle}
              width={100}
              height={24}
              strokeWidth={3}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            /> */}
          </div>
        </li>
        {/* <CheeseburgerMenu isOpen={sidebarOpened} closeCallback={closeSidebar}>
          <SlideContent 
          closeCallback={closeSidebar}
           />

          <HamburgerMenu
            isOpen={sidebarOpened}
            menuClicked={toggle}
            width={100}
            height={24}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
            className="close"
          />
        </CheeseburgerMenu> */}

        <hr></hr>
        <li>
          <Link to="/Privacy">
            <div className="nav-items foot">Privacy</div>
          </Link>
        </li>
        <li>
          <Link to="/Terms">
            <div className="nav-items foot">Terms</div>
          </Link>
        </li>
        <li>
          <Link to="/Faq">
            <div className="nav-items foot">FAQ</div>
          </Link>
        </li>

        <hr></hr>
        <li className="social-contact">
          <div className="svg-n-text">
            <div className="svg">
              <FaPhone />
            </div>
            <div className="social-contact-text">Call Us - +2348055364357</div>
          </div>

          <div className="svg-n-text">
            <div className="svg">
              <FaEnvelope />
            </div>
            <div className="social-contact-text">
              Mail Us - vimbai@naspire.com
            </div>
          </div>
        </li>
        <li className="social-foot">
          <a
            href="https://facebook.com/naspireofficial"
            className="social-side"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: "0px" }} />
          </a>
          <a
            href="https://instagram.com/naspireofficial"
            className="social-side"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com/naspireofficial"
            className="social-side"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/naspireofficial" className="social-side">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <hr></hr>
        <h6 className="copyright">
          Copyright &copy;, Naspire, Sam Brooks Limited, 2020
        </h6>
      </div>
    </div>
  )
}

export default Sidebar

// function SlideContent() {
//   return (
//     <div className="sidebar-drawer">
//       <div className="grid1">
//         <li>
//           <Link to="/Home">
//             <div className="logo">{/* <img src={Logo} alt="" /> */}</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/Insights">
//             <div className="nav-items main">Insights</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/marketResearch">
//             <div className="nav-items main">MarketResearch</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/Consulting">
//             <div className="nav-items main">Consulting</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/Subscriptions">
//             <div className="nav-items main">Subscriptions</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/Resources">
//             <div className="nav-items main">Resources</div>
//           </Link>
//         </li>
//         <li>
//           <Link to="/Opportunities">
//             <div className="nav-items main">Opportunities</div>
//           </Link>
//         </li>
//       </div>

//       <div className="grid2">
//         <h3 className="drawer-title">Services</h3>
//         <li>
//           <a href="https://social.naspire.com/business-training-consulting/">
//             <div className="nav-items main">Trainings</div>
//           </a>
//         </li>
//         <li>
//           <a href="https://social.naspire.com/cv-editing/">
//             <div className="nav-items main">CV Editing</div>
//           </a>
//         </li>
//         <li>
//           <a href="https://social.naspire.com/interview-coaching/">
//             <div className="nav-items main">Interview Coaching</div>
//           </a>
//         </li>
//       </div>

//       <div className="grid3">
//         <h3 className="drawer-title">Company</h3>
//         <li>
//           <a href="https://social.naspire.com/about/">
//             <div className="nav-items main">About Naspire</div>
//           </a>
//         </li>
//         <li>
//           <a href="https://social.naspire.com/contribute-naspire-com/">
//             <div className="nav-items main">Content Contribution</div>
//           </a>
//         </li>
//         <li>
//           <a href="https://social.naspire.com/advertise-on-naspire/">
//             <div className="nav-items main">Advertise</div>
//           </a>
//         </li>
//       </div>

//       <div className="grid4">
//         <h3 className="drawer-title">Legal</h3>
//         <li>
//           <a href="https://social.naspire.com/terms-of-service/">
//             <div className="nav-items main">Terms of Service</div>
//           </a>
//         </li>
//         <li>
//           <a href="https://social.naspire.com/privacy-policy/">
//             <div className="nav-items main">Privacy Policy</div>
//           </a>
//         </li>
//         <li>
//           <Link to="/Faq">
//             <div className="nav-items main">Faq</div>
//           </Link>
//         </li>
//       </div>
//     </div>
//   )
// }
