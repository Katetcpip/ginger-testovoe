import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ButtonAdd from 'components/ButtonAdd';
import Spinner from 'react-bootstrap/Spinner';
import ButtondUpdate from 'components/ButtonUpdate';
import ButtonDelete from 'components/ButtonDelete';

const HOST : string = 'https://test.v5.pryaniky.com'
const xauth : string = localStorage.getItem("user");
const request : string = HOST + "/ru/data/v3/testmethods/docs/userdocs/get";

function Main() : JSX.Element {
  const [item, setItem] = useState([]);

  const getApiData = async () : Promise<void> => {
    const response = await fetch(request,{
        method:"GET",
        headers:{
          'x-auth': xauth
        },})
        .then((response) => response.json());
        setItem(response.data)
    }
  useEffect(() => {
    getApiData();
  }, []);

  const deleteData = async (http : string) : Promise<void> =>{
    const response = await fetch(http,         
    {
    method:"POST",          
    headers:{
      'x-auth':xauth,
    },})
    .then((response) => response.json());
    setItem(response.data)
    document.location.reload();
  }

  const changeData = async (item : object, request : string) : Promise<void> => {
    const response = await fetch(request,         
       {
       method:"POST",
       body: JSON.stringify(item),
       headers:{
         'x-auth':xauth,
         'Content-Type': 'application/json'
       },})
       .then((response) => response.json());
       setItem(response.data)
       document.location.reload();
      }

 return(
  <div className="flex bg-white min-h-screen justify-start items-center flex-col pt-4 ">
 
    <ButtonAdd />
    {item.length <=0 && <Spinner animation="border" />}
    {item.map((item) =>{
            return(
            <div key={item.id} id={item.id} className="flex flex-row justify-start items-center flex-wrap lg:w-3/5 w-11/12 lg:p-6 p-2 pb-2 border border-solid border-black bg-gray-200 rounded-md shadow-md mb-4">
            
                <div className='flex flex-row w-full justify-center items-start'>
                  <h1 className='font-bold text-2xl mb-4 text-start w-full ml-4 text-indigo-500'>Документ</h1>
                  <ButtonDelete id={item.id} deleteData={deleteData}/>
                </div>

                <div className="flex lg:w-1/2 w-5/12 border-b border-t pt-2 lg:border-r border-solid border-black font-bold lg:pl-4 pl-0">companySigDate</div>
                <div className="flex lg:w-1/2 w-7/12 border-b border-t pt-2 border-solid border-black lg:pl-4 pl-0 lg:justify-start justify-end text-end">{item.companySigDate}</div>

                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0">companySignatureName</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.companySignatureName}</div>
              
                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0">documentName</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.documentName}</div>
                
                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0">documentStatus</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.documentStatus}</div>
            
                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0">documentType</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.documentType}</div>
              
                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0">employeeNumber</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.employeeNumber}</div>
            
                <div className="flex  lg:w-1/2 w-5/12 border-b lg:border-r pt-2 border-solid border-black font-bold lg:pl-4 pl-0">employeeSigDate</div>
                <div className="flex  lg:w-1/2 w-7/12 border-b border-solid pt-2 border-black lg:pl-4 pl-0 lg:justify-start justify-end text-end">{item.employeeSigDate}</div>
            
                <div className="flex  w-1/2 border-b border-solid lg:border-r pt-2 border-black font-bold lg:pl-4 pl-0 ">employeeSignatureName</div>
                <div className="flex  w-1/2 border-b border-solid border-black pt-2 lg:justify-start lg:pl-4 pl-0 justify-end">{item.employeeSignatureName}</div>
              
                <h3 className='font-bold text-xl mt-4 text-center w-full ml-4 text-indigo-500'>Изменить данные:</h3>
                <ButtondUpdate changeData={changeData} id={item.id}/>
            </div>
           )
         })}
  </div>
 )
}

export default Main;