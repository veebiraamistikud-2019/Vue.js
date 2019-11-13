<template>
  <div>
    <div class="scoreBoard">
      <span>O-l on  {{ wins.O }} võitu</span>
        <h2>Mäng #{{ matches + 1 }}</h2>
      <span>X-l on {{ wins.X }} võitu</span>
    </div>
    <div id="app">
      <div id="details">
      </div>
      <grid></grid>
      <button class="restart" @click="restart">Alusta uuesti</button>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  components: { Grid },
  name: 'app',
  data () {
    return {
      matches: 0,
      wins: {
        O: 0,
        X: 0
      }
    }
  },

  methods: {
    restart () {
      Event.$emit('clearCell')
      Event.$emit('gridReset')
      this.matches++
    }
  },

  created () {
    Event.$on('win', winner => this.wins[winner]++)
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: #34495e;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin: 0px;
  overflow-x: hidden;
}

#app {
  margin: 300px auto;
  max-width: 270px;
  color: #34495e;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3em;
}

.restart {
  color: #e74c3c;
  background-color: #fff;
  border: 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0px;
  margin-top: 25px;
  padding: 15px;
  width: 100%;
}

.restart:hover {
  cursor: pointer;
}

.scoreBoard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15px;
  box-shadow: 10px solid #34495e;
  padding: 20px;
  overflow-x: none;
}

.scoreBoard h2 {
  margin-top: 120px;
}

.scoreBoard span {
  margin-top: 100px;
  float: right;
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 20px;
}
</style>
