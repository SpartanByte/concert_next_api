"use client"; 
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  name: string;
  date: string;
  venue: string;
  city_state: string;
  imageUrl?: string; // Optional, in case your API provides an image URL
};


export default function EventsTable() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

    if (loading) return <div>Loading...</div>;

return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.venue}</td>
            <td>{event.city_state}</td>
            <td>
              <Link href={`/events/${event.id}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}