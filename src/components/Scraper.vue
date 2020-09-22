<template>
  <div class="lg:container lg:mx-auto md:container md:mx-auto">
    <form class="w-full max-w-lg mx-auto py-5">
      <div class="flex items-center border-b border-gray-500 py-2">
        <input v-model="url" class="font-mono appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter url" aria-label="URLs">
        <button @click="func_scrapData" class="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 font-mono text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Suck it!
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Scraper',
  data() {
    return {
      url: '',
      errors: '',
      scrapData: {}
    }
  },
  methods: {
    async func_scrapData() {
      const config = {
          headers: {'Access-Control-Allow-Origin': '*'},
          withCredentials: false,
          proxy: {
            host: '127.0.0.1',
            port: 8080
          }
      };

      // const html = await this.$scraper.get(this.url);
      // const $ = this.$cherio.load(html);
      // const sample = $('.statsTableContainer > tr');

      // console.log(sample.length);

      const html = await this.$axios.get(this.url, config)
      console.log(html);
    
    },
    func_formatData() {

    }
  }
}
</script>

