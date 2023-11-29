// Lúc lên sv thì chỗ này sẽ tự mở data từ JSON (content, date, thứ tự)
const UpdateItem = ({ children }) => {
    return (
        <div className="my-4">
            <div className="mb-2 flex flex-col lg:flex-row lg:justify-between">
                <h3 className="font-bold text-xl">#1234</h3>
                <h4 className="italic">30/02/2023</h4>
            </div>
            <p className="text-justify">{children}</p>
        </div>
    )

};

export default UpdateItem;