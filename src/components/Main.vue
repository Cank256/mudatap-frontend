<!-- Main.vue -->
<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <SidebarComponent />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="{ 'overlay': sideBarOpen }" id="main-content">

        <NavbarComponent />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>

        <FooterComponent />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import SidebarComponent from '@/components/Sidebar.vue';
import NavbarComponent from '@/components/Navbar.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  name: 'MainComponent',
  computed: {
    ...mapState(['sideBarOpen']) // Map 'sideBarOpen' state from Vuex to computed property
  },
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  },
};
</script>