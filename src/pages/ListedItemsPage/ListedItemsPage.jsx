import './ListedItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import listedItemsImage from '../../assets/images/listed-items.jpg';
import { Navbar } from '../../components/Navbar/Navbar';
import { useEffect } from 'react';

function ListedItemsPage() {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'List Items Page';
    }, []);
  };
  PageTitle();
  return (
    <div className="listeditems-page">
      <Navbar />
      <StaticImage image={listedItemsImage} />
    </div>
  );
}

export default ListedItemsPage;
