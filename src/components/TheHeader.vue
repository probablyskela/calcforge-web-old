<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import {sign_out} from '@/assets/services/user';
import VueCookies from 'vue-cookies'

const authenticated = computed(() => {
  return VueCookies.isKey('token');
})

function open_menu() {
  document.querySelectorAll('.navigation_mobile_menu').forEach(element => {
    element.classList.toggle('active');
  });
}

</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/">calcforge</RouterLink>
      </div>
      <nav class="navigation navigation_desktop">
        <ul>
          <li class="navigation__item">
            <RouterLink to="/profile">profile</RouterLink>
          </li>
          <li class="navigation__item">
            <a href="#">calculators</a>
          </li>
          <li class="navigation__item">
            <a href="#">users</a>
          </li>
        </ul>
      </nav>
      <div class="authorization">
        <a class="authorization__sign-out navigation_desktop" @click.prevent="sign_out" v-if="authenticated">sign out</a>
        <RouterLink class="authorization__sign-in navigation_desktop" to="/sign-in" v-else>sign in</RouterLink>
      </div>
      <label @click.prevent="open_menu" class="navigation_mobile navigation_mobile_menu_btn" id="navigation_mobile_menu_btn"> menu >    </label>
    </div>
    <div class="navigation_mobile navigation_mobile_menu" id="navigation_mobile_menu">
        <ul>
            <li>
              <RouterLink to="/profile">profile</RouterLink>
            </li>
            <li>
              <a href="#">calculators</a>
            </li>
            <li>
              <a href="#">users</a>
            </li>
            <li id="navigation_mobile_menu_sign-out">
              <a class="authorization__sign-out" @click.prevent="sign_out" v-if="authenticated">sign out</a>
              <RouterLink to="/sign-in" v-else>sign in</RouterLink>
            </li>
        </ul>
    </div>

  </header>
</template>

<style scoped lang="scss">
  .navigation_mobile {
    display: none;
  }

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

@media (max-width: 768px) {
    .navigation_desktop {
      display: none !important;
    }

    .navigation_mobile_menu_btn {
      margin-left: auto;
      @include link-underline($dark-main);
      @include fix-text();
      font-size: $base-font-size;
    }

    .navigation_mobile_menu {
      top: 80px;
      left: 0;
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 10px 20px 10px;
      background-color: $light-main;
      border-bottom: 1px solid $dark-main;
      z-index: 999;

      &.active {
        display: block;
      }

      ul {
        margin: 10px 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
          list-style: none;
          border-bottom: 1px solid $dark-main;

          a {
            @include link-underline($dark-main);
            @include fix-text();
            display: inline !important;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
