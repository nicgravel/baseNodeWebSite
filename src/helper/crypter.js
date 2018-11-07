var crypto = require('crypto');
var config = require('../config')

module.exports = {

    encrypt: function (text) {
        var cipher = crypto.createCipher('aes-256-cbc', config.cryptoKey);
        var crypted = cipher.update(text, 'utf-8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },

    decrypt: function (text) {
        var decipher = crypto.createDecipher('aes-256-cbc', config.cryptoKey);
        var decrypted = decipher.update(text, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }
}