import React, { useContext, useRef } from "react";
import { makeAutoObservable } from "mobx";
import Athlete from "./Athlete";

export default class TeamStore {
    players: Athlete[] = [];

    constructor(players: Athlete[]) {
        this.players = []
        if(players) {
            this.players = players
        }
        makeAutoObservable(this);
    }
    
    // ----------

    state: string = "New York";
    setState = (state: string) => {
        this.state = state
    }

    mascot: string = "";
    setMascot = (mascot: string) => {
        this.mascot = mascot;
    }

    setPlayers = (players: Athlete[]) => {
        this.players = players;
    }

    get teamName(): string {
        return `${this.state} ${this.mascot}`
    }

    get totalYearlyCost(): number {
        return this.players.reduce(
            (totalSalary, currentAthletes) => totalSalary + currentAthletes.salary,
            0
        )
    }

    addPlayer(player: Athlete) {
        this.players.push(player)
    }
}

const TeamStoreContext = React.createContext<TeamStore>(
    null as unknown as TeamStore
)

export const useTeamStore = () => useContext(TeamStoreContext)

type Props = {
    children: React.ReactNode,
    players: Athlete[]
}

export function TeamStoreProvider ({children, players}: Props) {
    const store = useRef(new TeamStore(players))
    console.log(store)

    return (
        <TeamStoreContext.Provider value={store.current}>
            {children}
        </TeamStoreContext.Provider>
    )
}