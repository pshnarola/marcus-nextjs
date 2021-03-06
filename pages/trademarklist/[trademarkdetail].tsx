import { useRouter } from "next/router";
import React from "react";
import TrademarkDetailPage from "../../component/trademarklist/TradeMarkDetailPage";


const testApi =  async () => {
  const response = await fetch(`http://54.148.29.225:3000/trademark?mark_identification=`)

    const data = await response.json();
    
    return data;
}


const TrademarkDetail = ({eventDetails, allSuggetion}) => {

  return (
    <div>
      <TrademarkDetailPage tradeDetails={eventDetails} allSuggetion={allSuggetion} />
    </div>
  );
};




export const getStaticPaths = async () => {
  // const events = await getAllEvents();
  const events = await testApi();

  const paths = events.response.map((event) => ({ params: { trademarkdetail: event._source.serial_number } }))

  return {
      paths: paths,
      // fallback: true,
      fallback: false,
      // fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const response = await fetch(`http://54.148.29.225:3000/trademark/${context.params.trademarkdetail}`)

  const eventDetails = await response.json();

  const response1 = await fetch(`http://54.148.29.225:3000/trademark?mark_identification=`)

  const allSuggetion = await response1.json();

  return {
      props: {
        eventDetails: eventDetails.result,
        allSuggetion
      },
      revalidate: 10
  }
}


export default TrademarkDetail;
