import { action, makeObservable, observable } from "mobx";

class Athlete {
    name: string
    age: number
    teamHistory: string[]

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.teamHistory = [];

        makeObservable(this, {
            tradePlayer: action,
            wishHappyBirthday: action,
            name: observable,
            age: observable,
            teamHistory: true,
        })
    }

    wishHappyBirthday() {
        this.age++;
    }

    tradePlayer(team: string) {
        this.teamHistory.push(team);
    }
}

export default Athlete;

// Cool thing about MobX:
// 1. It automatically handles the observable state for Collections (Collections: being Sets, Maps & Arrays)