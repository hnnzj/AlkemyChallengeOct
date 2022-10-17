const initialState = {
    balance: [],
    auxBalance: [],
    loaded: true,
    income: 0,
    outgoing: 0,
    isLogged: false,
    category: ["food,"],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BALANCE":
            return {
                ...state,
                balance: action.payload.balance,
                auxBalance: action.payload.balance,
                income: action.payload.income,
                outgoing: action.payload.outgoing,
            };
        case "IS_LOADING":
            return {
                ...state,
                loaded: action.payload,
            };
        case "GET_LOGGED":
            return {
                isLogged: action.payload,
            };
        case "TYPE_FILTER":
            return {
                ...state,
                auxBalance: action.payload,
            };
        case "CATEGORY_FILTER":
            return {
                ...state,
                auxBalance: action.payload,
            };

        default:
            return state;
    }
}
