import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import PostListPage from "./pages/PostListPage.tsx";
import PostDetailPage from "./pages/PostDetailPage.tsx";
import PostCreatePage from "./pages/PostCreatePage.tsx";


function App() {

   /* useEffect(() => {
        async function abc() {
            console.log(await getPosts())
        }

        abc()

    }, [])*/

  return (
    <BrowserRouter>
        <nav>
            <Link to="/">목록</Link>
            <Link to="/create"> 작성</Link>
        </nav>

        <Routes>
            <Route path="/" element={<PostListPage/>}/>
            <Route path="/post/:id" element={<PostDetailPage/>}/>
            <Route path="/create" element={<PostCreatePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
