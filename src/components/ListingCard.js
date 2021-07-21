import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {
  const {id, description, image, location} = listing
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite)
  }

  const handleTrash = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    onDeleteListing(id)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleTrash}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
