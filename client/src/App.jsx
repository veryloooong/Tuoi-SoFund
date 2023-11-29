import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import News from "./pages/News";
import Pages from "./pages/Pages";
import Error404 from "./pages/Error404";
import Payment from "./pages/Payment";
import AddProject from "./pages/AddProject";
import Todo from "./pages/Todo";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/credits" element={<Pages mdpath="./md/credits.md" />} />
          <Route path="/terms" element={<Pages mdpath="./md/terms.md" />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/payment/:status" element={<Payment />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
