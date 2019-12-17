import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      exchangeRates: {
        rates: {},
        base: "",
        date: ""
      },
      userAmount: null,
      selectedCurrency: null
    },

    computed: {
      currencyExchange: function(){
        let answer = this.userAmount * this.selectedCurrency
        return answer.toFixed(2)
      }
    },

    mounted(){
      this.getExchangeRates()
    },

    methods: {
      getExchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.exchangeRates = data)
      }
    }












  })
})
