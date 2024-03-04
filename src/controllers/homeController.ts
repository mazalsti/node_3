import { Request, Response } from "express";
import {sequelize} from "../instances/mysql";

export const home = async (req: Request, res: Response) =>{
    try {
        await sequelize.authenticate();
        console.log("cenexao estabelecida com sucesso!");
    } catch (error) {
        console.log("Deu erro", error);
    }
    
    
    res.render('home')
}