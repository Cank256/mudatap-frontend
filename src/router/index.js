import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/Main.vue'
import DashboardPage from '@/pages/Dashboard.vue'
import TrackerPage from '@/pages/Tracker.vue'
import CalendarPage from '@/pages/Calendar.vue'
import TeamPage from '@/pages/Team.vue'
import WorkspacesPage from '@/pages/Workspaces.vue'
import ProjectsPage from '@/pages/Projects.vue'

const routes = [
  { path: '/', redirect: { name: 'Dashboard' } },
  { path: '/dashboard', component: MainComponent, children: [
      { path: '', name: 'Dashboard', component: DashboardPage }
    ]
  },
  { path: '/tracker', component: MainComponent, children: [
      { path: '', name: 'Tracker', component: TrackerPage }
    ] 
  },
  { path: '/calendar', component: MainComponent, children: [
      { path: '', name: 'Calendar', component: CalendarPage }
    ] 
  },
  {
    path: '/team', component: MainComponent, children: [
      { path: '', name: 'Team', component: TeamPage}
    ]
  },
  {
    path: '/workspaces', component: MainComponent, children: [
      { path: '', name: 'Workspaces', component: WorkspacesPage}
    ]
  },
  {
    path: '/projects', component: MainComponent, children: [
      { path: '', name: 'Projects', component: ProjectsPage}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router