import Post from './Post';
const Feed =({setResult,handleDelete})=>{
    return(
        <main className="ulElements">
            {setResult.map((post)=>(
            <Post post={post}
                  key={post.id}
                  handleDelete={handleDelete}
             />
     ))}
        </main>
    )
}
export default Feed;