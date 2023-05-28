import { useSelector } from "react-redux";

import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

import { Header } from "./AppBarStyled";

const AppBar = () => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Header>
            <h2>gks veteran</h2>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}

export default AppBar;