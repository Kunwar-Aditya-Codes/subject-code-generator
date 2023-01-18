import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const NewSubject = () => {
  const [formData, setFormData] = useState({
    subjectName: "",
    semester: "",
    branch: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [generatedCode, setGeneratedCode] = useState("");

  let existingCode = "ECE200";

  const generateCode = (branch) => {
    let numCode = 100;
    let code = "";

    const branchCodeNumber = parseInt(existingCode.slice(3, 6));

    switch (branch) {
      case "CSE":
        numCode += 0;
        break;
      case "ECE":
        numCode += 100;
        break;
      case "EEE":
        numCode += 200;
        break;
      case "MX":
        numCode += 300;
        break;
      default:
        break;
    }

    while (numCode === branchCodeNumber) {
      numCode += 1;
    }
    code = branch + numCode;

    setGeneratedCode(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-[40rem] w-[50rem] flex-col items-center justify-center rounded-md border-b-4 border-b-[#7f1f5d] bg-white p-4">
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full max-w-lg flex-col items-center justify-evenly text-[#7f1f5d]"
        >
          <input
            type="text"
            name="subjectName"
            id="subjectName"
            onChange={handleFormChange}
            value={formData.subjectName}
            placeholder="Subject Name"
            className="w-full rounded-md border-2 border-[#7f1f5d] p-2 outline-none"
          />

          <select
            name="semester"
            id="semester"
            onChange={handleFormChange}
            value={formData.semester}
            className="w-full rounded-md border-2 border-[#7f1f5d] p-2 outline-none"
          >
            <option>Select semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>

          <select
            name="branch"
            id="branch"
            onChange={handleFormChange}
            value={formData.branch}
            className="w-full rounded-md border-2 border-[#7f1f5d] p-2 outline-none"
          >
            <option>Select branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MX">MX</option>
          </select>

          <h1 className="text-3xl font-bold text-[#7f1f5d] ">
            {generatedCode && generatedCode}
          </h1>

          <div className="flex w-full items-center justify-between">
            <button
              type="submit"
              className="w-[15rem] rounded-md bg-[#7f1f5d] p-2 text-white outline-none"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => generateCode(formData.branch)}
              className="w-[15rem] rounded-md bg-[#7f1f5d] p-2 text-white outline-none"
            >
              Generate Code
            </button>
          </div>
        </form>

        <Link to="/">
          <button className="rounded-md p-2 text-lg  font-medium text-[#7f1f5d] underline underline-offset-2 outline-none">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NewSubject;
