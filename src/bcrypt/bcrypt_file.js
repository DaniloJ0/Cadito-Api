const bcrypt = require('bcrypt');

const encryptPassword =  password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password,salt)
  }

const confirmPassword = (password,hash) => bcrypt.compareSync(password, hash);
  
  
module.exports = {encryptPassword, confirmPassword}