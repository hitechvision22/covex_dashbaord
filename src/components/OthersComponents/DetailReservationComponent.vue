<template>
  <div>

    <div v-if="loading" class="flex flex-col items-center justify-center space-y-4">
        <!-- Spinner -->
        <div class="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <!-- Texte de chargement -->
        <p class="text-xl font-semibold text-gray-700">Chargement, veuillez patienter...</p>
    </div>
    <div v-else class="max-w-4xl mx-auto py-10">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Détails de la Réservation</h2>

        <!-- Information de la réservation -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold">Informations du Trajet</h3>
          <div class="flex flex-col sm:flex-row">
            <div class="sm:w-1/2">
              <p><span class="font-bold">Départ :</span> {{ currentReservation.trajet.ville_depart }}</p>
              <p><span class="font-bold">Destination :</span> {{ currentReservation.trajet.ville_destination }}</p>
              <p><span class="font-bold">Date :</span> {{ currentReservation.trajet.date_depart }}</p>
              <p><span class="font-bold">Heure :</span> {{ currentReservation.trajet.heure_depart }}</p>
            </div>
            <div class="sm:w-1/2">
              <p><span class="font-bold">Conducteur :</span> Jean Dupont</p>
              <!-- <p><span class="font-bold">Véhicule :</span> Peugeot 208, Blanc</p> -->
              <p><span class="font-bold">Places disponibles :</span> {{
                currentReservation.trajet.nombre_de_place_disponible }}</p>
              <p><span class="font-bold">Prix :</span> {{ currentReservation.trajet.prix + " FCFA" }}</p>
            </div>
          </div>
        </div>

        <!-- Information de contact -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold">Informations de Contact</h3>
          <p><span class="font-bold">Email :</span> jean.dupont@example.com</p>
          <p><span class="font-bold">Téléphone :</span> +33 6 12 34 56 78</p>
        </div>

        <!-- Actions -->
        <div class="flex justify-end">
          <a href="https://wa.me/33612345678"
            class="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
            Contacter le Chauffeur via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
  data() {
    return {
      currentReservation: "",
      loading:true

    }
  },
  created() {
    var route = useRoute();
    this.loading = true
    this.axios.delete(this.$store.state.api + "reservation/" + route.query.id, this.$store.state.config)
      .then(({ data }) => {
        this.currentReservation = data
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        console.log(error)
      })
  },

}
</script>