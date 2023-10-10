import { createContext,useEffect,useState } from "react";
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';
import api from '../api/Posts';

const DataContext =createContext({});

export const DataProvider =({children})=>{
    const navigate=useNavigate();
  const [search,setSearch]=useState('');
  const [searchResult,setSearchResult]=useState([]);
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
  const [posts,setPosts]=useState([]);


  useEffect(()=>{
    const fetchApi =async()=>{
      try{
        const response= await api.get('/posts');
        setPosts(response.data);
      }catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else{
          console.log(err.message);
        }
      }
    }
    fetchApi();
  },[])


  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResults.reverse());
  }, [posts, search]);
  

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const id= posts.length ? posts[posts.length-1].id+1 : 1;
    const datetime=format(new Date(),'MMMM dd, yyyy pp');
    const newPost ={
      id:id,
      title:postTitle,
      datetime:datetime,
      body:postBody
    }
    try{
      const response=await api.post('/posts',newPost);
      const allPost=[...posts,response.data];
      setPosts(allPost);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }catch(err){
      console.log(err.message);
    }
    
  }
  const handleDelete =async(id)=>{
    try{
      await api.delete(`/posts/${id}`);
      const deletedItem=posts.filter((post)=>(post.id)!==id)
      setPosts(deletedItem);
    }catch(err){
      console.log(err.message);
    }
  }

    return(
        <DataContext.Provider value={{
            search,setSearch,searchResult,handleDelete,postTitle,setPostTitle,postBody,setPostBody,handleSubmit
        }}>
            {children}
        </DataContext.Provider>
    )

}
export default DataContext;