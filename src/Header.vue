<template>
<div>    
<img src="./assets/logo.gif">
    <h1>{{ msg }}</h1>    
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        msg: 'Machine à café'
    }
  }
}
</script>

<style lang="scss">
h1, h2 {
  font-weight: normal;
}

img {
  display: block;
  margin: auto;
  width: 50%;
}
</style>