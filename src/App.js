import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Header from './components/Header/Header';
import Friends from './components/Home/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friend' element={<Friends></Friends>}></Route>
        {/* colon dewa mane holo dynamic ja friend e por vul hole o dekhabe */}
        <Route path='/friend/:details' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
