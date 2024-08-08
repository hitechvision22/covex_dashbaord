<template>
    <div class=" flex flex-col items-center p-4 md:p-8 lg:p-12">
        <div v-if="isLoading" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div class="flex flex-col items-center  rounded-lg">
                <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-custom-blue"></div>
            </div>
        </div>

        <header class="bg-white shadow-md w-full max-w-4xl rounded-lg p-6 mb-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <h1 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-0">Mon Portefeuille</h1>
                <div class="flex items-center space-x-4">
                    <div>
                        <span class="text-lg md:text-xl text-gray-600">Solde : </span>
                        <strong class="text-xl md:text-2xl text-custom-blue">{{ this.montant }}
                            FCFA</strong>
                    </div>
                    <button @click="refreshBalance"
                        class="p-3 bg-custom-blue text-white rounded-full shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582c.896 0 1.337-1.084.707-1.707L3 4l1.71-1.71c.63-.63 1.715-.189 1.715.707V9H4zm0 5h.582a1 1 0 000-2H4V4c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 011.414 1.414L6.414 4H10a1 1 0 000-2H4v5a1 1 0 000 2zm16 0v-5h-.582a1 1 0 00-1.415 1.415l1.415 1.415H14a1 1 0 000 2h5v-5a1 1 0 00-1.707-.707L17 3l1.71-1.71c.63-.63 1.715-.189 1.715.707v5h-.582zm-4 9v5h-.582a1 1 0 01-1.415-1.415l1.415-1.415H10a1 1 0 010-2h5v-5a1 1 0 011.707-.707l1.414 1.414A1 1 0 0116 14h-.582z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>


        <section v-if="this.montant > 0" class="w-full max-w-4xl bg-white rounded-lg shadow p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Actions</h2>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button @click="addFunds"
                    class="flex-1 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-5 h-5 inline-block mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Ajouter des fonds
                </button>
                <button @click="openWithdrawModal"
                    class="flex-1 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-5 h-5 inline-block mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m-8-8h16" />
                    </svg>
                    Retirer des fonds
                </button>
            </div>
            <div v-if="showAddFundsMessage" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
               cette option n'est pas disponible pour le moment
            </div>
        </section>


        <section class="w-full max-w-4xl bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4">Transactions Récentes</h2>
            <ul class="space-y-4">
                <li v-for="transaction in transactions" :key="transaction.id"
                    class="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-800">{{ transaction.libelle }}</h3>
                        <p class="text-sm text-gray-600">{{ transaction.date }}</p>
                    </div>
                    <div>
                        <span :class="transaction.montant > 0 ? 'text-green-500' : 'text-red-500'">
                            {{ transaction.montant }} FCFA
                        </span>
                        <p class="text-sm text-gray-600">Solde: {{ transaction.balance }} FCFA</p>
                    </div>
                </li>
            </ul>
        </section>


        <div v-if="showWithdrawModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h3 class="text-lg font-semibold text-gray-700 mb-4">Retirer des fonds</h3>
                <label class="block mb-2 text-sm text-gray-600">Montant à retirer :</label>
                <input type="number" @input="ListenInput" :max="this.montant" min="1" step="1" v-model="withdrawAmount"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
                    placeholder="Entrer le montant" />
                    <div v-if="loading" class="flex flex-col items-center mt-4 rounded-lg">
                        <div class="animate-spin rounded-full h-6  w-6 border-t-4 border-custom-blue"></div>
                    </div>
                <div v-else class="flex justify-end space-x-4 mt-6">
                    <button @click="closeWithdrawModal"
                        class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition">
                        Annuler
                    </button>
                    <button @click="confirmWithdraw"
                        class="px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue transition">
                        Confirmer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    created() {


        this.isLoading = true
        this.axios.get(this.$store.state.api + "MyWallet", this.$store.state.config)
            .then(({ data }) => {
                console.log(data)
                this.montant = data.montant
                this.$store.state.user.wallet.montant = data.montant
                this.transactions = data.transactions
                this.isLoading = false
            }).catch(error => {
                this.isLoading = false
                console.log(error)
            })


    },
    data() {
        return {
            montant: 1, 
            transactions: [],
            showAddFundsMessage: false,
            showWithdrawModal: false,
            withdrawAmount: 0,
            isLoading: false,
            loading:false
        };
    },
    methods: {

        ListenInput() {

            if (this.withdrawAmount < 1) {
                this.withdrawAmount = 1;
            } else if (this.withdrawAmount > this.montant) {
                this.withdrawAmount = this.montant;
            }
        },

        refreshBalance() {
            // Logique pour rafraîchir le solde
        },
        addFunds() {
            // Logique pour ajouter des fonds
            this.showAddFundsMessage = true;
            setTimeout(() => {
                this.showAddFundsMessage = false;
            }, 3000); // Masque le message après 3 secondes
        },
        openWithdrawModal() {
            this.showWithdrawModal = true;
        },
        closeWithdrawModal() {
            this.showWithdrawModal = false;
        },
        confirmWithdraw() {
            // Logique pour confirmer le retrait
            this.loading = true
            let data = new FormData();
            data.append("montant",this.withdrawAmount)
            data.append("_method","put")
            this.axios.post(this.$store.state.api + "Retrait",data, this.$store.state.config)
                .then(({ data }) => {
                    console.log(data)
                    this.transactions.push(data)
                    this.montant -= this.withdrawAmount;
                    this.showWithdrawModal = false;
                    this.loading = false
                }).catch(error => {
                    this.loading = false
                    console.log(error)
                })
          
        }
    },

}
</script>

<style scoped>
.text-custom-blue {
    color: #02356A;
}

.bg-custom-blue {
    background-color: #02356A;
}
</style>