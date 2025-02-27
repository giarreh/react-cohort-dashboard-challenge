import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Posts from './components/posts/Posts'
import Sidebar from './components/Sidebar'
import { useState, useEffect, createContext } from 'react'
import UserProvider from './contexts/UserContext'
import ProfileWithID from './components/profile/ProfileWithID';
import PostDetails from './components/posts/PostDetails';


export const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/giarreh/post')
    .then(response => response.json())
    .then((data) => { setPosts(data) })
  }, []);

  useEffect( () => {
    fetch('https://boolean-uk-api-server.fly.dev/giarreh/contact')
    .then(response => response.json())
    .then((data) => { setContacts(data)})
  }, [])



  return (
    <Router>
      <UserProvider>
        <AppContext.Provider value={{ posts, setPosts, contacts, setContacts}}>
          <div className="container">
            <Header />
            <div className="container-nav-main">
            <Sidebar />
            <main className="main main-background">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} ></Route>
              <Route path="/profile/:id" element={<ProfileWithID />} />
            </Routes>
            </main>
            </div>
          </div>
        </AppContext.Provider>
      </UserProvider>
    </Router>
  )
}

export default App
