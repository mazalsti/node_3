import { Request, Response } from "express";
import { Op } from "sequelize";
import { Produto } from "../models/Produtos";
import { Image, ImageInterface } from "../models/Image";
import { describe } from "node:test";

export const home = async (req: Request, res: Response) =>{
    const product = await Produto.findAll({
        where: {
            Codigo:{
                [Op.between]: [1, 100]
            }
        },
    });

    // console.log(product);

    // const image  = await Image.create({
    //     categoria: "Sacos",
    //     descricao: 'Sacolas',
    //     qtdimage: 3
    // });

    // INSERT 
    // const image = Image.build({
    //     categoria: "Brinquedos",
    //     descricao: 'Carrinhos, Bonecas, Picinas',
    //     qtdimage: 2,

    // });

    // await image.save();

    // });
    // console.log("TabProdutos", JSON.stringify(product, null, 2))
    // try {
    //     await Sequelize.authenticate();
    // console.log("cenexao estabelecida com sucesso!");
    // } catch (error) {
    //     console.log("Deu erro", error);
    // }

    res.render('home', {product});
}

// insert de valores
// export const insert = async (req: Request, res: Response) => {
//     let categoria: string = req.body.categoria as string;
//     let descricao: string = req.body.descricao as string;
//     let qtdimage: number = req.body.qtdimage as number;

//     const imagem = await Image.create({
//         categoria: categoria,
//         descrier: descricao,
//         qtdimage: qtdimage
//     })
//     await imagem.save();

//     res.render('home', {
//             categoria,
//             descricao,
//             qtdimage
//     });
// }

// atualizando table
// export const update = async (req: Request, res: Response) =>{
//     const up_imagem = await Image.findOne({
//         where: {
//             id: "1"
//         },
//     });

//     // console.log(up_imagem);
//     res.render('home', {})
// }

// atualizando valores na tabela de dados 
export const updatePull = async (req: Request, res: Response) => {
    let result = await Image.findAll({ where: {id: 5} });
    console.log(result);
    // let images: string;
    if(result.length > 0){
       let images: ImageInterface = result[0];
        
        images.categoria = 'test';
        images.descricao = 'Test-descricao';
        images.qtdimage = 12;

        await images.save();
    }
    res.render('home', {result});
}  

// Deletando dados
export const deleteData = async (req: Request, res: Response) => {
    let result = await Image.findAll({ where: {id: 5} });
    console.log(result);
    // let images: string;
    if(result.length > 0){
       let images: ImageInterface = result[0];

        await images.destroy();
    }
    res.render('home', {result});
} 