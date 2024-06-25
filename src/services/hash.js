import crypto_js, { HmacSHA512 } from 'crypto-js';
import base64 from 'crypto-js/enc-base64';

const sha256Encode = (password) => {
    return crypto_js.SHA256(password);
}

export const hashPassword = async (password) => {
    const hashDigest = sha256Encode(password);

    const hmacDigest = base64.stringify(HmacSHA512(process.env.PATHPASS + hashDigest + process.env.PRIVATEKEY)); 

    return hmacDigest;
}