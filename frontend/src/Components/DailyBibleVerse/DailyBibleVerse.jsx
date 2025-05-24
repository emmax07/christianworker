import { useState, useEffect } from "react";
import "./DailyBibleVerse.css";

const DailyBibleVerse = () => {
  const [verse, setVerse] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    fetch("https://beta.ourmanna.com/api/v1/get/?format=json") // Free API
      .then((response) => response.json())
      .then((data) => {
        setVerse(data.verse.details.text);
        setReference(data.verse.details.reference);
      })
      .catch((error) => console.error("Error fetching the verse:", error));
  }, []);

  return (
    <div className="daily-bible">
      <blockquote>
        {verse}
        <p>{reference}</p>
      </blockquote>
    </div>
  );
};

export default DailyBibleVerse;
