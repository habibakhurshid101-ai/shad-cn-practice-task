import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { data } from "@/constant";
import { genderData } from "@/constant";
import { revenueData } from "@/constant";
import { appointmentData } from "@/constant";
import { financialReports } from "@/constant";
import { urgentNotifications } from "@/constant";
import { patientReports } from "@/constant";
import { operationalReports } from "@/constant";
import { todayNotifications } from "@/constant";
import { earlierNotifications } from "@/constant";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6"];

// --- ReportSection Component ---
const ReportSection = ({ title, reports }) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-700">
      <h3 className="text-xl font-semibold mb-4">{title} Reports</h3>
      <ul className="space-y-3">
        {reports.map((report, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-black rounded-lg border border-neutral-700"
          >
            <div>
              <p className="font-medium">{report.name}</p>
              <p className="text-sm text-gray-400">Updated: {report.updated}</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Chart Component ---
const Chart = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Analytics", "Reports", "Notifications"];

  return (
    <div className="min-h-screen mt-10 text-white">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-t-md text-sm font-medium w-full sm:w-auto ${
              activeTab === tab
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="rounded-xl">
        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-black rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold mb-2">Overview</h2>
              <p className="text-sm text-gray-400 mb-6">
                Patient visits and revenue for the current period.
              </p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#3b82f6" />
                    <Bar dataKey="patients" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-700 p-6">
              <h2 className="text-xl font-bold mb-2">Recent Appointments</h2>
              <p className="text-sm text-gray-400 mb-6">
                You have 12 appointments today.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "John Smith",
                    role: "Check-up",
                    time: "10:00 AM",
                    status: "Confirmed",
                    color: "border-blue-500 text-blue-400",
                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                  },
                  {
                    name: "Emily Davis",
                    role: "Consultation",
                    time: "11:30 AM",
                    status: "In Progress",
                    color: "border-yellow-500 text-yellow-400",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                  },
                  {
                    name: "Robert Wilson",
                    role: "Follow-up",
                    time: "09:15 AM",
                    status: "Completed",
                    color: "border-green-500 text-green-400",
                    img: "https://randomuser.me/api/portraits/men/55.jpg",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-neutral-400">{item.role}</p>
                        <p className="text-xs text-neutral-500">
                          Today • {item.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full border ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full text-center text-white hover:underline">
                View all appointments
              </button>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "Analytics" && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Notification Settings</h3>
            <p className="text-base text-gray-400 mb-6">
              Manage how you receive notifications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Patient Demographics */}
              <Card>
                <CardHeader>
                  <CardTitle>Patient Demographics</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={genderData}>
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Male" fill="#3B82F6" />
                      <Bar dataKey="Female" fill="#F472B6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Appointment Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Types</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={appointmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {appointmentData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Revenue Sources */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Sources</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={revenueData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                    >
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="department" />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Patient Satisfaction */}
              <Card className="col-span-1 xl:col-span-2">
                <CardHeader>
                  <CardTitle>Patient Satisfaction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Overall Experience", value: 87 },
                    { label: "Wait Times", value: 72 },
                    { label: "Staff Friendliness", value: 94 },
                    { label: "Treatment Effectiveness", value: 89 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <Progress value={item.value} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Staff Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Staff Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Dr. Sarah Chen",
                      role: "Cardiologist",
                      rating: 4.9,
                      patients: 42,
                    },
                    {
                      name: "Dr. Michael Rodriguez",
                      role: "Pediatrician",
                      rating: 4.8,
                      patients: 38,
                    },
                    {
                      name: "Dr. Emily Johnson",
                      role: "Neurologist",
                      rating: 4.7,
                      patients: 35,
                    },
                    {
                      name: "Nurse Robert Kim",
                      role: "Head Nurse",
                      rating: 4.9,
                      patients: 56,
                    },
                  ].map((staff) => (
                    <div
                      key={staff.name}
                      className="border-b pb-2 last:border-b-0 last:pb-0"
                    >
                      <div className="font-medium">{staff.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {staff.role}
                      </div>
                      <div className="text-sm mt-1">
                        Patients: {staff.patients} | ⭐ Rating: {staff.rating}/5
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "Reports" && (
          <div className=" text-white  font-sans min-h-screen rounded-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
              <h2 className="text-2xl font-semibold">Available Reports</h2>
              <Button className="flex items-center gap-2 bg-white hover:bg-neutral-400">
                <FaPlus />
                Generate New Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ReportSection title="Financial" reports={financialReports} />
              <ReportSection title="Patient" reports={patientReports} />
              <ReportSection title="Operational" reports={operationalReports} />
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "Notifications" && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Notification Settings</h3>
            <p className="text-base text-gray-400 mb-6">
              Manage how you receive notifications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Urgent",
                  data: urgentNotifications,
                  color: "bg-blue-600",
                },
                {
                  title: "Today",
                  data: todayNotifications,
                  color: "bg-gray-700",
                },
                {
                  title: "Earlier",
                  data: earlierNotifications,
                  color: "bg-gray-700",
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className=" p-6 rounded-xl border border-neutral-700"
                >
                  <h3 className="text-xl font-semibold mb-4 flex justify-between items-center">
                    {section.title}
                    <span
                      className={`${section.color} text-white text-xs font-bold px-2 py-1 rounded-full`}
                    >
                      {section.data.length}
                    </span>
                  </h3>
                  <div className="space-y-4">
                    {section.data.map((notif, idx) => (
                      <div
                        key={idx}
                        className=" p-4 rounded-lg border border-neutral-700"
                      >
                        <p className="font-semibold text-sm">{notif.text}</p>
                        <p className="text-gray-400 text-xs mt-1">
                          {notif.details}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className=" p-6 rounded-xl border ">
              <h3 className="text-2xl font-bold mb-2">Notification Settings</h3>
              <p className="text-sm text-gray-400 mb-6">
                Manage how you receive notifications
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-200">
                    Notification Categories
                  </h4>
                  {[
                    "Appointments",
                    "Patient Updates",
                    "Staff Alerts",
                    "Inventory Alerts",
                  ].map((cat) => (
                    <div key={cat} className="p-3 rounded-lg">
                      <p className="font-semibold">{cat}</p>
                      <p className="text-xs text-gray-400">
                        {cat === "Appointments" &&
                          "New, cancelled, and rescheduled appointments"}
                        {cat === "Patient Updates" &&
                          "New registrations and patient status changes"}
                        {cat === "Staff Alerts" &&
                          "Schedule changes and staff announcements"}
                        {cat === "Inventory Alerts" &&
                          "Low stock and reorder notifications"}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-200">Delivery Methods</h4>
                  {[
                    "In-app Notifications",
                    "Email Notifications",
                    "SMS Notifications",
                    "Push Notifications",
                  ].map((method) => (
                    <div
                      key={method}
                      className="flex items-center justify-between p-3  rounded-lg"
                    >
                      <div>
                        <p className="font-semibold">{method}</p>
                        <p className="text-xs text-gray-400">
                          {method === "In-app Notifications" &&
                            "Receive notifications within the dashboard"}
                          {method === "Email Notifications" &&
                            "Receive notifications via email"}
                          {method === "SMS Notifications" &&
                            "Receive notifications via text message"}
                          {method === "Push Notifications" &&
                            "Receive notifications on your mobile device"}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div
                          className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-white 
                  after:absolute after:top-[2px] after:start-[2px] after:bg-white 
                  after:rounded-full after:h-5 after:w-5 after:transition-all 
                  peer-checked:after:translate-x-full peer-checked:after:bg-black"
                        ></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
