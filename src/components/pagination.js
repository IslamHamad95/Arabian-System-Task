import React from "react"

const Pagination =(props)=>{
    const PageNumbers=[];

    for (let i=1; i<=Math.round(props.totalPosts/ props.postsPerPage); i++){
        PageNumbers.push(i);
    }

    return(
        <nav>
        {
            PageNumbers.map((number)=>(<button tabIndex="0" role="link" type="button" onClick={()=>(props.paginate(number))} key={number} href="#">{number}</button>))
        }
        </nav>
    )

}

export default Pagination 