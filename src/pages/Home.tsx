import React from "react";
import Calendar from "react-calendar";
import Hero from "src/components/Hero";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Home() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <Hero
        title="Bienvenido a nuestra casa"
        subtitle="Velkommen! Her kan du reservere huset vårt i San Pedro del Sol"
      />
      <div className="calendar-container">
        <main className="calendar-content">
          <Calendar
            onChange={onChange}
            locale="no"
            showWeekNumbers
            value={value}
          />
        </main>
      </div>
      <div className="gallery-container">
        <h2>Galleri</h2>
        <div className="gallery">
          <figure>
            <img src="https://picsum.photos/id/17/680/380" alt="" />
          </figure>
          <figure>
            <img src="https://picsum.photos/id/19/680/380" alt="" />
          </figure>
          <figure>
            <img src="https://picsum.photos/id/25/680/380" alt="" />
          </figure>
          <figure>
            <img src="https://picsum.photos/id/111/680/380" alt="" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Home;
