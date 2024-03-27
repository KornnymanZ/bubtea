import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/BaseLayout"
import HomePage from "./pages/Home/HomePage"
import NewsPage from "./pages/News/NewsPage"
import ProfilePage from "./pages/Profile/ProfilePage"
import ToDosPage from "./pages/ToDosPage"
import AboutPage from "./pages/About/AboutPage"
import LoginPage from "./pages/Login/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Todo" element={<ToDosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}