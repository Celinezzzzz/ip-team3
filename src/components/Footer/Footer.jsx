import "./Footer.scss";
import FooterImage from "../../assets/images/footer.PNG";

function Footer() {
  return (
    <div className="site-footer">
      <img className="site-footer__image" src={FooterImage} alt="footer" />;
    </div>
  );
}

export default Footer;
