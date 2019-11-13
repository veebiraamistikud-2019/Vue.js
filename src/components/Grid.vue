<template>
	<div>
		<div class="gameStatus" :class="gameStatusColor">
			{{ gameStatusMessage }}
		</div>
		<table class="grid">
		  <tr>
		    <cell name="1"></cell>
		    <cell name="2"></cell>
		    <cell name="3"></cell>
		  </tr>
		  <tr>
		    <cell name="4"></cell>
		    <cell name="5"></cell>
		    <cell name="6"></cell>
		  </tr>
		  <tr>
		    <cell name="7"></cell>
		    <cell name="8"></cell>
		    <cell name="9"></cell>
		  </tr>
		</table>
	</div>
</template>

<script>
import Cell from './Cell.vue'

export default {
	components: { Cell },

  data () {
    return {
    	// O or X
    	activePlayer: 'O',
    	gameStatus: 'turn',
    	gameStatusMessage: `O alustab`,
    	gameStatusColor: 'statusTurn',
    	moves: 0,
			cells: {
				1: '', 2: '', 3: '',
				4: '', 5: '', 6: '',
				7: '', 8: '', 9: ''
			},
			winConditions: [
				[1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
				[1, 4, 7], [2, 5, 8],	[3, 6, 9], // columns
				[1, 5, 9], [3, 5, 7]             // diagonals
			],
    }
  },

  computed: {
  	// helper property to get the non-active player
  	nonActivePlayer () {
  		if (this.activePlayer === 'O') {
  			return 'X'
  		}
  		return 'O'
  	}
  },

  watch: {
  	// watches for change in the value of gameStatus and changes the status 
  	// message and color accordingly
  	gameStatus () {
  		if (this.gameStatus === 'win') {
  			this.gameStatusColor = 'statusWin'

  			return
  		} else if (this.gameStatus === 'draw') {
  			this.gameStatusColor = 'statusDraw'
  			this.gameStatusMessage = 'Viik!'
  			
  			return
  		}
			this.gameStatusMessage = `${this.activePlayer} alustab`
  	}
  },

  methods: {
  	// changes the active player to the non-active player with the help of the nonActivePlayer computed property
  	changePlayer () {
			this.activePlayer = this.nonActivePlayer
		},

		// checks for possible win conditions from the data
		checkForWin () {
			for (let i = 0; i < this.winConditions.length; i++) {
				// gets a single condition wc from the whole array
				let wc = this.winConditions[i]
				let cells = this.cells

				// compares 3 cell values based on the cells in the condition
				if (this.areEqual(cells[wc[0]], cells[wc[1]], cells[wc[2]])) {
					return true
				}
			}

			return false
		},

		gameIsWon () {			
			// fires win event for the App component to change the score
			Event.$emit('win', this.activePlayer)

			// sets the game status message
			this.gameStatusMessage = `${this.activePlayer} võitis!`

			// fires an event for the Cell to freeze
			Event.$emit('freeze')

			// sets the status to win
			return 'win'
		},

		// returns the game status to the gameStatus property
		changeGameStatus () {
			if (this.checkForWin()) {
				return this.gameIsWon()
			// checks if the game is still not won and all cells are filled
			} else if (this.moves === 9) {
				// sets the status to draw
				return 'draw'
			}
			// sets the status to turn
			return 'turn'
		},

		// helper function for comparing cell values
		areEqual () {
		  var len = arguments.length;
		  // loops through each value and compares them with an empty sting and 
		  // for inequality
		  for (var i = 1; i < len; i++){
		    if (arguments[i] === '' || arguments[i] !== arguments[i-1])
		      return false;
		   }
		   return true;
		}
  },

  created () {
  	// listens for a strike made by the user on cell
  	// it is called by the Cell component
  	Event.$on('strike', (cellNumber) => {
			// sets either X or O in the clicked cell of the cells array
			this.cells[cellNumber] = this.activePlayer
			// increments the number of moves
			this.moves++
			// scores the game status by calling the changeGameStatus method
			this.gameStatus = this.changeGameStatus()
			this.changePlayer()
  	})

		// listens for a restart button press
		// the data of the component is reinitialized
		// it is called by the App component
  	Event.$on('gridReset', () => {
  		Object.assign(this.$data, this.$options.data())
  	})
  }
}
</script>

<style>
.grid {
  color: #34495e;
  width: 100%;
  border-collapse: collapse;
}

.gameStatus {
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #34495e;	
  font-size: 1.4em;
  font-weight: bold;
}

.statusTurn {
	color: #34495e;
}

.statusWin {
	color: #2ecc71;
}

.statusDraw {
	color: #9b59b6;
}
</style>
