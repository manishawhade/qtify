import Banner from "./Banner";
import Header from "./Header";
import Home from "./Home";

const Landing = () => {
  return (
    <>
      <Header />
      <div>
        <Banner />
        {/* <CardCollection /> */}
        <Home />
      </div>
    </>
  );
};
export default Landing;
