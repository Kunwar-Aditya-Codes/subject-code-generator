import express from "express";
const router = express.Router();

import {
  createSubject,
  getAllSubjects,
  getSearchedSubjects,
} from "../controller/subjectController.js";

router.use((req, res, next) => {
  console.log("SUBJECT ROUTE");
  next();
});

router.route("/").post(createSubject).get(getAllSubjects);

router.route("/search").post(getSearchedSubjects);

export default router;
