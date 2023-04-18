<script setup lang="ts"></script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.button{
    cursor: pointer;
    background-color: transparent;
    border: 1px solid $dark-main;
    padding: 10px 20px;
}
</style>
