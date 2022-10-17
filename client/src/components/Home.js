import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from '../redux/action';

import './Home.css';

function Home() {
    const balance = useSelector((state) => state.balance);
    const income = useSelector((state) => state.income);
    const outgoing = useSelector((state) => state.outgoing);
    const userId = localStorage.getItem('userEmail');

    const dispatch = useDispatch();

    balance?.sort((a, b) => b.id - a.id);

    const totalValue = income - outgoing;

    useEffect(() => {
        dispatch(getBalance(userId));
    }, []);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row gap-4 justify-content-center'>
                    <div
                        style={{ height: '200px' }}
                        className='col-3 mr-5 bgContainerrrr d-flex flex-wrap mt-5 '
                    >
                        <div className='container'>
                            <div className='INGRESO'>
                                <p className='font-weight-bold'>INCOME</p>
                                <p
                                    style={{ marginTop: '-10px' }}
                                    className='font-weight-bold display-6'
                                >
                                    {income}
                                </p>
                            </div>
                            <div className='EGRESO'>
                                <p className='font-weight-bold'> OUTGOING</p>
                                <p
                                    style={{ marginTop: '-10px' }}
                                    className='font-weight-bold display-6'
                                >
                                    {outgoing}
                                </p>
                            </div>
                            <div className='TOTAL'>
                                <p className='font-weight-bold'>TOTAL</p>
                                <p
                                    style={{ marginTop: '-10px' }}
                                    className={
                                        totalValue < 0
                                            ? 'text-danger  font-weight-bold display-6'
                                            : 'text-success font-weight-bold display-6'
                                    }
                                >
                                    {totalValue}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-7   mb-5 mt-5'>
                        <table class='table  text-center '>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className=' bg-primary border-0 '
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope='col'
                                        className=' bg-primary border-0'
                                    >
                                        CONCEPT
                                    </th>
                                    <th
                                        scope='col'
                                        className=' bg-primary border-0'
                                    >
                                        AMOUNT
                                    </th>
                                    <th
                                        scope='col'
                                        className=' bg-primary border-0'
                                    >
                                        TYPE
                                    </th>
                                    <th
                                        scope='col'
                                        className=' bg-primary border-0'
                                    >
                                        DATE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {balance?.slice(0, 10).map((el) => (
                                    <tr>
                                        <th
                                            scope='row'
                                            className='table-dark border-0'
                                        >
                                            {el.id}
                                        </th>
                                        <td className='table-dark border-0'>
                                            {el.concept}
                                        </td>
                                        <td className='table-dark border-0'>
                                            {el.amount}
                                        </td>
                                        <td
                                            className={`${
                                                el.type === 'income'
                                                    ? 'text-success h4'
                                                    : 'text-danger  h4'
                                            } table-dark border-0`}
                                        >
                                            {el.type.toUpperCase()}
                                        </td>
                                        <td className='table-dark border-0'>
                                            {el.created_date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
