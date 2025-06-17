"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";

// Define your Event type/interface
interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  // Add other properties if they exist in your event object
}

function EventList() {
  const [events, setEvents] = useState<Event[]>([]); // Initialize with an empty array of Event objects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Assuming your API returns { events: Event[] }
        // If your API returns just Event[], then use `const data: Event[] = await response.json();`
        const data: { events: Event[] } = await response.json(); // <-- Type assertion for the API response structure

        console.log('Fetched Data:', data);

        // Correctly set the state with the 'events' array from the response object
        if (data && Array.isArray(data.events)) {
          setEvents(data.events); // <-- HERE IS THE FIX: Access data.events
        } else {
          console.warn("API response does not contain an 'events' array as expected:", data);
          setEvents([]);
        }

      } catch (err: any) { // Use 'any' for catch error for simpler typing or define a specific error type
        console.error("Error fetching events:", err);
        setError(err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (events.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div>
      <h1>Upcoming Events</h1>
       <table className="min-w-[200%] mx-auto text-sm mt-5 text-black">
      <thead>
        <tr className="bg-cyan-600 border-2">
          <th className="p-1">Artist Name</th>
          <th className="p-1">Event Date</th>
          <th className="p-1">Venue</th>
          <th className="p-1">Location</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} className="even:bg-stone-300 odd:bg-white">
            <td className="border-2 p-2 text-auto">{event.name}</td>
            <td className="border-2 p-2 text-auto">{event.date}</td>
            <td className="border-2 p-2 text-auto">{event.venue}</td>
            <td className="border-2 p-2 text-auto">{event.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default EventList;