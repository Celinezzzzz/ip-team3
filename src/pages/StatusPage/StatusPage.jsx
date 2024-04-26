import './StatusPage.scss';
import Status from '../../components/Status/Status';
import { Navbar } from '../../components/Navbar/Navbar';

function StatusPage() {
  return (
    <>
      <Navbar />
      <div className="status-page">
        <Status sellerRating={85} buyerRating={30} />
      </div>
    </>
  );
}

export default StatusPage;
