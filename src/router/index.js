import { createRouter, createWebHistory } from "vue-router";

import Login from "@/components/auth/LoginComponent.vue";
import Register from "@/components/auth/RegisterComponent.vue";
import NavBar from "@/components/NavBarComponent.vue";
import AllWays from "@/components/AllWaysComponent.vue";
import Trajets from "@/components/TrajetComponent.vue";
import AllUsers from "@/components/AllUserComponent.vue";
import Vehicule from "@/components/VehiculeComponent.vue";
import Reservations from "@/components/ReservationComponent.vue";
import Transaction from "@/components/TransactionComponent.vue";
import TestComponent from "@/components/TestComponent.vue";
import SearchComponent from "@/components/OthersComponents/SearchComponent.vue";
import AddTrajetComponent from "@/components/OthersComponents/AddTrajetComponent.vue";
import DetailComponent from "@/components/DetailComponent.vue";
import MesReservationComponent from "@/components/OthersComponents/MesReservationComponent.vue";
import DetailReservationComponent from "@/components/OthersComponents/DetailReservationComponent.vue";


const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/test", component: TestComponent },
  {
    path: "/*",
    name: "PageNotFound",
    component: Login,
  },
  {
    path: "/Dash",
    component: NavBar,
    redirect: { name: "dashboard" },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: {
          default: NavBar,
          one: AllWays,
        },
      },
      {
        path: "/trajets",
        name: "trajets",
        components: {
          default: NavBar,
          one: Trajets,
        },
      },
      {
        path: "/utilisateurs",
        name: "utilisateurs",
        components: {
          default: NavBar,
          one: AllUsers,
        },
      },
      {
        path: "/vehicules",
        name: "vehicules",
        components: {
          default: NavBar,
          one: Vehicule,
        },
      },
      {
        path: "/transactions",
        name: "transactions",
        components: {
          default: NavBar,
          one: Transaction,
        },
      },
      {
        path: "/reservations",
        name: "reservations",
        components: {
          default: NavBar,
          one: Reservations,
        },
      },
      {
        path: "/recherche",
        name: "recherche",
        components: {
          default: NavBar,
          one: SearchComponent,
        },
      },
      {
        path: "/AjouterTrajet",
        name: "AjouterTrajet",
        components: {
          default: NavBar,
          one: AddTrajetComponent,
        },
      },
      {
        path: "/detail",
        name: "detail",
        components: {
          default: NavBar,
          one: DetailComponent,
        },
      },
      {
        path: "/MesReservations",
        name: "MesReservations",
        components: {
          default: NavBar,
          one: MesReservationComponent,
        },
      },
      {
        path: "/DetailReservation",
        name: "DetailReservation",
        components: {
          default: NavBar,
          one: DetailReservationComponent,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
