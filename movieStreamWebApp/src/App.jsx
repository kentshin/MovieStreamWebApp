import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { fetchDataFromAPI } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getAPIConfiguration, getGenres } from './store/homeSlice';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import SearchResults from './pages/searchResults/SearchResults';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/page404/PageNotFound';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state)=> state.home);

  useEffect(() => {
    fetchApiConfig();
    fetchGenres();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromAPI("/configuration").then((res) => {
      //console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

      dispatch(getAPIConfiguration(url));
    });
  };

  const fetchGenres = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres));

  }

  return (<BrowserRouter>
  {<Header />}
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/:mediaType/:id" element = {<Details />} />
      <Route path = "/search/:query" element = {<SearchResults />} />
      <Route path = "/explore/:mediaType" element = {<Explore />} />
      <Route path = "*" element = {<PageNotFound />} />
    </Routes>
  <Footer />
  </BrowserRouter>)
      
}

export default App;
