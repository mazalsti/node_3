import { Request, Response } from "express";
import { Op } from "sequelize";
import { Produto } from "../models/Produtos";
import { Image } from "../models/Image";

export const home = async (req: Request, res: Response) =>{
    // const product = await Produto.findAll({
    //     where: {
    //         Codigo:{
    //             [Op.between]: [1, 100]
    //         }
    //     },
    //     // limit: 1,
    //     // offset: 0, 
    // });

    const image = Image.build({
        categoria: "Papelaria",
        descricao: 'Canetas, Pastas, Grampeadores',
        qtdimage: 3,

    });

    await image.save();
    // console.log("TabProdutos", JSON.stringify(product, null, 2))


    // try {
    //     await sequelize.authenticate();
    //     // console.log("cenexao estabelecida com sucesso!");
    // } catch (error) {
    //     console.log("Deu erro", error);
    // }
    res.render('home', {image});
}