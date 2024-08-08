<template>
  <div class="p-6">
    <!-- Section pour CNI -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">CNI (Carte Nationale d'Identité)</h2>
      <button @click="showAddModal('cni')" class="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">
        Ajouter CNI
      </button>
      <div v-if="cniDocuments.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div v-for="doc in cniDocuments" :key="doc.id"
          class="border border-gray-300 p-4 rounded-lg shadow-md text-center">
          <img v-if="doc.images.length" :src="doc.images[0]" alt="Document Image"
            class="w-32 h-32 mx-auto object-cover mb-2" />
          <img v-if="doc.images.length > 1" :src="doc.images[1]" alt="Additional Document Image"
            class="w-32 h-32 mx-auto object-cover mb-2" />
          <p class="text-sm text-gray-600">Expiration: {{ doc.expiry_date }}</p>
          <button @click="openEditModal(doc, 'cni')"
            class="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Modifier
          </button>
        </div>
      </div>
    </div>

    <!-- Section pour Carte Grise et Permis de Conduire -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Carte Grise et Permis de Conduire</h2>
      <button @click="showAddModal('carte_grise')"
        class="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">
        Ajouter Carte Grise / Permis
      </button>
      <div v-if="carteGriseDocuments.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div v-for="doc in carteGriseDocuments" :key="doc.id"
          class="border border-gray-300 p-4 rounded-lg shadow-md text-center">
          <img v-if="doc.images.length" :src="doc.images[0]" alt="Document Image"
            class="w-32 h-32 mx-auto object-cover mb-2" />
          <img v-if="doc.images.length > 1" :src="doc.images[1]" alt="Additional Document Image"
            class="w-32 h-32 mx-auto object-cover mb-2" />
          <p class="text-sm text-gray-600">Expiration: {{ doc.expiry_date }}</p>
          <button @click="openEditModal(doc, 'carte_grise')"
            class="mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Modifier
          </button>
        </div>
      </div>
    </div>

    <!-- Modal pour ajouter/modifier les documents -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl">
          &times;
        </button>
        <h3 class="text-lg font-semibold mb-4">{{ modalType === 'add' ? 'Ajouter Document' : 'Modifier Document' }}</h3>
        <form @submit.prevent="saveDocument">
          <input type="file" @change="handleFileUpload(0)" class="block mb-4" />
          <input type="file" @change="handleFileUpload(1)" class="block mb-4" />
          <input type="text" v-model="documentType" placeholder="Type de Document"
            class="block w-full mb-4 border border-gray-300 p-2 rounded" />
          <input type="date" v-model="expiryDate" placeholder="Date d'expiration"
            class="block w-full mb-4 border border-gray-300 p-2 rounded" />
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {{ modalType === 'add' ? 'Ajouter' : 'Modifier' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cniDocuments: [],
      carteGriseDocuments: [],
      showModal: false,
      modalType: 'add', // 'add' ou 'edit'
      currentDocument: null,
      documentType: '',
      expiryDate: '',
      files: [null, null], // pour deux images
    };
  },
  methods: {
    showAddModal(type) {
      this.modalType = 'add';
      this.documentType = type;
      this.showModal = true;
    },
    openEditModal(doc, type) {
      this.modalType = 'edit';
      this.currentDocument = doc;
      this.documentType = type;
      this.expiryDate = doc.expiry_date;
      this.files = [doc.images[0], doc.images[1]]; // Charger les images existantes
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.currentDocument = null;
      this.documentType = '';
      this.expiryDate = '';
      this.files = [null, null];
    },
    handleFileUpload(index) {
      return event => {
        this.files[index] = event.target.files[0];
      };
    },
   saveDocument() {
      const formData = new FormData();
      formData.append('nom', this.documentType);
      formData.append('date_expiration', this.expiryDate);
      this.files.forEach((file, index) => {
        if (file) {
          formData.append(`image${index}`, file);
        }
      });

      if (this.modalType === 'add') {
        this.axios.post(`${this.$store.state.api}StorePiece`, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
           },
        }).then(({data})=>{
          this.documentType == "CNI" ? this.cniDocuments = data : this.carteGriseDocuments = data
          // this.closeModal();
          // this.loadDocuments();
        }).catch(error=>{
          console.log(error)
        });
      } else if (this.modalType === 'edit') {
        formData.append("_method","put")
        this.axios.post(`/api/UpdatePiece`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(({data})=>{
          // data
          console.log(data)
        }).catch(error=>console.log(error));
      }


    },
    loadDocuments() {
      let data = new FormData();
      data.append("nom", 'CNI')
      data.append("_method", "get")
      this.axios.post(this.$store.state.api + `GetPiece/`, data, this.$store.state.config)
        .then(({ data }) => {
          this.cniDocuments = data;
        }).catch((error) => {
          console.log(error)
        })


      let data1 = new FormData();
      data1.append("nom", 'permis de conduire')
      data1.append("_method", "get")
      this.axios.post(this.$store.state.api + `GetPiece/`, data1, this.$store.state.config)
        .then(({ data }) => {
          this.cniDocuments = data;
        }).catch((error) => {
          console.log(error)
        })

      let data2 = new FormData();
      data2.append("nom", 'carte grise')
      data2.append("_method", "get")
      this.axios.post(this.$store.state.api + `GetPiece/`, data2, this.$store.state.config)
        .then(({ data }) => {
          this.carteGriseDocuments = data;
        }).catch((error) => {
          console.log(error)
        })

    },
  },
  mounted() {
    this.loadDocuments();
  },
};
</script>
