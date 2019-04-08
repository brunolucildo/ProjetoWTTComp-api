module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha_hash: DataTypes.STRING
    },{});
    Usuario.associate = function(models) {
        // associations can be defined here
      };
    return Usuario;
};