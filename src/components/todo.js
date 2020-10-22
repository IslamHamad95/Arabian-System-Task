import React,{useState,useEffect} from "react"
import Pagination from "./pagination"


const ToDo=()=>{
    const [ToDoList,setToDoList]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    //GET THE TODOS DATA
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(data=>(
      setToDoList(data)
    ))
    .catch(error=>console.error)
  
  },[]);


 

    const indexOfLastPost= currentPage* itemsPerPage;
    const indexOfFirstPost= indexOfLastPost - itemsPerPage;
    const currentitems=ToDoList.slice(indexOfFirstPost, indexOfLastPost)

    const paginate=(PageNumber)=>{
        setCurrentPage(PageNumber)
      }

    
    return(

        <div>
        <ul className="List">
        {
            currentitems.map((item)=>(
                <div key={item.id} className="todo-item">
                <input type="checkbox" defaultChecked={item.completed} name={item.title} value={item.title} />
                <label htmlFor={item.id}> {item.title}</label>
                </div>
            ))
        }
        </ul>
        <Pagination  postsPerPage={itemsPerPage} totalPosts={ToDoList.length} paginate={paginate}/>
        </div>
        )


}


export default ToDo;