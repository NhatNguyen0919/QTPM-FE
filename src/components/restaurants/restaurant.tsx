import { useState } from "react";

const RestaurantPage = () => {
    const [search,setSearch]= useState('')

     const [datasearch,setDatasearch] = useState<string[]>([])   

     const handleSearch = () => { 
          setDatasearch(prev => [...prev,search])
          setSearch('')
     }      
     
     console.log(datasearch)
  return (
    <div className="flex flex-col gap-8 h-screen items-center border-red-500 justify-center">
      <div className="flex gap-8">
      <input
      type="text"
      className="outline-none border border-blue-500 px-4 py-2 w-[400px]"
      value={search}
      onChange={e => setSearch(e.target.value)}
      />
      <button 
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
        onClick={handleSearch}
      >
        Search
      </button>
      </div>
      <div>
        <h3 className="font-bold text-xl">
          Da search
        </h3>
        <ul>
          {datasearch?.map(item => {
            return (
              <li key={item}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
