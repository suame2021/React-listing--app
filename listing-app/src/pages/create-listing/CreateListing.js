import './CreateListing.css';

function CreateListing ()  {
    return (
      <div className="create-listing">
        <form className="create-listing-form">
          <div className="create-listing-form-group">
            <input
              autoFocus={true}  type="text"   placeholder="Property Title" className="create-listing-text"/>
            <label htmlFor="listingimg" className="create-listing-img-upload">
              <i class="upload-icon fa-solid fa-upload"></i>
            </label>
            <input type="file" id="listingimg" style={{ display: "none" }} />
          </div>
          <div className="create-listing-form-group">
            <textarea
              className="create-listing-text create-listing-desc" placeholder="Listing Description"
            ></textarea>
          </div>
        </form>
        <button className="create-listiing-button">Submit</button>
      </div>
    );
}
 
export default CreateListing;