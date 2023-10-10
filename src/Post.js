
const Post = ({ post, handleDelete }) => {
  if (!post) {
    return null; // or handle the case when 'post' is undefined or null
  }
  return (
    <article>
      <div>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 30)}...`}</p>
        <button onClick={() => handleDelete(post.id)} className="DeleteInPost">Delete</button>
      </div>
    </article>
  );
};

export default Post;
