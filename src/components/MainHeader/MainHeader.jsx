import { Link } from 'react-router-dom'
import styles from './MainHeader.module.css'
import Brand from '../../assets/logo-grocery.png'
import { useSelector } from 'react-redux'
import MobileNav from './MobileNav'
import { useState } from 'react'
const MainHeader = () => {
    const user = useSelector((state) => state.user.data);
    const wishList = useSelector((state) => state.wishlist.data);
    const cart = useSelector((state) => state.cart.data);
    const [sidebarShow, setSidebarShow] = useState(false);
    const handleCloseNav = () => {
        setSidebarShow(false);
    }
    return (
        <header className={`${styles.headerWrapper}`}>
            <div className={styles.headerTop}>
                <div className='container'>
                    <div className={styles.headerTopInner}>
                        <ul className={styles.headerTopLinks}>
                            <li>
                                <Link to="/track-order" className={styles.headerTopLink}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 19h4m6 0h4m-6.9627-4.3843V8.63418L17 5.93918m-4.9298 2.66213L7.04175 5.93919M12 2.99719l5.033 2.90583v5.81168L12 14.6205l-5.03303-2.9058V5.90302L12 2.99719ZM14 19c0 1.1045-.8954 2-2 2s-2-.8955-2-2c0-1.1046.8954-2 2-2s2 .8954 2 2Z"/>
                                    </svg>
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className={styles.headerTopLink}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className={styles.headerTopLink}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className={styles.headerTopLink}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.deliveryText}>
                            <p>We deliver to you every day from <span>7:00AM-9.00PM</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <nav className={styles.navBar}>
                    <button className={styles.navbarToogler} aria-label='navbar toogler' onClick={() => setSidebarShow(true)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                        </svg>
                    </button>
                    <Link to="/" className={styles.brandCol}>
                        <img src={Brand} alt='brand'/>
                    </Link>
                    <div className={styles.locationCol}>
                        <button className={styles.locationBox}>
                            <i>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                </svg>
                            </i>
                            <div className={styles.locationContent}>
                                <span>Deliver To</span>
                                <p>Select Location</p>
                            </div>
                        </button>
                    </div>
                    <div className={styles.searchCol}>
                        <input type='text' placeholder='Search...' className={styles.searchInput}/>
                        <button className={styles.searchBtn} aria-label='search'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.accountCol}>
                        {
                            user ? "" : 
                            <Link to="/login" className={styles.signBtn}>
                                <i>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                </i>
                                <span className={styles.signBtnText}>
                                    <span className={styles.actionText}>Sign in</span>
                                    <span className={styles.actionText2}>Account</span>
                                </span>
                            </Link>
                        }
                    </div>
                    <ul className={styles.headerBtns}>
                        <li>
                            <Link to="/wishlist" className={styles.headerBtn}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                </svg>
                                <span className={styles.count}>{wishList.length}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className={styles.headerBtn}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                                </svg>
                                <span className={styles.count}>{cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <MobileNav show={sidebarShow} onClose={handleCloseNav}/>
        </header>
    )
}

export default MainHeader