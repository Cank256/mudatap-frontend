// src/store/modules/team.js
import axios from 'axios';

const state = {
    team: [],
    loading: false,
    error: null,
    searchQuery: ''
};

const getters = {
    teamMembers: (state) => state.team,
    loading: (state) => state.loading,
    error: (state) => state.error,
    filteredTeam: (state) => {
        return state.team.filter(member => {
            return (
                member.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                member.email.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                member.workspace.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                member.department.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                member.role.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        });
    },
    searchQuery: (state) => state.searchQuery
};

const mutations = {
    SET_TEAM(state, team) {
        state.team = team;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
    SET_SEARCH_QUERY(state, query) {
        state.searchQuery = query;
    }
};

const actions = {
    async fetchTeam({ commit }) {
        commit('SET_LOADING', true);
        try {
            const response = await axios.get('http://localhost:3000/api/team');
            commit('SET_TEAM', response.data);
        } catch (error) {
            commit('SET_ERROR', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    setSearchQuery({ commit }, query) {
        commit('SET_SEARCH_QUERY', query);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};