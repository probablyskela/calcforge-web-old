<template>
<main class="main">
    <div class="wrapper">
        <h1>unlimited power of calculators</h1>
        <h2>no registration needed to start!</h2>
    </div>
</main>
</template>

<style scoped lang="scss">
.main {
    @include base-section();
    height: calc(100vh - 160px);
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h2 {
        @include fix-text();
    }

    h1 {
        @include base-text-gradient();
        font-size: 64px;
        margin-bottom: 32px;
    }

    h2 {
        font-size: 32px;
    }
}

@media (max-width: 980px) {
    h1 {
        font-size: 6vw !important;
    }
    h2 {
        font-size: 4vw !important;
    }
}

</style>