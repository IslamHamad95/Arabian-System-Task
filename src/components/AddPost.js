import React,{useState,useEffect} from "react"


const AddPost=(prps)=>{
    const [newPost,setNewPost]=useState({title:"", body:"",userId:0})
    const [submitPost, setSubmitPost]=useState(false)
    
    const getPost=(e)=>{
        setNewPost({
          ...newPost,
          [e.target.name]:e.target.value,
          userId:11
        })
      
      }

      const handleSubmit=(e)=>{
          e.preventDefault();
          setSubmitPost({submitPost: !submitPost})
      }

      useEffect(() => {
        if(newPost.title && newPost.body){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...newPost})
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions) 
            .then(response => response.json())
            .then(res=>console.log(res))
      }}, [submitPost, newPost]);

    return(
        <div>
        <h2 id="add-post">Add Post</h2>
        
        <form>

        <label>Title:</label>  <br/>
        <input id="title" name="title" value={newPost.title} onChange={getPost}></input>
        <br/>
        <label>Body:</label>  <br/>
        <input id="body" name="body" value={newPost.body} onChange={getPost}></input>
        <br/>
        <button id="submit-btn" type="submit" onClick={handleSubmit} > Add Post</button>
        </form>

        </div>
    )

}

export default AddPost;
