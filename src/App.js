import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/rootSlice";

function App() {
  const [dates, setDates] = useState(null);

  const data = useSelector((state) => state.data);
  useEffect(() => {
    setDates(data);
  }, [data]);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setData(data));
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <div className='App'>
      <h2>Multiple Date Selector</h2>

      {dates && (
        <form>
          <select onChange={(e) => alert(`Selected Date: ${e.target.value}`)}>
            {dates?.date1 && (
              <option value={dates?.date1}>{dates?.date1}</option>
            )}
            {dates?.date2 && (
              <option value={dates?.date2}>{dates?.date2}</option>
            )}
            {dates?.date3 && (
              <option value={dates?.date3}>{dates?.date3}</option>
            )}
            {dates?.date4 && (
              <option value={dates?.date4}>{dates?.date4}</option>
            )}
            {dates?.date5 && (
              <option value={dates?.date5}>{dates?.date5}</option>
            )}
            {dates?.date6 && (
              <option value={dates?.date6}>{dates?.date6}</option>
            )}
            {dates?.date7 && (
              <option value={dates?.date7}>{dates?.date7}</option>
            )}
          </select>
        </form>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <label htmlFor='date'> Date 1</label>
          <input name='date1' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date'> Date 2</label>
          <input name='date2' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date3'> Date 3</label>
          <input name='date3' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date4'> Date 4</label>
          <input name='date4' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date5'> Date 5</label>
          <input name='date5' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date6'> Date 6</label>
          <input name='date6' type='date' ref={register} />
        </div>
        <div className='input-container'>
          <label htmlFor='date7'> Date 7</label>
          <input name='date7' type='date' ref={register} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
