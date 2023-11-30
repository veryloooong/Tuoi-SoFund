import PropTypes from "prop-types";

const TextWrapper = ({ children }) => {
    return <p1 className="text-xl text-white font-semibold text-justify">{children}</p1>
}

TextWrapper.propTypes = {
    children: PropTypes.string,
};

const HeadingWrapper = ({ children }) => {
    return <h1 className="font-bold text-3xl text-palette5">{children}</h1>
}

HeadingWrapper.propTypes = {
    children: PropTypes.string,
};

const AboutUs = () => {
    return (
        <div className="p-0 my-0 w-full min-w-full">
            <div className="min-h-[20rem] bg-palette2 text-center px-4 md:px-10 flex flex-col justify-center">
                <HeadingWrapper>Lorem ipsum</HeadingWrapper>
                <br />
                <TextWrapper>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem rerum quisquam architecto dolor et quaerat in quia voluptates distinctio labore unde, recusandae repellendus porro sint sed quis corrupti reiciendis.</TextWrapper>
            </div>
            <div className="min-h-[20rem] bg-palette3 grid grid-cols-1 py-4 xl:grid-cols-2 gap-2">
                <div className="col-span-1 text-center xl:text-left px-4 md:px-10 flex flex-row justify-center items-center gap-5">
                    <svg className="hidden xl:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="#c7f9cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <div className="flex flex-col text-center xl:text-left">
                        <HeadingWrapper>Lorem ipsum</HeadingWrapper>
                        <TextWrapper>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam repellendus reprehenderit non architecto ullam aspernatur sunt sapiente voluptatum? Saepe tempora corporis exercitationem dolor. Commodi repellendus eos non accusantium.</TextWrapper>
                    </div>
                </div>
                <div className="col-span-1 text-center xl:text-left px-4 md:px-10 flex flex-row justify-center items-center gap-5">
                    <svg className="hidden xl:block" fill="#c7f9cc" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c7f9cc"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path> </g></svg>
                    <div className="flex flex-col text-center xl:text-left">
                        <HeadingWrapper>Lorem ipsum</HeadingWrapper>
                        <TextWrapper>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos saepe eius, sed nemo perspiciatis laudantium nesciunt asperiores quas autem voluptate provident vero sequi architecto dicta fuga iure similique omnis quisquam?</TextWrapper>
                    </div>
                </div>
            </div>
            <div className="min-h-[20rem] bg-palette1 text-center px-4 md:px-10 flex flex-col justify-center">
                <HeadingWrapper>Lorem ipsum</HeadingWrapper>
                <br />
                <TextWrapper>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem rerum quisquam architecto dolor et quaerat in quia voluptates distinctio labore unde, recusandae repellendus porro sint sed quis corrupti reiciendis.</TextWrapper>
            </div>
        </div>
    );
}

export default AboutUs;