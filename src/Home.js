import { useContext } from 'react';
import Feed from './Feed'
import DataContext from './context/DataContext';
const Home =()=>{
    const {searchResult,handleDelete}=useContext(DataContext);
    return(
        <div>
        {searchResult.length ?
        <Feed 
             setResult={searchResult}
             handleDelete={handleDelete}
        /> : <p style={{textAlign:'center',fontFamily:'monospace',fontWeight:'800',marginTop:'200px'}}>No Posts to display</p>}
        </div>
    )

}
export default Home;