import { VOTES } from "./useStore";

export default class Store{
  constructor(name=VOTES, callback) {
    this.localStorage = window.localStorage;
    this.getLocalStorage( name ) || this.setLocalStorage( name, {} );

    callback && callback();
  }

  getLocalStorage(name=VOTES) {
    return JSON.parse( this.localStorage.getItem( name ) )
  }

  setLocalStorage(name=VOTES, item) {
    this.localStorage.setItem( name, JSON.stringify( item ) );
  }
};
