import { FiDollarSign } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export const adminCard = [
  {
    icon: <FiDollarSign className="text-green-600" />,
    name:"Total Revenue",
    detail: {
      number:"+20.1%",
      text: "  from last month",
    },
    income: "$45,231.89",
  },
   {
    icon: <MdOutlineDateRange className="text-blue-600"/>,
    name:"Appointments",
    detail: {
      number:"+10.1%",
      text: "  from last month",
    },
    income: "+2,350",
  },
   {
    icon: <IoPersonOutline className="text-orange-400" />,
    name:"Patients",
    detail: {
      number:"+19%",
      text: "  from last month",
    },
    income: "+12,234",
  },
   {
    icon: <GoPeople className="text-purple-600" />,
    name:"Staff",
    detail: {
      number:"+4",
      text: "  from last month",
    },
    income: "+573",
  },
]
export const data = [
  { name: "Jan", total: 20, patients: 5 },
  { name: "Feb", total: 45, patients: 7 },
  { name: "Mar", total: 28, patients: 6 },
  { name: "Apr", total: 40, patients: 8 },
  { name: "May", total: 35, patients: 9 },
  { name: "Jun", total: 42, patients: 6 },
  { name: "Jul", total: 44, patients: 8 },
  { name: "Aug", total: 18, patients: 4 },
  { name: "Sep", total: 43, patients: 9 },
  { name: "Oct", total: 32, patients: 7 },
  { name: "Nov", total: 21, patients: 5 },
  { name: "Dec", total: 30, patients: 6 },
];
export const genderData = [
  { age: "0-17", Male: 120, Female: 140 },
  { age: "25-34", Male: 200, Female: 280 },
  { age: "35-54", Male: 160, Female: 180 },
  { age: "65+", Male: 100, Female: 120 },
];
export const revenueData = [
  { department: "Orthopedics", revenue: 13500 },
  { department: "Neurology", revenue: 11000 },
  { department: "Oncology", revenue: 9000 },
];
export const appointmentData = [
  { name: "Cardiology", value: 400 },
  { name: "Pediatrics", value: 300 },
  { name: "Neurology", value: 300 },
  { name: "Oncology", value: 200 },
  { name: "Orthopedics", value: 100 },
];
export const financialReports = [
  { name: "Monthly Revenue Summary", updated: "Today" },
  { name: "Quarterly Financial Analysis", updated: "Last week" },
  { name: "Insurance Claims Report", updated: "2 days ago" },
  { name: "Outstanding Payments", updated: "Yesterday" },
];
export const urgentNotifications = [
  {
    text: "Urgent: Low medication stock",
    details: "Amoxicillin stock is critically low. Please reorder immediately.",
    time: "10 minutes ago",
  },
  {
    text: "New appointment request",
    details: "Patient James Wilson requested an appointment.",
    time: "30 minutes ago",
  },
  {
    text: "New patient registration",
    details: "A new patient has registered.",
    time: "1 hour ago",
  },
  {
    text: "Staff schedule update",
    details: "A staff member has requested time off next week.",
    time: "2 hours ago",
  },
 
];


export const patientReports = [
  { name: "New Patient Registrations", updated: "Today" },
  { name: "Patient Demographics", updated: "3 days ago" },
  { name: "Visit Frequency Analysis", updated: "Last week" },
  { name: "Treatment Outcomes", updated: "Yesterday" },
];

export const operationalReports = [
  { name: "Staff Performance Metrics", updated: "Today" },
  { name: "Inventory Status", updated: "Today" },
  { name: "Room Utilization", updated: "2 days ago" },
  { name: "Wait Time Analysis", updated: "Last week" },
];


export const todayNotifications = [
  {
    text: "Appointment confirmed",
    details: "Dr. Chen confirmed appointment with patient Maria Garcia.",
    time: "4 hours ago",
  },
  {
    text: "Staff meeting reminder",
    details: "Weekly staff meeting today at 3:00 PM.",
    time: "5 hours ago",
  },
   {
    text: "Staff meeting reminder",
    details: "Weekly staff meeting today at 3:00 PM.",
    time: "5 hours ago",
  },
];

export const earlierNotifications = [
  {
    text: "Appointment cancelled",
    details: "Patient Thomas Brown cancelled his appointment.",
    time: "Yesterday",
  },
  {
    text: "Lab results ready",
    details: "Lab results for patient #34567 are now available.",
    time: "2 days ago",
  },
   {
    text: "Lab results ready",
    details: "Lab results for patient #34567 are now available.",
    time: "2 days ago",
  },
];
