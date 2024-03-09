/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder routes for Space web server
*/

import express from 'express';
import { deleteReminder } from '../../controllers/reminderController';


const reminderRouter = express.Router();

// DELETE route for deleting a reminder by ID
reminderRouter.delete('/:reminderId', deleteReminder);

export default reminderRouter;
