<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/">calcforge</RouterLink>
      </div>
      <nav class="navigation">
        <ul>
          <li class="navigation__item">
            <RouterLink to="/profile">profile</RouterLink>
          </li>
          <li   class="navigation__item">
            <a href="#">calculators</a>
          </li>
          <li class="navigation__item">
            <a href="#">users</a>
          </li>
        </ul>
      </nav>
      <div class="authorization">
        <a class="authorization__sign-out" href="#">sign out</a>
        <a class="authorization__sign-in" href="#">sign in</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @include base-section();
  padding: 0 2vw;
  height: 80px;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: $dark-main;
    @include link-underline($dark-main);
    @include fix-text();
  }

  .logo a{
    @include base-text-gradient();
    font-size: ($base-font-size - $base-font-size-offset) * 2;
  }

  .navigation ul, .authorization {
      display: flex;
      align-items: center;
      gap: 15px;
  }

  .navigation {
    margin-left: 40px;
  }

  .authorization {
    margin-left: auto;
  }
}
</style>
