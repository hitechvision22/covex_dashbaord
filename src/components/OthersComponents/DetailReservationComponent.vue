<template>
  <div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form @submit.prevent="AddAvis" class="bg-white p-6 rounded-lg w-11/12 lg:w-1/3">
        <h2 class="text-xl font-bold mb-4">Votre avis sur le service de covoiturage</h2>

        <!-- Star Rating -->
        <div class="flex space-x-1 mb-4">
          <span
            v-for="star in 5"
            :key="star"
            @click="setRating(star)"
            class="cursor-pointer text-yellow-500"
          >
            <i :class="star <= rating ? 'fas fa-star' : 'far fa-star'"></i>
          </span>
        </div>

        <!-- Description Field -->
        <textarea
        spellcheck="true"
          v-model="description"
          class="w-full p-2 border rounded mb-4"
          rows="3"
          required
          placeholder="Décrivez votre expérience"
        ></textarea>

        <!-- Submit and Close Buttons -->
        <div class="flex justify-end space-x-2">
          <button
          type="submit"
            :disabled="isLoading"
            class="bg-green-500 text-white px-4 py-2 rounded flex items-center"
          >
            <span v-if="isLoading" class="loader mr-2"></span>
            <span v-if="!isLoading">Soumettre</span>
            <span v-else>Chargement...</span>
          </button>
          <button @click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
        </div>
      </form>
    </div>

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
        <div class="flex justify-end items-center space-x-2">
          <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded">
            Laisser un avis
          </button>
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
      loading:true,
      isModalOpen: false,
      rating: 0,
      description: "",
      isLoading: false // Nouvel état pour indiquer le chargement

    }
  },
  created() {
    var route = useRoute();
    this.loading = true
    this.axios.get(this.$store.state.api + "reservations/" + route.query.id, this.$store.state.config)
      .then(({ data }) => {
        this.currentReservation = data
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        console.log(error)
      })
  },

  methods:{
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.rating = 0;
      this.description = "";
    },
    setRating(star) {
      this.rating = star;
    },
    submitReview() {
      // Ici, tu peux envoyer l'avis à une API ou le traiter
      console.log(`Rating: ${this.rating}, Description: ${this.description}`);
      this.closeModal();
    },

    AddAvis(){
      this.loading = true
      let data = new FormData();
      data.append("note",this.rating);
      data.append("libelle",this.description)
      this.axios.post(this.$store.state.api+"StoreAvis",data,this.$store.state.config)
      .then(({data})=>{
        this.closeModal();
        this.loading = false
        this.rating = 0;
        this.description = "";

        console.log(data);
      }).catch((error)=>{
        this.loading = false
        console.log(error)
      })
    }
  }

}
</script>