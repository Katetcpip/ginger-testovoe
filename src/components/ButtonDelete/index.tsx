function ButtonDelete(props) {

    let id : string = props.id;
    let del : Function = props.deleteData;
    const HOST : string = 'https://test.v5.pryaniky.com'
    const request : string = HOST + "/ru/data/v3/testmethods/docs/userdocs/delete/" + id;

    const handleClick = async () : Promise<void> => {
        let http : string = request;
        del(http);
    }

    return(
        <div className="flex flex-row flex-wrap w-fit justify-center items-center">
            <button onClick={() => handleClick()} className="flex py-1 px-2 justify-center rounded bg-indigo-500 text-white hover:bg-indigo-600 ">Удалить</button>
        </div>
    )
}

export default ButtonDelete;