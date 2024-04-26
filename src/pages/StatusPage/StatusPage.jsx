import './StatusPage.scss';
import Status from '../../components/Status/Status';
import { useEffect } from 'react';

function StatusPage() {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'Status Scale Page';
    }, []);
  };
  PageTitle();
  return (
    <>
      <div className="status-page">
        <Status sellerRating={85} buyerRating={30} />
      </div>
    </>
  );
}

export default StatusPage;
