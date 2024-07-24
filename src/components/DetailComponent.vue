<template>
    <div class="px-4">
        <div class="w-11/12 h-12 -mt-6 flex space-x-1 items-center">
            <button @click="this.$router.back()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
            </button>
            <span>
                retour
            </span>
        </div>  
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-indigo-600 p-4 text-white text-center">
            <h1 class="text-2xl font-semibold">Détail du Co-Voiturage</h1>
        </div>
        <div class="p-6">
            <!-- Trip Details -->
            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-4">Détails du Trajet</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-gray-600">Départ :</label>
                        <p class="text-gray-800">Paris</p>
                    </div>
                    <div>
                        <label class="block text-gray-600">Destination :</label>
                        <p class="text-gray-800">Lyon</p>
                    </div>
                    <div>
                        <label class="block text-gray-600">Date :</label>
                        <p class="text-gray-800">24 juillet 2024</p>
                    </div>
                    <div>
                        <label class="block text-gray-600">Heure :</label>
                        <p class="text-gray-800">08:00</p>
                    </div>
                </div>
            </div>
            <!-- Driver Details -->
            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-4">Détails du Conducteur</h2>
                <div class="flex items-center">
                    <img class="w-16 h-16 rounded-full mr-4" src="https://via.placeholder.com/64" alt="Driver Photo">
                    <div>
                        <h3 class="text-lg font-semibold">Jean Dupont</h3>
                        <p class="text-gray-600">jean.dupont@example.com</p>
                    </div>
                </div>
            </div>
            <!-- Passengers -->
            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-4">Passagers</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="flex items-center">
                        <img class="w-12 h-12 rounded-full mr-2" src="https://via.placeholder.com/48" alt="Passenger Photo">
                        <div>
                            <p class="font-semibold">Marie Curie</p>
                            <p class="text-gray-600">marie.curie@example.com</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img class="w-12 h-12 rounded-full mr-2" src="https://via.placeholder.com/48" alt="Passenger Photo">
                        <div>
                            <p class="font-semibold">Albert Einstein</p>
                            <p class="text-gray-600">albert.einstein@example.com</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img class="w-12 h-12 rounded-full mr-2" src="https://via.placeholder.com/48" alt="Passenger Photo">
                        <div>
                            <p class="font-semibold">Isaac Newton</p>
                            <p class="text-gray-600">isaac.newton@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buttons -->
            <div class="flex justify-end space-x-4">
                <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">Annuler</button>
                <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800">Réserver</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { useRoute } from "vue-router"
import moment from 'moment'
export default {
  created () {
    var route = useRoute();
    console.log(route.query.id)
    this.axios.get(this.$store.state.api + "show/"+route.query.id,this.$state.store.config)
    .then(({data})=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error)
    })
  },
  data () {
    return {
        moment:moment,
    }
  },

}
</script>