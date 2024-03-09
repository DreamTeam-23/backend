/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder routes for Space web server
*/

import express from 'express';
import { updateReminder } from '../../controllers/reminderController';


const reminderRouter = express.Router();

// PUT route for updating a reminder by ID
reminderRouter.put('/:reminderId', updateReminder);

export default reminderRouter;
