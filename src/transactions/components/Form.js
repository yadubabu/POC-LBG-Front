import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./form.css";
import List from "./List";
import { api } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { colorAct } from "../../redux/actions/colorAction";
const Form = () => {
  const tot = useSelector((state) => state.color);
  console.log(tot);
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [trans, setTrans] = useState([{}]);

  const submitTrans = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/addtrans", {
        name,
        type,
        amount,
        date,
      })
      .then((res) => dispatch(colorAct(res.data)))
      .catch((err) => console.log(err));
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h3 className="font-bold pb-4 text-xl">Transactions</h3>
      <form id="form" onSubmit={submitTrans}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="form-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <select
            className="form-input"
            onChange={(e) => setType(e.target.value)}
          >
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
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input type="date" onChange={(e) => setDate(e.target.value)} />
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
