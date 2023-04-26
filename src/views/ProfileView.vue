<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import CalculatorListItem from '@/components/CalculatorListItem.vue';
import { reactive } from 'vue';
import { get_profile, update, delete_user } from '@/assets/services/user';

// TODO: Create profile and settings interfaces

const profile = reactive({
    username: "",
    email: "",
    calculatorIds: []
})

get_profile(profile);

const settings = reactive({
    username: "",
    email: "",
    old_password: "",
    new_password: "",
    confirm_password: ""
})

async function update_user() {
    await update(settings, profile.username, profile.email);
    await get_profile(profile);
    settings.username= "";
    settings.email= "";
    settings.old_password=  "";
    settings.new_password= "";
    settings.confirm_password= "";

}
</script>

<template>
    <section id="profile-section">
    <div class="profile-wrapper">
        <h2>profile</h2>
        <div class="profile">
            <div class="profile_inner_wrapper">
                <p class="profile_username" id="profile_username">{{profile.username}}</p>
                <div class="profile_email_wrapper">
                    <span>&lt;</span>
                    <p class="profile_email" id="profile_email">{{profile.email}}</p>
                    <span>></span>  
                </div>
            </div>
            <h3>calculators: </h3>
            <div class="calculators" id="profile_calculators">
                <CalculatorListItem v-for="id in profile.calculatorIds" :id="id"></CalculatorListItem>
            </div>
        </div>
    </div>
    <div class="settings-wrapper">
        <h2>settings</h2>
        <div class="settings">
            <div class="column column-1">
                <div class="change-password">
                    <h3>change password:</h3>
                    <label>
                        <BaseInput v-model="settings.old_password" :width="240" type="password" placehoder="old password"></BaseInput>
                    </label>
                    <label>
                        <BaseInput v-model="settings.new_password" :width="240" type="password" placehoder="new password"></BaseInput>
                    </label>
                    <label>
                        <BaseInput v-model="settings.confirm_password" :width="240" type="password" placehoder="confirm new password"></BaseInput>
                    </label>
                </div>
            </div>
            <div class="column column-2">
                <div class="change-username">
                    <h3>change username:</h3>
                    <label>
                        <BaseInput v-model="settings.username" :width="240" placehoder="username"></BaseInput>
                    </label>
                </div>
                <div class="change-email">
                    <h3>change email:</h3>
                    <label>
                        <BaseInput v-model="settings.email" :width="240" type="email" placehoder="email"></BaseInput>
                    </label>
                </div>
                <BaseButton @click.prevent="update_user" :width="240">Save</BaseButton>
            </div>
        </div>
    </div>
    <div class="delete-user-wrapper">
        <h2>delete user</h2>
        <BaseButton @click.prevent="delete_user" :width="200">Delete user</BaseButton>
    </div>
</section>
</template>

<style scoped lang="scss">
#profile-section {
  @include base-section();
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  h2 {
    @extend %h2;
  }

  h3 {
    @extend %h3;
    text-align: left;
  }

  .profile-wrapper {
    @include base-wrapper();

    .profile {
      text-align: center;

      .profile_username {
        font-size: 22px;
        font-weight: 600;
      }
      .profile_inner_wrapper {
        @include center-elements();
        justify-content: center;
        gap: 20px;
      }
      .profile_email_wrapper {
        display: flex;
      }

      .calculators {
        width: 100%;
        padding: 10px 10px;
        border: 1px solid $dark-main;

        min-height: 250px;
        max-height: 400px;
        overflow-y: scroll;
        overflow-x: hidden;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 7px;
      }
    }
  }

  .settings-wrapper {
    @include base-wrapper();

    .settings {
      .column {
        width: 260px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        div {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
      }

      display: flex;
      justify-content: center;
      gap: 120px;
    }
  }

  .delete-user-wrapper {
    @include base-wrapper();

    button {
      color: red;
      transition: 0.3s all ease;

      &:hover {
        background-color: rgba(255, 0, 0, 0.5) 0 0 15px;
      }
    }
  }
}

@media (max-width: 961px) {
  h3 {
    text-align: center !important;
  }
  .settings-wrapper {
    .settings {
      flex-direction: column;
      gap: 30px !important;
      justify-content: center;
      align-items: center;
    }
  }

  .social-media {
    flex-direction: column;
    text-align: center;
    gap: 10px !important;
    padding: 0;
    justify-content: center;
  }

  .profile-wrapper, .settings-wrapper, .delete-user-wrapper {
    padding: 80px 5vw !important;
  }
}
</style>