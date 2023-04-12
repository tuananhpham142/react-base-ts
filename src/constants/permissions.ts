import { decryptAES } from '@/utils/crypts';
import { getCookie, parseJwt } from '../utils';
export const token = getCookie(process.env.REACT_APP_AUTH_KEY as string, decryptAES);
export const permissions = token ? parseJwt(token)?.permission || [] : [];
