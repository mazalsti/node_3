import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Mode } from "fs";

export interface ImageInterface extends Model {
    categoria: 'Papelaria',
    descricao: 'Canetas, Informatica, Pastas',
    qtdimage:  '3'
};

export const Image = sequelize.define<ImageInterface>("Image",{
    categoria: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING,
    },
    qtdimage: {
        type: DataTypes.INTEGER
    }

}, {
    tableName: "tabimage",
    timestamps: false
});