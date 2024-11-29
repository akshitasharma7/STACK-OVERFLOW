import express from 'express';
import {login, signup} from '../controllers/auth.js'
import {getAllUsers, updateProfile} from '../controllers/Users.js'
import auth from '../middlewares/auth.js';
//import { getAll, postAll } from '../controllers/media.js';

const router= express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', updateProfile)
//router.get('/getAll', getAll)
//router.post('/postAll', postAll)

export default router