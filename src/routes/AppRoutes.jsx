import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CreateComplaint from "../pages/CreateComplaint";
import ComplaintList from "../pages/ComplaintList";
import ComplaintDetails from "../pages/ComplaintDetails";
import Users from "../pages/Users";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateComplaint />} />
          <Route path="/complaints" element={<ComplaintList />} />
          <Route path="/complaints/:id" element={<ComplaintDetails />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
