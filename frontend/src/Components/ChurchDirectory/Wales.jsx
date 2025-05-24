import { useState, useEffect } from "react";
import "./ChurchDirectory.css";
import Sidebar from "../Sidebar/Sidebar";
import WalesData from "./Churches.json";

function Wales() {
  const [churches, setChurches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  let searchTimeout;

  useEffect(() => {
    // Filter by region and sort alphabetically by church name
    const filteredByRegion = WalesData.filter(
      (church) => church.region === "Wales"
    ).sort((a, b) => a.church_name.localeCompare(b.church_name));

    setChurches(WalesData); // Keep full dataset for search
    setFilteredPlaces(filteredByRegion); // Only Wales, sorted A-Z
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const filtered = churches
        .filter(
          (church) =>
            (church.church_name.toLowerCase().includes(query) ||
              church.region.toLowerCase().includes(query)) &&
            church.region === "Wales"
        )
        .sort((a, b) => a.church_name.localeCompare(b.church_name));

      setFilteredPlaces(filtered);
    }, 300);
  };

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedPlace = filteredPlaces.find(
    (place) => place.church_id === selectedCard
  );

  return (
    <div className="main-container">
      <Sidebar />
      <div className="directory-container">
        <h1>Wales Church Directory</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a place"
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        {selectedCard ? (
          <div className="selected-card-container">
            <div className="card selected">
              <h2>{selectedPlace.church_name}</h2>
              <p>
                <strong>Region:</strong> {selectedPlace.region}
              </p>
              <p>
                <strong>Members:</strong> {selectedPlace.members}
              </p>
              <p>
                <strong>Meeting Place:</strong> {selectedPlace.meetingplace}
              </p>
              <p>
                <strong>Post Address:</strong> {selectedPlace.postaddress}
              </p>
              <p>
                <strong>Sunday Meetings:</strong> {selectedPlace.sundaymeetings}
              </p>
              <p>
                <strong>Midweek:</strong> {selectedPlace.midweek}
              </p>
              <p>
                <strong>Contacts:</strong> {selectedPlace.contacts}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                {selectedPlace.website ? (
                  <a
                    href={selectedPlace.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedPlace.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
              <button onClick={() => setSelectedCard(null)}>Back</button>
            </div>
          </div>
        ) : (
          <div className="cards-container">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place) => (
                <div
                  key={place.church_id}
                  className="card-church"
                  onClick={() => handleCardClick(place.church_id)}
                >
                  <h2>{place.church_name}</h2>
                  <p>
                    <strong>Region:</strong> {place.region}
                  </p>
                  <p>
                    <strong>Members:</strong> {place.members}
                  </p>
                  <p>
                    <strong>Meeting Place:</strong> {place.meetingplace}
                  </p>
                  <p>
                    <strong>Post Address:</strong> {place.postaddress}
                  </p>
                  <p>
                    <strong>Sunday Meetings:</strong> {place.sundaymeetings}
                  </p>
                  <p>
                    <strong>Midweek:</strong> {place.midweek}
                  </p>
                  <p>
                    <strong>Contacts:</strong> {place.contacts}
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    {place.website ? (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {place.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              ))
            ) : (
              <p>No places found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wales;
