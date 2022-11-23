import HttpUtils from '@/util/httpUtils';

// import store from "@/store";

const timestamp = Date.now();

class EventsModule {
    constructor() {
        this.state = {
            count: 10,
            events: null,
            events_is_free: null,
            events_not_free: null,
            favorites: null,
            date: null,
            todaysdate: timestamp,
            location: 'msk',
        };
        this.getters = {
            getLoader: (state) => { //Loader
                return state.load;
            },
            getCount: (state) => {
                return state.count;
            },
            getLocation: state => {
                return state.location
            },
            getDate: state => {
                return state.todaysdate
            },
            getEvents: state => {
                return state.events
            },
            getEventsisfree: state => {
                return state.events_is_free
            },
            getEventsnotfree: state => {
                return state.events_not_free
            },
            getEventsfavorites: state => {
                return state.events_favorites
            },
            getEventsdate: state => {
                return state.events_date
            },
        };
        this.mutations = {
            loadingForms (state, payload) { //Loader
                state.load = payload;   
            },
            setEvents: (state, payload) => {
                state.events = payload;
            },
            setEventsisfree: (state, payload) => {
                state.events_is_free = payload;
            },
            setEventsisfreeSet: (state, payload) => {
                state.events = state.events_is_free;
            },
            setEventsnotfree: (state, payload) => {
                state.events_not_free = payload;
            },
            setEventsnotfreeSet: (state, payload) => {
                state.events = state.events_not_free;
            },
            setEventsfavorites: (state, payload) => {
                state.events_favorites = payload;
            },
            setEventsfavoritesSet: (state, payload) => {
                state.events = state.events_favorites;
            },
            setEventsdate: (state, payload) => {
                state.events_date = payload;
            },
            setEventsdateSet: (state, payload) => {
                state.events = state.events_date;
            },
        };
        this.actions =  {
            loadingForms({commit, state}, payload) { //Loader
                commit('loadingForms', payload);
            },
            loadEvents({commit, state}, payload) {
                commit('loadingForms', true);
                HttpUtils.sendAsyncGetRequest('https://kudago.com/public-api/v1.4/events/?order_by=-id&location=' + this.getters.getLocation + '&fields=id,title,price,description,short_title,dates,images&page_size=20&page=' + this.getters.getCount, (result)=>{
                commit('setEvents', result.results);
                    commit('loadingForms', false);
                }, null, (error)=>{});
            },
            loadEventsisfree({commit, state}, payload) {
                commit('loadingForms', true);
                HttpUtils.sendAsyncGetRequest('https://kudago.com/public-api/v1.4/events/?order_by=-id&location=' + this.getters.getLocation + '&is_free=true&fields=id,title,price,description,short_title,dates,images&page_size=20&page=' + this.getters.getCount, (result)=>{
                commit('setEventsisfree', result.results);
                    commit('loadingForms', false);
                }, null, (error)=>{});
            },
            loadEventsnotfree({commit, state}, payload) {
                commit('loadingForms', true);
                HttpUtils.sendAsyncGetRequest('https://kudago.com/public-api/v1.4/events/?order_by=-id&location=' + this.getters.getLocation + '&is_free=0&fields=id,title,price,description,short_title,dates,images&page_size=20&page=' + this.getters.getCount, (result)=>{
                commit('setEventsnotfree', result.results);
                    commit('loadingForms', false);
                }, null, (error)=>{});
            },
            loadEventsfavorites({commit, state}, payload) {
                commit('loadingForms', true);
                HttpUtils.sendAsyncGetRequest('https://kudago.com/public-api/v1.4/events/?order_by=favorites_count&location=' + this.getters.getLocation + '&fields=id,title,price,description,short_title,dates,images&page_size=20&page=' + this.getters.getCount, (result)=>{
                commit('setEventsfavorites', result.results);
                    commit('loadingForms', false);
                }, null, (error)=>{});
            },
            loadEventsdate({commit, state}, payload) {
                commit('loadingForms', true);
                HttpUtils.sendAsyncGetRequest('https://kudago.com/public-api/v1.4/events/?order_by=-id&location=' + this.getters.getLocation + '&actual_since=' + this.getters.getDate + '&fields=id,title,price,description,short_title,dates,images&page_size=20&page=' + this.getters.getCount, (result)=>{
                commit('setEventsdate', result.results);
                    commit('loadingForms', false);
                }, null, (error)=>{});
            },
        };
    }
}; 

export default new EventsModule();