<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-style: italic;
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  font-family: inherit;
  border-radius: 12px;
  background-color: #008000;
  border: 1px solid #008000;
  color: white;
  cursor: pointer;
}
</style>
