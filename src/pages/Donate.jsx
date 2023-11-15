import DonateImg from "../images/cover-img.jpg";
import UpdateItem from "../components/UpdateItem";
import DonatorItem from "../components/DonatorItem";

const Donate = () => {
    // function calls are here (API calls, thanh toán backend qua QR hoặc api Momo gì đấy)
    const borderClass = "mx-auto border-2 border-gray-200 rounded-3xl p-4";

    return (
        <div className="mb-10 pb-10 w-full mx-auto rounded-xl">
            <div className="absolute w-full py-5 mb-5 px-10 xl:px-20 bg-teal-600 flex flex-row items-center content-center xl:justify-between">
                <h1 className="text-xl text-left text-white font-semibold w-1/2 xl:w-2/3">Dự án ABC</h1>
                <div className="w-1/2 xl:w-1/3 flex flex-row gap-2 xl:gap-5">
                    <button className="inline-block w-full xl:w-1/2 h-10 px-4 text-lg rounded-full bg-teal-300 shadow-lg text-white">Đóng góp</button>
                    <button className="inline-block w-full xl:w-1/2 h-10 px-4 text-lg rounded-full bg-teal-700 shadow-lg text-white">Chia sẻ</button>
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
                        <h1>Ít thì 5 quả nhiều thì 1 tên lửa :(</h1>
                        <p><span className="font-bold">Mục tiêu:</span> ------ VND</p>
                        <p><span className="font-bold">Thời hạn còn lại:</span> ------ ngày</p>
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
                    <h1 className="font-bold text-3xl">Cập nhật gần đây</h1>
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
                <div className="lg:w-1/3 py-4 px-10 bg-teal-600 rounded-t-none rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none text-white">
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
        </div>
    )
}

export default Donate;