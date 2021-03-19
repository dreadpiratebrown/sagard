<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
    background: #39f;
    border-radius: 12px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-family: inherit;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 300ms ease-out;
}

a:hover,
a:active,
button:hover,
button:active {
    background: #17f;
}

.attack {
    background-color: #880808;
    border-radius: 6px;
    margin-top: 4px;
    padding: .5rem;
}

.attack:hover,
.attack:active {
    background-color: #660606;
}

.flee {
    background-color: #eeee00;
    color: #000;
    padding: .75rem 1.5rem;
}

.flee:hover,
.flee:active {
    background-color: #999900;
}

.attack[disabled],
.flee[disabled] {
    background-color: #c9c9c9;
    cursor: not-allowed;
}
</style>