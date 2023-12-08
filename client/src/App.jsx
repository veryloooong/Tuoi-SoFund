import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./pages/Layout";
import Home from "./pages/static/Home";
import ProjectPage from "./pages/project/ProjectPage";
import News from "./pages/News";
import Pages from "./pages/md/Pages";
import Error404 from "./pages/static/Error404";
import Payment from "./pages/Payment";
import AddProject from "./pages/project/AddProject";
import Todo from "./pages/static/Todo";
import AboutUs from "./pages/static/AboutUs";
import Projects from "./pages/project/Projects";
import Courses from "./pages/course/Courses";
import Login from "./pages/login/Login";
import SocialPage from "./social/SocialPage";
import RankingPage from "./social/RankingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/credits" element={<Pages mdpath="./md/credits.md" />} />
          <Route path="/terms" element={<Pages mdpath="./md/terms.md" />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate/:projectId" element={<ProjectPage />} />
          <Route path="/payment/:status" element={<Payment />} />
          <Route path="/community" element={<SocialPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
