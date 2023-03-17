import { useState } from 'react'

type Item = {
    companySigDate : string,
    companySignatureName : string,
    documentName : string,
    documentStatus : string,
    documentType : string,
    employeeNumber : string,
    employeeSigDate : string,
    employeeSignatureName : string
}

function ButtonAdd() {

    const [companySigDate, setcompanySigDate] = useState('')
    const [companySignatureName, setcompanySignatureName] = useState('')
    const [documentName, setdocumentName] = useState('')
    const [documentStatus, setdocumentStatus] = useState('')
    const [documentType, setdocumentType] = useState('')
    const [employeeNumber, setemployeeNumber] = useState('')
    const [employeeSigDate, setemployeeSigDate] = useState('')
    const [employeeSignatureName, setemployeeSignatureName] = useState('')

    const handleClick = () : void => {
        setcompanySigDate("")
        setcompanySignatureName("")
        setdocumentName("")
        setdocumentStatus("")
        setdocumentType("")
        setemployeeNumber("")
        setemployeeSigDate("")
        setemployeeSignatureName("")

        let dateOne : string = new Date(companySigDate).toISOString();
        let dateTwo : string = new Date(employeeSigDate).toISOString();
        
        let a : Item= {
            companySigDate : dateOne,
            companySignatureName,
            documentName,
            documentStatus,
            documentType,
            employeeNumber,
            employeeSigDate : dateTwo,
            employeeSignatureName
        }
        requestAdd(a);
    }

    const HOST : string = 'https://test.v5.pryaniky.com'
    const xauth : string = localStorage.getItem("user");
    const request : string = HOST + "/ru/data/v3/testmethods/docs/userdocs/create";

    const requestAdd = async (a : Item) => {
         await fetch(request,         
            {
            method:"POST",
            body: JSON.stringify(a),
            headers:{
              'x-auth':xauth,
              'Content-Type': 'application/json'
            },})
            .then((response) => response.json())
            .then(response => console.log(response))
           }

    return(
        <div className="flex flex-row justify-start items-center flex-wrap lg:w-3/5 w-11/12 border border-solid border-black bg-gray-200 rounded-md shadow-md mb-4 gap-y-2">
       
        <form className="flex flex-row flex-wrap w-full justify-center items-center p-2 gap-1">
            <h3 className='font-bold text-xl mt-1 text-center w-full text-indigo-500'>Добавить данные:</h3>
            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setcompanySigDate(event.target.value)}
                value={companySigDate}
                type="date"
                placeholder="дд.мм.гггг"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setcompanySignatureName(event.target.value)}
                value={companySignatureName}
                type = "text"
                placeholder="companySignatureName"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setdocumentName(event.target.value)}
                value={documentName}
                type = "text"
                placeholder="documentName"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setdocumentStatus(event.target.value)}
                value={documentStatus}
                type = "text"
                placeholder="documentStatus"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setdocumentType(event.target.value)}
                value={documentType}
                type ="text"
                placeholder="documentType"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setemployeeNumber(event.target.value)}
                value={employeeNumber}
                type = "text"
                placeholder="employeeNumber"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setemployeeSigDate((event.target.value))}
                value={employeeSigDate}
                type="date"
                placeholder="дд.мм.гггг"
                ></input>

            <input className="w-1/4 rounded pl-2 h-fit p-1 border border-black-300 border-solid mb-1"
                onChange={(event) => setemployeeSignatureName(event.target.value)}
                value={employeeSignatureName}
                type = "text"
                placeholder="employeeSignatureName"
                ></input>

            <button type="submit" onClick={() => handleClick()} className="w-1/4 flex py-1 justify-center rounded bg-indigo-500 m-1 text-white mt-0 hover:bg-indigo-600">Добавить</button>
         </form>
    </div>
    )
}

export default ButtonAdd;