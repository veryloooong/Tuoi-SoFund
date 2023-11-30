import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDesc: "",
    projectGoal: "",
  })

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/todo");
  };

  // TODO: fix later
  return (
    <div className="mt-10 pb-10 grid grid-cols-1 lg:grid-cols-2 justify-around gap-4 px-4 md:px-20">
      <div className="flex min-h-full rounded-2xl bg-teal-300 cursor-pointer">
        <h3 className="m-auto text-center align-middle font-bold">Thêm ảnh dự án</h3>
      </div>
      <div className="bg-gray-200 rounded-2xl">
        <form>
          <h1 className="m-auto mt-4 text-center text-3xl font-extrabold">Nội dung dự án</h1>
          <br className="h-10 opacity-0" />
          <div className="mx-10">
            <h2 className="m-auto text-xl font-bold mb-2">Tên dự án</h2>
            <input className="w-full h-10 px-2 border-2 rounded-full border-teal-500 text-black" type="text" name="projectName" value={formData.projectName} onChange={handleChange} id="projectName" />
          </div>
          <br />
          <div className="mx-10">
            <h2 className="m-auto text-xl font-bold mb-2">Mô tả dự án</h2>
            <textarea className="w-full h-80 px-2 min-h-min border-2 rounded-2xl border-teal-500 resize-none" type="text" name="projectDesc" value={formData.projectDesc} onChange={handleChange} id="projectDesc" />
            {/* <input className="w-full border-2 rounded-full border-teal-500 text-black" type="text" name="projectDesc" /> */}
          </div>
          <br />
          <div className="mx-10">
            <h2 className="m-auto text-xl font-bold mb-2">Số lượng tiền quyên góp</h2>
            <input className="w-full h-10 px-2 border-2 rounded-full border-teal-500 text-black" type="number" name="projectGoal" inputMode="numeric" min="1000000" step="100000" value={formData.projectGoal} onChange={handleChange} id="projectGoal" />
          </div>
          <br />
          <div className="mx-10">
            <button type="submit" className="m-auto w-full h-20 rounded-full bg-teal-600 font-bold text-2xl text-white" onClick={handleSubmit}>Nộp xét duyệt</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default AddProject;