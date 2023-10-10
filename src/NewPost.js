import { useContext } from "react";
import DataContext from "./context/DataContext";


const NewPost = () =>{
    const {postTitle,setPostTitle,postBody,setPostBody,handleSubmit}=useContext(DataContext);
    return(
        <div className="newpost">
            <fieldset>
                <legend style={{backgroundColor:'pink',fontFamily:'initial'}}>PostForm</legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input  
                                type='text'
                                placeholder='Post Title'
                                value={postTitle}
                                onChange={(e)=> setPostTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                                rows='6'
                                cols='39'
                                type='text'
                                placeholder='Post Some Topics'
                                value={postBody}
                                onChange={(e)=> setPostBody(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}
export default NewPost;