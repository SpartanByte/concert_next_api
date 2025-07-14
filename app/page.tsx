"use client"; // This must be at the very top

import Image from "next/image";
import Link from 'next/link';
import Date from '../components/date';
import EventsTable from "../components/EventList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link 
          href="/events/api"
          className="text-2xl">
          Events API
        </Link>
                <Link 
          href="/events/api"
          className="text-2xl">
          Home
        </Link>
        <EventsTable />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        { /* TODO: Add footer content: copyright, year, social links, etc */ }
      </footer>
    </div>
  );
}
