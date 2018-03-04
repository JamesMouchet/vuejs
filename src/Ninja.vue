<template>
    <div class="container">
        <div v-for="machine in machines">
            <transition name="slide-fade">
                <h2 v-if="machine.statut">{{machine.nom}}</h2>
            </transition>      
            <toggle-button @change="machine.statut = !machine.statut"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active: false,
      machines: [
        {nom: "Machine A", statut: false},
        {nom: "Machine B", statut: false}
      ]
    }
  }
}
</script>

<style lang="scss">
.test {
    
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>