import React, { useState } from 'react'
import { advancedSearch, cities } from '../../Data';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGlobalContext } from '../../UserContext/UserContext';

const Form = () => {
  const [searchquery, setSearchQuery] = useState({occupation: "", username: "", minhourlyRate: 0, maxhourlyRate: 0});
const {data} = useGlobalContext()
const [searchParams,setSearchParams]= useSearchParams()
const nevi = useNavigate()

  // const [data,setData] = useState({})
  // const handleData = (e) => {
  //   setData({...data, [e.target.name]: e.target.value})
  // }
  const handleSearchQuery = (e) => {
    setSearchQuery({...searchquery, [e.target.name]: e.target.value})
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // setSearchParams(searchquery)
     setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      occupation: searchquery.occupation || undefined,
      username: searchquery.username || undefined,
      minhourlyRate: searchquery.minhourlyRate || undefined,
      maxhourlyRate: searchquery.maxhourlyRate || undefined,
    }));
    console.log(searchParams)
    // const occupation = searchParams.get('occupation');
    // const username = searchParams.get('username');
    // const minhourlyRate = searchParams.get('minhourlyRate');
    // const maxhourlyRate = searchParams.get('maxhourlyRate');
    try {
      const filterResult = await fetch(`http://localhost:5000/api/v1/tradesman/searchResult?occupation=${searchParams.get("occupation")}&username=${searchParams.get("username")}&minhourlyRate=${Number(searchParams.get("minhourlyRate"))}&maxhourlyRate=${Number(searchParams.get("maxhourlyRate"))}`);
      const result = await filterResult.json();
      data(result)
      nevi('/SearchUser')
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    
  }
  return (
    <>
      <div className="transform translate-y-[4vw] translate-x-[5vw]">
        <p className="">Hello, Guest!</p>
        <p>{searchParams.get("maxhourlyRate")}</p>
        <h1 className="font-bold text-[1.5vw] transform translate-y-[1.3vw] ">
          Find the Best Trademen Near You
        </h1>
      </div>
      <div className="ml-[20vw] mt-[5vw] ">
        <form className=" p-[2vw] flex items-center " onSubmit={onSubmit}>
        {advancedSearch?.map((item, index)=> {
          return <main className='w-full max-w-[15vw]' key={index}>
            {item?.type === 'select' ? 
            <select placeholder={item?.placeholder} onChange={handleSearchQuery} name={item?.name} className='text-vw p-vw border-[1px]'>
              <option value="default">Select Occupation</option>
              {item?.options?.map((opt, idnex)=> (
                <option value={opt?.value}>{opt?.label}</option>
              ))}
            </select>
            : <>
            <input type="text" onChange={handleSearchQuery} placeholder={item?.placeholder} className='text-vw p-vw w-full border-[1px] rounded-md' name={item?.name} required />
            </>}
          </main>
        })}
        <button type='submit' className='p-vw bg-blue-500 '>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form
