import React from "react";

// A component for a single recent activity item
const RecentActivityItem = ({ initials, name, action, time }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
    <div className="flex items-center space-x-4">
      {/* Avatar with initials */}
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
        {initials}
      </div>
      {/* Activity description */}
      <div>
        <p className="text-sm">
          <span className="font-semibold">{name}</span> {action}
        </p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
    {/* View button */}
    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
      View
    </button>
  </div>
);

// The main component for the Recent Report Activity section
const RecentReportActivity = () => {
  // Sample data for the activity log
  const activities = [
    {
      initials: "J",
      name: "Dr. Johnson",
      action: "generated Monthly Revenue Summary",
      time: "2 hours ago",
    },
    {
      initials: "S",
      name: "Admin Sarah",
      action: "viewed Staff Performance Metrics",
      time: "Yesterday, 4:30 PM",
    },
    {
      initials: "R",
      name: "Dr. Rodriguez",
      action: "generated Patient Demographics",
      time: "Yesterday, 2:15 PM",
    },
    {
      initials: "K",
      name: "Nurse Kim",
      action: "viewed Inventory Status",
      time: "2 days ago",
    },
    {
      initials: "C",
      name: "Dr. Chen",
      action: "generated Treatment Outcomes",
      time: "3 days ago",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 font-sans min-h-screen">
      {" "}
      {/* min-h-screen added for better visual in isolation */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
        {" "}
        {/* max-w-3xl and mx-auto added for centering and width control */}
        <h2 className="text-lg font-semibold text-gray-200 mb-2">
          Recent Report Activity
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Reports generated or viewed recently
        </p>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <RecentActivityItem
              key={index} // It's good practice to use a unique key, especially when mapping
              initials={activity.initials}
              name={activity.name}
              action={activity.action}
              time={activity.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReportActivity;
