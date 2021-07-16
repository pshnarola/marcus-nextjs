import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Styles from "./searchBar.module.css";
import { TradeMarkBrand } from "../../constant/brandList";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_DATA } from "../../store/actions/search/actionTypes";
import SearchIcon from "../../images/search-icon.svg";
// import SearchIcon from "../../images/search-icon.svg";

interface Istate {
  activeSuggestion: number;
  filteredSuggestions?: Array<string>;
  showSuggestions: boolean;
  userInput: string;
  flag?: boolean;
}

interface Ireducer {
  searchbarWidth: any;
}

const SearchBar = () => {
  const router = useRouter();
  const [state, setState] = useState<Istate>({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
    flag: false,
  });

  const searchbarWidth = useSelector(
    (state: Ireducer) => state.searchbarWidth.searchbarWidth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (state.flag === true) onSearchHandler();
  }, [state.flag]);

  const onChangeHandler = (e) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = TradeMarkBrand.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
    dispatch({
      type: SEARCH_DATA,
      payload: state.userInput,
    });
  };

  const onSearchHandler = () => {
    if (router.pathname === "/") {
      router.push("/trademarklist");
      dispatch({
        type: SEARCH_DATA,
        payload: state.userInput,
      });
    } else {
      dispatch({
        type: SEARCH_DATA,
        payload: state.userInput,
      });
    }
  };

  const onKeyDownHandler = (e) => {
    const { activeSuggestion, filteredSuggestions = [] } = state;
    // User pressed the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        flag: true,
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

  const onClickHandler = (e) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
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
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={state.userInput}
      />

      <button
        onClick={searchHandler}
        className={`${Styles[`banner-search-btn`]}`}
      >
        <Image src={SearchIcon} width="20" height="20" loading="lazy" />
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
                  key={suggestion}
                  {...(className ? { className: `${Styles[className]}` } : {})}
                  onClick={onClickHandler}
                >
                  {suggestion}
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
