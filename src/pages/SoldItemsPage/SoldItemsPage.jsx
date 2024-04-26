import './SoldItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import soldItemsImage from '../../assets/images/sold-items.jpg';
import { Navbar } from '../../components/Navbar/Navbar';

function SoldItemsPage() {
  return (
    <>
      <Navbar />
      <div className="solditems-page">
        <StaticImage image={soldItemsImage} />
      </div>
    </>
  );
}

export default SoldItemsPage;
