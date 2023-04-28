import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect } from "react";
import { Div } from "../assets/styles/CalendarCSS";

export default function Calendary({ data }) {
  useEffect(() => {
    const button1 = document.querySelector(".fc-next-button");
    button1.style.display = "none";
    const button2 = document.querySelector(".fc-prev-button");
    button2.style.display = "none";
    const button3 = document.querySelector(".fc-today-button ");
    button3.style.display = "none";
  }, []);

  return (
    <Div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        displayEventTime={true}
        events={[{ title: "Doação", start: `${data}` }]}
        initialDate={`${data}`}
        eventBackgroundColor="#8b0000"
        height={500}
        locale={"pt-br"}
      />

      <span>Apartir desta data você poderá marcar sua doação.</span>
    </Div>
  );
}
