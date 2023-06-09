import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

const Navigation = () => {
 
    const isLoggedIn = useSelector(selectIsLoggedIn);
 
    return (
        <nav>
            {isLoggedIn && (
                <NavLink to='/clients'>
                    Clients
                </NavLink>
            )}
        </nav>
    )
}

export default Navigation;