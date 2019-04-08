module.exports = (sequelize, DataTypes) => {
    const Notificacao = sequelize.define("Notificacao", {
        notificacao: DataTypes.STRING
    }, {});
    Notificacao.associate = function (models) {
        // associations can be defined here
    };
    return Notificacao
};