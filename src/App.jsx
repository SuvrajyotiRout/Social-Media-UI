
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Post from './Components/Post'
import { useState } from 'react'
import MultiplePosts from './Components/MultiplePosts'
import PostlistProvider from './Store/main-content'


function App() {
  let [currentState, setCurrentState] = useState("Home")


  return (
    <>
      <PostlistProvider>
        <div className="main-div">
          <Sidebar setCurrentState={setCurrentState} currentState={currentState}></Sidebar>
          <div className="secondary-div">
            <Header></Header>
            {currentState === "Home" ? <MultiplePosts ></MultiplePosts> : <Post></Post>}


            <Footer></Footer>
          </div>

        </div>
      </PostlistProvider>
    </>
  )
}

export default App
