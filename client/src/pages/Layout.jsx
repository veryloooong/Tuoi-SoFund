import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // pt-24
    <div className="pt-24">
      <Header />
      {/* max-w-screen-xl mt-10 px-4 pb-16 md:px-20 */}
      <main className="mx-auto min-h-screen text-base whitespace-normal break-words">
        <Outlet />
        {/* <div>afd</div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
