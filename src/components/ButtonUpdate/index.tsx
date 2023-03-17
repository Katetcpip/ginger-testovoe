import { useState } from 'react'

type Props = {
    id : string,
    changeData : Function
}

function ButtonUpdate(props : Props) {

    let id : string = props.id;
    let change : Function = props.changeData;

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

        const HOST : string = 'https://test.v5.pryaniky.com'
        const request : string = HOST + "/ru/data/v3/testmethods/docs/userdocs/set/" + id;   
        
        let item : object = {
            companySigDate : dateOne,
            companySignatureName,
            documentName,
            documentStatus,
            documentType,
            employeeNumber,
            employeeSigDate : dateTwo,
            employeeSignatureName
        }
        change(item, request);
    }

    return(
        <div>
        <form className="flex flex-row flex-wrap w-full justify-center items-center mb-4 p-2 gap-1">
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

            <button type="submit" onClick={() => handleClick()} className="w-1/4 flex py-1 text-white justify-center rounded bg-indigo-500 m-1 mt-0 hover:bg-indigo-600 ">Изменить</button>
         </form>
    </div>
    )
}

export default ButtonUpdate;