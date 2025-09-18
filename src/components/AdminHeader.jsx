"use client";

import * as React from "react";
import { FiDownload, FiCalendar } from "react-icons/fi";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const AdminHeader = () => {
  const [date, setDate] = React.useState(new Date(2025, 8, 13));

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white w-full gap-4">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-sm md:text-lg text-gray-400">
          Welcome back, Dr. Johnson! Here's what's happening today.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
        {/* Calendar Button with Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center justify-center border border-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition w-full sm:w-auto">
              <FiCalendar className="w-4 h-4 mr-2" />
              {date
                ? date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Pick a date"}
            </button>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-900 border border-neutral-700 rounded-lg p-2 shadow-lg">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
              className="rounded-md"
            />
          </PopoverContent>
        </Popover>

        {/* Export Button */}
        <button className="flex items-center justify-center border border-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition w-full sm:w-auto">
          <FiDownload className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
