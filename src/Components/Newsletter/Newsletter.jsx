import { useState } from "react";
import "./Newsletter.css";
import { imagesByYear, pdfsByYear, months } from "./NewsletterData";

const NewsLetter = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <div className="newsletter-container">
      <aside className="newsletter-sidebar">
        <h2>Newsletter</h2>
        <div className="newsletter-year-buttons">
          {Object.keys(imagesByYear).map((year) => (
            <button
              key={year}
              className={`newsletter-year-btn ${
                selectedYear === parseInt(year) ? "active" : ""
              }`}
              onClick={() => setSelectedYear(parseInt(year))}
            >
              {year}
            </button>
          ))}
        </div>
      </aside>

      <div className="calendar-container">
        {months.map((month, index) => {
          const imageSrc = imagesByYear[selectedYear]?.[month];
          const pdfSrc = pdfsByYear[selectedYear]?.[month];
          if (!imageSrc || !pdfSrc) return null; // Only show if both image and PDF exist

          return (
            <a
              key={index}
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-card"
            >
              <img src={imageSrc} alt={`${month} ${selectedYear}`} />
              <div className="calendar-card-content">
                <h2>{`${month} ${selectedYear}`}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NewsLetter;
