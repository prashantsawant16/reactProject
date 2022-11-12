import React, {useEffect, useState} from 'react'

const getDataFromLS = () => {
    const getData = localStorage.getItem('item')
    return JSON.parse(getData)
};

function Test (props) {
    const [item, setItem] = useState(getDataFromLS());
    const [inputData, setInputData] = useState();
    const shoot = () => {
        alert("Great Shot!");
      }

    const submitHandler = (event) =>{
        if(!inputData){

        }
        else{
        setItem([...item, inputData]);
        setInputData('')
        }

    }

    const editData= (ind) => {
        const editItems = item.find((elem ,index) =>{
            return ind === index
        })
        console.log(editItems);
        setInputData(editItems)


    }

    const clearData=(ind)=>{
        // console.log(ind)
       const newItems = item.filter((arrEle, index) =>{
        return ind !== index
       })
       setItem(newItems)
    }

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(item));
    },[item])
    return(
        <>
        <div className="row">
            <div className="col-md-12">
                <h2>Hello world ! {props.name}</h2>
                <button onClick={shoot}>Take the Shot!</button>
            </div>
            <div className="col-md-6 mx-auto mt-3">
                <div className="form-group mb-2">                
                    <input type="text" className='form-control' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={submitHandler}>Submit</button>
        {
            item.map((elem , ind) =>{
                return(
                    
                    <div className='d-flex justify-content-between my-3' key={ind}>
                    <h2 className='mb-0' >{elem}</h2>
                    <div className='action_btn'>
                    <button className='btn btn-sm btn-success mx-1' onClick={() => editData(ind)}>Edit </button>
                    <button className='btn btn-sm btn-danger mx-1' onClick={() => clearData(ind)}>Remove</button>
                    </div>
                    </div>

                )
            })

        }
            </div>
        </div>

       
        </>
    )
}
export default Test;
