<script setup lang="ts">
interface Props {
    id: number
};

const props = defineProps<Props>();
</script>

<template>
    <div class="calculator">
        <a href="#" class="calculator-name">
            calculator-name
        </a>
        <p class="calculator-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ipsum ipsum, at
            feugiat sapien condimentum egestas. Donec non elit sit amet libero sagittis aliquam eget sed
            tortor.
        </p>
    </div>
</template>

<style scoped lang="scss">
.calculator {
    padding: 10px 10px;
    width: 98%;
    border-bottom: 1px solid $dark-main;
    text-align: left;
}

.calculator-name {
    font-weight: bold;
    text-decoration: underline;
}

.calculator-description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200ch;
    color: $dark-secondary;
    font-size: 17px;
}
</style>