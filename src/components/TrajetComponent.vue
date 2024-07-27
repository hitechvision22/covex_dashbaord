<template>
    <div>
        <div>
            <div id="ElementPrint" class="w-full  mx-auto space-y-3 lg:space-x-0 -mt-6 print:-mt-0  flex flex-col lg:flex-row justify-between">
                <div class="text-lg font-semibold">
                    <p> Liste des trajets</p>
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
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50 ">
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>localisation </span>
                                                </button>
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm text-center font-normal text-gray-500 ">
                                                parametre de depart
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm text-center font-normal text-gray-500 ">
                                                etat
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm text-center font-normal text-gray-500 ">
                                               montant
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm text-center font-normal text-gray-500 ">
                                               nombre de place 
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm text-center font-normal text-gray-500 ">
                                               nombre de place disponible
                                            </th>

                                            <th scope="col" class="relative py-3.5 px-4 print:hidden">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y  divide-gray-700 ">
                                        <tr v-for="trajet in trajets" :key="trajet.id">
                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 class="font-medium text-gray-800  ">{{ trajet.ville_depart }}</h2>
                                                    <p class="text-sm font-normal text-gray-600 ">
                                                        {{ trajet.ville_destination }}
                                                    </p>
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div
                                                    class="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2  bg-[#02356A]">
                                                    {{ moment(trajet.date_depart).format("DD.MM.YYYY")+" "+trajet.heure_depart  }}
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="text-center">
                                                    <h4 class="text-gray-700 ">
                                                        {{ trajet.etat  }}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="text-center">
                                                    <h4 class="text-gray-700 ">
                                                        {{trajet.prix}}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="text-center">
                                                    <h4 class="text-gray-700 ">
                                                        {{trajet.Nombre_de_place}}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="text-center">
                                                    <h4 class="text-gray-700">
                                                        {{trajet.nombre_de_place_disponible}}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap space-y-2 print:hidden">
                                                <div class="w-full justify-center flex">
                                                    <button @click="DeleteTrajet(trajet.id)"
                                                            class="px-3 py-1 text-sm bg-red-500 border w-full border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-light rounded">
                                                            supprimer
                                                    </button>
                                                </div>
                                                <div class="w-full justify-center flex">
                                                    <button @click="UpdateTrajet(trajet.id,trajet.etat == 'annuler' ? 'actif' : 'annuler')"

                                                            class="px-3 py-1 text-sm bg-green-500 border w-full border-green-500 hover:bg-transparent duration-500 hover:text-green-500 text-white font-light rounded">
                                                            {{trajet.etat == 'Annuler' ? 'Activer': 'annuler'}} ce trajet
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div v-if="TrajetLoading" class="h-16 w-full bg-transparent flex justify-center items-center">
                                    <div class="loader"></div>
                                </div>
                            </div>
                            <div v-if="trajets.length == 0 && !TrajetLoading" class="w-full mt-16 text-center text-xl text-[#02356A] flex items-center justify-center">
                                <span>pas de trajet pour l'instant</span>
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
    data() {
        return {
            trajets: [],
            moment:moment,
            TrajetLoading:false,
        }
    },
    mounted() {
        this.TrajetLoading = true
        this.axios.get(this.$store.state.api + "trajet", this.$store.state.config)
            .then(({ data }) => {
                this.TrajetLoading = false
                this.trajets = data.data
            }).catch(error => {
                this.TrajetLoading = false
                console.log(error)
            })
    },

    methods: {
        UpdateTrajet(id, etat) {
            let data = new FormData();
            data.append('etat', etat);
            data.append('_method', 'put')
            this.axios.post(this.$store.state.api + "UpdateEtatTrajet/" + id,data, this.$store.state.config)
                .then(({ data }) => {
                    console.log(data)
                    this.trajets.filter((item, index) => item.id == id ? this.trajets[index].etat = etat : "");
                }).catch(error => {
                    console.log(error)
                })
        },

        PrintList(){
            const ElementPrint = document.getElementById("ElementPrint");

            const tempPage = document.createElement("div");
            tempPage.innerHTML = ElementPrint.innerHTML;

            window.print(tempPage)
        },

        DeleteTrajet(id) {
            this.axios.delete(this.$store.state.api + "trajet/" + id, this.$store.state.config)
                .then(({ data }) => {
                    console.log(data)
                    this.trajets.filter((item, index) => item.id == id ? this.trajets.splice(index,1) : "");
                }).catch(error => {
                    console.log(error)
                })
        }
    }

}
</script>
<style scoped>
.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #02356A;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0,0,0,0.2);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
  ;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
</style>