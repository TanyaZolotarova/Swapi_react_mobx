import {makeAutoObservable} from "mobx";

class SwapiStore {
    data = null;
    loading = false;
    error = null;
    query = '';

    constructor() {
        makeAutoObservable(this);
    }

    setQuery(newQuery) {
        this.query = newQuery;
    }

    async fetchData() {
        this.loading = true;
        this.error = null;

        try {
            const response = await fetch(`https://swapi.dev/api/${this.query}`);
            if (!response.ok) throw new Error('Error during data retrieval');
            this.data = await response.json();
        } catch (err) {
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    }

    clearData() {
        this.data = null;
        this.error = null;
        this.query = '';
    }
}

export const swapiStore = new SwapiStore();
