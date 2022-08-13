import express from 'express';
import auth from '../middlewares/auth';
import * as routeCtrl from '../controllers/chat.controller';

const router = express.Router();

router.get('/', auth, routeCtrl.getAllChats);
router.get('/:id', auth, routeCtrl.getChat);
router.get('/user/:userId', auth, routeCtrl.getChatsForUser);
router.post('/create/:id', auth, routeCtrl.createChat);
router.delete('/delete/:id', auth, routeCtrl.deleteChat);
router.post('/update/:id', auth, routeCtrl.updateChat);

export default router;