
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import { useState } from "react";
import ExpenseList from './ExpenseList';
import ExpenseCharts from './ExpenseCharts';
const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expense">
            <ExpenseFilter
                value={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseCharts expenses={filteredExpense} />
            <ExpenseList items={filteredExpense} />
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
        </Card>
    );
};

export default Expense;
