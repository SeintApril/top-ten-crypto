<template>
  <b-container>
    <b-row>
      <b-col class="text-center"><h3>Top 10 Cryptocurrencies by Market Cap</h3></b-col>
    </b-row>
    <Loading v-if="loading" />

    <Coins v-else :filtered-coins="filteredCoins" />
  </b-container>
</template>

<script>
import axios from "axios";

import Loading from "./Loading.vue";
import Coins from "./Coins.vue";

export default {
  data() {
    return {
      loading: false,
      coins: [],
      search: "",
    };
  },
  computed: {
    filteredCoins() {
      return this.coins.filter((coin) =>
        coin.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    getCoins() {
      this.loading = true;

      axios.get(
          'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
              headers: {
                  'X-CMC_PRO_API_KEY': '3184e3fc-a6d4-4581-ba65-67d4363e4dc5',
              },
          })
        .then((response) => {
          this.loading = false;
          this.coins = response.data;
        });
    },
  },
  created() {
    this.getCoins();
  },
  components: {
    Loading,
    Coins,
  },
};
</script>
