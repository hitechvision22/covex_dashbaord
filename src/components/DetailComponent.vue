<template>
  <div class="px-1 lg:px-4">
    <div class="w-11/12 h-12 -mt-6 flex space-x-1 items-center">
      <button @click="this.$router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <span> retour </span>
    </div>
    <div
      class="w-full lg:max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div
        class="bg-[#02356A] p-4 text-white text-center flex space-x-2 justify-center"
      >
        <h1 class="text-xl lg:text-2xl font-semibold">
          Détail du Co-Voiturage
        </h1>
        <h1 class="text-2xl font-semibold"></h1>
      </div>
      <div class="p-6">
        <!-- Trip Details -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4">Détails du Trajet</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex space-x-2 lg:block lg:space-x-0">
              <label class="block text-gray-600">Départ :</label>
              <p class="text-gray-800">{{ trajet.ville_depart }}</p>
            </div>
            <div class="flex space-x-2 lg:block lg:space-x-0">
              <label class="block text-gray-600">Destination :</label>
              <p class="text-gray-800">{{ trajet.ville_destination }}</p>
            </div>
            <div class="flex space-x-2 lg:block lg:space-x-0">
              <label class="block text-gray-600">Date :</label>
              <p class="text-gray-800">{{ trajet.date_depart }}</p>
            </div>
            <div class="flex space-x-2 lg:block lg:space-x-0">
              <label class="block text-gray-600">Heure :</label>
              <p class="text-gray-800">{{ trajet.heure_depart }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg lg:text-center w-full">
          <h2 class="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
            Statut des Places
          </h2>
          <div class="flex justify-center mb-4">
            <div class="flex items-center mr-4">
              <div
                class="bg-[#02356A] w-8 h-8 rounded-full mr-2 flex justify-center items-center"
              >
                <span class="text-sm font-semibold text-white">
                  {{ this.trajet.nombre_de_place_disponible }}
                </span>
              </div>
              <p class="text-gray-700">Libre</p>
            </div>
            <div class="flex items-center mr-4">
              <div
                class="border-[#02356A] border w-8 h-8 rounded-full mr-2 flex justify-center items-center"
              >
                <span class="text-sm font-semibold text-[#02356A]">
                  {{
                    this.trajet.Nombre_de_place -
                    this.trajet.nombre_de_place_disponible
                  }}
                </span>
              </div>
              <p class="text-gray-700">deja occupe</p>
            </div>
          </div>
        </div>

        <!-- Passengers -->
        <div class="bg-gray-100 flex items-center justify-center">
          <div class="bg-white rounded-lg w-full pb-6">
            <h1 class="text-xl lg:text-2xl font-bold mb-4">
              Restrictions du Chauffeur
            </h1>
            <ul
              class="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-6 justify-center"
            >
              <li class="flex items-center space-x-2">
                <svg
                  class="w-6 h-6 text-[#02356A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3h8v4m0 0h4v14H4V7h4m0 0V3m4 4h4v14H8V7m4 0v14m4-6h2v-2h-2v2z"
                  ></path>
                </svg>
                <span class="text-gray-700">
                  Bagages {{ this.trajet.bagage == 0 ? "non" : "" }} acceptés
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-smoking-ban text-[#02356A] text-xl"></i>
                <span class="text-gray-700">Non fumeur</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-utensils text-[#02356A] text-xl"></i>
                <span class="text-gray-700">Pas de nourriture</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-comments text-[#02356A] text-xl"></i>
                <span class="text-gray-700">Discussions modérées</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full mx-auto p-2 lg:p-3 bg-[#02356A] shadow-md rounded-lg mt-4"
        >
          <p class="text-white text-center text-sm lg:text-lg">
            cette reservation inclut un payement comptant, elle est exige pas le
            chauffeur pour ce trajet
          </p>
        </div>

        <div v-if="this.trajet.nombre_de_place_disponible == 0" class="w-full ">
          <div class="w-full  bg-white shadow-md rounded-lg p-6 flex justify-center flex-col items-center">
            <h2 class="text-xl font-semibold text-gray-800 text-center ">
              Publication Déjà Prise
            </h2>
            <p class="mt-4 text-gray-600 text-center">
              Cette publication a déjà été prise par un autre utilisateur.
            </p>
            <div class="justify-center flex items-center">
              <button @click="this.$router.back()"
              class="mt-6 bg-[#02356A] text-white px-4 py-2 rounded hover:bg-[#02356A] focus:outline-none focus:bg-[#02356A]"
            >
              Retour
            </button>
            </div>
          </div>
        </div>

        <div v-else>
          <div
          class="w-full justify-center flex items-center flex-col"
          v-if="this.trajet.user_id != this.$store.state.user.id"
        >
          <div class="bg-white p-6 rounded-lg">
            <label
              for="seat-count"
              class="block text-lg font-medium text-gray-700 mb-4 text-center"
              >Nombre de places</label
            >
            <div class="flex items-center">
              <button
                @click="decrement"
                class="bg-[#02356A] text-white border border-[#02356A] rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="number"
                id="seat-count"
                v-model="count"
                min="1"
                style="appearance: textfield"
                class="text-center border-t border-b border-gray-300 px-4 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                @click="increment"
                class="bg-[#02356A] text-white border border-[#02356A] rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <!-- Buttons -->
          <div class="flex justify-end space-x-4">
            <button
              @click="showtap"
              class="bg-[#02356A] text-white px-4 py-2 rounded hover:bg-[#02356A]"
            >
              Réserver
            </button>
          </div>
        </div>

        <div v-else class="bg-white rounded-lg p-6 max-w-md mx-auto">
          <div class="text-center mb-4">
            <h2 class="text-xl font-semibold text-[#02356A]">
              il s'agit votre publication
            </h2>
          </div>

          <div class="flex justify-center">
            <button
              class="flex items-center bg-[#02356A] text-white px-4 py-2 rounded-lg hover:bg-[#02356A] focus:outline-none focus:ring-2 focus:ring-[#02356A] focus:ring-offset-2"
            >
              Voir Mes Posts
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { useRoute } from "vue-router";
export default {
  created() {
    var route = useRoute();
    this.axios
      .get(
        this.$store.state.api + "trajet/" + route.query.id,
        this.$store.state.config
      )
      .then(({ data }) => {
        this.trajet = data;
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  data() {
    return {
      trajet: "",
      moment: moment,
      count: 1,
    };
  },
  methods: {
    increment() {
      if (this.count < this.trajet.nombre_de_place_disponible) {
        this.count += 1;
      }
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    showtap() {
      window.emitter.emit("showpayertap", [this.trajet, this.count]);
    },
  },
};
</script>