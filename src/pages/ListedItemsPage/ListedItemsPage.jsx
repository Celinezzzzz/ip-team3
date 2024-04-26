import './ListedItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import listedItemsImage from '../../assets/images/listed-items.jpg';
import { Navbar } from '../../components/Navbar/Navbar';

function ListedItemsPage() {
  return (
    <div className="listeditems-page">
      <Navbar />
      <StaticImage image={listedItemsImage} />
    </div>
  );
}

export default ListedItemsPage;
