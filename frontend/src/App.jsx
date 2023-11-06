import React from "react";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import "./App.css";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StartupPage from "./pages/StartupPage";
import RegisterPage from "./pages/RegisterPage";
import ProjectsPage from "./pages/ProjectsPage";
import AddProject from "./pages/AddProject";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignPage from "./pages/CampaignPage";
import CampaignDetails from "./pages/CampaignDetails";
import MyCampaign from "./pages/MyCampaign";
import ProjectDetails from "./pages/ProjectDetails";
import AllCompany from "./pages/AllCompany";
import GuidelinesPage from "./pages/GuidelinesPage";
axios.defaults.baseURL = "https://backendfundit.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/companies" element={<AllCompany />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaigns" element={<CampaignPage />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/startup/myideas" element={<ProjectsPage />} />
          <Route path="/startup/campaigns" element={<MyCampaign />} />
          <Route path="/startup/myideas/new" element={<AddProject />} />
          <Route path="/startup/myideas/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
