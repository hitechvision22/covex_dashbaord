<template>
    <div>
        <div id="ElementPrint" class="w-[98%] mx-auto   flex justify-between">
            <div class="text-lg font-semibold">
                <p>Liste des utilisateurs</p>
            </div>
            <div class="flex space-x-4 items-center print:hidden">
                <button @click="PrintList"
                    class="flex space-x-2 items-center text-green-500  border border-green-500 px-4 py-1 rounded hover:bg-green-500 hover:text-white duration-300">
                    <span>Imprimer la liste</span>
                </button>
                <button @click="SignalUser"
                    class="flex space-x-2 items-center text-[#02356A]  border border-[#02356A] px-4 py-1 rounded hover:bg-[#02356A] hover:text-white duration-300">
                    <span> Ajouter une utilisateur</span>
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
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>nom de l'utilisateur </span>
                                                </button>
                                            </th>

                                            <th scope="col"
                                                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                email
                                            </th>

                                            <th scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                role
                                            </th>

                                            <th scope="col" 
                                                class="px-4 py-3.5 print:hidden text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                mot de passe
                                            </th>

                                            <th scope="col" class="print:hidden py-3.5 px-4">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y  ">
                                        <tr v-for="user in users" :key="user.id">
                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 class="font-medium text-gray-800 flex">
                                                        {{ user.name }}
                                                        <span v-if="user.verified ==1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                fill="#02356A" class="size-5 ml-px">
                                                                <path fill-rule="evenodd"
                                                                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                                                    clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </h2>
                                                    <p class="text-sm font-normal text-gray-600 ">
                                                        {{ user.prenom }}
                                                    </p>
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div
                                                    class="inline px-3 py-1 text-sm font-normal text-[#02356A] rounded-full  gap-x-2  ">
                                                    {{ user.email }}
                                                </div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 class="text-gray-700 ">
                                                        {{ user.type == 0 ? 'client' : user.type == 1 ?
                    'chauffeur' : user.type == 2 ? 'caissiere' : user.type == 3 ?
                        "administrateur" : 'super-administrateur' }}
                                                    </h4>
                                                </div>
                                            </td>

                                            <td class="px-4 print:hidden py-4 text-sm whitespace-nowrap">
                                                <div v-if="user.Viewpassword != null" class="flex space-x-2">
                                                    <h6 :id="'pwd' + user.id" class="text-gray-700 "
                                                        style="display: none">
                                                        {{ user.Viewpassword }}
                                                    </h6>
                                                    <h6 :id="'pwd-' + user.id" class="text-gray-700 ">
                                                        {{ 'xxxxx' }}
                                                    </h6>
                                                    <button @click="showpwd(user.id)" class="text-[#02356A]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="size-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>

                                            <td class="px-4 print:hidden py-4 text-sm whitespace-nowrap flex space-x-2">
                                                <div v-if="user.id != this.$store.state.user.id" class="block">
                                                    <button @click="DeleteUser(user)"
                                                        class="px-3 py-1 bg-red-500 border border-red-500 hover:bg-transparent duration-500 hover:text-red-500 text-white font-semibold rounded">supprimer</button>
                                                </div>
                                                <div v-if="user.id != this.$store.state.user.id && user.verified==0"
                                                    class="block">
                                                    <button @click="certifier(user)"
                                                        class="px-3 py-1 bg-[#02356A] border border-[#02356A] hover:bg-transparent duration-500 hover:text-[#02356A] text-white font-semibold rounded">
                                                        certifie
                                                    </button>
                                                </div>
                                               

                                                <div v-if="user.id != this.$store.state.user.id && user.verified ==1"
                                                    class="block">
                                                    <button @click="Decertifier(user)"
                                                        class="px-3 py-1 bg-[#02356A] border border-[#02356A] hover:bg-transparent duration-500 hover:text-[#02356A] text-white font-semibold rounded">
                                                        retirer
                                                        la certification
                                                    </button>
                                                </div>

                                                <div
                                                    class="block">
                                                    <button  @click="Profile(user)"
                                                        class="px-3 py-1 bg-[#02356A] border border-[#02356A] hover:bg-transparent duration-500 hover:text-[#02356A] text-white font-semibold rounded">
                                                        profile
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr v-if="UserLoading">
                                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div class="space-y-3">
                                                    <div class="w-16 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                    <div class="w-32 h-4 bg-slate-400 animate-pulse rounded-full"></div>
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div class="w-44 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="w-36 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>

                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="w-36 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>

                                            <td class="px-4 pt-7 text-sm whitespace-nowrap flex space-x-2">
                                                <div class="w-20 h-6 bg-slate-400 animate-pulse rounded-full"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                            <pagination :data="this.$store.state.users" @pagination-change-page="getUsers"></pagination>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script >
import pagination from "laravel-vue-pagination";
export default {
    components:{
        pagination
    },  
    
    data() {
        return {
            lookPassword: false
        }
    },
    methods: {
        async getUsers(page = 1){
         this.axios.get(`${this.$store.state.api}AllUsers?page=${page}`, this.$store.state.config)
            .then(({ data }) => {
               this.$store.state.users = data.data
            }).catch(err => {
               console.log(err)
            })
        },

        PrintList(){
            const ElementPrint = document.getElementById("ElementPrint");

            const tempPage = document.createElement("div");
            tempPage.innerHTML = ElementPrint.innerHTML;

            window.print(tempPage)
        },


        DeleteUser(user) {
            window.emitter.emit("loading", true)
            this.axios.delete(this.$store.state.api + "deletedUser/" + user.id, this.$store.state.config)
                .then(({ data }) => {
                    window.emitter.emit("loading", false)
                    console.log(data)
                    this.$store.state.dashbaord[5]--
                    this.users.filter((item, index) => item.id == user.id ? this.users.splice(index, 1) : "");
                }).catch(err => {
                    window.emitter.emit("loading", false)
                    console.log(err)
                })
        },
        certifier(user) {
            window.emitter.emit("loading", false)
            let data = new FormData();
            data.append("verified", 1)
            data.append("_method", "put")
            this.axios.post(this.$store.state.api + "editUser/" + user.id, data, this.$store.state.config)
                .then(({ data }) => {
                    this.UserLoading = false
                    this.$store.state.users.filter((item, index) => item.id == user.id ? this.$store.state.users[index].verified = true : "");
                    console.log(data);
                }).catch(error => {
                    this.UserLoading = false
                    console.log(error)
                })
        },

        Decertifier(user) {
            window.emitter.emit("loading", false)
            let data = new FormData();
            data.append("verified", 0)
            data.append("_method", "put")
            this.axios.post(this.$store.state.api + "editUser/" + user.id, data, this.$store.state.config)
                .then(({ data }) => {
                    this.UserLoading = false
                    this.$store.state.users.filter((item, index) => item.id == user.id ? this.$store.state.users[index].verified = false : "");
                    console.log(data);
                }).catch(error => {
                    this.UserLoading = false
                    console.log(error)
                })
        },

        SignalUser() {
            window.emitter.emit("SignalUser", [true])
        },

        showpwd(id) {
            console.log(id)
            if (document.getElementById("pwd" + id).style.display == 'block') {
                document.getElementById("pwd-" + id).style.display = 'block'
                document.getElementById("pwd" + id).style.display = 'none'
            } else {
                document.getElementById("pwd-" + id).style.display = 'none'
                document.getElementById("pwd" + id).style.display = 'block'
            }
        },

        Profile(user){
            window.emitter.emit("ShowProfile", user)
        }
    },

    mounted() {

        this.getUsers()
    },

    computed: {
        users() {
            return this.$store.state.users;
        }
    }
}
</script>