import Header from "./component/Header";
import TopHeader from "./component/TopHeader";
import Banner from "./component/Banner";
import CenterBar from "./component/CenterBar";
import Profile from "./component/Profile";
import NewProducts from "./component/NewProducts";
import Programmes from "./component/Programmes";
import BannerCenter from "./component/BannerCenter";

function App() {
  return (
    <>
    <TopHeader/>
      <Header/>
      <Banner/>
      <CenterBar/>
      <Profile/>
      <NewProducts/> 
      <Programmes/> 
      <BannerCenter/>    
    </>
  );
}

export default App;
