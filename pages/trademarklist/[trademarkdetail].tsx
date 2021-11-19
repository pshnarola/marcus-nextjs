import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TrademarkDetailPage from "../../component/trademarklist/TradeMarkDetailPage";


const testApi =  async () => {
  const response = await fetch(`http://192.168.100.39:3001/trademark?mark_identification=`)

    const data = await response.json();
    
    return data;
}


const TrademarkDetail = ({eventDetails, allSuggetion}) => {
  const router = useRouter();

  const [details, useDetails] = useState({})

  return (
    <div>
      <TrademarkDetailPage tradeDetails={eventDetails.result} allSuggetion={allSuggetion} />
    </div>
  );
};




export const getStaticPaths = async () => {
  // const events = await getAllEvents();
  const events = await testApi();

  const paths = events.response.map((event) => ({ params: { trademarkdetail: event._source.serial_number } }))

  return {
      paths: paths,
      // fallback: false,
      fallback: true
  }
}

export const getStaticProps = async (context) => {
  const response = await fetch(`http://192.168.100.39:3001/trademark/${context.params.trademarkdetail}`)

  const eventDetails = await response.json();

  const response1 = await fetch(`http://192.168.100.39:3001/trademark?mark_identification=`)

  const allSuggetion = await response1.json();
  
  return {
      props: {
        eventDetails,
        allSuggetion
      },
      revalidate: 10
  }
}


export default TrademarkDetail;
