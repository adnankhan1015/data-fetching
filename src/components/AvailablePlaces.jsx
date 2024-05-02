import { useEffect, useState } from "react";
import Places from "./Places.jsx";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // * Fetch then returns a promise, which is a JS value that eventually resolve to another value. So basically a wrapper object around a value that is not there yet, but that will eventually be there

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        // Now this JSON methods returns anothers promise
        // console.log(">>>", response.json());
        return response.json();
      })
      .then((resData) => {
        console.log("resData>>>", resData);
        setAvailablePlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
