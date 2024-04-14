import { Router } from "express";
import * as HomeController from '../controllers/homeController';
// import * as SearchController from '../controllers/searchController'; 

const router = Router();

router.get('/home', HomeController.home);
// router.post('/home/insert', HomeController.insert);
router.get('/update', HomeController.updatePull);
// router.get('/fishes', PageController.fishes);


export default router;