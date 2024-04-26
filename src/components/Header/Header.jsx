import React from "react";
import "./Header.scss";
import image1 from '../../assets/images/user-image.png';
import image2 from '../../assets/icons/icons8-verified.svg';

const Header = () => {
  return (
    <>
      <section className="site-header">
        <div className="site-header__user-info">
          <div className="site-header__user-avtar">
            <img src={image1} alt="User-image" className="site-header__user-img" />
          </div>
          <div className="site-header__user-details">
            {/* div1 */}
            <div className="site-header__info">
              <div>
                <p className="site-header__username">Mrunali</p>
                <img src={image2} alt="" className="site-header__icon" />
              </div>
              <div>
                <button className="site-header__btn">FOLLOW</button>
              </div>
            </div>
            {/* div 2 */}
            <div className="site-header__visited">
              <p className="site-header__username">Last Visited 3 min ago</p>
            </div>
            <div className="site-header__users">
              <div>
                <button className="site-header__btn">Great Seller</button>
              </div>
              <div>
                <button className="site-header__btn">Great Buyer</button>
              </div>
            </div>
            <div className="site-header__users">
              <div>
                <p className="site-header__username">12 Following</p>
              </div>
              <div>
                <p className="site-header__username">62 Follower</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="seprator"/>
    </>
  );
};

export default Header;
