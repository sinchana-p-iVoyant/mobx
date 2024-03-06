import { observer } from 'mobx-react'
import React from 'react'
import Athlete from './Athlete'
import TradeForm from './TradeForm';
import { useTeamStore } from './TeamStore';

// const lebronJames = new Athlete('Lebron James', 37, 9);
// const stephCurry = new Athlete('Steph Curry', 34, 5);

const Roster = () => {
    const { players } = useTeamStore() 
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Teams</th>
                <th>Trade Form</th>
                <th>It is their Birthday</th>
                <th>Salary</th>
            </tr>
            {
                players.map((athlete) => {
                    return (
                        <tr key={athlete.name}>

                            <td>{athlete.name}</td>
                            <td>{athlete.age}</td>
                            <td>{athlete.teamHistory}</td>
                            <td><TradeForm athlete={athlete} /> </td>
                            <td>
                                <button type='button' style={{ width: '100%', height: '2.5rem', fontSize: '1rem' }} onClick={() => athlete.wishHappyBirthday()}>
                                    🎈Wish Happy Birthday 🥳🎉
                                </button>
                            </td>
                            <td>{athlete.salary}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default observer(Roster)


// Note:
// This is how the component is going to be aware that it needs to re-render/ have a reaction based off updating our athletes.
// observer: is a Higher order component & Wrap our 'Roster' component. And this lets MobX know that, this component is listening into some state values from our Observables, from Athletes for example: name or age & it should update whenever those values are updated as well.

