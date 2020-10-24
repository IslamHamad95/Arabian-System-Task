import React,{useState,useEffect} from "react"
import AddPost from "./AddPost";
import Pagination from "./pagination"

const Posts=()=>{
    const [posts, setPosts]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    //GET THE POSTS DATA
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>(
      setPosts(data)
    ))
    .catch(error=>console.error)
  
  },[])

    const indexOfLastPost= currentPage* postsPerPage;
    const indexOfFirstPost= indexOfLastPost - postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate=(PageNumber)=>{
        setCurrentPage(PageNumber)
      }

    return(
      <div>

      <AddPost/>
        <div className="posts-list">
        <div className="List">
        {
            currentPosts.map((item)=>(
                <div id="post" key={item.id}>{item.title}</div>
            ))
        }
        </div>
        </div>
        <Pagination  postsPerPage={postsPerPage}  totalPosts={posts.length} paginate={paginate}/>


        </div>
        
    )

}



export default Posts;