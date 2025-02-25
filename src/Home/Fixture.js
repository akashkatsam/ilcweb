import React, { useEffect, useState, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import stump from "../stump.svg";

export default function Fixture() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch fixture data from API
    const fetchFixtures = async () => {
      try {
        const response = await fetch(
          "https://ilc-dev.katsammedia.com/api/resource/ILC%20Fixture?fields=[%22*%22]"
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.data) {
          // Sort fixtures by date
          const sortedFixtures = data.data.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          setFixtures(sortedFixtures);
        }
      } catch (error) {
        console.error("Error fetching fixtures:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  const formatDateTime = (date, time) => {
    if (!date || !time) return "N/A"; // Handle missing values

    // Convert time to 12-hour format
    const [hour, minute] = time.split(":");
    let hours = parseInt(hour, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for AM times
    const formattedTime = `${hours}:${minute} ${ampm}`;

    // Convert date to short day format (e.g., Mon, Tue, Wed)
    const dayShort = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return `${dayShort}, ${formattedTime}`;
  };

  const goToPrev = () => carouselRef.current?.prev();
  const goToNext = () => carouselRef.current?.next();

  const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3.2 },
    },
  };

  return (
    <section id="fixture">
      <div className="titleweb">
        <h2>
          <img src={stump} className="img-fluid stump" alt="stump" />
          <span>Fixture</span>
        </h2>
        <div className="nav-buttons">
          <button className="owl-prev-btn" onClick={goToPrev}>
            <FaArrowLeftLong />
          </button>
          <button className="owl-next-btn" onClick={goToNext}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <p>Loading fixtures...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : fixtures.length > 0 ? (
          <OwlCarousel ref={carouselRef} {...options} className="owl-theme">
            {fixtures.map((match, index) => (
              <div key={match.id || index} className="item fixturecard">
                <div className="titlefixture">
                  <h4>Greater Noida Cricket Stadium</h4>
                  <h4>Match</h4>
                </div>
                <div className="centerfixturecard">
                  <div className="row">
                    {/* Team A */}
                    <div className="col-md-4 col-4">
                      <div className="leftfixture">
                        <img
                          src={`https://ilc-dev.katsammedia.com/${match.team_a_logo}`}
                          className="img-fluid"
                          alt={match.team_a_name || "Team A"}
                          onError={(e) => (e.target.src = "/fallback-team.png")}
                        />
                        <div className="score">
                        <h5>XX</h5>
                        </div>
                      </div>
                    </div>

                    {/* Match Center */}
                    <div className="col-md-4 col-4 align-self-start p-0">
                      <div className="match">
                        <button>Match Centre</button>
                      </div>
                      <h4 className="vs">VS</h4>
                    </div>

                    {/* Team B */}
                    <div className="col-md-4 col-4">
                      <div className="leftfixture">
                        <img
                          src={`https://ilc-dev.katsammedia.com/${match.team_b_logo}`}
                          className="img-fluid"
                          alt={match.team_b_name || "Team B"}
                          onError={(e) => (e.target.src = "/fallback-team.png")}
                        />
                        <div className="score">
                          <h5>XX</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Match Date and Time */}
                <div className="footerfixture">
                  <div className="row">
                    <div className="col-md-7 col-7">
                      <p className="leftpara">
                        Time: XX
                         {/* {formatDateTime(match.date, match.time)} */}
                      </p>
                    </div>
                    <div className="col-md-5 col-5">
                      <p className="rightpara">
                        {/* {new Date(match.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })} */}
                        Date : XX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <p>No fixtures available.</p>
        )}
      </div>
    </section>
  );
}
