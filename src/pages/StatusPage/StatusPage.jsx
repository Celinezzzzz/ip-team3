import './StatusPage.scss';
import Status from '../../components/Status/Status'; 


function StatusPage() {
    return (
            <div className="status-page">
                <Status sellerRating={85} buyerRating={30}/>
            </div>
    );
}

export default StatusPage;