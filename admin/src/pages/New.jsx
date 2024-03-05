import { useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="menuContainer">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <div className="shadow-boxShadow p-[10px] m-5 flex">
            <h1 className="text-[lightgray] text-[20px]">{title}</h1>
          </div>

          <div className="shadow-boxShadow p-[10px] m-5 flex">
            <div className="flex-1 ">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="w-[100px] h-[100px] rounded-[50%] object-cover mx-auto"
              />
            </div>

            <div className="flex-[2]">
              <form className="flex flex-wrap gap-[30px] justify-around">
                <div className="w-[40%]">
                  <label htmlFor="file">
                    Image:{" "}
                    <MdOutlineDriveFolderUpload className="cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="w-full p-[5px] border-b-[gray] border-[none] border-b border-solid"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="w-[40%]" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full p-[5px] border-b-[gray] border-[none] border-b border-solid"
                    />
                  </div>
                ))}
                <button className="w-[150px] p-[10px] border-none bg-[teal] text-white font-bold cursor-pointer mt-[10px]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
