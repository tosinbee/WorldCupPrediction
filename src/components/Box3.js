import React from "react";
import "./Boxes.css";

function Box3() {
  return (
    <div>
      <div className="box3-container">
        <div className="first-group">
          <p className="box-para1">Group A - Match 1</p>
          <div className="stats">
            <div className="stats-icon">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3667 15.7857H16.4667V3.64286C16.4667 3.48186 16.3999 3.32736 16.2812 3.21352C16.1624 3.09968 16.0013 3.03571 15.8333 3.03571H13.3C13.1321 3.03571 12.9709 3.09968 12.8521 3.21352C12.7334 3.32736 12.6667 3.48186 12.6667 3.64286V15.7857H11.4V0.607143C11.4 0.446142 11.3333 0.291644 11.2145 0.177806C11.0958 0.0639686 10.9346 0 10.7667 0H8.23333C8.06539 0 7.90422 0.0639686 7.78547 0.177806C7.66673 0.291644 7.6 0.446142 7.6 0.607143V15.7857H6.33333V6.67857C6.33333 6.51757 6.2666 6.36307 6.14785 6.24923C6.02911 6.1354 5.86794 6.07143 5.7 6.07143H3.16666C2.99871 6.07143 2.83755 6.1354 2.7188 6.24923C2.60005 6.36307 2.53333 6.51757 2.53333 6.67857V15.7857H0.633325C0.406993 15.7857 0.197917 15.9015 0.0848215 16.0893C-0.0282738 16.2771 -0.0282738 16.5086 0.0848215 16.6964C0.197917 16.8843 0.407 17 0.633325 17H18.3667C18.593 17 18.8021 16.8843 18.9152 16.6964C19.0283 16.5086 19.0283 16.2771 18.9152 16.0893C18.8021 15.9015 18.593 15.7857 18.3667 15.7857Z"
                  fill="#7A2367"
                />
              </svg>
            </div>
            <p className="box-para1">Stats</p>
            <div className="event">
              <div className="event-logo">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.12278 0C4.09836 0 0 4.09816 0 9.12278C0 14.1474 4.09816 18.2456 9.12278 18.2456C14.1474 18.2456 18.2456 14.1474 18.2456 9.12278C18.2456 4.09816 14.1474 0 9.12278 0ZM13.6981 10.6382C13.642 10.7786 13.5016 10.8908 13.3613 10.8908C13.3332 10.8908 13.2771 10.8908 13.249 10.8628L8.75785 9.40316V2.18911C8.75785 1.99262 8.92627 1.8242 9.12275 1.8242C9.31924 1.8242 9.48766 1.99262 9.48766 2.18911V8.84177L13.4735 10.161C13.67 10.2171 13.7542 10.4417 13.6981 10.6382V10.6382Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <p className="box-para2">Event</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="country-container">
          <div className="brazil-container">
            <div className="brazil-icon">
              <img
                src="https://res.cloudinary.com/mookie-admin/image/upload/v1670237352/World%20Cup/USA-Flag-PNG-File_1_zmc8f3.png"
                alt=""
              />
              <p className="usa">USA</p>
            </div>
          </div>

          <div className="score-container">
            <div className="score-group1">
              <button className="score-button1">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670226321/World%20Cup/Icon_je7hqx.png"
                  alt=""
                />
              </button>
              <p className="score-para">0</p>
              <button className="score-button2">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670226321/World%20Cup/Icon_je7hqx.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <p className="versus">v</p>

          <div className="score-container">
            <div className="score-group1">
              <button className="score-button1">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670226321/World%20Cup/Icon_je7hqx.png"
                  alt=""
                />
              </button>
              <p className="score-para">0</p>
              <button className="score-button2">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670226321/World%20Cup/Icon_je7hqx.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="country-container">
            <div className="brazil-container">
              <div className="brazil-icon">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670237375/World%20Cup/flag-round-250_1_1_d5nc9e.png"
                  alt=""
                />
                <p className="belgium">Belgium</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr className="hr-tag" />

        <div className="first-group">
          <img
            src="https://res.cloudinary.com/mookie-admin/image/upload/v1670230541/World%20Cup/Vector_3_qbrbt0.svg"
            alt=""
            className="calendar"
          />
          <p className="date">
            Nov 20, 2022
            <span>19:00</span>
          </p>

          <div className="cup">
            <div className="cup-logo">
              <img
                src="https://res.cloudinary.com/mookie-admin/image/upload/v1670230533/World%20Cup/WC_logo_1_1_mj3cfv.png"
                alt=""
              />
            </div>
            <div className="stadium">
              <div className="stadium-icon">
                <img
                  src="https://res.cloudinary.com/mookie-admin/image/upload/v1670230595/World%20Cup/Vector_3_wqjhtt.png"
                  alt=""
                />
              </div>
              <p>Al Fawaz Stadium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box3;
