// src/store/modules/workspaces.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const state = {
    workspaces: [],
    loading: false,
    error: null,
    searchQuery: ''
};

const getters = {
    workspaces: (state) => state.workspaces,
    loading: (state) => state.loading,
    error: (state) => state.error,
    filteredWorkspaces: (state) => {
        return state.workspaces.filter(workspace => {
            return (
                workspace.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        });
    },
    searchQuery: (state) => state.searchQuery
};

const mutations = {
    SET_WORKSPACES(state, workspaces) {
        state.workspaces = workspaces;
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
    async fetchWorkspaces({ commit }) {
        commit('SET_LOADING', true);
        try {
            const response = await axios.get(apiUrl + 'workspaces');
            commit('SET_WORKSPACES', response.data);
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