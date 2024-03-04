import { Router } from "express";
import * as HomeController from '../controllers/homeController';
// import * as SearchController from '../controllers/searchController'; 

const router = Router();

router.get('/', HomeController.home);
// router.get('/dogs', PageController.dogs);
// router.get('/cats', PageController.cats);
// router.get('/fishes', PageController.fishes);


export default router;