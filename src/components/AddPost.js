import React,{useState} from "react"


const AddPost=()=>{
    const [newPost,setNewPost]=useState({title:"", body:""})

    
    const getPost=(e)=>{
        setNewPost({
          ...newPost,
          [e.target.name]:e.target.value,
       
        })
      
      }

      const handleSubmit=(e)=>{
          e.preventDefault();
          //setSubmitPost({submitPost: !submitPost})
          submitNewPost(newPost);
          setNewPost({
            ...newPost,
            title:"",
            body:""
         
          })
          
      }

      const submitNewPost=(post)=>{

      
        if(post.title && post.body ){
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({post})
          };
          fetch('https://jsonplaceholder.typicode.com/posts', requestOptions) 
              .then(response => response.json())
              .then(response=>console.log(response))
            
        }
      }


     

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
