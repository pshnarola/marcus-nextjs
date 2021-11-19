import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrademarkListPage from "../../component/trademarklist/TradeMarkListPage";

interface Ireducer {
  search: any;
  searchData: string;
  tradelistData: any;
}

const TrademarkList = () => {

  const [trademarks, setTrademarks] = useState<Array<string>>([]);
  const searchedData = useSelector(
    (state: Ireducer) => state.search.searchData
  );

  const trademarklistData = useSelector(
    (state: Ireducer) => state.search.tradelistData
  );

  console.log("trademarklistData.....", trademarklistData)

  useEffect(() => { 
    console.log("searchedData",searchedData)
    // axios.get(`http://192.168.100.39:3001/trademark?mark_identification=${searchedData}`)
    // .then(res => setTrademarks(res.data.response)).catch(err => console.log("err",err))
  }, [searchedData])

  return (
    <div>
      <TrademarkListPage trademarks={trademarklistData} />
    </div>
  );
};

export default TrademarkList;
