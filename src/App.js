import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NewPost from './NewPost.js';
import Missing from './Missing';
import Header from './Header';
import Nav from './Nav';
import { DataProvider } from './context/DataContext';
function App() {
  
  return (
    <div className='mainOne'>
      <DataProvider>
      <Header  />
      <Nav
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='newPost' element={<NewPost/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      </DataProvider>
      {/* Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/NewPost' element={<NewPost/>}/>
        <Route  element={<PostLayout/>}>
          <Route path='/PostPage' element={<PostPage/>}/>
          <Route path='/PostPage/:id' element={<Post/>}/>
          <Route path='/PostPage/NewPost' element={<NewPost/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
