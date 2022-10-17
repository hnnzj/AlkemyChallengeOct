import axios from "axios";
import { calcIncome, calcOutgoing, filterBalance } from "../helper/helper";

export const getBalance = (userId) => async (dispatch) => {
    const response = await axios("http://localhost:3002/app");

    dispatch({
        type: "GET_BALANCE",
        payload: {
            balance: filterBalance(userId, response.data),
            income: calcIncome(userId, response.data),
            outgoing: calcOutgoing(userId, response.data),
        },
    });
    dispatch(setLoading(false));
};

export const getDeleted = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3002/app/${id}`);
    dispatch(getBalance());
};

export const postData =
    ({ concept, amount, created_date, type, userId, category, newCategory }) =>
    async (dispatch) => {
        category = category === "other" ? newCategory : category;

        // console.log(sendCategory);
        await axios.post(`http://localhost:3002/app`, {
            concept,
            amount,
            created_date,
            type,
            userId,
            category,
        });
        dispatch(getBalance());
    };

export const registerUser = (value) => async (dispatch) => {
    await axios
        .post(`http://localhost:3002/app/register`, value)
        .then((res) => console.log(res));
    dispatch(getBalance());
};

export const logInUser = (value) => async (dispatch) => {
    try {
        await axios
            .post(`http://localhost:3002/app/login`, value)
            .then((res) => {
                const token = res.data.token;
                const info = res.data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("userEmail", info.email);
            });
        dispatch(isLogged(true));
    } catch (error) {
        console.log(error);
    }
};
export const updateData = (id, value) => async (dispatch) => {
    await axios.put(`http://localhost:3002/app/${id}`, value);
    dispatch(getBalance());
};

export const isLogged = (value) => (dispatch) => {
    dispatch({ type: "GET_LOGGED", payload: value });
};

export const setLoading = (loading) => (dispatch) => {
    dispatch({ type: "IS_LOADING", payload: loading });
};

export const categoryFilter = (value, balance) => async (dispatch) => {
    const all = balance;
    const filtered = all.filter((el) => el.category === value);

    dispatch({ type: "CATEGORY_FILTER", payload: filtered });
};
export const typeFilter = (value, balance) => async (dispatch) => {
    const all = balance;
    const filtered = all.filter((el) => el.type === value);
    dispatch({ type: "TYPE_FILTER", payload: filtered });
};
