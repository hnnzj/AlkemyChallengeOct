import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    categoryFilter,
    getBalance,
    getDeleted,
    typeFilter,
} from "../redux/action";
import { useState } from "react";
import Update from "./Update";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Table() {
    const userId = localStorage.getItem("userEmail");
    const balance = useSelector((state) => state.balance);
    const auxBalance = useSelector((state) => state.auxBalance);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [category, setCategory] = useState({
    //     category: "",
    // });
    // const [movementType, setMovementType] = useState({
    //     type: "",
    // });
    const [render, setRender] = useState(false);
    const [id, setId] = useState();
    balance.sort((a, b) => a.id - b.id);

    // -----------------------------------------------------
    const categories = [];
    const poronga = new Set();
    balance.forEach((el) => poronga.add(el.category));
    poronga.forEach((el) => categories.push(el));
    // -----------------------------------------------------

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Your movement has been deleted!", {
                    icon: "success",
                });
                dispatch(getDeleted(id));
            } else {
                swal("Your movement is safe!");
            }
        });
    };

    const handleClick = (id) => {
        setRender(true);
        setId(id);
    };

    const handleCategory = (e) => {
        dispatch(categoryFilter(e.target.value, balance));
    };

    const handleType = (e) => {
        dispatch(typeFilter(e.target.value, balance));
    };

    useEffect(() => {
        balance?.length < 1 && dispatch(getBalance(userId));
        localStorage.length < 1 && navigate("/");
    }, [balance]);

    return (
        <>
            {render ? (
                <Update render={render} setRender={setRender} id={id} />
            ) : (
                <div
                    style={{
                        scrollBehavior: "smooth",
                        overflowY: "scroll",
                        maxHeight: "500px",
                    }}
                    className="col-sm-12 h5 mt-5"
                >
                    <div className="d-flex  justify-content-evenly mb-4">
                        <div>
                            <select
                                onChange={handleCategory}
                                className="form-select"
                            >
                                <option>Category</option>
                                {categories.map((el) => (
                                    <option>{el}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select
                                onChange={handleType}
                                className="form-select"
                            >
                                <option>Type</option>
                                <option>outgoing</option>
                                <option>income</option>
                            </select>
                        </div>
                    </div>
                    <table class="table text-center table-striped">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0 "
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    CONCEPT
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    AMOUNT
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    TYPE
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    DATE
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    UPDATE
                                </th>
                                <th
                                    scope="col"
                                    className=" bg-primary border-0"
                                >
                                    DELETE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {auxBalance?.map((balance) => (
                                <tr>
                                    <th
                                        scope="row"
                                        className="table-dark border-0"
                                    >
                                        {balance.id}
                                    </th>
                                    <td className="table-dark border-0">
                                        {balance.concept}
                                    </td>
                                    <td className="table-dark border-0">
                                        {balance.amount}
                                    </td>
                                    <td
                                        className={`${
                                            balance.type === "income"
                                                ? "text-success h4"
                                                : "text-danger  h4"
                                        } table-dark border-0`}
                                    >
                                        {balance.type.toUpperCase()}
                                    </td>
                                    <td className="table-dark border-0">
                                        {balance.created_date}
                                    </td>
                                    <td className="table-dark border-0">
                                        <button
                                            onClick={() =>
                                                handleClick(balance.id)
                                            }
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            className="btn  btn-success"
                                        >
                                            update
                                        </button>
                                    </td>
                                    <td className="table-dark border-0">
                                        <button
                                            onClick={() =>
                                                handleDelete(balance.id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Table;
