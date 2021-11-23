import MainHeader from "../component/layout/MainHeader";
import BannerSection from "../component/layout/BannerSection";
import AboutSection from "../component/home/AboutSection";
import Footer from "../component/layout/Footer";
import {API_URL} from "../constant/apiurl";

const testApi =  async () => {

  const response = await fetch(`${API_URL}/trademark?mark_identification=`)

    const data = await response.json();
    
    return data;
}

function HomePage({allSuggetion}) {
  return (
    <>
      <MainHeader />
      <BannerSection allSuggetion={allSuggetion}/>
      <AboutSection />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const events = await testApi();
  return {
      props: {
          allSuggetion: events
      },
      revalidate: 60
  
  } 
}

export default HomePage;
