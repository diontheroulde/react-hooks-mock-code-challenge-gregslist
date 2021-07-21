import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  },[])

  const handleDeleteListing = (id) => {
    const filteredListing= listings.filter(listing => listing.id !== id)
    setListings(filteredListing)
  }

  const searchListings = listings.filter(listing =>(
    listing.description.toLowerCase().includes(search.toLowerCase())
  ))
  
  return (
    <div className="app">
      <Header setSearch={setSearch} search={search} />
      <ListingsContainer listings={searchListings} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
