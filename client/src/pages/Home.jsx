import { useQuery } from "react-query";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";
import { API } from "../utils/api";

const Home = () => {
  const { data, isLoading, error } = useQuery(
    "subjects",
    () => fetch(API).then((res) => res.json()),
    {
      refetchInterval: 40000,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-[35rem] w-[85rem] flex-col rounded-md border-b-4 border-b-[#7f1f5d] bg-white">
        <SearchBar />
        <CourseList data={data && data.subjects} />
      </div>
    </div>
  );
};
export default Home;
