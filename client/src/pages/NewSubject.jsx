import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';

const NewSubject = () => {
  const [subjectName, setSubjectName] = useState('');
  const [category, setCategory] = useState('');
  const [subjectCode, setSubjectCode] = useState('');

  // Generate Subject Code based on category
  const generateSubjectCode = () => {
    const number = Math.floor(Math.random() * 900) + 100;
    const code = `${category}${number}`;
    setSubjectCode(code);
  };

  useEffect(() => {
    if (subjectName && category) {
      generateSubjectCode();
    }
  }, [subjectName, category]);

  const createSubject = useMutation(
    async (newSubject) => {
      const data = await fetch('http://localhost:5000/api/subject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSubject),
      });

      const res = await data.json();

      return res;
    },
    {
      onSuccess: () => {
        setSubjectName('');
        setCategory('');
        setSubjectCode('');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubject = {
      subjectName,
      category,
      subjectCode,
    };

    createSubject.mutate(newSubject);
  };

  return (
    <div className='mx-4 flex h-full items-center p-4  '>
      <div className='mx-auto flex h-[80%] w-full max-w-xl flex-col  space-y-10 rounded-md bg-[#242424]  p-4 shadow-md'>
        <h1 className='text-center text-2xl font-light'>
          Generate Subject Code
        </h1>
        <form className='space-y-8' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Subject Name'
            className='w-full rounded-md border border-[#616161] bg-transparent p-2 text-white placeholder:text-[#e3e0e0] focus:border-[#e3e0e0] '
            autoFocus
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />

          <select
            name='category'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full rounded-md border border-[#616161] bg-transparent p-2 focus:border-[#e3e0e0]'
          >
            <option value='' className=' bg-[#242424] text-[#e3e0e0]'>
              Select Category
            </option>
            <option value='CSE' className='bg-[#242424] text-[#e3e0e0] '>
              Computer Engineering
            </option>
            <option value='MX' className='bg-[#242424] text-[#e3e0e0] '>
              Mechanical Engineering
            </option>
            <option value='MT' className='bg-[#242424] text-[#e3e0e0] '>
              Mechatronics Engineering
            </option>
            <option value='BT' className='bg-[#242424] text-[#e3e0e0] '>
              Bio Technology
            </option>
          </select>

          <input
            type='text'
            placeholder='Subject Code'
            className='w-full cursor-not-allowed rounded-md border border-[#616161] bg-transparent p-2 text-white placeholder:text-[#e3e0e0]'
            disabled
            value={subjectCode}
          />

          <button
            type='submit'
            disabled={!subjectName || !category || !subjectCode}
            className='w-full rounded-md  border border-[#e3e0e0] bg-[#e3e3e3] p-2 font-semibold text-[#242424] disabled:cursor-not-allowed disabled:border-[#616161] disabled:bg-transparent disabled:text-[#616161]'
          >
            Save Subject
          </button>
        </form>

        {createSubject.isLoading && (
          <div className='animate-pulse text-center text-xl text-[#e3e0e0]'>
            Saving Subject...
          </div>
        )}

        {createSubject?.data && createSubject?.data?.error && (
          <div className='rounded-md border border-red-500 p-2 text-center text-xl text-[#e3e0e0]'>
            {createSubject?.data?.error}
          </div>
        )}

        <Link
          to='/'
          className='text-center text-lg text-[#e3e0e0] underline underline-offset-4'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};
export default NewSubject;
