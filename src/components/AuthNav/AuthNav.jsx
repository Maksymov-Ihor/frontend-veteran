import { NavRegister, NavLogIn } from "./AuthNavStyled";

const AuthNav = () => {
    return (
        <div>
            <NavRegister to='/signup'>Register</NavRegister>
            <NavLogIn to='/login'>Log In</NavLogIn>
        </div>
    )
}

export default AuthNav;