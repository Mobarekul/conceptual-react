/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);
  // console.log(allActors);
  const handleSector = (actor) => {
    // setSelectedActors([...selectedActors, actor]);
    const ifExist = selectedActors.find((item) => item.id === actor.id);
    let Totalsalary = actor.salary;

    if (ifExist) {
      return alert("already added");
    } else {
      selectedActors.forEach((item) => (Totalsalary += item.salary));
      const totalRemaining = 20000 - Totalsalary;
      if (Totalsalary > 20000) {
        return alert("Pocket Faka");
      } else {
        setSelectedActors([...selectedActors, actor]);
        setTotalCost(Totalsalary);
        setRemaining(totalRemaining);
      }
      // console.log(totalRemaining);
    }
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <p>
                <small>jflj l llfa </small>
              </p>
              <div className="info">
                <p>Salary :{actor.salary}</p>
                <p>{actor.role}</p>
              </div>
              <button onClick={() => handleSector(actor)} className="btn">
                submit
              </button>
            </div>
          ))}
        </div>
        <div>
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
