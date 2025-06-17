import type { NextApiRequest, NextApiResponse } from 'next';

type Event = {
    id: number;
    name: string;
    date: string; // consider switching to DateTime
    venue: string;
    location: string; // includes both city and state for now TODO: possibly split into two properties
}

// use hardcoded events for use during development before database
const events: Event[] = [
    { id: 1, name: "Kenton Brown", date: "2025-08-18", venue: "Davis Inc Auditorium", location: "Antoinettestad, Louisiana"},
    { id: 2, name: "Brionna O'Keefe PhD", date: "2026-02-11", venue: "Lemke Auditorium", location: "Bryanafort, New Hampshire"},
    { id: 3, name: "Jamar Volkman", date: "2025-11-30", venue: "Botsford-Fay Auditorium", location: "East Cathrineshire, Alaska"},
    { id: 4, name: "Tyrese Mraz", date: "2025-09-24", venue: "Cassin-Smith Auditorium", location: "Myrlton, Washington"},
    { id: 5, name: "Korey Schneider V", date: "2026-03-28", venue: "Kilback-Jacobi Auditorium", location: "North Cheyanne, California"},
    { id: 6, name: "Dr. Harold Nicolas", date: "2025-07-10", venue: "Metz Group Auditorium", location: "Florineberg, Connecticut"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
  res.status(200).json({ events });
}