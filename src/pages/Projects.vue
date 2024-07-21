<template>
	<div id="projects">
		<!-- breadcrumb -->
		<nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
			<ol class="list-none p-0 inline-flex">
				<li class="flex items-center text-blue-500">
					<a href="/" class="text-gray-700">Dashboard</a>
					<svg
						class="fill-current w-3 h-3 mx-3"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
					>
						<path
							d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
						/>
					</svg>
				</li>
				<li class="flex items-center">
					<a href="#" class="text-gray-600">Projects</a>
				</li>
			</ol>
		</nav>
		<!-- breadcrumb end -->

		<div class="lg:flex justify-between items-center mb-6">
			<p class="text-2xl font-semibold mb-2 lg:mb-0"></p>
			<button
				class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
			>
				Add Project
			</button>
		</div>

        <div class="lg:flex justify-between items-center mb-6">
            <p class="text-2xl font-semibold mb-2 lg:mb-0"></p>
            <div class="flex">
                <input 
                    v-model="searchQuery" 
                    placeholder="Search..." 
                    class="border rounded-lg px-4 py-2 mr-2"
                />
            </div>
        </div>

		<!-- team list -->

		<div class="bg-white rounded-lg overflow-hidden">
			<div class="overflow-x-auto">
				<table class="w-full table-auto">
					<thead>
						<tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
							<th class="py-3 px-6 text-left">Name</th>
							<th class="py-3 px-6 text-left">Description</th>
							<th class="py-3 px-6 text-left">Manager</th>
							<th class="py-3 px-6 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="project in filteredProjects" :key="project.id"  class="text-gray-600 text-sm leading-normal">
							<td class="py-3 px-6 text-left">{{ project.name }}</td>
							<td class="py-3 px-6 text-left">{{ project.description }}</td>
							<td class="py-3 px-6 text-left">{{ project.manager }}</td>
							<td class="py-3 px-6 text-center">
								<button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-4 py-2 mr-2 text-white font-semibold shadow">Edit</button>
								<button class="bg-red-500 hover:bg-red-600 focus:outline-none rounded-lg px-4 py-2 text-white font-semibold shadow">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
        </div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: "ProjectsPage",
	computed: {
		...mapGetters('projects', ['filteredProjects', 'searchQuery'])
	},
	methods: {
		...mapActions('projects', ['fetchProjects', 'setSearchQuery'])
	},
	created() {
		this.fetchProjects();
	}
};
</script>
