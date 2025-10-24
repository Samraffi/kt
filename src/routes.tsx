import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Internship from "./pages/Internship/Internship";
import MainPage from "./pages/MainPage/MainPage";
import PracticumPage from "./pages/PracticumPage/PracticumPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/internship" element={<Internship />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ssh" element={<PracticumPage />} />
      </Route>
    </Routes>
  );
};
