import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBalance, postData } from "../redux/action";
import swal from "sweetalert";
import { useEffect } from "react";

function Create() {
    const email = localStorage.getItem("userEmail");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        concept: "",
        amount: 0,
        created_date: "",
        type: "",
        userId: email,
        category: "",
        // newCategory: "",
    });
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postData(input));
        swal("Created", "Success", "success");
    };

    const category = ["food", "services", "taxes", "other"];

    useEffect(() => {
        localStorage.length < 1 && navigate("/");
    }, []);

    return (
        <div className=" d-flex justify-content-center col-12">
            <div className="w-25  balanceContainer text-center chota mt-5">
                <form onSubmit={handleSubmit} className="col-12 mt-5">
                    <label>Concept</label>
                    <input
                        placeholder="Example: Taxes..."
                        onChange={handleChange}
                        name="concept"
                        className="form-control"
                    />
                    <label>Amount</label>
                    <input
                        placeholder="Example: 1000..."
                        onChange={handleChange}
                        name="amount"
                        className="form-control"
                    />
                    <label>Date</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        name="created_date"
                        className="form-control "
                    />
                    <label>Type</label>
                    <select
                        onChange={handleChange}
                        name="type"
                        className="form-select "
                    >
                        <option>Type</option>
                        <option>income</option>
                        <option>outgoing</option>
                    </select>
                    <label>Category</label>
                    <select
                        onChange={handleChange}
                        name="category"
                        className="form-select  "
                    >
                        <option>Category</option>
                        {category?.map((category) => (
                            <option key={category}>{category}</option>
                        ))}
                    </select>
                    {input.category === "other" && (
                        <>
                            <label>Add Category</label>
                            <input
                                onChange={handleChange}
                                className="form-control"
                                name="newCategory"
                            />
                        </>
                    )}
                    <button className="btn btn-primary mb-5 mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
