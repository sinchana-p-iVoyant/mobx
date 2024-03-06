import { action, makeObservable, observable } from "mobx";

class Athlete {
    name: string
    age: number
    teamHistory: string[]
    salary: number

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.teamHistory = [];
        this.salary = salary;

        makeObservable(this, {
            tradePlayer: action,
            wishHappyBirthday: action,
            name: observable,
            age: observable,
            teamHistory: true,
            salary: true
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