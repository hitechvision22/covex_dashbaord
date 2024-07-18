<template class="bg-[#f0efef]">
    <div class="">
        <div class="h-screen w-screen  overflow-hidden  relative ">
            <div :class="errorTap ? 'transform translate-x-1 duration-500' : 'transform -translate-x-96 duration-500'"
                class="px-4 py-2 rounded  bg-red-500 text-white flex items-center space-x-2 mt-5 ml-2 absolute z-50 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mt-px">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <span class="capitalize" v-text="errorText"></span>
            </div>
            <div v-if="EmailTap"
                class="h-full w-full bg-black  bg-opacity-35 flex flex-col items-center  absolute z-40">
                <form @submit.prevent="sendMail" class=" w-11/12 lg:w-4/12 bg-white rounded mt-16 p-4 space-y-3 absolute">
                    <div class="font-['poppins']">
                        <p>entrer votre email </p>
                    </div>
                    <div class="">
                        <input type="text" v-model="EmailText" placeholder="Example@gmail.com"
                            class="w-full p-2 font-['poppins'] text-sm focus:outline-none bg-slate-100 focus:ring-[#02356A] focus:ring-1 rounded"
                            name="" id="">
                    </div>
                    <div class="flex justify-end items-end">
                        <div v-if="loadingEmail" class="loader"></div>
                        <button v-else
                            class="px-4 py-1 rounded bg-[#02356A] text-white font-['poppins']">valider</button>
                    </div>
                </form>
                <div @click="EmailTap = !EmailTap, EmailText = ''" class="w-full h-full cursor-pointer "></div>
            </div>

            <div v-if="CodeTap" class="h-full w-full bg-black  bg-opacity-35 flex flex-col items-center  absolute z-40">
                <form @submit.prevent="validated" class=" w-11/12 lg:w-4/12 bg-white rounded mt-16 p-4 space-y-3 absolute">
                    <div class="font-['poppins']">
                        <p>entrer le code recu par mail </p>
                    </div>
                    <div class="">
                        <input type="number" style="appearance: textfield;" v-model="CodeText" placeholder="1526"
                            class="w-full p-2  font-['poppins'] text-sm focus:outline-none bg-slate-100 focus:ring-[#02356A] focus:ring-1 rounded"
                            name="" id="">
                    </div>
                    <div class="flex justify-end items-end">
                        <div v-if="loadingCode" class="loader"></div>
                        <button v-else
                            class="px-4 py-1 rounded bg-[#02356A] text-white font-['poppins']">valider</button>
                    </div>
                </form>
                <div @click="CodeTap = !CodeTap, CodeText = ''" class="w-full h-full cursor-pointer "></div>
            </div>


            <div v-if="PasswordTap"
                class="h-full w-full bg-black  bg-opacity-35 flex flex-col items-center  absolute z-40">
                <form @submit.prevent="resetPassword" class="w-11/12 lg:w-4/12 bg-white rounded mt-16 p-4 space-y-3 absolute">
                    <div class="font-['poppins']">
                        <p>Entrer votre nouveau mot de passe </p>
                    </div>
                    <div
                        class="flex items-center w-full focus:ring-1 rounded-xl overflow-hidden ring-[#02356A] bg-slate-100">
                        <div class="w-11/12 ">
                            <input :type="ShowPassword ? 'text' : 'password'" v-model="PasswordText"
                                class="w-full px-3 py-3 bg-transparent  focus:outline-none  text-sm  font-['poppins']"
                                placeholder="enter your password">
                        </div>

                        <div @click="ShowPassword = !ShowPassword"
                            class="h-full w-1/12 cursor-pointer flex justify-center items-center p-1">
                            <svg v-if="!ShowPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#02356A] ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#02356A]  ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>


                        </div>
                    </div>
                    <div class="flex justify-end items-end">
                        <div v-if="loadingCode" class="loader"></div>
                        <button v-else
                            class="px-4 py-1 rounded bg-[#02356A] text-white font-['poppins']">valider</button>
                    </div>
                </form>
                <div @click="PasswordTap = !PasswordTap, PasswordTap = ''" class="w-full h-full cursor-pointer "></div>
            </div>
            <div class="w-full  h-full  absolute flex  ">
                <div class="w-full lg:w-1/2 h-full bg-black  overflow-hidden relative hidden lg:block">
                    <div
                        class="w-full p-4 h-full bg-black absolute bg-opacity-40 flex flex-col justify-around items-center">
                        <div class="space-y-4">
                            <div class="text-white text-5xl font-semibold text-center">
                                <p>Covoiturage Express</p>
                            </div>
                            <div class="text-white text-md text-center">
                                <p>bienvenue dans la partie d’administration. Nous sommes ravis de vous avoir à bord </p>
                            </div>
                        </div>
            
                    </div>
                    <img src="/images/loginLogo.jpg" class="h-full object-cover" alt="">
                </div>
                <div class="w-full lg:w-1/2 h-full    flex flex-col  ">
                    <div class="w-full h-full flex justify-center mt-20 lg:mt-0 lg:items-center">
                        <div class="w-11/12 lg:w-9/12 mx-auto space-y-3">
                            <div class="text-center text-2xl font-['poppins'] text-[#02356A] uppercase">
                                <p>Covoiturage Express</p>
                            </div>
                            <div class="text-center text-md lg:text-lg text-slate-400 font-['poppins']">
                                <p>Veuillez vous connecter sur votre compte</p>
                            </div>
                            <form @submit.prevent="login" class="w-11/12 lg:w-10/12 mx-auto pt-6 space-y-5">
                                <div class="w-full h-11 bg-white">
                                    <input type="email" v-model="email" required
                                        class="w-full font-semibold border-l-4 placeholder:capitalize placeholder:font-normal border-[#02356A] outline-none shadow focus:shadow-lg duration-700  h-full px-4 text-md "
                                        placeholder="Adresse Mail">
                                </div>
                                <div class="w-full  flex space-x-2 bg-white px-2  border-[#02356A] border-l-4 shadow hover:shadow-lg duration-300">
                                    <div class="w-11/12  h-11 ">
                                        <input :type="ShowFormPassword ? 'text' : 'password'" required
                                            style="appearance: textfield" v-model="password"
                                            class="w-full outline-none font-semibold placeholder:capitalize placeholder:font-normal  h-full px-2 text-sm font-['poppins'] "
                                            placeholder="mot de passe">
                                    </div>
                                    <div @click="ShowFormPassword = !ShowFormPassword"
                                        class="w-[10%] cursor-pointer h-10 flex items-center justify-end font-['poppins']">
                                        <svg v-if="!ShowFormPassword" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            class="size-6 text-[#02356A] ">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-[#02356A]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <span @click="EmailTap = !EmailTap"
                                        class=" cursor-pointer font-['poppins'] underline text-[#02356A] text-md lg:text-sm">
                                        mot de passe oublié?</span>
                                </div>

                                <div class="justify-center flex w-full">
                                    <div v-if="loading">
                                        <div class="three-body">
                                            <div class="three-body__dot"></div>
                                            <div class="three-body__dot"></div>
                                            <div class="three-body__dot"></div>
                                        </div>
                                    </div>
                                    <button v-else type="submit"
                                        class="w-9/12 bg-[#02356A] h-12 text-center font-['poppins'] text-white rounded">
                                        <span>connexion</span>
                                    </button>
                                </div>
                            </form>

                            <div class="text-center text-md text-slate-400 font-['poppins'] pt-10">
                                <p>Je n'ai pas de compte, <router-link to="/register" class="text-[#02356A] underline">s'enregistrer</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    mounted() {
        if (localStorage.getItem('jwtToken')) {
            this.$router.push('/dashboard')
        }
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errorTap: false,
            errorText: '',
            loading: false,
            EmailTap: false,
            EmailText: '',
            loadingEmail: false,
            CodeTap: false,
            CodeText: '',
            loadingCode: false,
            PasswordTap: false,
            PasswordText: '',
            loadingPassword: false,
            ShowPassword: false,
            ShowFormPassword: false,
        }
    },
    methods: {
        login() {
            if (!this.email.includes('@') || !this.email.includes('.')) {
                this.ShowError("votre email est incorrecte");
            } else if (this.password.length < 6) {
                this.ShowError("votre mot de passe doit avoir au moins 6 carateres");
            } else {
                this.loading = true
                let data = new FormData();
                data.append("email", this.email);
                data.append("password", this.password);
                this.axios.post(this.$store.state.api + "login", data)
                    .then(({ data }) => {
                        this.loading = false
                        localStorage.setItem('jwtToken', data.access_token.token)
                        localStorage.setItem('type', data.user.type)
                        this.$store.state.config = { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` }, }
                        this.$router.push('/dashboard');

                    })
                    .catch(error => {
                        this.loading = false
                        if (error.response.data.errors) {
                            this.ShowError(error.response.data.errors[0])
                        } else {
                            this.ShowError(error.response.data.message)
                        }

                    })
            }
        },


        sendMail() {
            localStorage.clear();
            this.loadingEmail = true
            let data = new FormData();
            data.append("email", this.EmailText);
            this.axios.post(this.$store.state.api + "sendmail", data)
                .then(({ data }) => {
                    this.loadingEmail = false
                    this.EmailTap = false
                    this.CodeTap = true
                    localStorage.setItem('user',JSON.stringify(data.user));
                }).catch(error => {
                    this.loadingEmail = false
                    this.ShowError(error.response.data.message)
                })
        },

        validated() {
            this.loadingCode = true
            let data = new FormData();
            data.append("email", this.EmailText);
            data.append("code", this.CodeText);
            this.axios.post(this.$store.state.api + "valitated", data)
                .then(({ data }) => {
                    if (data.message == false) {
                        this.CodeText = ''
                        this.ShowError("verifiez votre code dans votre mail")
                    } else {
                        this.PasswordTap = true
                    }
                    this.CodeTap = false
                    this.loadingCode = false
                    
                }).catch(error => {
                    this.CodeText = ''
                    this.loadingCode = false
                    console.log(error)
                })
        },

        resetPassword() {
            if (this.PasswordText.length > 6) {
                this.loadingCode = true
                var user = JSON.parse(localStorage.getItem("user"));
                let data = new FormData();
                data.append("email", this.EmailText);
                data.append("password", this.PasswordText);
                this.axios.post(this.$store.state.api + "resetpassword/"+user.id, data)
                    .then(({ data }) => {
                        console.log(data);
                        this.CodeTap = false
                        this.loadingCode = false
                        this.PasswordTap = false
                    }).catch(error => {
                        console.log(error)
                    })
            } else {
                this.ShowError("le mot de passe doit contenir au moins 6 caractères")
            }
        },

        ShowError(message) {
            this.errorTap = true
            this.errorText = message
            setTimeout(() => {
                this.errorTap = false
                this.errorText = ''
            }, 2000);
        },
    },
    computed: {
        api() {
            return this.$store.state.api;
        }
    },
}
</script>

<style scoped>

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
 animation: wobble1 var(--uib-speed) infinite
    calc(var(--uib-speed) * -0.15) ease-in-out;
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


/*  */
.loader {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #69ffa8;
    animation: 1.5s pulse infinite ease-in-out;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #69ffa8;
    }

    100% {
        box-shadow: 0 0 0 14px #69ffa800;
    }
}


</style>