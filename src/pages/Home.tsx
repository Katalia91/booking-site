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
        title="Velkommen"
        subtitle="Her kan du reservere huset i San Pedro del Sol"
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
    </>
  );
}

export default Home;
