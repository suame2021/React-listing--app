import TopBar from "./componenet/topbar/topbar";
import CreateListing from "./pages/create-listing/CreateListing";

import Home from "./pages/Home/Home";
import Detail from "./pages/listingdetail/Detail";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Detail/> */}
      <CreateListing/>
    </div>
  );
}

export default App;
