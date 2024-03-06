import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react-lite'
import { useTeamStore } from './TeamStore';
import Athlete from './Athlete';

type FormState = {
    // total: number;
    name: string;
    age: number;
    salary: number;
}

const initialState: FormState = {
    // total: 0,
    name: "",
    age: 0,
    salary: 0
}

let formState: FormState = observable({
    // total: 0,
    name: "",
    age: 0,
    salary: 0
})

// const calculateTotal = action( (formState: FormState) => {
//     console.log(formState.total)
//     formState.total = formState.years * formState.salary;
//     console.log(formState.total)
// })

const MoneyForm = () => {

    // const totalValue = computed(() => formState.salary * formState.years)

    const { totalYearlyCost, addPlayer, setPlayers } = useTeamStore()
    // const player = new Athlete(formState.name, formState.age, formState.salary)


    // Utility Function:
    // toJS: it takes a observable & it converts into non-observable value.
    // console.log(toJS(totalYearlyCost))

  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
        <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
        {/* <p>Total: {totalValue.get()}</p>             ChatGPT*/} 
        <>Total: {totalYearlyCost} Million</>
        <input 
        type='text' 
        placeholder='Player name...' 
        style={{ height: '40px' }} 
        value={formState.name}
        onChange={action((e) => {
            formState.name = e.target.value
        })} />
        <input 
            type='text' 
            placeholder='Player age...' 
            style={{ height: '40px' }} 
            value={formState.age}
            onChange={action((e) => {
                formState.age = Number(e.target.value)
            })} />
        <input 
            type='text' 
            placeholder='Yearly salary...' 
            style={{ height: '40px' }} 
            value={formState.salary}
            onChange={action((e) => {
                formState.salary = Number(e.target.value)
            })} />

        <button 
            type='button' 
            onClick={(e) => {
                addPlayer(
                    new Athlete(formState.name, formState.age, formState.salary)
                )
                formState = initialState
            }}>
            Add Player
        </button>
    </div>
  )
}

export default observer(MoneyForm)




