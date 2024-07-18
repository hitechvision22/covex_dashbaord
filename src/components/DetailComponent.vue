<template>
    <div>
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
        <div class="w-full h-52 pt-2 grid grid-cols-3">
            <div class=" h-full w-full col-span-2 px-3">
                <div class="flex space-x-2  items-center">
                    <div class="text-lg font-semibold">
                        <span>Douala</span>
                    </div>
                    <span>à</span>
                    <div class="text-lg font-semibold">
                        <span>Douala</span>
                    </div>
                </div>
                <div>
                    <span>date de depart: </span>
                    <span>02/02/2001</span>
                </div>

                <div>
                   <div>
                        <p>detail de trajet</p>
                   </div>
                   <div>
                        <div class="flex space-x-2">
                            <span>Départ: </span>
                            <span>02/02/2001</span>
                        </div>
                        <div class="flex space-x-2">
                            <span>Arrivée: </span>
                            <span>02/02/2001</span>
                        </div>
                   </div>
                </div>
            </div>
            <div class="bg-blue-200 h-full w-full col-span-1"></div>
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