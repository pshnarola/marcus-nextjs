import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TrademarkDetailPage from "../../component/trademarklist/TradeMarkDetailPage";

const TrademarkDetail = () => {
  const router = useRouter();
  console.log("routerdetail page", router.query.trademarkdetail)
  const [details, useDetails] = useState({})
 
  useEffect(() => {
    axios.get(`http://192.168.100.39:3001/trademark/${router.query.trademarkdetail}`)
    .then(res => useDetails(res.data.result) ).catch(err => console.log("err",err))
  },[])

  return (
    <div>
      <TrademarkDetailPage tradeDetails={details}/>
    </div>
  );
};

export default TrademarkDetail;
