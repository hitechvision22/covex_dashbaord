<template>
   <div>
      <div class=" flex justify-between relative">

         <div v-if="ProfileTap"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="ProfileTap = !ProfileTap" class="h-full w-full  absolute"></div>
            <div
               class="w-6/12 h-[90%] bg-white  rounded-lg mx-auto p-4 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class=" w-full h-[30%]   rounded space-y-3">
                     <div class="flex space-x-4 items-center justify-between">
                        <div class="items-center justify-between flex space-x-4">
                           <div class="h-24 w-24 bg-[#02356A] rounded-full"></div>
                        <div>
                              <div class="flex space-x-2 items-center">
                                 <span>{{userSelect.name}}</span>
                                 <span v-if="userSelect.verified ==1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#02356A]">
                                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                    </svg>
                                 </span>
                              </div>
                              <div>
                                 <span>
                                    {{ userSelect.type == 0 ? " client" : userSelect.type == 1 ? "chauffeur" : userSelect.type == 2 ?"caissiere" :userSelect.type == 3 ? "adminitrateur": "super-adminitrateur" }}
                                 </span>
                              </div>
                              <div class="text-sm font-semibold">
                                 <span>
                                    {{ moment(userSelect.created_at,"YYYYMMDD").fromNow() }}
                                 </span>
                              </div>
                        </div>
                        </div>
                        <button @click="ProfileTap = !ProfileTap" class="p-2 rounded-full bg-slate-400">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                        </button>
                     </div>
                     <div class="flex space-x-3  bg-gray-300 p-2 rounded-lg">
                        <button @click="GetPiece" :class="index == 0 ? 'duration-500 bg-white shadow-lg' :'duration-500 bg-transparent'" class="text-slate-500 text-sm px-4 py-2 rounded ">
                           Données Personnelles
                        </button>
                        <button v-if="userSelect.type >0" @click="GetTrajets" :class="index == 1 ? 'duration-500 bg-white shadow-lg' :'duration-500 bg-transparent'" class="text-slate-500 text-sm px-4 py-2 rounded">
                           co-voiturages
                        </button>
                        <button v-if="userSelect.type >0" @click="GetVehicule" :class="index == 2 ? 'duration-500 bg-white shadow-lg' :'duration-500 bg-transparent'" class="text-slate-500 text-sm px-4 py-2 rounded">
                          vehicule
                        </button>
                        <button  @click="GetAvis" :class="index == 3 ? 'duration-500 bg-white shadow-lg' :'duration-500 bg-transparent'" class="text-slate-500 text-sm px-4 py-2 rounded">
                          avis
                        </button>
                     </div>
               </div> 
               <div class="h-[75%] w-full  flex flex-col  items-start ">
                  <div v-if="!ProfileLoading && index == 0" class="w-full space-y-4 ">
                     <div class="w-full space-y-2">
                           <div class="w-full">
                              <span class="text-xl uppercase font-semibold">informations</span>
                              <div class="w-full h-px bg-[#02356A]"></div> 
                           </div>
                           <div>
                              <div class="flex space-x-2 items-center">
                                 <span class="text-sm font-semibold uppercase">numero de telephone:</span>
                                 <span>
                                    {{userSelect.phone == null ? 'non inscrite': userSelect.phone}}
                                 </span>
                              </div>
                              <div class="flex space-x-2 items-center">
                                 <span class="text-sm font-semibold uppercase">ville de residence:</span>
                                 <span>
                                    {{userSelect.ville == null ? 'non inscrite': userSelect.ville}}
                                 </span>
                              </div>
                           </div>
                     </div>
                     <div v-if="userPiece.id" class="w-full space-y-2">
                           <div class="w-full">
                              <span class="text-lg uppercase font-semibold">piece</span>
                              <div class="w-full h-px bg-[#02356A]"></div> 
                           </div>
                           
                           <div class="space-y-4">
                              <div class="flex space-x-2 items-center">
                                 <span class="text-sm font-semibold uppercase">nom de la piece:</span>
                                 <span>{{userPiece.name}}</span>
                              </div>
                              <div class="flex space-x-2 items-center">
                                 <span class="text-sm font-semibold uppercase">date d'expiration:</span>
                                 <span>{{userPiece.date_expiration}}</span>
                              </div>
                              <div class="flex space-x-2 items-center">
                                 <span>photo de la piece: </span>
                                 <div class="h-28 w-44 border border-[#02356A] rounded flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-10">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                              </svg>
                                 </div>
                              </div>
                           </div>
                     </div>
                     <div class="flex w-full justify-center items-center h-36 text-lg text-[#02356A]">
                        <span>
                           ce profil n'a pas de carte national d'identité enregistre
                        </span>
                     </div>
                  </div>

                  <div v-if="!ProfileLoading && index == 1" class="w-full h-full overflow-hidden overflow-y-scroll space-y-4 flex flex-col ">
                     <div v-for="trajet in userTrajets" :key="trajet" class="flex items-center justify-between w-full border p-3 bg-slate-400 rounded-md">
                        <div class="flex items-center">
                           <div class="flex flex-col ml-3">
                              <div class="font-medium leading-none space-y-2">
                                 <h2 class="font-medium text-gray-800  ">
                                    {{ trajet.ville_depart+" ("+trajet.point_rencontre+")" }}
                                 </h2>
                                 <p class="text-sm font-normal text-gray-600 ">
                                    {{ trajet.ville_destination+" ("+trajet.point_destination+")" }}
                                  </p>
                              </div>
                           </div>
                        </div>
                        <div class="font-medium leading-none space-y-2">
                              <h2 class="font-medium text-gray-800  ">
                                 {{ moment(trajet.date_depart).format("DD.MM.YYYY")  }}
                              </h2>
                              <p class="text-sm font-normal text-gray-600 ">
                                 {{ trajet.heure_depart  }}
                               </p>
                         </div>
                     </div>
                     <div class="flex flex-col w-full justify-center items-center h-20">
                        <span class="text-lg">
                           Aucun post pour ce profil
                        </span>
                     </div>
                  </div>
                  
                  <div v-if="!ProfileLoading && index == 2" class="w-full space-y-4 grid grid-cols-2 gap-4">
                     <div>
                        <img src="/images/drive.png" alt="">                        
                     </div>
                     <div class=" space-y-4">
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">modele : </span>
                           <span>{{userVehicule.modele}}</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">marque : </span>
                           <span>{{userVehicule.marque}}</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">couleur : </span>
                           <span>{{userVehicule.couleur}}</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">nombre de portiére : </span>
                           <span>{{userVehicule.nombre_portes}}</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">nombre de place : </span>
                           <span>{{userVehicule.nombre_place}}</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                           <span class="text-lg font-semibold uppercase">etat : </span>
                           <span>{{userVehicule.etat}}</span>
                        </div>
                     </div>
                  </div>
                  <div v-if="!ProfileLoading && index == 3" class="w-full space-y-4 ">
                     <div class="w-full mx-auto">
                        <div v-for="avis in userAvis" :key="avis" class="bg-[#02356A] border-l-4 border-[#02356A] rounded-lg">
                           <div class="flex items-center">
                                 <div class="p-2">
                                    <div class="flex items-center">
                                       <div class="flex space-x-2">
                                          <svg v-for="star in userAvis" :key="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500">
                                          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                          </svg>
                                       </div>
                                       <p class="px-6 py-4 text-white font-semibold text-lg">
                                          {{avis.libelle}}
                                       </p>
                                       </div>
                                 </div>
                           </div>
                        </div>
                        <div class="text-center justify-center items-center flex ">
                           <span>Ce profil n'a pas d'avis </span>
                        </div>
                     </div>
                  </div>
                  <div v-if="ProfileLoading" class="h-full  w-full space-y-2">
                     <div class="h-6 w-full animate-pulse bg-slate-400 rounded"></div>
                     <div class="h-10 w-11/12 animate-pulse bg-slate-400 rounded"></div>
                     <div class="flex space-x-2">
                        <div class="h-36 w-8/12 animate-pulse bg-slate-400 rounded"></div>
                        <div class="h-36 w-4/12 animate-pulse bg-slate-400 rounded"></div>
                     </div>
                     <div class="h-10 w-10/12 animate-pulse bg-slate-400 rounded"></div>
                  </div>
               </div>
            </div>
         </div>

         <div v-if="AddVehiculeTap"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="AddVehiculeTap = !AddVehiculeTap" class="h-full w-full  absolute"></div>
            <div
               class="w-6/12 h-[95%] bg-white  rounded-lg mx-auto p-8  space-y-3 z-50 flex flex-col ">
               <form @submit.prevent="SaveVehicule" class=" space-y-3">
                  <div class="border-b border-gray-900/10 ">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Enregister un vehicule</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">prenez soin de bien remplir tout les champs.</p>

                        <div class="mt-4 grid grid-cols-1  gap-y-2 sm:grid-cols-3">
                        <div class="sm:col-span-3">
                           <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Marque</label>
                           <div class="mt-2">
                              <input type="text" required v-model="AddFormTrajet.modele" placeholder="modele" id="first-name" autocomplete="given-name" class="block w-full rounded-md outline-none border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6">
                           </div>
                        </div>

                        <div class="sm:col-span-3">
                           <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Modele</label>
                           <div class="mt-2">
                              <input type="text" required v-model="AddFormTrajet.marque" placeholder="marque" id="last-name"  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6">
                           </div>
                        </div>

                        <div class="sm:col-span-4">
                           <label for="couleur" class="block text-sm font-medium leading-6 text-gray-900">Couleur</label>
                           <div class="mt-2">
                              <input id="email" required v-model="AddFormTrajet.couleur" placeholder="couleur" type="email" 
                              class="block w-full rounded-md border-0 py-1.5 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6">
                           </div>
                        </div>

                        <div class="sm:col-span-4">
                           <label for="etat"  class="block text-sm font-medium leading-6 text-gray-900">
                              Etat du vehicule
                           </label>
                           <div class="mt-2">
                              <select required v-model="AddFormTrajet.etat" name="" id="" class="block w-full rounded-md border-0 py-1.5 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6 ">
                                        <option value="" class="w-full text-gray-300 font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md ">Choisir un role</option>
                                        <option value="mauvaise" class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full p-4 text-md ">mauvais</option>
                                        <option value="acceptable" class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full p-4 text-md ">acceptable</option>
                                        <option value="neuf" class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full p-4 text-md ">neuf</option>
                                    </select>
                           </div>
                        </div>

                        <div class="sm:col-span-4">
                           <label for="email" class="block text-sm font-medium leading-6 text-gray-900">nombre de places</label>
                           <div class="mt-2">
                              <input id="email" required v-model="AddFormTrajet.nombre_places" placeholder="2" type="number"  class="block w-full rounded-md border-0 py-1.5 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6">
                           </div>
                        </div>
                     
                        <div class="sm:col-span-4">
                           <label for="email" class="block text-sm font-medium leading-6 text-gray-900">nombre de portes</label>
                           <div class="mt-2">
                              <input id="email" required v-model="AddFormTrajet.nombre_portes" placeholder="2" type="number"  class="block w-full rounded-md border-0 py-1.5 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#02356A] sm:text-sm sm:leading-6">
                           </div>
                        </div>

               
                        </div>
                  </div>
                  <div class="flex justify-end items-center space-x-4">
                     <button @click="AddVehiculeTap = !AddVehiculeTap" class=" px-4 bg-red-500 py-1 text-sm font-semibold text-white rounded border border-red-500 ">
                        Annuler
                     </button>
                     <button type="submit" class=" px-4 bg-[#02356A] py-1 text-sm font-semibold text-[#02356A] rounded border border-[#02356A] ">
                       Enregistrer
                     </button>
                  </div>
               </form>
            </div>
         </div>

         <div  v-if="UpdatedUser"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="UpdatedUser = !UpdatedUser" class="h-full w-full  absolute"></div>
            <div
               class="w-7/12 bg-white  rounded-lg mx-auto p-8 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class="text-xl text-center text-[#02356A]">
                  <p>modifier mon profil </p>
               </div>
               
               <div class="h-1 bg-[#02356A] w-10/12 mx-auto rounded"></div>
               <form @submit.prevent="updateUser" class=" grid grid-cols-2 gap-4 ">
                  <div class="flex flex-col space-y-3 justify-center items-center">
                     <input @change="addAvatar" type="file" name="avatar" accept="image/*" id="avatar" class="hidden">
                     <label for="avatar" class="w-36 h-36 cursor-pointer border-2 border-[#02356A] rounded-full flex justify-center items-center relative">
                     
                        <div v-if="preview.length > 0" class="w-full h-full overflow-hidden">
                           <img :src="preview" class="w-full h-full object-cover object-center rounded-full">
                        </div>
                        <div v-else class="w-full h-full justify-center items-center flex">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-10">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                           </svg>
                        </div>
                     </label>
                     <div class="text-lg font-semibold">
                        <p>Photo de Profil</p>
                     </div>
                  </div>
                  <div class="space-y-3">
                     <div class="w-full space-y-1">
                        <div class="capitalize text-sm">
                           <p>nom</p>
                        </div>
                        <div>
                           <input v-model="UpdatedForm.name" type="text" required placeholder="Nom"
                              class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                        </div>
                     </div>
                     <div class="w-full space-y-1">
                        <div class="capitalize text-sm">
                           <p>prenom</p>
                        </div>
                        <div>
                           <input v-model="UpdatedForm.prenom" type="text" required placeholder="prenom"
                              class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                        </div>
                     </div>
                     <div class="w-full space-y-1">
                        <div class="capitalize text-sm">
                           <p>numero de telephone</p>
                        </div>
                        <div>
                           <input v-model="UpdatedForm.phone" type="text" required placeholder="numero de telephone"
                              class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                        </div>
                     </div>
                     <div class="w-full space-y-1">
                        <div class="capitalize text-sm">
                           <p>ville de résidence</p>
                        </div>
                        <div>
                           <input v-model="UpdatedForm.ville" type="text" required placeholder="ville de residence"
                              class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                        </div>
                     </div>
                  </div>
                  <div class="flex col-span-2  justify-center items-center pt-2">
                     <div v-if="UpdatedLoading"
                        class="animate-spin ease-linear rounded-full w-8 h-8 border-t-2 border-b-2 border-[#02356A]">
                     </div>
                     <button v-else @click="updateUser" class="px-4 py-2 bg-[#02356A] text-white rounded">
                      mettre a jour
                     </button>
                  </div>
               </form>
              
               
            </div>
         </div>

         <div v-if="DetailReservation"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="DetailReservation = !DetailReservation" class="h-full w-full  absolute"></div>
            <div
               class="w-8/12 bg-white  rounded-lg mx-auto p-8 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class="text-xl text-center text-[#02356A]">
                  <p>detail de la reservation du {{ moment(reservation.created).format("DD/MM/YYYY") }}</p>
               </div>
               
               <div class="h-1 bg-[#02356A] w-10/12 mx-auto"></div>

               <div class="w-full  grid grid-cols-3 gap-2">
                  <div class="w-full justify-center items-center flex-col">
                     <div class="flex justify-center items-center flex-col p-3 bg-[#02356A] text-white rounded">
                        <p class="text-xs text-center">
                              les conversations seront supprimees lorsque le trajet sera termine
                           </p>
                     </div>
                     <div class="text-xl font-semibold pt-6 pb-2">
                        <p>info sur le trajet</p>
                     </div>
                     <div class="flex space-x-2 items-center">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                           <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                           </svg>
                        </div>
                        <div>
                           <span>{{ reservation.trajet.ville_depart }}, {{ reservation.trajet.point_rencontre }}</span>
                        </div>
                     </div>
                     <div class="flex space-x-2 items-center mt-px">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                           <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                           </svg>
                        </div>
                        <div>
                           <span>{{ reservation.trajet.ville_destination }}, {{ reservation.trajet.point_destination }}</span>
                        </div>
                     </div>
                     <div class="flex space-x-2 items-center mt-px">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
  <path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd" />
</svg>

                        </div>
                        <div>
                           <span>{{ reservation.trajet.date_depart}}</span>
                        </div>
                     </div>
                     <div class="flex space-x-2 items-center mt-px">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd" />
</svg>
                        </div>
                        <div>
                           <span>{{ reservation.trajet.heure_depart}}</span>
                        </div>
                     </div>
                  </div>
                  <div class="h-72 col-span-2  overflow-y-scroll py-3">
                     <div v-for="index in reservation.messages" :key="index.id" class="w-full  p-3">
                        <div class="w-full h-10  flex justify-between">
                           <div class="flex space-x-3 items-center">
                              <div class="w-10 h-10 bg-black rounded-full"></div>
                              <span>{{reservation.trajet.user_id == index.sender_id ? 'chauffeur':'client' }}</span>
                           </div>
                           <div>
                              <button @click="DeleteMessage(index.id)" class="text-white font-semibold text-xs bg-red-400 px-4 py-2 rounded ">
                                 supprimer le message
                              </button>
                           </div>
                        </div>
                        <div class="text-sm font-light mt-1 text-[#02356A]">
                           <p>{{ moment(transaction.date).format("DD/MM/YYYY | hh:mm") }} </p>
                        </div>
                        <div>
                           <p class="text-sm mt-1">
                              {{index.message_text}}   
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>

         <div v-if="DetailTransaction"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="DetailTransaction = !DetailTransaction" class="h-full w-full  absolute"></div>
            <div
               class="w-7/12 bg-white  rounded-lg mx-auto p-8 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class="text-xl text-center text-[#02356A]">
                  <p>detail de la transaction du {{ moment(transaction.date).format("DD/MM/YYYY") }}</p>
               </div>
               
               <div class="h-1 bg-[#02356A] w-10/12 mx-auto"></div>

               <div class="  w-full  mx-auto pt-6">
                  <div class="flex space-x-4">
                     <p class=" text-center font-semibold text-[#02356A]">Raison de la transation:</p>
                     <p class=" text-center">{{ transaction.libelle }}</p>
                  </div>
               </div>

               <div class="  w-full  mx-auto ">
                  <div class="flex space-x-4">
                     <p class=" text-center font-semibold text-[#02356A]">Status de la transation:</p>
                     <p class=" text-center">{{transaction.status}}</p>
                  </div>
               </div>

               <div class="  w-full  mx-auto ">
                  <div class="flex space-x-4">
                     <p class=" text-center font-semibold text-[#02356A]">Date et Heure de la transation:</p>
                     <p class=" text-center">{{ moment(transaction.date).format("DD/MM/YYYY h:m") }}</p>
                  </div>
               </div>

               <div class="  w-full  mx-auto ">
                  <div class="flex space-x-4">
                     <p class=" text-center font-semibold text-[#02356A]">Montant de la transation:</p>
                     <p class=" text-center">{{ transaction.montant }} XAF</p>
                  </div>
               </div>

               <div class="  w-full  mx-auto ">
                  <div class="flex space-x-2">
                     <p class=" text-center font-semibold text-[#02356A]">Sujet de la transation:</p>
                     <p class=" text-center">voyage de <strong> {{ transaction.reservation.trajet.ville_depart+"( "+transaction.reservation.trajet.point_rencontre+" )" }}</strong> vers  <strong> {{ transaction.reservation.trajet.ville_destination+"( "+transaction.reservation.trajet.point_destination+" )" }}</strong></p>
                  </div>
               </div>
               
               <div class="flex justify-around items-center mt-10">
                  <div>
                     <button @click="DetailTransaction = !DetailTransaction"
                                                        class="px-3 py-1 bg-green-500 border border-green-500 hover:bg-transparent duration-500 hover:text-green-500 text-white font-semibold rounded text-sm">fermer</button>
                  </div>
               </div>
               
            </div>
         </div>
         <div v-if="FraisTap"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="FraisTap = !FraisTap" class="h-full w-full  absolute"></div>
            <div
               class="w-6/12 bg-white  rounded-lg mx-auto p-4 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class="text-xl text-center text-[#02356A]">
                  <p>frais sur les reservations</p>
               </div>
               
               <div class="h-1 bg-[#02356A] w-8/12 mx-auto"></div>

               <form class="w-8/12 mx-auto space-y-2 rounded">
                  <div class="text-center text-sm">
                  <p>il s'agit du montant ajouté à toutes les transactions pour les réservations de covoiturage</p>
               </div>
                  <div class="capitalize">
                     <p>montant du frais</p>
                  </div>
                  <div>
                     <input v-model="montantFrais" type="number" required style="appearance: textfield"
                        class="w-full h-10 px-4 border focus:outline-none text-sm">
                  </div>
                  <div class="flex justify-end items-center pt-2">
                     <div v-if="FraisLoading"
                        class="animate-spin ease-linear rounded-full w-8 h-8 border-t-2 border-b-2 border-[#02356A]">
                     </div>
                     <button v-else @click="updateFrais" class="px-4 py-2 bg-[#02356A] text-white rounded">
                        enregistrer
                     </button>
                  </div>
               </form>
               
            </div>
         </div>

         <div v-if="UserTap"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="UserTap = !UserTap" class="h-full w-full  absolute"></div>
            <div
               class="w-5/12 bg-white  rounded-lg mx-auto py-8 overflow-hidden space-y-3 z-50 flex flex-col justify-center">
               <div class="text-xl text-center text-[#02356A]">
                  <p>Ajouter une compte</p>
               </div>
               <div class="h-1 bg-[#02356A] w-8/12 mx-auto"></div>

               <form @submit.prevent="CreateUser" class="w-9/12 mx-auto space-y-6 rounded">
                  <div class="w-full space-y-1">
                     <div class="capitalize text-sm">
                        <p>nom</p>
                     </div>
                     <div>
                        <input v-model="form.name" type="text" required placeholder="Nom"
                           class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                     </div>
                  </div>
                  <div class="w-full space-y-1">
                     <div class="capitalize text-sm">
                        <p>email</p>
                     </div>
                     <div>
                        <input v-model="form.email" type="email" required placeholder="example@gmail.com"
                           class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                     </div>
                  </div>

                  <div class="w-full space-y-1">
                     <div class="capitalize text-sm">
                        <p>numéro de téléphone</p>
                     </div>
                     <div>
                        <input v-model="form.numero" type="text" required placeholder="6xxxxxx"
                           class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                     </div>
                  </div>
                  <div class="w-full space-y-1">
                     <div class="capitalize text-sm">
                        <p>type de compte</p>
                     </div>
                     <div>
                        <select v-model="form.type" name="" id="" class="w-full h-10 px-4 border border-slate-800 rounded-lg focus:outline-none text-sm">
                           <option value="0">client</option>
                           <option value="1">chauffeur</option>
                           <option value="2">caissiere</option>
                           <option value="2">administrateur</option>
                        </select>
                     </div>
                  </div>
                  <div class="flex justify-center items-center pt-2">
                     <div v-if="UserLoading"
                        class="animate-spin ease-linear rounded-full w-8 h-8 border-t-2 border-b-2 border-[#02356A]">
                     </div>
                     <button v-else  class="px-4 py-2 bg-[#02356A] text-white rounded">
                        enregistrer
                     </button>
                  </div>
               </form>
            </div>
         </div>

         <div v-if="loading"
            class="h-screen w-screen bg-black bg-opacity-30  absolute z-50 flex justify-center items-center">
            <div class="three-body">
               <div class="three-body__dot"></div>
               <div class="three-body__dot"></div>
               <div class="three-body__dot"></div>
            </div>
         </div>

         <div v-if="IsVehicule"
            class="h-screen w-screen bg-opacity-30 bg-black  absolute z-50 flex justify-center items-center">
            <div @click="IsVehicule = !IsVehicule" class="h-full w-full  absolute"></div>
            <div class="w-8/12 bg-white  rounded mx-auto p-4 overflow-hidden space-y-10 z-50">
               <div class="text-xl text-center text-[#02356A]">
                  <p>Informations sur le vehicule</p>
               </div>
               <div class="    grid grid-cols-3 ">
                  <div class="flex flex-col justify-center items-center ">
                     <div>
                        <img src="/images/car.png" class="h-16 w-16" alt="">
                     </div>
                     <div class="text-center">
                        <p>{{ vehicule.marque }}</p>
                        <p>{{ vehicule.modele }}</p>
                        <p>{{ vehicule.couleur }}</p>
                        <p>nombre de place :{{ vehicule.nombre_place }}</p>
                        <p>nombre de portes : {{ vehicule.nombre_portes }}</p>
                        <p>etat du vehicule : {{ vehicule.etat }}</p>
                     </div>
                  </div>
                  <div v-if="piece.length != 0" class="col-span-2 h-full text-center space-y-3">
                     <div class="text-[#02356A] text-xl">
                        <p>piece du vehicule</p>
                     </div>
                     <div v-for="item in piece" :key="item.id" class="w-full  ">
                        <div class="flex space-x-2 items-center">
                           <span class="w-3 h-3 rounded-full bg-[#02356A]"></span>
                           <span class="text-lg font-light capitalize text-[#02356A]">{{item.nom}}</span>
                        </div>
                        <div class="h-36  w-full flex justify-around items-center">
                           <div>
                              <div class="h-28 w-52 border-2 rounded border-black flex justify-center items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-10">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                       d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                 </svg>
                              </div>
                              <div>
                                 <p>vehicule</p>
                              </div>
                           </div>
                           <div>
                              <div class="h-28 w-52 border-2 rounded border-black flex justify-center items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-10">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                       d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                 </svg>
                              </div>
                              <div>
                                 <p>verso</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="flex space-x-4 justify-center">
                        <button @click="IsVehicule = false"
                           class="px-3 py-1 bg-red-500 border border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-semibold rounded">
                           annuler
                        </button>
                        <button
                           class="px-3 py-1 bg-[#02356A] border border-[#02356A] hover:bg-transparent duration-500 hover:text-[#02356A] text-white font-semibold rounded">
                           validez les pieces
                        </button>
                     </div>
                  </div>
                  <div v-else class="col-span-2 h-full flex justify-center text-[#02356A] text-lg items-center">
                     <span>ce véhicule n'a pas de pièces enregistrées par le propriétaire</span>
                  </div>
               </div>
            </div>
         </div>

         <div class="h-screen w-[18%] print:w-0  print:hidden bg-white border-r flex fixed flex-col justify-between">
            <div>
               <div class="h-20 w-full  pt-20 flex flex-col justify-center items-center space-x-3">
                  <div class="w-16 h-16  rounded-full flex justify-center items-center ">
                     <img src="/images/logo.png" class="w-full h-full object-cover object-center" alt="">
                  </div>
                  <div class="">
                     <p class="text-2xl  text-[#02356A] font-['roboto'] font-semibold uppercase text-center">covoiturage express</p>
                  </div>
               </div>
               <div class="space-y-2 mt-20 mx-4 ">
                  <router-link to="dashboard" class="flex space-x-4  p-2 rounded ">
                     <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6 ">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>{{user.type > 2 ?'Dashboard':'Mon profil'}}</span>
                     </div>
                  </router-link>
                  <router-link v-if="user.type > 2" to="utilisateurs" class="flex space-x-4 p-2 rounded ">
                     <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6 ">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>utilisateurs</span>
                     </div>
                  </router-link>
                  <router-link v-if="user.type > 2" to="vehicules" class="flex space-x-4  p-2 rounded ">
                     <div class="flex items-center space-x-3">
                        
                        <svg id="Layer_1"  version="1.1" viewBox="0 0 30 30" xml:space="preserve"
                           xmlns="http://www.w3.org/2000/svg" class="w-6 "
                           xmlns:xlink="http://www.w3.org/1999/xlink">
                           <path
                              d="M26.206,12.559l-2.058-5.88C23.587,5.077,22.069,4,20.371,4H9.629C7.931,4,6.413,5.077,5.853,6.678l-2.058,5.88  C2.696,13.281,2,14.53,2,15.904V23c0,1.105,0.895,2,2,2s2-0.895,2-2v-1.261c0,0,5.281,0.261,9,0.261s9-0.261,9-0.261V23  c0,1.105,0.895,2,2,2s2-0.895,2-2v-7.096C28,14.53,27.303,13.281,26.206,12.559z M6.595,10.613l1.146-3.274  C8.022,6.537,8.779,6,9.629,6h10.742c0.85,0,1.607,0.537,1.888,1.339l1.146,3.274c0.18,0.515-0.249,1.034-0.788,0.947  C20.656,11.243,18.135,11,15,11c-3.135,0-5.656,0.243-7.617,0.56C6.844,11.647,6.415,11.128,6.595,10.613z M6.5,18  C5.672,18,5,17.328,5,16.5S5.672,15,6.5,15S8,15.672,8,16.5S7.328,18,6.5,18z M18,17h-6c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h6  c0.552,0,1,0.448,1,1C19,16.552,18.552,17,18,17z M23.5,18c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5  S24.328,18,23.5,18z" />
                        </svg>
                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>vehicules</span>
                     </div>
                  </router-link>
                  <router-link v-if="user.type > 2" to="transactions" class="flex space-x-4  p-2 rounded ">
                     <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>transactions</span>
                     </div>
                  </router-link>
                  <router-link v-if="user.type > 2" to="reservations" class="flex space-x-4  p-2 rounded  ">
                     <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>reservations</span>
                     </div>
                  </router-link>
                  <router-link v-if="user.type > 2" to="trajets" class="flex space-x-4  p-2 rounded ">
                     <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                     </div>
                     <div class="text-md font-['roboto'] capitalize ">
                        <span>trajets</span>
                     </div>
                  </router-link>
             
               </div>
            </div>
            <div class="h-14 w-full flex space-x-3 justify-center items-center mb-4">
               <button @click="logout" title="deconnexion">
                  <span class="text-lg font-['roboto'] block text-red-400">Deconnexion</span>
               </button>
               <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     class="size-6 rotate-90 text-red-500">
                     <path
                        d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" />
                     <path
                        d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                  </svg>
               </div>
            </div>
         </div>
         
         <div class="flex justify-end h-screen overflow-y-scroll w-screen overflow-x-hidden">
            <div class="h-full w-[82%] print:w-full ">
            <div class="h-20 mb-6 w-full print:hidden flex items-center justify-center bg-[#02356A]">
               <div class="w-[95%] mx-auto  flex justify-between  ">
                  <div class="space-x-4 flex items-center">
                     <span class="font-['roboto'] text-2xl text-white font-semibold">Tableau De Bord</span>
                  </div>
                  <div class="flex space-x-4 items-center">

                     <button v-if="this.$store.state.user.type > 0" @click="this.$router.push('/AjouterTrajet')"  class="space-x-2 px-2 py-1 flex items-center text-white border border-white rounded-full">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                           </svg>

                        </span>
                        <span class="flex  text-sm">
                           ajouter un trajet
                        </span>
                     </button>

                     <button  @click="this.$router.push('/recherche')" class="space-x-2 px-3 py-1 flex items-center text-white border border-white rounded-full">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                           </svg>
                        </span>
                        <span class="flex  text-sm">
                           recherche
                        </span>
                     </button>

                     <div v-if="this.user.wallet" class="flex space-x-1 items-center text-white" title="porte monnaie de covex">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                           </svg>
                        </span>
                        <span >
                           {{ this.user.wallet.montant+" XAF" }}
                        </span>
                     </div>
                     <div v-if="this.$store.state.user.type > 2"
                        class="bg-[#02356A] border border-white w-8 h-8 flex items-center justify-center rounded-full">
                        <svg @click="getFrais" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke-width="1.5" stroke="currentColor" class="size-6 text-white cursor-pointer">
                           <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                     </div>
                     <div @click="getNotification"
                        class=" border border-white w-8 h-8 flex items-center justify-center rounded-full">
                        <svg v-if="!notif" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                           class="size-5 text-white">
                           <path fill-rule="evenodd"
                              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                              clip-rule="evenodd" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke-width="1.5" stroke="currentColor" class="size-5 text-red-500">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                     </div>
                  </div>
                  
                  <div v-if="notif"
                     class="max-h-96 space-y-2 shadow overflow-y-scroll w-80 p-4 rounded bg-[#02356A] absolute z-50 top-10 right-[3.9rem]">
                     <div class="text-white">
                        <p>les notifications</p>
                     </div>
                     <div class="w-full bg-white h-px "></div>

                     <div v-for="notification in notifications" :key="notification"
                        class="p-3 bg-white rounded flex space-x-3 items-center">
                        <span v-if="notification.read_at == null" class="w-3 h-3 bg-[#02356A] rounded-full"></span>
                        <div class="  capitalize">
                           <p class="text-sm">{{ notification.data.titre }}</p>
                           <span class="text-xs font-light">{{ notification.data.description }}</span>
                        </div>
                     </div>
                     <div class="w-full flex justify-center" v-if="loadNotif">
                        <div class="animate-spin ease-linear rounded-full w-6 h-6 border-t-2 border-b-2 border-white">
                        </div>
                     </div>
                     <div v-if="notifications.length == 0 && !loadNotif" class="text-sm text-center text-white ">
                        <span>pas de notification</span>
                     </div>
                  </div>
               </div>
            </div>
            <div class="  ">
               <div class="p-3 flex justify-between flex-col h-[85%]">
                  <router-view name="one"></router-view>
                  <footer class="bg-white md:flex print:hidden items-center justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-2 border">
                        <ul class="flex items-center flex-wrap mb-0">
                           <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
                           <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
                           <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
                           <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
                           <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
                        </ul>
                        <div class="flex sm:justify-center space-x-6">
                           <a href="#" class="text-gray-500 hover:text-gray-900">
                              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                 <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                              </svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900">
                              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                 <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                              </svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900">
                              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900">
                              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                 <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                              </svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900">
                              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                 <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                              </svg>
                           </a>
                        </div>
                  </footer>
               </div>
            </div>
         </div>
         </div>
      </div>
   </div>
</template>
<script>
import moment from 'moment'
export default {
   beforeRouteLeave() {
      window.emitter.off("Vehicule")
      window.emitter.off("SignalUser")
      window.emitter.off("ShowReservation")
      window.emitter.off("loading")
      window.emitter.off("DetailTrans")
      window.emitter.off("ShowProfile")
      window.emitter.off("FormVehicule")
   },
   async mounted() {


let lastActivityTime = Date.now();


document.addEventListener('mousemove', () => {
  lastActivityTime = Date.now();
});

setInterval(() => {
  const currentTime = Date.now();
  const inactivityDuration = currentTime - lastActivityTime;

console.log(inactivityDuration);
  if (inactivityDuration > 1800000) { 
   localStorage.removeItem('jwtToken');
   this.$router.push('/');
  }
}, 60000); 


      window.emitter.on("SignalUser", (data) => {
        this.UserTap = data[0]
      })

      window.emitter.on("loading", (data) => {
         this.loading = data
      })

      window.emitter.on("ShowUpdatedTap",()=>{
         this.ShowUpdatedTap();
      })

      window.emitter.on("ShowReservation", (data) => {
         this.loading = true
         this.axios.get(this.$store.state.api + "GetConversationAdmin/" + data.id, this.$store.state.config)
            .then(({ data }) => {
               this.loading = false
               this.DetailReservation = true
               this.reservation = data[0]
               console.log(data)
            }).catch(err => console.log(err))
      })

      window.emitter.on("ShowProfile", (user) => {
         this.userSelect = user
         this.ProfileTap = true
         this.ProfileLoading = true
         this.axios.get(this.$store.state.api + "UserPiece/"+user.id, this.$store.state.config)
            .then(({ data }) => {
               this.userPiece = data
               this.ProfileLoading = false
            }).catch(error => {
               console.log(error)
            })
      })

      window.emitter.on("FormVehicule", () => {
         this.AddVehiculeTap = true
      })

      window.emitter.on("DetailTrans", (data) => {
         this.DetailTransaction = true
         this.transaction = data
      })

      window.emitter.on("Vehicule", (data) => {
         this.loading = true
         this.vehicule = data
         this.axios.get(this.$store.state.api + "VehiculePiece/" + data.id, this.$store.state.config)
            .then(({ data }) => {
               this.piece = data
               this.loading = false
               this.IsVehicule = true
            }).catch(err => console.log(err))
      })

      if (!localStorage.getItem('jwtToken')) {
         this.$router.push('/')
      } else {
         this.loading = true
         this.axios.get(this.$store.state.api + "user", this.$store.state.config)
            .then(({ data }) => {
               this.user = data
               this.$store.state.user = data
            }).catch(error => {
               if (error.response.status == 401) {
                  localStorage.clear();
                  this.$router.push('/')
               }
            })
         this.axios.get(this.$store.state.api + "StartDashboard", this.$store.state.config)
            .then(({ data }) => {
               this.$store.state.dashbaord = data
               this.loading = false
            }).catch(err => console.log(err))

         this.axios.get(this.$store.state.api + "AllUsers", this.$store.state.config)
            .then(({ data }) => {
               this.$store.state.users = data.data
            }).catch(err => {
               console.log(err)
            })

            this.axios.get(this.$store.state.api + "getFrais", this.$store.state.config)
               .then(({ data }) => {
                  this.$store.state.montantFrais = data.montant
               }).catch(error => {
                  console.log(error)
               })

               this.axios.get(this.$store.state.api + "AllTransactions", this.$store.state.config)
            .then(({ data }) => {
                this.$store.state.transactions = data
            }).catch(err => {
                console.log(err)
            })

      }
   },
   data() {
      return {
         user: "",
         notif: false,
         notifications: [],
         loadNotif: false,
         vehicule: "",
         IsVehicule: false,
         loading: false,
         piece: "",
         montantFrais: 0,
         FraisLoading: false,
         FraisTap: false,
         UserTap: false,
         UserLoading: false,
         form: {
            name: '',
            email: '',
            numero: "",
            type:""
         },
         DetailTransaction:false,
         transaction:"",
         moment:moment,
         DetailReservation:false,
         reservation:"",
         UpdatedUser:false,
         UpdatedForm:{
            name:"",
            prenom:"",
            phone:"",
            ville:"",
            avatar:"",
         },
         UpdatedLoading:false,
         preview:"",
         index:0,
         ProfileTap:false,
         userSelect:"",
         userPiece:"",
         userTrajets:"",
         userVehicule:"",
         userAvis:[],
         ProfileLoading:false,
         AddVehiculeTap:false,
         AddFormTrajet:{
            marque:"",
            modele:"",
            couleur:"",
            nombre_portes:0,
            etat:"",
            nombre_places:0
         }
      }
   },

   methods: {

      GetPiece(){
         this.index = 0
         this.axios.get(this.$store.state.api + "UserPiece/"+this.userSelect.id, this.$store.state.config)
            .then(({ data }) => {
               this.userPiece = data
               this.ProfileLoading = false
            }).catch(error => {
               console.log(error)
            })
      },
 
      GetTrajets(){
         this.ProfileLoading = true
         this.index = 1
         this.axios.get(this.$store.state.api + "UserPosts/"+this.userSelect.id, this.$store.state.config)
            .then(({ data }) => {
               this.userTrajets = data
               this.ProfileLoading = false
            }).catch(error => {
               console.log(error)
            })
      },

      SaveVehicule(){
         this.loading = true
         let data = new FormData();
         data.append("modele", this.AddFormTrajet.modele)
         data.append("marque", this.AddFormTrajet.marque)
         data.append("couleur", this.AddFormTrajet.couleur)
         data.append("nombre_portes", this.AddFormTrajet.nombre_portes)
         data.append("etat", this.AddFormTrajet.etat)
         data.append("nombre_places", this.AddFormTrajet.nombre_places)
         this.axios.post(this.$store.state.api + "CreateUser", data, this.$store.state.config)
            .then(({ data }) => {
               console.log(data);
               this.loading = false
               this.AddVehiculeTap = false
               this.AddFormTrajet.modele = ""
               this.AddFormTrajet.marque = ""
               this.AddFormTrajet.couleur = ""
               this.AddFormTrajet.nombre_portes = ""
               this.AddFormTrajet.etat = ""
               this.AddFormTrajet.nombre_places = ""
            }).catch(error => {
               this.loading = false
               console.log(error)
            })
      },

      GetVehicule(){
         this.index = 2
         this.ProfileLoading = true
         this.axios.get(this.$store.state.api + "UserVehicule/"+this.userSelect.id, this.$store.state.config)
            .then(({ data }) => {
               this.userVehicule = data
               this.ProfileLoading = false
            }).catch(error => {
               console.log(error)
            })
      },
      GetAvis(){
         this.index = 3
         this.ProfileLoading = true
         this.axios.get(this.$store.state.api + "UserAvis/"+this.userSelect.id, this.$store.state.config)
            .then(({ data }) => {
               this.userAvis = data
               this.ProfileLoading = false
            }).catch(error => {
               console.log(error)
            })
      },

      getNotification() {
         this.notif = !this.notif;
         this.loadNotif = true
         this.axios.get(this.$store.state.api + "notification", this.$store.state.config)
            .then(({ data }) => {
               this.notifications = data[0]
               console.log(this.notifications);
               this.loadNotif = false
               console.log(data)
            }).catch(error => {
               console.log(error)
            })
      },

      CreateUser() {
         this.UserLoading = true
         let data = new FormData();
         data.append("name", this.form.name)
         data.append("email", this.form.email)
         data.append("numero", this.form.numero)
         data.append("type", parseInt(this.form.type))
         this.axios.post(this.$store.state.api + "CreateUser", data, this.$store.state.config)
            .then(({ data }) => {
               this.UserLoading = false
               this.$store.state.users.unshift(data);
               this.UserTap = false
               this.form.email = ""
               this.form.name = ""
               this.form.numero = ""
               this.$store.state.dashbaord[5] ++
               if(this.form.type == 0) this.$store.state.dashbaord[1] ++
               if(this.form.type == 1) this.$store.state.dashbaord[0] ++
               if(this.form.type == 2) this.$store.state.dashbaord[6] ++
            }).catch(error => {
               this.UserLoading = false
               console.log(error)
            })
      },

      getFrais() {
         this.loading = true
         this.axios.get(this.$store.state.api + "getFrais", this.$store.state.config)
            .then(({ data }) => {
               this.loading = false
               this.FraisTap = !this.FraisTap;
               this.montantFrais = data.montant
               this.$store.state.montantFrais = data.montant
            }).catch(error => {
               console.log(error)
            })
      },

      updateFrais() {
         this.FraisLoading = true
         let data = new FormData();
         data.append("raison", "revenus");
         data.append("montant", this.montantFrais);
         data.append("_method", 'put');
         this.axios.post(this.$store.state.api + "updateFrais", data, this.$store.state.config)
            .then(({ data }) => {
               console.log(data)
               this.FraisLoading = false
               this.$store.state.montantFrais = this.montantFrais
               this.FraisTap = !this.FraisTap;
            }).catch(error => {
               console.log(error)
               this.FraisLoading = false
            })
      },

      DeleteMessage(messageId){
         this.axios.delete(this.$store.state.api + "DeleteMessage/"+messageId, this.$store.state.config)
            .then(({ data }) => {
               console.log(data)
              this.reservation.messages.filter((item,index)=>item.id == messageId ? this.reservation.messages.splice(index,1) : "")
            }).catch(error => {
               console.log(error)
               this.FraisLoading = false
            })
      },

      ShowUpdatedTap(){
         this.loading = true
         this.UpdatedForm.name = this.user.name
         this.UpdatedForm.prenom = this.user.prenom
         this.UpdatedForm.phone = this.user.phone
         this.UpdatedForm.ville = this.user.ville
         this.loading = false
         this.UpdatedUser = true
      },

      addAvatar(image){
         this.UpdatedForm.avatar = image.target.files[0]
         this.preview = URL.createObjectURL(image.target.files[0])
      },

      updateUser(){
         this.UpdatedLoading = true
         let data = new FormData();
         data.append("name",this.UpdatedForm.name);
         data.append("prenom",this.UpdatedForm.prenom);
         data.append("phone",this.UpdatedForm.phone);
         data.append("ville",this.UpdatedForm.ville);
         data.append('avatar', this.UpdatedForm.avatar);
         data.append('_method', 'PUT');
         this.axios.post(this.$store.state.api + 'editUser/'+this.user.id, data,this.$store.state.config)
         .then(({data}) => {
            console.log(data)
            this.UpdatedLoading = false
            this.user.name = this.UpdatedForm.name
            this.user.prenom = this.UpdatedForm.prenom
            this.user.phone = this.UpdatedForm.phone
            this.user.ville = this.UpdatedForm.ville
            this.UpdatedUser = false
            }).catch(
                error => {
                  console.log(error)
                this.UpdatedLoading = false
            })
      },

      logout() {
         this.axios.post(this.$store.state.api + "logout", "", this.$store.state.config)
            .then(({ data }) => {
               console.log(data);
               localStorage.clear()
               this.$router.push('/');
            }).catch(error => {
               console.log(error)
            })
      }
   }

}
</script>

<style scoped>
.router-link-active {
   background: #02356A;
   color: white;
}
.router-link-active #Layer_1{
   fill: white;
}
</style>
<style>

/* loading */
.three-body {
   --uib-size: 35px;
   --uib-speed: 0.8s;
   --uib-color: #02356A;
   position: relative;
   display: inline-block;
   height: var(--uib-size);
   width: var(--uib-size);
   animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
   position: absolute;
   height: 100%;
   width: 30%;
}

.three-body__dot:after {
   content: '';
   position: absolute;
   height: 0%;
   width: 100%;
   padding-bottom: 100%;
   background-color: var(--uib-color);
   border-radius: 50%;
}

.three-body__dot:nth-child(1) {
   bottom: 5%;
   left: 0;
   transform: rotate(60deg);
   transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
   bottom: 0;
   left: 0;
   animation: wobble1 var(--uib-speed) infinite ease-in-out;
   animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
   bottom: 5%;
   right: 0;
   transform: rotate(-60deg);
   transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
   bottom: 0;
   left: 0;
   animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
}

.three-body__dot:nth-child(3) {
   bottom: -5%;
   left: 0;
   transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
   top: 0;
   left: 0;
   animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
   0% {
      transform: rotate(0deg);
   }

   100% {
      transform: rotate(360deg);
   }
}

@keyframes wobble1 {

   0%,
   100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
   }

   50% {
      transform: translateY(-66%) scale(0.65);
      opacity: 0.8;
   }
}

@keyframes wobble2 {

   0%,
   100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
   }

   50% {
      transform: translateY(66%) scale(0.65);
      opacity: 0.8;
   }
}


</style>