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
    { id: 1, name: "Alice Cooper", date: "01/01/2016", venue: "Scheels Arena", location: "Fargo, ND"},
    { id: 2, name: "Weird Al Yankovic", date: "01/01/2005", venue: "Chester Fritz", location: "Grand Forks, ND"},
    { id: 3, name: "Gary Numan", date: "01/01/2023", venue: "First Avenue", location: "Minneapolis, MN"},
    { id: 4, name: "The Cure", date: "01/02/2023", venue: "Xcel Energy Center", location: "St. Paul, MN"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
  res.status(200).json({ events });
}