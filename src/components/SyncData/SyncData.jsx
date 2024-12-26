import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { syncCartFromLocalStorage } from '../../utils/cartSlice'
import { syncWishlistFromLocalStorage } from '../../utils/wishlistSlice'
import Loader from '../Loader/Loader'

const SyncData = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    const cartStatus = useSelector((state) => state.cart.status);
    const wishlistStatus = useSelector((state) => state.wishlist.status);
    useEffect(() => {
        if (user) {

        } else {
            dispatch(syncCartFromLocalStorage());
            dispatch(syncWishlistFromLocalStorage());
        }
    }, [])
    if (cartStatus === 'loading' || cartStatus === 'failed' || wishlistStatus === 'loading' || wishlistStatus === 'failed') {
        return <Loader />
    }
}

export default SyncData