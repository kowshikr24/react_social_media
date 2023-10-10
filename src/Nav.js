import { useContext } from 'react';
import {Link} from 'react-router-dom';
import DataContext from './context/DataContext';
const Nav =()=>{
    const {search,setSearch} =useContext(DataContext);
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='newPost'>New Post</Link></li>
                <li><Link to='About'>About</Link></li>
            </ul>
            <form onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor='input'>Search Posts</label>
                <input  id='input'
                        type='text'
                        placeholder='Search Posts'
                        value={search}
                        onChange={(e)=> setSearch(e.target.value)}
                />
            </form>
        </nav>
    );
};
export default Nav;
