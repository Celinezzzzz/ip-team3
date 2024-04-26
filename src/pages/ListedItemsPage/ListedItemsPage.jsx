import './ListedItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import listedItemsImage  from '../../assets/images/listed-items.jpg';

function ListedItemsPage() {
    return (
            <div className="listeditems-page">
                <StaticImage image={listedItemsImage}/>
            </div>
    );
}

export default ListedItemsPage;