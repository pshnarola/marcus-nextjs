import React, { useEffect, useState,useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Styles from "./searchBar.module.css";
import { TradeMarkBrand } from "../../constant/brandList";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_DATA, TRADE_LIST_DATA } from "../../store/actions/search/actionTypes";
import axios from "axios";
import debounce from 'lodash/debounce';

interface Istate {
  activeSuggestion: number;
  filteredSuggestions?: Array<any>;
  showSuggestions: boolean;
  userInput: string;
  flag?: boolean;
  selectTrad: string;
}

interface Ireducer {
  search: any;
  searchbarWidth: any;
  tradelistData: any; 
  searchData: string;
}

const SearchBar = ({allSuggetion}) => {
  const router = useRouter();
  const [trademarksugg, setTrademarksugg] = useState("");
  const [state, setState] = useState<Istate>({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: null,
    flag: false,
    selectTrad: "",
  });

  const timeout = useRef()

  const searchbarWidth = useSelector(
    (state: Ireducer) => state.searchbarWidth.searchbarWidth
  );

  // const searchedData = useSelector(
  //   (state: Ireducer) => state.search.searchData
  // );

  const trademarklistData = useSelector(
    (state: Ireducer) => state.search.tradelistData
  );

  const dispatch = useDispatch();

  const sendQuery = (userInput) => {
    axios.get(`http://54.148.29.225:3000/trademark?mark_identification=${userInput}`)
    .then(res => 
    // setTrademarksugg(res.data.response)
    dispatch({
      type: TRADE_LIST_DATA,
      payload: res.data.response
    })
    ).catch(err => console.log("err",err)) 
  };

  useEffect(() => {
    if (state.flag === true) onSearchHandler();
  }, [state.flag]);


const onChangeHandler = debounce((val)=>{
  setTrademarksugg(val)
  const userInput = val ;

  sendQuery(userInput)  // temp

  const trad = trademarklistData.filter(function (sugg) {
  // const trad = allSuggetion.response.filter(function (sugg) {
    if(sugg._source.mark_identification.toLowerCase().indexOf(userInput.toLowerCase()) > -1){
      return sugg;
    }
});


  const filteredSuggestions = trad.map(
      (suggestion) => 
      {
        // return suggestion._source.mark_identification
        return suggestion._source
      }
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput,
      selectTrad: "",
    });
  dispatch({
    type: SEARCH_DATA,
    payload: userInput,
  });
},500) 

// const onChangeHandler2 = (val)=>{
//   setTrademarksugg(val)
//   const userInput = val;
// // console.log("allSuggetion",allSuggetion);
// sendQuery(val) 

//   const trad = allSuggetion?.response?.filter(function (sugg) {
//     if(sugg._source.mark_identification.toLowerCase().indexOf(userInput.toLowerCase()) > -1){
//       return sugg;
//     }
// });


//   const filteredSuggestions = trad.map(
//       (suggestion) => 
//       {
//         return suggestion._source.mark_identification
//       }
//     );
//     // console.log({filteredSuggestions});
    

//   setState({
//     activeSuggestion: 0,
//     filteredSuggestions,
//     showSuggestions: true,
//     userInput,
//     selectTrad: "",
//   });
//   dispatch({
//     type: SEARCH_DATA,
//     payload: userInput,
//   });
// }


  const onSearchHandler = () => {
    if (router.pathname === "/") {
      if(state.userInput == "" || state.userInput == null){
        sendQuery("")
      }
      router.push("/trademarklist");
      dispatch({
        type: SEARCH_DATA,
        payload: state.userInput,
      });
      // setState({
      //   activeSuggestion: 0,
      //   filteredSuggestions: [],
      //   showSuggestions: false,
      //   userInput: "",
      //   selectTrad: ""
      // });
    } else {
      dispatch({
        type: SEARCH_DATA,
        payload: state.userInput,
      });
      // setState({
      //   activeSuggestion: 0,
      //   filteredSuggestions: [],
      //   showSuggestions: false,
      //   userInput: "",
      //   selectTrad: ""
      // });
    }
  };

  const onKeyDownHandler = (e) => {
    const { activeSuggestion, filteredSuggestions = [] } = state;
    // User pressed the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
       if(state.userInput == "" || state.userInput == null){
      sendQuery("")
    }
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        flag: true,
        selectTrad: ""
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setState({
        ...state,
        activeSuggestion: activeSuggestion - 1,
      });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      setState({
        ...state,
        activeSuggestion: activeSuggestion + 1,
      });
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
    }
  };

  const onClickHandler = (e, serial_number) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
      selectTrad: e.currentTarget.innerText,
    });
    router.push(`/trademarklist/${serial_number}`);
    if (state.activeSuggestion > 0) onSearchHandler();
  };

  const searchHandler = () => {
    onSearchHandler();
  };

  return (
    <div
      className={` ${
        searchbarWidth
          ? Styles[`new-banner-search-control`]
          : Styles[`banner-search-control`]
      } position-relative d-flex flex-wrap pb-4 mb-2`}
    >
      <input
      type="text"
      className={`${Styles[`search-input-box`]}`}
      placeholder="Search Brands, Companies, Goods or Services..."
      onChange={(e)=> onChangeHandler(e.target.value) }   
      onKeyDown={onKeyDownHandler}
      value={state.selectTrad ? state.selectTrad : state.userInput}
    />


      <button
        onClick={searchHandler}
        className={`${Styles[`banner-search-btn`]}`}
      >
        <img src="/search-icon.svg" width="20" height="20" />
      </button>
      {state.showSuggestions && state.userInput ? (
        state.filteredSuggestions.length ? (
          <ul className={`${Styles[`suggestions`]}`}>
            {state.filteredSuggestions.map((suggestion, index) => {

              let className;
              if (index === state.activeSuggestion) {
                className = "suggestion-active";
              } else {
                className = "";
              }
              return (
                <li
                  key={suggestion.mark_identification}
                  {...(className ? { className: `${Styles[className]}` } : {})}
                  onClick={(e) => onClickHandler(e,suggestion.serial_number)}
                >
                  {suggestion.mark_identification}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={`${Styles[`no-suggestions`]}`}>
            <em>No suggestions available.</em>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
