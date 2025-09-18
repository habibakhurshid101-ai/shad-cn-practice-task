import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import AdminHeader from "../../components/AdminHeader"
import AdminCards from "../../components/AdminCards"
import Chart from "../../components/Chart"
// import Overview from "../../components/Overview"
// import Analytics from "../../components/Analytics"
// import Report from "../../components/Report"
// import Notification from "../../components/Notification"

const Admin = () => {
  return (
    <div className="h-screen w-full">
      <AdminHeader />
      <AdminCards />

     
      <Chart>
        {/* <Routes>
          <Route path="/" element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="report" element={<Report />} />
          <Route path="notifications" element={<Notification />} />
        </Routes> */}
      </Chart>
    </div>
  )
}

export default Admin
