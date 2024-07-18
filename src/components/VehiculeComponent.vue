<template>
    <div class="relative">
        <div id="ElementPrint"  class="w-[98%] mx-auto   flex justify-between">
            <div class="text-lg font-semibold">
                <p>Liste des vehicules</p>
            </div>
            <div class="flex space-x-4 items-center print:hidden">
                <button @click="PrintList"
                    class="flex space-x-2 items-center text-green-500  border border-green-500 px-4 py-1 rounded hover:bg-green-500 hover:text-white duration-300">
                    <span>Imprimer la liste</span>
                </button>
            </div>
        </div>
        <div>
            <section class="container px-2 mx-auto">
                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50 ">
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>vehicule </span>
                                                </button>
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                enregistrer le
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                modele
                                            </th>

                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                couleur
                                            </th>
                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                nombre de place
                                            </th>

                                            <th scope="col"
                                                class="px-4 print:hidden py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y  dark:divide-gray-700 ">
                                        <tr v-for="vehicule in vehicules" :key="vehicule.id">
                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 class="font-medium text-gray-800  ">{{
                                            vehicule.marque }}</h2>
                                                    <p class="text-sm font-normal text-gray-600 ">
                                                        {{ vehicule.marque }}
                                                    </p>
                                                </div>
                                            </td>

                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div
                                                    class="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2  bg-[#02356A]">
                                                    {{ moment(vehicule.created_at).format("DD.MM.YYYY hh:mm") }}
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div
                                                    class="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2  bg-[#02356A]">
                                                    {{ vehicule.etat }}
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 class="text-gray-700 ">
                                                        {{ vehicule.couleur }}
                                                    </h4>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 class="text-gray-700 ">
                                                        {{ vehicule.nombre_place }}
                                                    </h4>
                                                </div>
                                            </td>
                                            <td class="px-4 print:hidden py-4 text-sm whitespace-nowrap flex space-x-2">
                                                <div>
                                                    <button @click="DeleteVehicule(vehicule)"
                                                        class="px-3 py-1 bg-red-500 border border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-semibold rounded">supprimer</button>
                                                </div>
                                                <div>
                                                    <button @click="ShowVehicule(vehicule)"
                                                        class="px-3 py-1 bg-green-500 border border-green-500 hover:bg-transparent duration-500 hover:text-green-500 text-white font-semibold rounded">pieces</button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr v-if="CarLoading">
                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div class="space-y-3">
                                                    <div class="w-16 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                                    <div class="w-32 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div class="w-36 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="w-36 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="w-36 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                            <td class="px-4 pt-8 text-sm whitespace-nowrap flex space-x-2">
                                                <div class="w-52 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>
                            <div v-if="vehicules.length == 0 && !CarLoading" class="w-full mt-16 text-center text-xl text-[#02356A] flex items-center justify-center">
                                <span>pas de vehicule pour l'instant</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    methods: {
        DeleteVehicule(vehicule) {
            this.axios.delete(this.$store.state.api + "Vehicule/" + vehicule.id, this.$store.state.config)
                .then(({ data }) => {
                    this.vehicules.filter((item, index) => item.id == vehicule.id ? this.vehicules.splice(index, 1) : "")
                    console.log(data)
                }).catch(error => {
                    console.log(error)
                })
        },
        ShowVehicule(item) {
            window.emitter.emit("Vehicule", item);
        },

        PrintList(){
            const ElementPrint = document.getElementById("ElementPrint");

            const tempPage = document.createElement("div");
            tempPage.innerHTML = ElementPrint.innerHTML;

            window.print(tempPage)
        },
    },
    mounted() {
        this.CarLoading = true
        this.axios.get(this.$store.state.api + "AllVehicules", this.$store.state.config)
            .then(({ data }) => {
                this.CarLoading = false
                this.vehicules = data.data
            }).catch(error => {
                this.CarLoading = false
                console.log(error)
            })
    },
    data() {
        return {
            vehicules: [],
            CarLoading: false,
            moment:moment
        }
    },

}
</script>