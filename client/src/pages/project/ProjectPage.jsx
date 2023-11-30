import { useNavigate } from "react-router-dom";

import DonateImg from "/src/images/cover-img.jpg";
import UpdateItem from "/src/components/UpdateItem";
import DonatorItem from "/src/components/DonatorItem";

const Donate = () => {
  // function calls are here (API calls, thanh toán backend qua QR hoặc api Momo gì đấy)
  const borderClass = "mx-auto border-2 border-gray-200 rounded-3xl p-6 space-y-2";
  
  // TODO: fetch DB
  const currentFund = 20000000;
  const goalFund = 200000000;
  
  function calculatePercentage() {
    const percentFund = (currentFund < 0 ? 0.0 : (currentFund > goalFund ? 1.0 : currentFund / goalFund)) * 100;
    const percentString = percentFund.toString() + "%";
    return {"width": percentString};
  }
  
  const displayCurrentFund = Math.round(currentFund).toLocaleString();
  const displayGoalFund = Math.round(goalFund).toLocaleString();
  
  const navigate = useNavigate();

  // TODO: wire to API
  function todoClick(event) {
    event.preventDefault();
    navigate("/todo");
  }

  return (
    <div className="mb-10 pb-10 w-full mx-auto rounded-xl">
      <div className="absolute w-full py-5 mb-5 px-10 xl:px-20 bg-palette2 flex flex-row items-center content-center xl:justify-between">
        <h1 className="text-xl text-left text-white font-semibold w-1/2 xl:w-2/3">Dự án ABC</h1>
        <div className="w-1/2 xl:w-1/3 flex flex-row gap-2 xl:gap-5">
          <button className="inline-block w-full xl:w-1/2 h-10 px-4 text-lg rounded-full bg-palette3 shadow-lg text-white hover:text-palette5 transition-colors" onClick={todoClick}>Đóng góp</button>
          <button className="inline-block w-full xl:w-1/2 h-10 px-4 text-lg rounded-full bg-palette1 shadow-lg text-white hover:text-palette5 transition-colors" onClick={todoClick}>Chia sẻ</button>
        </div>
      </div>
      <div className="pt-24 xl:grid xl:grid-cols-2 flex flex-col-reverse gap-5 place-content-center px-20">
        <img src={DonateImg} className="object-cover max-h-96 xl:h-full xl:max-h-full rounded-3xl" />
        {/* <div
            className="bg-cover bg-no-repeat bg-center rounded-3xl"
            style={{
                backgroundImage: `url(${DonateImg})`,
            }}
        ></div> */}
        <div>
          <div className={borderClass}>
            <div className="flex flex-row items-center gap-5">
              <svg className="h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#22577a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" fill="#22577a"></circle> <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="#22577a"></path> </g></svg>
              <div>
                <h4 className="font-bold text-palette1 text-3xl">XXX</h4>
                <p>Người quyên góp</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <svg className="h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#22577a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15" stroke="#22577a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 7V17" stroke="#22577a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22577a" strokeWidth="2"></path> </g></svg>
              <div>
                <h4 className="font-bold text-palette1 text-3xl">{displayCurrentFund} VNĐ</h4>
                <p>Số tiền quyên góp</p>
              </div>
            </div>
            <div id="progress-bar" className="h-4 w-full bg-palette1 rounded-full flex flex-row">
              <div id="current-progress" style={calculatePercentage()} className="h-full bg-palette3 rounded-full"></div>
            </div>
            <p><span className="font-bold">Mục tiêu:</span> {displayGoalFund} VNĐ</p>
            <p><span className="font-bold">Kết thúc:</span> 01/01/2024</p>
          </div>
          <br />
          <div className={borderClass}>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, libero non sagittis luctus, nisl diam rhoncus sapien, id condimentum lorem orci et erat. Integer euismod odio a nisl dignissim, a scelerisque lacus lacinia. Suspendisse eu nisl rutrum, venenatis urna vel, mollis neque. Suspendisse nec tincidunt lacus. Mauris ultricies eleifend ullamcorper. Nulla fermentum turpis ac tellus semper gravida. Morbi aliquam condimentum hendrerit. Phasellus maximus interdum libero, sed accumsan sem sodales nec. Mauris nisi leo, fermentum nec dui in, tincidunt dapibus massa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque tenetur blanditiis reiciendis, tempore laudantium maiores beatae aliquid repellat corporis accusamus totam. Ad rem omnis molestiae, sequi earum quidem consequatur.
              {/* <br className="hidden sm:block" /> */}
            </p>
            {/* <DonationForm /> */}
          </div>
        </div>
      </div>
      <br />
      <div className="mx-20 border-2 flex flex-col lg:flex-row border-gray-200 rounded-3xl">
        <div className="lg:w-2/3 py-4 px-10">
          <h1 className="font-bold text-3xl">Cập nhật mới nhất</h1>
          <div className=" my-2 border-t-2 border-teal-300 w-1/3" />
          <UpdateItem>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quos corrupti ut ratione tempora impedit? Totam incidunt cum deleniti recusandae at minima temporibus pariatur saepe voluptatibus. Sapiente molestias esse dolores.
          </UpdateItem>
          <UpdateItem>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quos corrupti ut ratione tempora impedit? Totam incidunt cum deleniti recusandae at minima temporibus pariatur saepe voluptatibus. Sapiente molestias esse dolores.
          </UpdateItem>
          <UpdateItem>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quos corrupti ut ratione tempora impedit? Totam incidunt cum deleniti recusandae at minima temporibus pariatur saepe voluptatibus. Sapiente molestias esse dolores.
          </UpdateItem>
        </div>
        <div className="lg:w-1/3 py-4 px-10 bg-palette2 rounded-t-none rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none text-white">
          <h1 className="font-bold text-2xl">Danh sách người đóng góp</h1>
          <br />
          <ol className="list-decimal">
            <li><DonatorItem /></li>
            <li><DonatorItem /></li>
            <li><DonatorItem /></li>
            <li><DonatorItem /></li>
            <li><DonatorItem /></li>
          </ol>
        </div>
      </div>
      <br />
      <div className="mx-20 border-2 border-gray-200 rounded-3xl px-10 py-4">
        <h1 className="font-bold text-3xl">Thảo luận</h1>
      </div>
    </div>
  )
}

export default Donate;