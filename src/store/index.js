// src/store/index.js
import { createStore } from 'vuex'
import team from './modules/team';
import projects from './modules/projects';
import workspaces from './modules/workspaces';

export default createStore({
    modules: {
        team,
        projects,
        workspaces
    },
  state: {
      sideBarOpen: false
  },
  getters: {
      sideBarOpen: state => {
          return state.sideBarOpen
      }
  },
  mutations: {
      toggleSidebar (state) {
          state.sideBarOpen = !state.sideBarOpen
      }
  },
  actions: {
      toggleSidebar(context) {
          context.commit('toggleSidebar')
      }
  }
})