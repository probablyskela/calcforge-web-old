<script setup lang="ts">
</script>

<template>
<footer class="footer">
    <div class="wrapper">
        <div class="copyright">
            <p>&#169; calcforge 2023</p>
        </div>
        <div class="github">
            <a href="https://github.com/probablyskela" target="_blank">
                <img src="./../assets/github-mark.svg" alt="github-mark" width="40" height="40">
            </a>
        </div>
    </div>
</footer>
</template>

<style scoped lang="scss">
.footer {
  @include base-section();
  padding: 0 2vw;
  height: 80px;
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p, a {
        @include fix-text();
    }
}
</style>