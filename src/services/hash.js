import crypto_js, { HmacSHA512 } from 'crypto-js';
import base64 from 'crypto-js/enc-base64';

const sha256Encode = (password) => {
    return crypto_js.SHA256(password);
}

export const hashPassword = async (password) => {
    const hashDigest = sha256Encode(password);
    // console.log(hashDigest);
    // console.log(process.env.REACT_APP_PATHPASS);
    // console.log(process.env.REACT_APP_PRIVATEKEY);
    
    const HmacShortDigest = HmacSHA512(process.env.PATHPASS + hashDigest, process.env.PRIVATEKEY);
    // console.log(HmacShortDigest);

    const hmacDigest = base64.stringify(HmacShortDigest); 
    // console.log(hmacDigest);

    return hmacDigest;
}