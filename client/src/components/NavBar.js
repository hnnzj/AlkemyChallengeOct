import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLogged } from "../redux/action";

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOut = (e) => {
        e.preventDefault();
        dispatch(isLogged(false));
        window.localStorage.clear();
        navigate("/");
    };

    return (
        <>
            {localStorage.length > 1 && (
                <ul className="nav bg-dark border-bottom border-secondary border-2 justify-content-evenly bg-gradient gap-5 pb-3 pt-3">
                    <div className="d-flex gap-3">
                        <li className="nav-item">
                            <button
                                className="btn btn-light"
                                onClick={() => navigate("/home")}
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-light"
                                onClick={() => navigate("/table")}
                            >
                                Table
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-light"
                                onClick={() => navigate("/create")}
                            >
                                Create
                            </button>
                        </li>
                    </div>
                    <div>
                        <form className="d-flex ">
                            <button onClick={logOut} className="btn btn-danger">
                                Logout
                            </button>
                        </form>
                    </div>
                </ul>

                // <div className="balanceContainer navbar h4 navbar-dark">
                //     <div className="d-flex justify-content-center mt-3 mb-3 col-4">
                //         <span>AMB</span>
                //     </div>
                //     <div className="d-flex justify-content-end gap-4 mt-3 mb-3 col-4">
                //         <Link to="/home" className=" badge badge-dark nav-link">
                //             Home
                //         </Link>

                //         <Link to="/table" className="badge badge-dark nav-link">
                //             Table
                //         </Link>
                //         <Link
                //             to="/create"
                //             className="badge badge-dark nav-link"
                //         >
                //             Create
                //         </Link>
                //     </div>
                //     <div className="d-flex justify-content-center mt-3 mb-3 col-4">
                //         <button
                //             className="btn btn-danger badge "
                //             onClick={logOut}
                //         >
                //             Logout
                //         </button>
                //     </div>
                // </div>
            )}
        </>
    );
}

export default NavBar;
