const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    
}
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
        isEmail:true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    hooks:{
        async beforeCreate(newUser) {
            newUser.password = await bcrypt.hash(newUser.password, 3);
            return newUser;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
});

module.exports = User;