import React, { useEffect, useState } from "react";
import "./BirthDay.css";
import data from "./Data";
import List from "./List";

const Birthdays = () => {
  const [people, setPeople] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPeopleFunc = async () => {
      const readDataPeople = await readData();
      if (readDataPeople.length) {
        setPeople(readDataPeople);
        setLoading(false);
      }
    };
    getPeopleFunc();
  }, []);

  const readData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 100);
    });
  };

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h3>{people.length} Birthdays Today</h3>
            <List people={people} />
            <button onClick={clearAll}>Clear All</button>
          </>
        )}
      </section>
    </main>
  );
};

export default Birthdays;
