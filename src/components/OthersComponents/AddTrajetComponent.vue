<template>
    <div>
        <div class="flex items-center justify-center px-12">

            <div class="mx-auto w-full bg-white">
                <form @submit.prevent="AddTrajet" class="space-y-5">
                    <div class="text-2xl font-semibold">
                        <p>Ajouter un trajet de co-voiturage</p>
                    </div>
                    <div class="-mx-3 grid grid-cols-3 w-full ">
                        <div class="w-full px-3 h-14">
                            <input type="text" v-model="form.ville_depart" required name="fName" id="fName" placeholder="ville de depart"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                        <div class="w-full px-3 h-14">
                            <input type="text" v-model="form.point_rencontre" required name="fName" id="fName" placeholder="point de depart ex: tradex yassa"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                        <div class="w-full px-3 h-14">
                            <input type="text" name="fName" id="fName" required v-model="form.ville_destination" placeholder="ville de destination"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                    </div>

                    <div class="-mx-3 grid grid-cols-3 w-full ">
                        <div class="w-full px-3 h-14">
                            <input type="text" name="fName" id="fName" required v-model="form.point_destination" placeholder="point de d'arrivee ex: tradex yassa"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                        <div class="w-full px-3 h-14">
                            <input type="date" name="fName" id="fName" required v-model="form.date_depart" placeholder="date de depart"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                        <div class="w-full px-3 h-14">
                            <input type="time" name="fName" id="fName" required v-model="form.heure_depart" placeholder="heure de depart"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                    </div>
                    <div class="-mx-3 grid grid-cols-3 w-full ">
                        <div class="w-full px-3 h-14">
                            <input type="number" name="fName" required id="fName" v-model="form.nombre_de_place" placeholder="nombre de place"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                        <div class="w-full px-3 h-14">
                            <input type="number" name="fName" required id="fName" v-model="form.prix" placeholder="montant de la reservation"
                                class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md " />
                        </div>
                    </div>


                    <div class="space-x-7">
                        <div class="flex space-x-3 items-center">
                            <span class="w-4 h-4 bg-[#02356A] rounded-full"></span>
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                                Accessoire de voyage
                                <div class="text-sm text-slate-400">
                                        les clients de ce trajet ont-il la possibilite de venir avec des bagages?
                                </div>
                            </label>
                        </div>
                        
                        <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <input type="radio"   @change="handleRadioBagage" required name="radio1" id="radioButton1" class="h-5 w-5 accent-[#07074D] " />
                                <label for="radioButton1"  class="pl-3 text-base font-medium text-[#07074D]">
                                    j'accepte les bagages !!!
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" @change="handleRadioBagage" required name="radio1" id="radioButton2" class="h-5 w-5 accent-[#07074D]" />
                                <label for="radioButton2" class="pl-3 text-base font-medium ">
                                    non, j'en veux pas !!!
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="space-x-7">
                        <div class="flex space-x-3 items-center">
                            <span class="w-4 h-4 bg-[#02356A] rounded-full"></span>
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                                mode de paiement
                                <div class="text-sm text-slate-400">
                                    Les reservations de ce trajet seront t'il?
                                </div>
                            </label>
                        </div>
                        <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <input type="radio" @change="handleRadioMethode" required name="radio2" id="radioButton1" class="h-5 w-5 accent-[#07074D]" />
                                <label for="radioButton1" class="pl-3 text-base font-medium text-[#07074D]">
                                    regler en ligne(om/momo)
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" @change="handleRadioMethode" required name="radio2" id="radioButton2" class="h-5 w-5 accent-[#07074D]" />
                                <label for="radioButton2" class="pl-3 text-base font-medium text-[#07074D]">
                                    regler comptant (payer a la fin du voyage)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="flex  justify-end">
                        <button type="submit"
                            class="hover:shadow-form rounded-md bg-[#02356A] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Enregistrer et Poster
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  created () {
  },
  data () {
    return {
        form:{
            ville_depart:"",
            point_rencontre:"",
            ville_destination:"",
            point_destination:"",
            date_depart:"",
            heure_depart:"",
            prix:"",
            nombre_de_place:"",
            Mode_de_paiement:"",
            bagage:"",
        }
    }
  },
  methods: {
    AddTrajet(){
        window.emitter.emit("loading",true)
        let data = new FormData();
        data.append("ville_depart",this.form.ville_depart)
        data.append("point_rencontre",this.form.point_rencontre)
        data.append("ville_destination",this.form.ville_destination)
        data.append("point_destination",this.form.point_destination)
        data.append("date_depart",this.form.date_depart)
        data.append("heure_depart",this.form.heure_depart)
        data.append("prix",this.form.prix)
        data.append("nombre_de_place",this.form.nombre_de_place)
        data.append("etat",'actif')
        data.append("bagage",this.form.bagage=='on'? 1:0)
        data.append("Mode_de_paiement",this.form.Mode_de_paiement=='on'? 1:0)
        this.axios.post(this.$store.state.api + "trajet",data, this.$store.state.config)
            .then(({ data }) => {
                window.emitter.emit("loading",false)
                console.log(data)
                this.$store.state.dashbaord[2] ++
            }).catch(error => {
                window.emitter.emit("loading",false)
                console.log(error)
            })
    },

    handleRadioBagage(){
        this.form.bagage == 'on' ? this.form.bagage = 'off' : this.form.bagage = 'on';
    },

    handleRadioMethode(){
        this.form.Mode_de_paiement == 'on' ? this.form.Mode_de_paiement = 'off' : this.form.Mode_de_paiement = 'on';
    },
  },

}
</script>