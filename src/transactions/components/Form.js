import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./form.css";
import List from "./List";
import { api } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { colorAct } from "../../redux/actions/colorAction";
import { getPercent } from "../../redux/actions/objActions";

const Form = () => {
  const tot = useSelector((state) => state.total);
  console.log(tot);
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [trans, setTrans] = useState();
  const [per, setPer] = useState();

  const submitTrans = async (data) => {
    // console.log(data);
    // e.preventDefault();
    // const { name, type, amount, date } = data;
    const val = await axios
      .post("http://localhost:5000/addtrans", {
        name: data.name,
        type: data.type,
        amount: data.amount,
        date: data.date,
      })
      .then((res) => dispatch(getPercent(res.data)))
      .catch((err) => console.log(err));
    if (val) {
      setPer(val);
    }
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
            <option value="Select categoery" defaultValue>
              Select
            </option>
            <option value="investment">Investment</option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div className="form-input">
            <input type="date" {...register("date")} />
          </div>

          <div className="form-input">
            <button className="border-btn">Make Transaction</button>
            {/* <button onClick={resetField()}>Reset</button> */}
          </div>
        </div>
      </form>
      <List />
    </div>
  );
};

export default Form;
