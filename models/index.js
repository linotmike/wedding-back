const User = require('./User')
const Profile = require('./Profile')


User.hasOne(Profile,{
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});

Profile.belongsTo(User,{
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});


module.exports = { User, Profile }