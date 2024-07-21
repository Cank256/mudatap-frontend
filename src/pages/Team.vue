<template>
	<div id="timetracker">
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
					<a href="#" class="text-gray-600">Team</a>
				</li>
			</ol>
		</nav>
		<!-- breadcrumb end -->

		<div class="lg:flex justify-between items-center mb-6">
			<p class="text-2xl font-semibold mb-2 lg:mb-0"></p>
			<button
				class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
			>
				Add Team Member
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
                <!-- <button
                    class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow mr-2"
                    @click="exportTable"
                >
                    Export PDF
                </button>
                <button
                    class="bg-gray-500 hover:bg-gray-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
                    @click="printTable"
                >
                    Print
                </button> -->
            </div>
        </div>

		<!-- team list -->

		<div class="bg-white rounded-lg overflow-hidden">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Name</th>
                        <th class="py-3 px-6 text-left">Email</th>
                        <th class="py-3 px-6 text-left">Workspace</th>
                        <th class="py-3 px-6 text-center">Department</th>
                        <th class="py-3 px-6 text-center">Role</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in filteredTeam" :key="member.id"  class="text-gray-600 text-sm leading-normal">
                        <td class="py-3 px-6 text-left">{{ member.name }}</td>
                        <td class="py-3 px-6 text-left">{{ member.email }}</td>
                        <td class="py-3 px-6 text-left">{{ member.workspace }}</td>
                        <td class="py-3 px-6 text-left">{{ member.department }}</td>
                        <td class="py-3 px-6 text-center">{{ member.role }}</td>
                        <td class="py-3 px-6 text-center">
                            <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-4 py-2 mr-2 text-white font-semibold shadow">Edit</button>
                            <button class="bg-red-500 hover:bg-red-600 focus:outline-none rounded-lg px-4 py-2 text-white font-semibold shadow">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	</div>
</template>

<script>
export default {
	name: "TeamPage",
	data() {
		return {
			team: [
				{
					name: "Caleb Nkunze",
					email: "c.nkunze@lgfug.org",
					workspace: "Luigi Giussani Foundation",
					department: "Information Technology",
					role: "Manager",
				},
				{
					name: "John Muhangyi",
					email: "m.muhangyi@lgfug.org",
					workspace: "Luigi Giussani Foundation",
					department: "Programmes",
					role: "Director",
				},
				{
					name: "Kakeeto Jonathan",
					email: "logistics@lgfug.org",
					workspace: "Luigi Giussani Foundation",
					department: "Accounts",
					role: "Officer",
				},
				{
					name: "Josephine",
					email: "j.auma@lgfug.org",
					workspace: "Luigi Giussani Foundation",
					department: "Human Resources",
					role: "Officer",
				},
			],
            searchQuery: '',
			loading: true,
			error: null,
		};
	},
    computed: {
        filteredTeam() {
            return this.team.filter(member => {
                return (
                    member.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    member.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    member.workspace.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    member.department.toLowerCase().includes(this.searchQuery.toLowerCase())||
                    member.role.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            });
        }
    },
	created() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			try {
				this.loading = true;
				const response = await fetch("http://localhost:3000/api/team");
				this.team = await response.json();
			} catch (error) {
				this.error = error;
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>
