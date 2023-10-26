import React, { useState } from "react";
import "./styles/dashBoard.css";
import img1 from "../assets/undraw_all_the_data_re_hh4w.svg";
import workerSvg from "../assets/undraw_working_remotely_re_6b3a.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarProp from "../components/Calender";
import {
  faBell,
  faHouse,
  faFileContract,
  faNewspaper,
  faRectangleList,
  faUsers,
  faUserGear,
  faScrollTorah,
  faWallet,
  faMobileAlt,
  faGears,
  faContactCard,
  faAngleRight,
  faCloud,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

function DashBoardScreen() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    // Set the active button when a button is clicked
    setActiveButton(buttonId);
  };
  const buttonLinks = [
    { id: 1, btn: "dashboard", dropDown: false, fa: faHouse },
    { id: 2, btn: "Loan application", dropDown: true, fa: faFileContract },
    { id: 3, btn: "loan underwriting", dropDown: true, fa: faNewspaper },
    { id: 4, btn: "collection", dropDown: true, fa: faRectangleList },
    { id: 5, btn: "crm", dropDown: true, fa: faUsers },
    { id: 6, btn: "administration", dropDown: true, fa: faUserGear },
    {
      id: 7,
      btn: "debt management",
      dropDown: false,
      fa: faScrollTorah
    },
    { id: 8, btn: "bridge loan", dropDown: false, fa: faWallet },
    { id: 9, btn: "mobile app", dropDown: false, fa: faMobileAlt },
    { id: 10, btn: "general setup", dropDown: false, fa: faGears },
    { id: 11, btn: "report", dropDown: false, fa: faContactCard }
  ];

  const appCards = [
    {
      id: 1,
      name: "recovery",
      date: "2/3/2023",
      icon: faLayerGroup
    },
    {
      id: 2,
      name: "Single Sign-on",
      date: "4/3/2023",
      icon: faCloud
    }
  ];

  const dropDownDashBtn = buttonLinks.filter((x) => x.dropDown === true);
  const DashBtn = buttonLinks.filter((x) => x.dropDown !== true);
  const combinedDashBtns = dropDownDashBtn.concat(DashBtn);
  const dashboardButton = combinedDashBtns.find((x) => x.btn === "dashboard");

  if (dashboardButton) {
    // Find the index of the dashboard button in the combinedDashBtns array
    const index = combinedDashBtns.indexOf(dashboardButton);
    // Remove the dashboard button from its current position
    combinedDashBtns.splice(index, 1);
    // Add the dashboard button back to the beginning of the combinedDashBtns array
    combinedDashBtns.unshift(dashboardButton); // The "dashboard" button is now at the top
  } else {
    console.log("The 'dashboard' button was not found in combinedDashBtns.");
  }

  console.log(combinedDashBtns);
  return (
    <>
      <div className="dashBoardMainWrapper">
        <div className="dashBoardNavContainer">
          <div className="logoWrapper">
            <h3>ADROIT</h3>
          </div>
          <div className="dashLinks">
            {combinedDashBtns.map((x, index) => {
              return (
                <>
                  <div key={index}>
                    <button
                      onClick={() => handleButtonClick(index)}
                      className={
                        activeButton === index
                          ? "navButtons activebtn"
                          : "navButtons"
                      }>
                      <div className="buttonIcon">
                        <div className="dashFaIcons">
                          <FontAwesomeIcon icon={x.fa} className="dashIcons" />
                        </div>
                        <div className="dashBtnTag">
                          <h3>{x.btn}</h3>
                        </div>
                        {x.dropDown === true ? (
                          <div className="dashBtnDropDownIcon">
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className={
                                activeButton === index
                                  ? "dashArrowIcons angleRotate"
                                  : "dashArrowIcons"
                              }
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </button>
                    {activeButton === index && x.dropDown === true ? (
                      <div className="dropDownSubBtnsLink">
                        <a href="#">Lorem.</a>
                        <a href="#">Lorem.</a>
                        <a href="#">Lorem.</a>
                        <a href="#">Lorem.</a>
                        
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* DASH BOARD CONTENT CONTAINER */}

        <div className="dashBoardContainer">
          <div className="dashHeaderWrapper">
            <div className="dashHeader">
              <div className="notification">
                <div className="notificationIconWrapper">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="dashHeaderNotificationIcon"
                  />
                  <span className="spanNotification"></span>
                </div>
              </div>
              <div className="userDetails">
                <h3 className="userDetails-name"> Adekunle Adebona</h3>
                <p className="userEmail"> Adekunle.adebona@creditwaveng.com</p>
              </div>
              <div className="userProfileImage">
                <img
                  src="https://images.pexels.com/photos/18619106/pexels-photo-18619106/free-photo-of-portrait-of-african-woman-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Image of Adekunle adebona"
                />
              </div>
            </div>
          </div>
          <div className="dashContentWrapper">
            <div className="dashContent-1">
              <div className="welcomBoard-wrapper">
                <div className="welcomeBoard">
                  <div className="welcomeTextContainer">
                    <h3 className="welcomeText">Welcome back kenny!</h3>
                    <p>your last login was 12:00, jul, 2023</p>
                  </div>
                  <div className="welcomeSvg">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
              <div className="dashApplication">
                <div className="applicationBtnContainer">
                  <h1>Application</h1>
                  <h1>
                    <span>
                      <button>See More</button>
                    </span>
                  </h1>
                </div>
                <div className="applicationCards">
                  <>
                    {appCards.map((x, index) => {
                      return (
                        <div key={index} className="applicationCard">
                          <div className="cardIcon">
                            <FontAwesomeIcon
                              icon={x.icon}
                              className="dashIcons"
                            />
                          </div>
                          <div className="cardName">{x.name}</div>
                          <div className="cardDate">
                            {x.date}
                            <span>Active</span>
                          </div>
                        </div>
                      );
                    })}
                  </>
                </div>
              </div>
            </div>

            {/*DASH BOARD - PROFILE CALENDER HELPCENTER SECTION */}

            <div className="dashContent-2">
              <div className="userProfile">
                <div className="profileCard">
                  <img
                    src="https://images.pexels.com/photos/18619106/pexels-photo-18619106/free-photo-of-portrait-of-african-woman-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    className="imageCardWrapper"
                  />
                </div>
                <div className="userNameWrapper">
                  <h3>Adekunle Adebona</h3>
                  <p>UI/UX Designer</p>
                </div>
                <div className="userProfession">
                </div>
              </div>

              <div className="calender">
                <CalendarProp />
              </div>
              
              {/* HELP CENTER */}
              <div className="helpCenter">
                <div className="svgHelpIcon">
                  <img src={workerSvg} alt="" />
                </div>
                <h3>Need help?</h3>
                <p>Do you have any problem while using this creditwave ssd</p>
                <button className="contactUsbtn">Contact us now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardScreen;
