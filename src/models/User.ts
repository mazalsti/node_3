import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ProdutoInstance extends Model {
    Codigo: number;
    Descricao: string;
    PassWord: string
};

export const User = sequelize.define<ProdutoInstance>("User", {
    Codigo: {
        primaryKey: true,
        type: DataTypes.MEDIUMINT,
        defaultValue: '0'
    },
    Descricao: {
        type: DataTypes.STRING
    },
    PassWord: { 
        type: DataTypes.DECIMAL,
        defaultValue: '0.00'
    }
}, {
        tableName: "TabUser",
        timestamps: false
});
