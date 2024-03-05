import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

type FormState = {
    total: number;
    years: number;
    salary: number;
}

const formState: FormState = observable({
    total: 0,
    years: 0,
    salary: 0
})

const calculateTotal = action( (formState: FormState) => {
    console.log(formState.total)
    formState.total = formState.years * formState.salary;
    console.log(formState.total)
})

const MoneyForm = () => {

  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
        <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
        <p>Total: {formState.total}</p>
        <input 
        type='number' 
        placeholder='Years...' 
        style={{ height: '40px' }} 
        onChange={action((e) => {
            formState.years = Number(e.target.value)
        })} />
        <input 
            type='number' 
            placeholder='Yearly salary...' 
            style={{ height: '40px' }} 
            onChange={action((e) => {
                formState.salary = Number(e.target.value)
            })} />
        <button type='button' onClick={() => calculateTotal(formState)}>
            calculate Total
        </button>
    </div>
  )
}

export default observer(MoneyForm)