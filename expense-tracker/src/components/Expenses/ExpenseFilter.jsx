import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const handleYear = e =>{
        props.onChangeFilter(e.target.value);
    }

  return (
    <form >
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
    </form>
  );
};

export default ExpensesFilter;
