import React from "react";
import "./Header.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import image2 from "../../assets/icons/icons8-verified.svg";

const Header = () => {
  return (
    <>
      <section className="site-header">
        <div className="site-header__btn-wrapper">
          <button className="site-header__btn">FOLLOW</button>
        </div>
        <div className="site-header__user-info">
          <div className="site-header__user-avtar">
            <img
              src={userImage}
              alt="User-image"
              className="site-header__user-img"
            />
          </div>

          <div className="site-header__user-details">
            <div className="site-header__info">
              <span className="site-header__username">Mohan Muruge</span>
              <img
                src={image2}
                alt="verified icon"
                className="site-header__icon"
              />
            </div>
            <span className="site-header__last">
              Last visited 9 min ago | 5 yrs on Kijiji{" "}
            </span>

            <div className="site-header__status">
              <button className="site-header__sell-btn">Great Seller</button>
              <button className="site-header__buy-btn">Good Buyer</button>
            </div>
            <div className="site-header__following">
              <span className="site-header__username">12 Following</span>
              <span className="site-header__username">62 Follower</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
