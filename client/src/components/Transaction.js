import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  //date format
  let dt = new Date(transaction.createdAt);
  let day = dt.getDate();
  let month = dt.getMonth() + 1;
  let year = dt.getFullYear();

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <div className="textgroom">{transaction.text}</div>  <div className="dateformat"> {day + "/" + month + "/" + year}</div> <span>{sign}<span>&#8377;</span>{numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
