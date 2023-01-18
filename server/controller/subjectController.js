import Subject from "../model/subject.js";
import asyncHandler from "express-async-handler";

export const createSubject = asyncHandler(async (req, res) => {
  const { subjectName, branch, semester, subjectCode } = await req.body;

  if (!subjectName || !branch || !semester || !subjectCode) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const foundSubject = await Subject.findOne({ subjectName })
    .collation({
      locale: "en",
      strength: 2,
    })
    .lean()
    .exec();

  if (foundSubject) {
    return res.status(400).json({ error: "Subject already exists" });
  }

  await Subject.create({
    subjectName,
    subjectCode,
    branch,
    semester,
  });

  res.status(201).json({ message: "Subject created" });
});

export const getAllSubjects = async (req, res) => {
  const subjects = await Subject.find({}).lean().exec();
  res.status(200).json({ subjects });
};

export const getSearchedSubjects = async (req, res) => {
  const { semester, branch } = req.body;

  if (!semester || !branch) {
    return;
  }

  const subjects = await Subject.find({
    semester,
    branch,
  })
    .lean()
    .exec();

  res.status(200).json({ subjects });
};
