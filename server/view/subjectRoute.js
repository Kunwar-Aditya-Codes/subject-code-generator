import express from 'express';
const router = express.Router();

import { createSubject, getSubject } from '../controller/subjectController.js';

router.use((req, res, next) => {
  console.log('SUBJECT ROUTE');
  next();
});

router.route('/').post(createSubject).get(getSubject);

export default router;
