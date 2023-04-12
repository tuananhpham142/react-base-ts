import Cookies, { CookieSetOptions } from 'universal-cookie';

const removeCookie = (name: string) => {
    const cookies = new Cookies();
    let cookieOptions: CookieSetOptions = {
        secure: true,
        sameSite: true,
        path: '/',
    };
    cookies.remove(name, cookieOptions);
};
export default removeCookie;
