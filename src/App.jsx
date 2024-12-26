import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import SyncData from "./components/SyncData/SyncData"
import RegisterPage from './pages/RegisterPage'
import LoginPage from "./pages/LoginPage"

const App = () => {
    return (
        <>
        <SyncData />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<RegisterPage />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App