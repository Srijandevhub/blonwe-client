import styles from "./MobileNav.module.css"
import Brand from '../../assets/logo-grocery.png'
import { Link } from "react-router-dom"
const MobileNav = ({ show = true, onClose }) => {
    return (
        <aside className={`${styles.sideBar} ${show ? `${styles.show}` : ''}`}>
            <div className={styles.sidebarHeader}>
                <img src={Brand} alt="brand" className={styles.brand}/>
                <button className={styles.close} aria-label="close" onClick={() => onClose()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>
            </div>
            <div className={styles.drawerBody}>
                <h4 className={styles.drawerHeading}>Main Menu</h4>
                <ul className={styles.drawerMenu}>
                    <li>
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default MobileNav