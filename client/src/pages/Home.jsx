import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-[35rem] w-[85rem] flex-col rounded-md border-b-4 border-b-[#7f1f5d] bg-white">
        <SearchBar />
        {/* <SearchList /> */}
      </div>
    </div>
  );
};
export default Home;
