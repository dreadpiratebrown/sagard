<template>
    <nav>
        <h1>Sagard the Barbarian</h1>
        <slot></slot>
    </nav>
</template>

<style scoped>
nav {
    background-color: #c9c9c9;
    display: flex;
    grid-column: 1 / 3;
    justify-content: space-between;
    padding: 0 2em;
}
</style>
