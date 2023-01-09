import axios from 'axios';


//------------------------------------
const state = {
    countries:[],
};
//------------------------------------
const getters = {
    GetCountries: (state) => state.countries,
    
};
//------------------------------------
const actions = {
    
    async fetchCountries({ commit }, id) {
        const response = await axios.get('https://countryapi.io/api/all?apikey=4gVfoWFBxVmPeLBNbKccdEw30hh1yRJJdN1QvemJ');
        console.log(response);
        commit('setCountries', response.data);
    },
    
    async register({ commit, state }, obj) {

        const response = await axios.post('https://localhost:7258/api/ManagerRoles/', obj);
        alert("OK");
    },

    

};
//------------------------------------
const mutations = {
    setCountries: (state, countries) => (state.countries = countries),
};
//------------------------------------
export default {
    state,
    getters,
    mutations,
    actions
};
