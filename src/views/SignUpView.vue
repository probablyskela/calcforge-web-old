<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { sign_in, sign_up } from '@/assets/services/user';
import VueCookies from 'vue-cookies';
import router from '@/router';

if (VueCookies.isKey('token')) {
    router.push('/profile');
}


const username = ref("")
const email = ref("")
const password = ref("")
const password_confirm = ref("")

async function create_user() {
    await sign_up(username.value, email.value, password.value, password_confirm.value);
    await sign_in(username.value, password.value)
}

</script>

<template>
    <main class="main">
        <div class="wrapper">
            <form @submit.prevent="create_user" class="sign-up__form">
                <h2>sign up</h2>

                <BaseInput v-model="username" :width="240" placehoder="username" required></BaseInput>
                <BaseInput v-model="email" :width="240" type="email" placehoder="email" required></BaseInput>

                <BaseInput v-model="password" :width="240" type="password" placehoder="password" required></BaseInput>
                <BaseInput v-model="password_confirm" :width="240" type="password" placehoder="confirm password" required></BaseInput>

                <BaseButton :width="200">sign up</BaseButton>

                <p>already have an account?
                    <RouterLink to="/sign-in">sign in</RouterLink>
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

        .sign-up__form {
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