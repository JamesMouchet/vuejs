<template>
<div v-bind="machine in machines">
      <titre>{{machine.nom}}</titre>
      <toggle-button @change="machine.statut = !machine.statut"/>

    </div>
</template>