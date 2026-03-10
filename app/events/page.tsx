"use client"; 
import React, { useEffect, useState } from "react";
import Link from "next/link";
import EventsTable from "../../components/EventList";

type Event = {
  id: string;
  name: string;
  date: string;
  venue: string;
  city_state: string;
  imageUrl?: string; // Optional, in case your API provides an image URL
};


export default function EventsHome() {
  // events are pulled from the EventsTable component, so they don't need to be defined here. 
  const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
      });
  }, []);

    if (loading) return <div>Loading...</div>;

return (
  <div>
    <div>
      <EventsTable />
    </div>
       <p>I need to add more content here. Demo of using a component as a direct resource.</p>
    </div>
  );
}