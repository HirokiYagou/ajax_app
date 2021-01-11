function items() {
  Vue.createApp({
    data: function() {
      return {
        items: [],
      }
    },
    methods: {
      fetchItem: function() {
        const self = this
        axios
          .get("https://api-tokyochallenge.odpt.org/api/v4/odpt:Train?odpt:operator=odpt.Operator:TokyoMetro&acl:consumerKey=AB4yn4tFjuCH9wx7GjowpNCK0ca_IoJPG7KusjBzdmQ")
          .then(function(response) {
            self.items = response.data
          })
        },
    },
    mounted: function() {
      this.fetchItem()
    },
  }).mount('#app')
}

document.addEventListener('DOMContentLoaded', items)