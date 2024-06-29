import crypto_js, { HmacSHA512 } from 'crypto-js';
import base64 from 'crypto-js/enc-base64';

const sha256Encode = (password) => {
    return crypto_js.SHA256(password);
}

export const hashPassword = (password) => {
    const hashDigest = sha256Encode(password);
    
    const HmacShortDigest = HmacSHA512(process.env.REACT_APP_PATH_PASS + hashDigest, process.env.REACT_APP_PRIVATE_KEY);

    const hmacDigestBase64 = base64.stringify(HmacShortDigest); 

    return hmacDigestBase64.toString();
}