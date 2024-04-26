import './SoldItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import soldItemsImage from '../../assets/images/sold-items.jpg';
import { Navbar } from '../../components/Navbar/Navbar';
import { useEffect } from 'react';

function SoldItemsPage() {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'Sold Items Page';
    }, []);
  };
  PageTitle();
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
