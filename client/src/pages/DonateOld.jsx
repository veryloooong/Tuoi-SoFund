import DonationForm from "../components/DonationForm";
import DonateImg from "../images/cover-img.jpg";
const DonateOld = () => {
  return (
    <div className="mt-10 pb-16 grid grid-cols-1 xl:grid-cols-2 gap-5 place-content-center px-4 md:px-20">
      <div
        className="bg-cover bg-no-repeat bg-center rounded-lg hidden xl:block"
        style={{
          backgroundImage: `url(${DonateImg})`,
        }}
      ></div>
      <div className="text-center mx-auto max-w-screen-sm">
        <h1 className="text-4xl font-extrabold mb-8 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">Dự án ABC</h1>
        <p className="mb-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, libero non sagittis luctus, nisl diam rhoncus sapien, id condimentum lorem orci et erat. Integer euismod odio a nisl dignissim, a scelerisque lacus lacinia. Suspendisse eu nisl rutrum, venenatis urna vel, mollis neque. Suspendisse nec tincidunt lacus. Mauris ultricies eleifend ullamcorper. Nulla fermentum turpis ac tellus semper gravida. Morbi aliquam condimentum hendrerit. Phasellus maximus interdum libero, sed accumsan sem sodales nec. Mauris nisi leo, fermentum nec dui in, tincidunt dapibus massa. Sed a ligula eget eros tempus sagittis eu in felis. Nullam in leo in libero rutrum dictum condimentum et dolor. Proin non aliquam sem, ac feugiat nulla. Nam imperdiet, turpis a sodales efficitur, urna eros dignissim leo, et pulvinar arcu mauris eu leo.
          {/* <br className="hidden sm:block" /> */}
        </p>
        <DonationForm />
      </div>
    </div>
  );
};

export default DonateOld;
