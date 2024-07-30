<template>
    <div>
        <div v-if="OptionTap" class="fixed inset-0 flex items-center justify-center z-[1502000000] bg-black bg-opacity-50">
         <div class="bg-white rounded-lg shadow-lg p-6 w-96">
            <div class="flex items-center flex-col">
            <div class="flex-shrink-0">
               <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10a1 1 0 10-2 0v4a1 1 0 102 0V8zm-1 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
               </svg>
            </div>
            <div class="ml-4 text-center">
               <h3 class="text-lg font-medium text-gray-900">Confirmer d'annulation</h3>
               <p class="mt-2 text-sm text-gray-600">Êtes-vous sûr de vouloir annuler ce trajet ? Cette action est irréversible.</p>
            </div>
            </div>
        
            <div v-if="loading" class="w-full justify-center flex mt-5">
                <span >
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-30" cx="12" cy="12" r="10" stroke="#02356A" stroke-width="8"></circle>
                    <path class="opacity-75" fill="#02356A" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.292l1.5 1.5c.427-.624.976-1.16 1.618-1.618L8.293 17H2v-6.293l1.707 1.707c.924.924 2.007 1.607 3.293 1.951z"></path>
                    </svg>
                </span>
            </div>
            <div v-else class="mt-4 flex justify-around ">
            <button @click="OptionTap =!OptionTap" class="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
               Annuler
            </button>
            <button @click="UpdateTrajet" class="px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm duration-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
               Valider
            </button>
            </div>
         </div>
      </div>
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
                                               <div v-if="trajet.etat != 'annuler'" class="w-full space-y-2">
                                                <div class="w-full justify-center flex ">
                                                    <button @click="DeleteTrajet(trajet.id)"
                                                            class="px-3 py-1 text-sm bg-red-500 border w-full border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-light rounded">
                                                            supprimer
                                                    </button>
                                                </div>
                                                <div class="w-full justify-center flex">
                                                    <button @click="ShowOption(trajet.id,'annuler')"
                                                            class="px-3 py-1 text-sm bg-green-500 border w-full border-green-500 hover:bg-transparent duration-500 hover:text-green-500 text-white font-light rounded">
                                                            {{'annuler'}} ce trajet
                                                    </button>
                                                </div>
                                               </div>
                                             <div v-else class="flex justify-center items-center">
                                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-400 cursor-pointer " @click="DeleteTrajet(trajet.id)">
                                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                                                </svg> 
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
            OptionTap:false,
            IdSelect:0,
            etat:"",
            loading:false
        }
    },
    mounted() {
        this.TrajetLoading = true
        this.axios.get(this.$store.state.api + "MyPosts", this.$store.state.config)
            .then(({ data }) => {
                this.TrajetLoading = false
                this.trajets = data.data
            }).catch(error => {
                this.TrajetLoading = false
                console.log(error)
            })
    },

    methods: {
        UpdateTrajet() {
            this.loading = true
            let data = new FormData();
            data.append('etat', this.etat);
            data.append('_method', 'put')
            this.axios.post(this.$store.state.api + "UpdateEtatTrajet/" + this.IdSelect,data, this.$store.state.config)
                .then(({ data }) => {
                    console.log(data)
                    this.trajets.filter((item, index) => item.id == this.IdSelect ? this.trajets[index].etat = this.etat : "");
                    this.loading =false
                    this.OptionTap = false
                }).catch(error => {
                    this.loading = false
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
        },
        ShowOption(trajetId,etat){
            this.IdSelect = trajetId
            this.etat = etat
            this.OptionTap = true
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