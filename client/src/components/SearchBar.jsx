import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-t-md bg-[#7f1f5d] p-2 text-white">
      <div className="flex flex-[0.8] items-center justify-start space-x-16 px-2 py-1">
        <select
          name="course"
          id="course"
          className="w-full max-w-[16rem] rounded-md py-1 px-2 text-[#7f1f5d] outline-none"
        >
          <option value="">Select the course</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MX">MX</option>
        </select>
        <select
          name="semester"
          id="semester"
          className="w-full max-w-[16rem] rounded-md py-1 px-2 text-[#7f1f5d] outline-none"
        >
          <option value="">Select the semester</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button className="rounded-md bg-[#51143c] px-4 py-2">Search</button>
      </div>
      <div className="flex flex-[0.2] items-center justify-end  ">
        <button className="rounded-md bg-[#51143c] px-4 py-2">
          <Link to="/create">Add Subject</Link>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
