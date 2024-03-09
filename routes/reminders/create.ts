/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: reminder routes for Space web server
*/

import express from 'express';
import { createReminder } from '../../controllers/reminderController';


const reminderRouter = express.Router();

// POST route for creating a reminder
reminderRouter.post('/', createReminder);

export default reminderRouter;
