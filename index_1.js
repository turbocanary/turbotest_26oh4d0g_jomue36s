const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is now cryptographically secure
  // Generate a random 32-bit unsigned integer as the suffix
  var suffix = crypto.randomBytes(4).readUInt32BE(0);
  var password = "sssAAAA" + suffix;
  return password;
}