<template>
    <div class="relative">
        <div id="ElementPrint" class="w-full  mx-auto space-y-3 lg:space-x-0 -mt-6 print:-mt-0  flex flex-col lg:flex-row justify-between">
            <div class="text-lg font-semibold">
                <p>Liste des transactions</p>
            </div>
            <div class="flex space-y-2 lg:space-y-1 lg:space-x-4 flex-col lg:flex-row items-center print:hidden">
                <button @click="PrintList"
                    class="flex space-x-2 w-full text-center justify-center items-center text-green-500  border border-green-500 px-4 py-1 rounded hover:bg-green-500 hover:text-white duration-300">

                    <span class="">Imprimer la liste</span>
                </button>
            </div>
        </div>
        <div>
            <section class="container px-2 mx-auto">
                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-1 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50 ">
                                        <tr>
                                            <th scope="col"
                                                class="px-12 print:hidden py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">

                                            </th>
                                            <th scope="col"
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>libelle</span>
                                                </button>
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                date
                                            </th>

                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                heure
                                            </th>
                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                montant
                                            </th>
                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                auteur
                                            </th>

                                            <th scope="col"
                                                class="px-4 print:hidden py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class=" divide-y  dark:divide-gray-700 bg-white">
                                        <tr v-for="transaction in transactions" :key="transaction">
                                            <td class="p-4 print:hidden">
                                                <div v-if="transaction.status == 'credit'"
                                                    class="w-10 h-10 bg-green-500 rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="size-6 text-white">
                                                        <path fill-rule="evenodd"
                                                            d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </td>
                                            <td class="pl-4">
                                                <div class="text-sm">
                                                    {{ transaction.libelle }}
                                                </div>
                                            </td>
                                            <td class="pl-4">
                                                <div class="text-sm font-semibold">
                                                    {{ moment(transaction.date).format("DD.MM.YYYY") }}
                                                </div>
                                            </td>
                                            <td class="pl-4">
                                                <div class="text-sm font-semibold">
                                                    {{ moment(transaction.date).format("h:MM") }}
                                                </div>
                                            </td>
                                            <td class="pl-4">
                                                <div class="text-sm font-semibold text-green-500">
                                                    {{ transaction.montant + " XAF" }}
                                                </div>
                                            </td>
                                            <td class="pl-4">
                                                <button @click="Profile(transaction.user)"  class="text-sm font-semibold underline">
                                                    {{ transaction.user.name }}
                                                </button>
                                            </td>
                                            <td class="flex print:hidden space-x-3 items-center justify-center  pt-4">
                                                <div>
                                                    <button @click="DetailTransaction(transaction)"
                                                        class="px-3 py-1 bg-green-500 border border-green-500 hover:bg-transparent duration-500 hover:text-green-500 text-white font-semibold rounded text-sm">voir le detail</button>
                                                </div>
                                                
                                            </td>
                                        </tr>

                                        <!-- <tr v-if="TransactionLoading">
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
                                        </tr> -->


                                    </tbody>
                                </table>

                            </div>
                            <!-- <div class="flex justify-center items-center mt-5">
                                <div class="w-11/12 h-6 bg-slate-400 animate-pulse rounded-full" v-if="TransactionLoading"></div>
                            </div> -->

                            <div v-if="transactions.length == 0 && !TransactionLoading" class="w-full mt-16 text-center text-xl text-[#02356A] flex items-center justify-center">
                                <span>aucune transaction n'a été réalisée</span>
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
        DeleteTransaction(transaction) {
            window.emitter.emit("loading", true)
            this.axios.delete(this.$store.state.api + "DetailTransaction/" + transaction.id, this.$store.state.config)
                .then(({ data }) => {
                    window.emitter.emit("loading", false)
                    console.log(data)
                    this.$store.state.dashbaord[5] --
                    this.$store.state.transaction.filter((item, index) => item.id == transaction.id ? this.$store.state.transactionsplice(index, 1) : "");
                }).catch(err => {
                    window.emitter.emit("loading", false)
                    console.log(err)
                })
        },

        DetailTransaction(transaction) {
            window.emitter.emit("loading", true)
            this.axios.get(this.$store.state.api + "DetailTransaction/" + transaction.id, this.$store.state.config)
                .then(({ data }) => {
                    window.emitter.emit("loading", false)
                    window.emitter.emit("DetailTrans", data)
                    this.$store.state.transaction.filter((item, index) => item.id == transaction.id ? this.$store.state.transactionsplice(index, 1) : "");
                }).catch(err => {
                    window.emitter.emit("loading", false)
                    console.log(err)
                })
        },

        PrintList(){
            const ElementPrint = document.getElementById("ElementPrint");

            const tempPage = document.createElement("div");
            tempPage.innerHTML = ElementPrint.innerHTML;

            window.print(tempPage)
        },

        Profile(user){
            window.emitter.emit("ShowProfile", user)
        }
    },
    mounted() {
        this.TransactionLoading = true
        this.axios.get(this.$store.state.api + "AllTransactions", this.$store.state.config)
            .then(({ data }) => {
                this.TransactionLoading = false
                this.$store.state.transactions = data
            }).catch(err => {
                this.TransactionLoading = false
                console.log(err)
            })

    },
    data() {
        return {
            moment: moment,
            TransactionLoading:false
        }
    },

    computed: {
        transactions() {
            return this.$store.state.transactions;
        }
    }

}
</script>