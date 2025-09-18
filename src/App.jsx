import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Admin from "./pages/dashboard/Admin";

const App = () => {
  return (
    <Routes>
       <Route index element={<Layout><Admin /></Layout>} />
      <Route path="/admin" element={<Layout><Admin /></Layout>} />
  
    </Routes>
  );
};

export default App;
