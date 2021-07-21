import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  },[])

  const handleDeleteListing = (id) => {
    const filteredListing= listings.filter(listing => listing.id !== id)
    setListings(filteredListing)
  }

  

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
