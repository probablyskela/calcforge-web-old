import axios, { AxiosError } from 'axios';
import VueCookies from 'vue-cookies';
import router from '@/router';
import {get_token} from './main';

const host = 'http://0.0.0.0:5000';

export async function sign_in(username: string, password: string) {
    const url = host + '/user/login';
    const data = {
        username: username,
        password: password
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            }
        });

        VueCookies.set('token', response.data.token, "15min");
        router.push('/profile');
    }
    catch (error: any) {
        if (error['response']['status'] === 400) {
            alert(JSON.parse(error['request']['response'])['error']);
        }
    }
}

export async function sign_up(username: string, email: string, password: string, password_confirm: string) {
    const url = host + '/user/';

    if (password !== password_confirm) {
        alert("Passwords are not the same")
        return;
    }

    const data = {
        username: username,
        email: email,
        password: password,
    };

    try {
        await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(({data}) => {
            console.log(data);
        })
    }
    catch (e) {
        console.log(e);
    }
}

export async function sign_out() {
    if (VueCookies.isKey('token')) {
        VueCookies.remove('token');
    }
    router.push('/sign-in');

}

export async function get_profile(profile: any) {
    if (!VueCookies.isKey('token')) {
        router.push('/sign-in');
        return;
    }

    const token = get_token();
    const url = host + '/user/profile';

    try {
        axios.get(url, {
            headers: {
                'Authorization': "Bearer " + token,
                'Accept': "application/json",
                'Content-Type': 'application/json'
            }
        }).then(({data}) => {
            console.log(data);
            profile.username = data.username;
            profile.email = data.email;
            profile.calculatorIds = data.calculatorIds
            // profile.calculatorIds = [1]
        });
    }
    catch (error: any) {
        if (error['response']['status'] === 400) {
            alert(JSON.parse(error['request']['response'])['error']);
        }
    }
}

export async function update(settings: any, username_local: string, email_local: string) {
   const username = settings.username;
   const email = settings.email;
   const old_pass = settings.old_password;
   const new_pass = settings.new_password;
   const conf_new_pass = settings.confirm_password;

   if (old_pass !== '' && new_pass !== '' && conf_new_pass.length !== '') {
        if (new_pass !== conf_new_pass) {
            alert('Passwords are not the same');
            return;
        }
        console.log(username_local, old_pass);
        if (await check_password(username_local, old_pass)) {
            console.log("hiiiii");
            await update_field('password', new_pass);
        } else {
            alert("Wrong password!");
        }
    }

    if (username !== '' && username !== username_local) {
        await update_field('username', username);
    }

    if (email !== "" && email !== email_local) {
        await update_field('email', email);
    }
}

async function update_field(field: string, value: string) {
    type httpData = {
        [key: string]: string
    }

    const data: httpData = {};
    data[field] = value;

    const token = get_token();
    const url = host + '/user/';

    try {
        await axios.patch(url, data, {
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })
    } catch (e) {
        alert("Unable to update user!");
    }
}

async function check_password(username: string, password: string) {
    const url = host + '/user/login';
    const data = {
        username: username,
        password: password
    };

    try {
        await axios.post(url, data, {
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            }
        }).then(() => {
            return true;
        }); 
        return true;
    }
    catch (error: any) {
        if (error['response']['status'] === 400) {
            alert(JSON.parse(error['request']['response'])['error']);
            return false;
        }
    }
}

export async function delete_user() {
    const token = get_token();

    const url = host + '/user/';

    try {
        await axios.delete(url, {
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })

        sign_out();

    } catch (e) {
        console.log(e);
        return 400;
    }
}