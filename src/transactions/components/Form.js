import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import List from "./List";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const submitTrans = (data) => {
    console.log(data);
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h3 className="font-bold pb-4 text-xl">Transactions</h3>
      <form id="form" onSubmit={handleSubmit(submitTrans)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="form-input"
              {...register("name")}
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="investment" defaultValue>
              Investment
            </option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              {...register("amount")}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="form-input">
            <input type="date" {...register("date")} />
          </div>

          <div className="form-input">
            <button className="border-btn">Make Transaction</button>
          </div>
        </div>
      </form>
      <List />
    </div>
  );
};

export default Form;
