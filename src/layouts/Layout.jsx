import MainHeader from "../components/MainHeader/MainHeader"

const Layout = ({ children }) => {
    return (
        <>
            <MainHeader />
            { children }
        </>
    )
}

export default Layout