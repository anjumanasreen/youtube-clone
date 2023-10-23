import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const SideBar = () => {

    const isMenuOpen = useSelector( store => store.app.isMenuOpen)
    if(!isMenuOpen) return null

    return(
        <div className="p-4 shadow-lg w-52">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h6 className="font-bold pt-5">Subscriptions</h6>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h6 className="font-bold pt-5">Watch Later</h6>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )

}
export default SideBar