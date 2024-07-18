<template>
    <div>
      <ul>
        <li v-for="post in laravelData.data" :key="post.id">{{ post.title }}</li>
      </ul>
  
      <TailwindPagination
          :data="laravelData"
          @pagination-change-page="getResults"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { TailwindPagination } from 'laravel-vue-pagination';
import axios from 'axios';
  
  const laravelData = ref({});
  
  const getResults = async (page = 1) => {
      axios.get(`https://api.covoiturageexpress.com/api/AllUsers?page=${page}`,{
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    }).then(({data})=>{
        laravelData.value = data;
    });
  }
  
  getResults();
  </script>