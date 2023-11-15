// TODO: fix margins / padding
const AboutUs = () => {
    return (
        <div className="p-0 my-0 w-full min-h-full h-screen min-w-full">
            <div className="h-1/3 bg-teal-200 text-center px-4 md:px-20 flex flex-col justify-center">
                <h1 className="font-bold text-3xl">Lorem ipsum</h1>
                <br />
                <p className="italic text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem rerum quisquam architecto dolor et quaerat in quia voluptates distinctio labore unde, recusandae repellendus porro sint sed quis corrupti reiciendis.</p>
            </div>
            <div className="h-1/3 bg-teal-400 grid grid-cols-2">
                <div className="col-span-1 text-center px-4 md:px-20 flex flex-col justify-center">
                    <h1 className="font-bold text-3xl">Lorem ipsum</h1>
                    <p className="italic text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam repellendus reprehenderit non architecto ullam aspernatur sunt sapiente voluptatum vel? Saepe tempora corporis exercitationem dolor. Commodi repellendus eos non accusantium.</p>
                </div>
                <div className="col-span-1 text-center px-4 md:px-20 flex flex-col justify-center">
                    <h1 className="font-bold text-3xl">Lorem ipsum</h1>
                    <p className="italic text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos saepe eius, sed nemo perspiciatis laudantium nesciunt asperiores quas autem voluptate provident vero sequi architecto dicta fuga iure similique omnis quisquam?</p>
                </div>
            </div>
            <div className="h-1/3 bg-teal-600 text-center px-4 md:px-20 flex flex-col justify-center">
                <h1 className="font-bold text-3xl">Lorem ipsum</h1>
                <p className="italic text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem rerum quisquam architecto dolor et quaerat in quia voluptates distinctio labore unde, recusandae repellendus porro sint sed quis corrupti reiciendis.</p>
            </div>
        </div>
    );
}

export default AboutUs;