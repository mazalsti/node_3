import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ProdutoInstance extends Model {
    Codigo: number;
    Descricao: string;
    PreLoj: number;
};

export const Produto = sequelize.define<ProdutoInstance>("Produto", {
    Codigo: {
        primaryKey: true,
        type: DataTypes.MEDIUMINT,
        defaultValue: '0'
    },
    Descricao: {
        type: DataTypes.STRING
    },
    PreLoj: { 
        type: DataTypes.DECIMAL,
        defaultValue: '0.00'
    }
}, {
        tableName: "TabProdutos",
        timestamps: false
});
