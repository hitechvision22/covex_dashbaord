<template>
   <link rel="stylesheet"
   href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css" /> 
   <div class="space-y-4">

      <div class="w-full  mx-3 space-y-3 -mt-2">
         <div>
            <span class="text-2xl font-semibold">Mon profil</span>
         </div>
         <div class="items-center w-full py-4 flex justify-between border-b-2  border-[#02356A]">
            <div class="flex space-x-3 items-center">
               <div class="h-28 w-28 rounded-full bg-[#02356A] flex justify-center items-center">
                  <span class="text-white font-semibold uppercase text-lg">
                     {{ this.$store.state.user.name}}
                  </span>
               </div>
               <div class="space-y-1">
                  <div class="flex space-x-2 items-center">
                     <p class="text-2xl font-semibold">
                        <span class="">
                           {{ this.$store.state.user.name }}
                        </span>
                        {{ this.$store.state.user.prenom == null?"": this.$store.state.user.prenom}}
                     </p>
                     <span class="" v-if="this.$store.state.user.verified == 1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                     </span>
                  </div>
                  <div>
                     <p class="text-sm font-medium ">
                        {{ this.$store.state.user.email }}
                     </p>
                  </div>
                  <div>
                     <p class="text-sm font-ligth ">
                        {{ this.$store.state.user.type == 0 ? " client" : this.$store.state.user.type == 1 ? "chauffeur" : this.$store.state.user.type == 2 ?"caissiere" :this.$store.state.user.type == 3 ? "adminitrateur": "super-adminitrateur" }}
                     </p>
                  </div>
               </div>
            </div>
            <div class="mx-7 flex items-center space-x-4">
               <button @click="ShowForm"
                    class="flex space-x-2 items-center text-[#02356A]  border border-[#02356A] px-4 py-1 rounded hover:bg-[#02356A] hover:text-white duration-300">
                    <span>mon vehicule</span>
                </button>
                <button  @click="ShowUpdatedTap"
                    class="flex space-x-2 items-center text-[#02356A]  border border-[#02356A] px-4 py-1 rounded hover:bg-[#02356A] hover:text-white duration-300">
                    <span> Modifier mon profil</span>
                </button>
            </div>
         </div>
      </div>
      <div v-if="this.$store.state.user.type > 2" class="flex flex-col justify-center   py-2">
            <div
               class="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] grid grid-cols-5 gap-5 md:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
               <div
                  class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">Utilisateurs</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[5] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg stroke="currentColor" fill="#02356A" stroke-width="0" viewBox="0 0 24 24"
                              class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">Chauffeurs</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[0] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg stroke="currentColor" fill="#02356A" stroke-width="0" viewBox="0 0 24 24"
                              class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">clients</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[1] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg stroke="currentColor" fill="#02356A" stroke-width="0" viewBox="0 0 24 24"
                              class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">caissieres</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[6] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg stroke="currentColor" fill="#02356A" stroke-width="0" viewBox="0 0 24 24"
                              class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">revenus par reservation</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">{{this.$store.state.montantFrais}} XAF</h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row flex-col items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">Tous les covoiturages</p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[2] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row flex-col items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#02356A]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">reservations </p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[3] }}
                     </h4>
                  </div>
               </div>
               <div
                  class="relative flex flex-grow !flex-row flex-col items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                  <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                     <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#02356A" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                        </span>
                     </div>
                  </div>
                  <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                     <p class="font-dm text-sm font-medium text-gray-600">transactions </p>
                     <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        {{ this.$store.state.dashbaord[7] }}
                     </h4>
                  </div>
               </div>
            </div>
         </div>
         <div class="grid grid-cols-3 gap-4    w-full">
            <div class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                            <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                            <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p class="font-dm text-sm font-medium text-gray-600">Mes posts</p>
                    <h4 v-if="user.trajets" class="text-xl font-bold text-navy-700 dark:text-white">
                     {{ user.trajets.length }}
                    </h4>
                    </div>
                </div>
                <div class="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                            <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                            <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p class="font-dm text-sm font-medium text-gray-600">reservations</p>
                    <h4 v-if="user.reservations" class="text-xl font-bold text-navy-700 dark:text-white">
                     {{ user.reservations.length }}
                    </h4>
                    </div>
                </div>
         </div>

         <div v-if="user.type > 2" class=" text-xl font-semibold pt-2">
             <span>
                Nos Recentes Transactions
             </span>
          </div>
      <section v-if="user.type > 2" class="container  mx-auto">
         <div class="flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                     <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 ">
                              <thead class="bg-[#02356A]">
                                 <tr>
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                          
                                    </th>
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                          Date
                                    </th>
                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                          heure
                                    </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                          montant
                                    </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                          libelle de la transaction
                                    </th>
                                 </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                 <tr v-for="transaction in this.$store.state.transactions" :key="transaction.id">
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
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
                                    
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                       <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{{ moment(transaction.created_at).format("DD/MM/YYYY ") }}</h2>
                                    </td>
                                    
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                       <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{{ moment(transaction.date).format("h:MM") }}</h2>
                                    </td>
                                    <td class="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 ">
                                             <h2 class="text-md font-normal">
                                                {{ transaction.montant + " XAF" }}
                                             </h2>
                                          </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-black whitespace-nowrap">
                                       {{ transaction.libelle }}
                                    </td>
        
                                 </tr>
                              </tbody>
                        </table>
                     </div>
                  </div>
            </div>
         </div>


      </section>

    
   </div>
</template>
<script>
import moment from "moment"
export default {
  data () {
    return {
      moment:moment
    }
  },

  methods:{
   ShowUpdatedTap(){
      window.emitter.emit("ShowUpdatedTap")
   },

   ShowForm(){
      window.emitter.emit("FormVehicule")
   }
  },

   computed:{
      reservations(){
         return this.$store.state.reservations;
      },
      user(){
         return this.$store.state.user;
      },
   }
}
</script>

<style>

</style>

