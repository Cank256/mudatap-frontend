// src/store/modules/projects.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const state = {
    projects: [],
    loading: false,
    error: null,
    searchQuery: ''
};

const getters = {
    projects: (state) => state.projects,
    loading: (state) => state.loading,
    error: (state) => state.error,
    filteredProjects: (state) => {
        return state.projects.filter(project => {
            return (
                project.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        });
    },
    searchQuery: (state) => state.searchQuery
};

const mutations = {
    SET_PROJECTS(state, projects) {
        state.projects = projects;
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
    async fetchProjects({ commit }) {
        commit('SET_LOADING', true);
        try {
            const response = await axios.get(apiUrl + 'projects');
            commit('SET_PROJECTS', response.data);
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