const calcIncome = (userId, data) => {
    const filter = data.filter((data) => data.email === userId);
    const incomes = filter.filter((data) => data.type === "income");
    const result = incomes.map((i) => i.amount);
    const sum = result.reduce((acc, el) => acc + el, 0);
    return sum;
};

const calcOutgoing = (userId, data) => {
    const filter = data.filter((data) => data.email === userId);
    const incomes = filter.filter((data) => data.type === "outgoing");
    const result = incomes.map((i) => i.amount);
    const sum = result.reduce((acc, el) => acc + el, 0);
    return sum;
};

const filterBalance = (userId, data) => {
    const filter = data.filter((data) => data.email === userId);
    return filter;
};

export { calcIncome, calcOutgoing, filterBalance };
