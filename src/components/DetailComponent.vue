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
        <div class="w-full h-52 pt-2  grid grid-cols-3">
            <div class="col-span-2 h-full  space-y-3">
                    <div class="text-3xl font-semibold">
                        <p>Gatineau A Montreal</p>
                    </div>
                    <div class="text-lg font-semibold text-gray-500">
                        <p>Date de depart mardi 16 juillet a 02h800</p>
                    </div>
                    <div>
                        <p class="text-lg font-semibold">Depart: <span>Gatineau,QC,Canada</span></p>
                        <p class="text-lg font-semibold">Arrivee: <span>Gatineau,QC,Canada</span></p>
                    </div>

                    <div class="flex space-x-3 items-center">
                        <p>1 place libre</p>
                        <span class="w-2 h-2 rounded-full bg-[#02356A]"></span>
                        <p class="text-[#02356A] font-semibold">25 FCFA par places</p>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
        moment:moment,
    }
  },

}
</script>