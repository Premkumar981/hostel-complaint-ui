import api from "./axios";

// get dashboard stats
export const getStats = () => api.get("/complaints/stats");

// get all complaints
export const getAllComplaints = () => api.get("/complaints");

// get complaint by id
export const getComplaintById = (id) => api.get(`/complaints/${id}`);

// create complaint
export const createComplaint = (formData) =>
  api.post("/complaints", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });

// update status
export const updateComplaintStatus = (id, status) =>
  api.put(`/complaints/${id}/status`, { status });
