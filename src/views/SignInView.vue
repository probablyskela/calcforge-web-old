<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { RouterLink } from 'vue-router';
import {ref} from 'vue';
import {sign_in} from '@/assets/services/user';
import VueCookies from 'vue-cookies';
import router from '@/router';

if (VueCookies.isKey('token')) {
    router.push('/profile');
}

const username = ref("")
const password = ref("")

</script>

<template>
    <main class="main">
        <div class="wrapper">
            <form @submit.prevent="sign_in(username, password)" class="sign-in__form">
                <h2>sign in</h2>
                <BaseInput v-model="username" :width="240" placehoder="username" required></BaseInput>
                <BaseInput v-model="password" :width="240" type="password" placehoder="password" required></BaseInput>
                <BaseButton :width="200">sign in</BaseButton>

                <p>dont have an account yet?
                    <RouterLink to="/sign-up">sign up</RouterLink>
                </p>
            </form>
        </div>
    </main>
</template>

<style scoped lang="scss">
.main {
    @include base-section();
    min-height: calc(100vh - 160px);

    a { 
        @include link-underline($dark-main);
        @include fix-text();
    }

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        .sign-in__form {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            border: 1px solid $dark-main;
            padding: 120px 80px;
            position: relative;

            h2 {
                position: absolute;
                top: 0;
                margin-top: -11px;
                left: 0;
                margin-left: -2px;
                @include base-text-gradient();
                font-size: $base-font-size * 3;
                line-height: normal;
            }
        }
    }
}
</style>