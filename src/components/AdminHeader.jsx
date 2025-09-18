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
    <div className="flex items-center justify-between text-white w-full ">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-sm md:text-lg text-gray-400">
          Welcome back, Dr. Johnson! Here's what's happening today.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-3">
        {/* Calendar Button with Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center border border-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition">
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
        <button className="flex items-center border border-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition">
          <FiDownload className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
