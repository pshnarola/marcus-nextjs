import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrademarkListPage from "../../component/trademarklist/TradeMarkListPage";
import { API_URL } from "../../constant/apiurl";

interface Ireducer {
  search: any;
  searchData: string;
  tradelistData: any;
}

const testApi =  async () => {
  const response = await fetch(`${API_URL}/trademark?mark_identification=`)

    const data = await response.json();
    
    return data;
}

const TrademarkList = ({allSuggetion}) => {

  const searchedData = useSelector(
    (state: Ireducer) => state.search.searchData
  );

  const trademarklistData = useSelector(
    (state: Ireducer) => state.search.tradelistData
  );


  return (
    <div>
      <TrademarkListPage trademarks={trademarklistData} allSuggetion={allSuggetion} />
    </div>
  );
};



export const getStaticProps = async () => {
  const events = await testApi();
  return {
      props: {
          allSuggetion: events
      },
      revalidate: 60
  }
}



export default TrademarkList;
