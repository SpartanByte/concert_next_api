"use client"; // This must be at the very top

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  name: string;
  date: string;
  venue: string;
  city_state: string;
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
    <table className="mx-auto text-sm mt-5 text-black">
      <thead>
        <tr className="bg-cyan-600 border-2">
          <th className="p-1">Image</th>
          <th className="p-1">Name</th>
          <th className="p-1">Date</th>
          <th className="p-1">Details</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} className="even:bg-stone-300 odd:bg-white">
            <td className="border-2 p-2 text-auto">{event.name}</td>
            <td className="border-2 p-2 text-auto">{event.date}</td>
            <td className="border-2 p-2 text-auto">{event.venue}</td>
            <td className="border-2 p-2 text-auto">{event.city_state}</td>
            <td>
              <Link href={`/events/${event.id}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}