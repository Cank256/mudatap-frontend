<template>
	<div id="timetracker">
		<!-- breadcrumb -->
		<nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
			<ol class="list-none p-0 inline-flex">
				<li class="flex items-center text-blue-500">
					<a href="#" class="text-gray-700">Home</a>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>
				<li class="flex items-center">
					<a href="#" class="text-gray-600">Time Tracker</a>
				</li>
			</ol>
		</nav>
		<!-- breadcrumb end -->

    <!-- Analytic blocks -->
		<div class="flex flex-wrap -mx-3 mb-20">
			<div class="w-1/2 xl:w-1/4 px-3">
				<div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
          <svg class="h-16 w-16 text-blue-400 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
            <path stroke="none" d="M0 0h24v24H0z"/> 
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <line x1="11" y1="15" x2="12" y2="15" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
					<div class="text-gray-700">
						<p class="font-semibold text-3xl">160</p>
						<p>Days Present</p>
					</div>
				</div>
			</div>

			<div class="w-1/2 xl:w-1/4 px-3">
				<div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
					<svg class="h-16 w-16 text-blue-400 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
					<div class="text-gray-700">
						<p class="font-semibold text-3xl">10</p>
						<p>Leaves Taken</p>
					</div>
				</div>
			</div>

			<div class="w-1/2 xl:w-1/4 px-3">
				<div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
					<svg class="h-16 w-16 text-blue-400 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M3 21v-13l9-4l9 4v13" />
            <path d="M13 13h4v8h-10v-6h6" />
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
          </svg>
					<div class="text-gray-700">
						<p class="font-semibold text-3xl">31</p>
						<p>Leave Available</p>
					</div>
				</div>
			</div>

			<div class="w-1/2 xl:w-1/4 px-3">
				<div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
					<svg class="h-16 w-16 text-blue-400 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="3.6" y1="9" x2="20.4" y2="9" />
            <line x1="3.6" y1="15" x2="20.4" y2="15" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
					<div class="text-gray-700">
						<p class="font-semibold text-3xl">5/20</p>
						<p>Holidays Taken</p>
					</div>
				</div>
			</div>
		</div>
    <!-- Analytic blocks end -->

    <!-- Clockin -->
    <div class="flex flex-wrap -mx-2 mb-20">
			<div class="w-[25rem] px-8">
				<div class="w-full bg-green-500 border hover:bg-green-600 text-white rounded-lg flex items-center p-6 mb-6 xl:mb-0">
          <svg class="h-8 w-8 text-white mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>
					<div class="text-white">
						<p class="font-semibold text-2xl">Clockin</p>
					</div>
				</div>
			</div>

			<div class="w-[25rem] px-8">
				<div class="w-full bg-red-500 border hover:bg-red-600 text-white rounded-lg flex items-center p-6 mb-6 xl:mb-0">
          <svg class="h-8 w-8 text-white mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>
					<div class="text-white">
						<p class="font-semibold text-2xl">Clockout</p>
					</div>
				</div>
			</div>

			<div class="w-[25rem] px-8">
				<div class="w-full bg-orange-500 border hover:bg-orange-600 text-white rounded-lg flex items-center p-6 mb-6 xl:mb-0">
          <svg class="h-8 w-8 text-white mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
					<div class="text-white">
						<p class="font-semibold text-2xl">Custom</p>
					</div>
				</div>
			</div>
    </div>
    <!-- Clockin end -->
    
    <!-- Task List -->
    <div v-for="(task, index) in tasks" :key="index" class="mb-4 p-4 border rounded-lg bg-white">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold">{{ task.name }}</h3>
          <p class="text-sm text-gray-600">{{ task.description }}</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">{{ task.time }}</p>
        </div>
      </div>
    </div>
    
	</div>
</template>

<script>
export default {
	name: "TrackerPage",
	data() {},
	mounted() {},
};
</script>
