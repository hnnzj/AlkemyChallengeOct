import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/action";

function Update({ render, setRender, id }) {
    console.log(id);
    const [input, setInput] = useState();
    const dispatch = useDispatch({
        concept: "",
        amount: 0,
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateData(id, input));
    };

    return (
        <>
            <div className="col-12">
                <div className="d-flex flex-column align-items-center">
                    <button
                        className="btn btn-success"
                        onClick={() => setRender(false)}
                    >
                        Back
                    </button>
                    <form
                        onSubmit={handleSubmit}
                        className=" d-flex flex-column w-100 align-items-center"
                    >
                        <label>Concept</label>
                        <input
                            onChange={handleChange}
                            name="concept"
                            className="form-control w-25"
                        />
                        <label>Amount</label>
                        <input
                            onChange={handleChange}
                            name="amount"
                            className="form-control w-25"
                        />

                        <button className="btn btn-dark mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Update;
