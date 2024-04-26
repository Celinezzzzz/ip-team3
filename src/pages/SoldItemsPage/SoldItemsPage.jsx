import './SoldItemsPage.scss';
import StaticImage from '../../components/StaticImage/StaticImage';
import soldItemsImage from '../../assets/images/sold-items.jpg';


function SoldItemsPage() {
    return (
            <div className="solditems-page">
                <StaticImage image={soldItemsImage}/>
            </div>
    );
}

export default SoldItemsPage;