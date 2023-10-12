import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage.jsx";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./components/UserContext";
import axios from "axios";
import StartupPage from "./pages/StartupPage";
import AddProject from "./pages/AddProject";
import ProjectsPage from "./pages/ProjectsPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/startup/myideas" element={<ProjectsPage />} />
          <Route path="/startup/myideas/new" element={<AddProject />} />
          <Route path="/startup/myideas/:id" element={<AddProject />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
