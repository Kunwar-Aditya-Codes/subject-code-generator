import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Home = () => {
  const [search, setSearch] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      if (search?.length >= 4) {
        const response = await fetch(
          `http://localhost:5000/api/subject?query=${search}`
        );
        const data = await response.json();
        console.log(data);
        setSubjects(data);
      } else if (search?.length === 0) {
        const response = await fetch('http://localhost:5000/api/subject');
        const data = await response.json();
        setSubjects(data);
      }
    };
    getSubjects();
  }, [search]);

  const { isLoading, error } = useQuery(
    'subjects',
    async () => {
      const response = await fetch('http://localhost:5000/api/subject');
      const data = await response.json();
      setSubjects(data);
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    }
  );

  if (isLoading)
    return (
      <div className='flex h-full animate-pulse items-center justify-center  text-3xl'>
        Loading...
      </div>
    );

  if (error)
    return (
      <div className='flex h-full  items-center justify-center  text-3xl'>
        Error: {error.message}
      </div>
    );

  return (
    <div className='mx-6 flex h-full flex-col items-center justify-evenly p-4 '>
      <div className='flex w-full max-w-5xl flex-col justify-between space-y-4 md:flex-row-reverse md:items-center md:space-y-0'>
        <Link
          to={'create'}
          className='rounded-md bg-[#e3e0e0] p-2 text-center  font-medium text-[#1a1a1a]'
        >
          + Create Subject Code
        </Link>
        <input
          type='text'
          className='flex-[0.9] rounded-md bg-[#242424] p-2  text-white shadow-md placeholder:text-[#e3e0e0] '
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='mx-auto w-full max-w-5xl flex-[0.8] overflow-y-scroll rounded-md border-r-8 border-[#616161] bg-[#242424] p-3 shadow-md '>
        <table className=' w-full'>
          <thead className='text-xl '>
            <tr className=''>
              <th className=' w-1/3 py-4 font-medium'>Subject Name</th>
              <th className='w-1/3 py-4 font-medium'>Code</th>
              <th className='hidden w-1/3 py-4 font-medium md:table-cell'>
                Category
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {subjects?.subjects?.map((subject) => (
              <tr key={subject._id} className='text-center text-lg font-light'>
                <td className='py-4'>{subject.subjectName}</td>
                <td className='py-4'>{subject.subjectCode}</td>
                <td className='hidden py-4 md:table-cell'>
                  {subject.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
