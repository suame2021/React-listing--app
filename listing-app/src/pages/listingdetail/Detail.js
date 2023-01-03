 import './Detail.css'
 import Sidebar from '../../componenet/sidebar/Sidebar';
 import ListingDetail from '../../componenet/listing-detail/ListingDetail';



 function Detail () 
 {
    return (  
        <div className='detail-page'>


            <ListingDetail/>
            <Sidebar/>



        </div>
    );
}
 
export default Detail;