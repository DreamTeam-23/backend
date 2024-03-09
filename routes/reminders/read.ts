/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder routes for Space web server
*/

import express from 'express';
import { getReminder } from '../../controllers/reminderController';


const reminderRouter = express.Router();

// GET route for reading a reminder by ID
reminderRouter.get('/:reminderId', getReminder);

export default reminderRouter;
