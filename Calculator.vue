<template>
  <div class="app">
    <div class="calculator">
      <div class="display">{{ current || "0" }}</div>
      <button @click="clear" class="btn">CE</button>
      <button @click="sign" class="btn">+/-</button>
      <button @click="percent" class="btn">%</button>
      <button @click="divide" class="btn operator">÷</button>

      <button @click="append(7);" class="btn">7</button>
      <button @click="append(8);" class="btn">8</button>
      <button @click="append(9);" class="btn">9</button>
      <button @click="times" class="btn operator">x</button>

      <button @click="append(4);" class="btn">4</button>
      <button @click="append(5);" class="btn">5</button>
      <button @click="append(6);" class="btn">6</button>
      <button @click="minus" class="btn operator">–</button>

      <button @click="append(1);" class="btn">1</button>
      <button @click="append(2);" class="btn">2</button>
      <button @click="append(3);" class="btn">3</button>
      <button @click="add" class="btn operator">+</button>

      <button @click="append(0);" class="btn zero">0</button>
      <button @click="dot" class="btn">.</button>
      <button @click="equal" class="btn operator">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current *= -1;
    },
    percent() {
      this.current = `${parseFloat(this.current / 100)}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current += number;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      );
      this.previous = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  font-size: 24px;
  line-height: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  width: 300px;
  margin: 0 auto;
  border: 1px solid hsla(210, 15, 86, 0.6);
  border-radius: 20px;
  box-shadow: 5px 5px 27px -2px hsl(211, 27%, 70%);
}

.display {
  grid-column: 1 / 5;
  background: #697580;
  color: white;
  font-size: 50px;
  line-height: 70px;
  height: 70px;
  text-align: right;
  padding-right: 15px;
}

  .groot {
    display: flex;
  }
.zero {
  grid-column: 1 / 3;
}
.btn {
cursor:pointer
}
.operator {
  background: grey;
  border: 1px solid darkgrey;
}
</style>
