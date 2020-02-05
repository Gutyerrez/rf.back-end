const {
    hex2bin,
    bin2hex,
    chr,
    ord,
    substr,
    implode,
    md5
} = require('locutus/php/strings');

module.exports = {
    constructOfflinePlayerUUID(username) {
        let data = hex2bin(md5(`OfflinePlayer:${username}`));

        data = this.setCharAt(6, data, chr(ord(data[6]) & 0x0f | 0x30));
        data = this.setCharAt(8, data, chr(ord(data[8]) & 0x3f | 0x80));

        const hashed = bin2hex(data);

        const components = [
            substr(hashed, 0, 8),
            substr(hashed, 8, 4),
            substr(hashed, 12, 4),
            substr(hashed, 16, 4),
            substr(hashed, 20)
        ];

        return implode('-', components);
    },
    setCharAt(index, string, char) {
        return string.substring(0, index) + char + string.substring(index + 1);
    }
}