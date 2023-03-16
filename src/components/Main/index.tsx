import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const HOST = 'https://test.v5.pryaniky.com'

const xauth = localStorage.getItem("user");
const request = HOST + "/ru/data/v3/testmethods/docs/userdocs/get";

// async function getInfo() {
//   const response = await fetch(request,{method:"GET", headers:{'x-auth':xauth},});
//   const info = await response.json();
//   const info2 = info.data;
//   return info2
// }

function Main(){

  const [item, setItem] = useState([]);

  fetch(request,{
    method:"GET",
    headers:{
      'x-auth':xauth
    },})
    .then(res => res.json())
    .then((result) => {
        setItem(result.data)
      })


 return(
  <div className="flex bg-white min-h-screen justify-center items-center flex-col pt-4 ">
    {item.map((item) =>{
            return(
              <div key={uuidv4()} className="flex flex-row justify-start items-center flex-wrap lg:w-3/4 w-11/12 p-6 pb-2 border border-solid border-black bg-gray-200 rounded-md shadow-md mb-4 gap-y-2">
             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">companySigDate</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black  lg:justify-center justify-end text-end">{item.companySigDate}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">companySignatureName</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.companySignatureName}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">documentName</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.documentName}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">documentStatus</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.documentStatus}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">documentType</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.documentType}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">employeeNumber</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.employeeNumber}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">employeeSigDate</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end text-end">{item.employeeSigDate}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

             <div className="flex lg:w-1/4 w-1/2 border-b border-solid border-black font-bold">employeeSignatureName</div>
             <div className="flex lg:w-2/4 w-1/2 border-b border-solid border-black lg:justify-center justify-end">{item.employeeSignatureName}</div>
             <div className='lg:w-1/4 w-full gap-4 flex flex-row justify-end items-end'>
                <button className='w-fit rounded-2xl bg-white p-1 px-4'>-</button>
                <button className='w-fit rounded-2xl bg-white p-1 px-2'>up</button>
              </div>

            <div className='w-full flex justify-center'>
                <button className='w-fit rounded-2xl bg-gray-400 py-1 px-3 mt-1'>+</button>
              </div>
             </div>
           )
         })}
  </div>
 )
}

export default Main;