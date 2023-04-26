import VueCookies from 'vue-cookies';
import router from '@/router';

export function get_token() {
    if (!VueCookies.isKey('token')) {
        router.push('/sign-in');
    }
    else {
        return VueCookies.get('token');
    }
}