module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.STRING
    },{});
    Produto.associate = function(models) {
        // associations can be defined here
      };
    return Produto;
}