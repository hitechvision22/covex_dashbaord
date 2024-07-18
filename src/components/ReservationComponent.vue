<template>
    <div>
        <div>
            <div id="ElementPrint"  class="w-[98%] mx-auto   flex justify-between">
                <div class="text-lg font-semibold">
                    <p>Liste des reservations</p>
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
                                                        <span>trajet </span>
                                                    </button>
                                                </th>

                                                <th scope="col"
                                                    class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    reserveur
                                                </th>

                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    nombre de places
                                                </th>
                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm  font-normal text-left rtl:text-right text-gray-500 ">
                                                    montant
                                                </th>
                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                    etat
                                                </th>
                                                <th class="print:hidden"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-700 ">
                                            <tr v-for="reservation in reservations" :key="reservation.id">
                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 class="font-medium text-gray-800 ">
                                                            {{ reservation.trajet.ville_depart }}
                                                        </h2>
                                                        <p class="text-sm font-normal text-gray-600 ">
                                                            {{ reservation.trajet.ville_destination }}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div
                                                        class="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2  bg-[#02356A]">
                                                        {{ reservation.user.name }}
                                                    </div>
                                                </td>
                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div class="ml-10">
                                                        <h4 class="text-gray-700 ">
                                                            {{ reservation.nbr_place }}
                                                        </h4>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h4 class="text-gray-700 ">
                                                            {{ reservation.trajet.prix * reservation.nbr_place }}
                                                        </h4>
                                                    </div>
                                                </td>

                                                <td class="px-4 py-4 flex space-x-4">
                                                    <div>
                                                        <div
                                                            class="px-3 py-1 text-sm mt-2 bg-blue-500 border border-blue-500  duration-500  text-white font-light rounded-full">
                                                            {{ moment(new Date()).format('DD.MM.YYYY') >
                                                moment(reservation.trajet.date_depart).format("DD.MM.YYYY")
                                                ? 'dépassée' : 'active' }}
                                                        </div>
                                                    </div>
                                                    
                                                </td>
                                                <td class="px-4 items-center print:hidden">
                                                    <div class="space-x-3">
                                                        <button @click="DeleteReserv(reservation)"
                                                            class="px-3 py-1 text-sm bg-red-500 border border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-light rounded">
                                                            supprimer
                                                        </button>
                                                        <button @click="ShowReservation(reservation)"
                                                            class="px-3 py-1 bg-[#02356A] border  border-[#02356A] hover:bg-transparent duration-500 hover:text-[#02356A] text-white font-semibold rounded text-sm">
                                                            Discussions</button>
                                                    </div>
                                                </td>
                                                
                                            </tr>

                                            <tr v-if="reservLoading">
                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div class="space-y-3">
                                                        <div class="w-16 h-4 bg-slate-400 animate-pulse rounded-full">
                                                        </div>
                                                        <div class="w-20 h-4 bg-slate-400 animate-pulse rounded-full">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div class="w-32 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                </td>
                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div class="w-32 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                </td>
                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div class="w-32 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                </td>

                                                <td class="px-4 pt-7 flex space-x-4">
                                                    <div class="w-32 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-if="reservations.length == 0 && !reservLoading"
                                    class="w-full mt-16 text-center text-xl text-[#02356A] flex items-center justify-center">
                                    <span>Aucune reservation pour l'instant</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    mounted() {
        this.reservLoading = true
        this.axios.get(this.$store.state.api + "reservation", this.$store.state.config)
            .then(({ data }) => {
                this.reservLoading = false
                this.reservations = data.data
            })
            .catch(error => {
                this.reservLoading = false
                console.log(error)
            })
    },
    data() {
        return {
            reservations: [],
            moment: moment,
            reservLoading: false
        }
    },
    methods: {
        DeleteReserv(reservation) {
            this.axios.delete(this.$store.state.api + "reservation/" + reservation.id, this.$store.state.config)
                .then(({ data }) => {
                    console.log(data)
                    this.reservations.filter((item, index) => item.id == reservation.id ? this.reservations.splice(index, 1) : 0)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        PrintList(){
            const ElementPrint = document.getElementById("ElementPrint");

            const tempPage = document.createElement("div");
            tempPage.innerHTML = ElementPrint.innerHTML;

            window.print(tempPage)
        },

        ShowReservation(reservation){
            window.emitter.emit("ShowReservation",reservation)
        }
    },
}
</script>