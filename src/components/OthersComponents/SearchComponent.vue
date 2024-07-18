<template>
    <div class="px-3 space-y-4 ">
        <div class="text-xl font-semibold capitalize">
            <p>recherche un voyage</p>
        </div>
        <div class="w-full ">
            <form @submit.prevent="search" class="  flex items-center gap-6 bg-white  rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12">
                    <!-- first input -->
                    <div class="flex border rounded bg-[#02356A] items-center p-4 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="size-5 text-white">
                            <path fill-rule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd" />
                        </svg>
                        <input type="text" v-model="form.ville_depart" placeholder="ville de depart"
                            class="bg-[#02356A] max-w-full focus:outline-none text-white" />
                    </div>

                    <!-- second input -->
                    <div class="flex border rounded bg-[#02356A] items-center p-4 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="size-5 text-white">
                            <path fill-rule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd" />
                        </svg>
                        <input type="text" required v-model="form.ville_destination" placeholder="ville de destination"
                            class="bg-[#02356A] max-w-full focus:outline-none text-white" />
                    </div>

                    <!-- third input -->
                    <div class="flex border rounded text-white bg-[#02356A] items-center p-4 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                        </svg>

                        <input type="date"  v-model="form.date_depart" placeholder="heure de depart"
                            class="bg-[#02356A] max-w-full focus:outline-none text-white" />
                    </div>
                </div>
                <div class="w-1/12">
                    <button class="p-4 border  rounded-md bg-gray-800 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        <div class="w-[95%]  space-y-4">
            <div class="">
                <p>Résultats {{ results.length }}</p>
            </div>
            <div class="flex space-x-2 flex-wrap justify-center">
                <router-link 
                :to="{ name: 'detail', query: { id: item.id, ville_depart: item.ville_depart,heure_depart:item.heure_depart, ville_destination: item.ville_destination,prix:item.prix} }"
                  v-for="item in results" :key="item.id" class=" w-[34%] bg-white duration-500 border hover:border-[#02356A] hover:shadow-lg rounded p-3 ">
                    <div class="flex justify-between items-center w-full">
                        <div>
                            <div class="text-lg ">
                                <span class="font-semibold capitalize">{{ item.ville_depart }}</span> A <span
                                    class="capitalize font-semibold">{{ item.ville_destination }}</span>
                            </div>
                            <div class="text-sm ">
                                <span class="font-light capitalize">{{ item.point_rencontre }}</span> vers <span
                                    class="capitalize font-light">{{ item.point_destination }}</span>
                            </div>
                            <div class="text-sm ">
                                <span class="font-light capitalize">

                                </span>
                            </div>
                        </div>

                        <div class="">
                            <div class="">
                                <span>{{ item.heure_depart }}</span>
                            </div>
                            <div class="">
                                <span>{{ item.prix+" XAF" }}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div v-if="SearchLoading" class="flex space-x-2 flex-wrap justify-center ">
                <div v-for="index in 15" :key="index" class=" w-[32%] bg-white duration-500 border hover:border-slate-200 hover:shadow-lg m-2 rounded p-3 ">
                    <div class="flex justify-between items-center w-full">
                        <div class="space-y-1">
                            <div class="w-32 h-3 rounded bg-slate-200 animate-pulse"></div>
                            <div class="w-20 h-3 rounded bg-slate-200 animate-pulse"></div>
                            <div class="w-16 h-3 rounded bg-slate-200 animate-pulse"></div>
                        </div>

                        <div class="space-y-2">
                            <div class="w-16 h-3 rounded bg-slate-200 animate-pulse"></div>
                            <div class="w-16 h-3 rounded bg-slate-200 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                ville_depart: "",
                ville_destination: "",
                date_depart: "",
            },
            results:[],
            SearchLoading:false,
        }
    },
    methods:{
        search() {
            this.SearchLoading = true
            let data = new FormData();
            data.append("ville_depart",this.form.ville_depart)
            data.append("ville_destination",this.form.ville_destination)
            data.append("date_depart",this.form.date_depart)
            this.axios.post(this.$store.state.api+"search",data)
            .then(({data})=>{
                this.SearchLoading = false
                this.results = data.data
            }).catch(error=>{
                this.SearchLoading = false
                console.log(error)
            })
        },
    }

}
</script>