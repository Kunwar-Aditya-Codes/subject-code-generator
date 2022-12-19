import Subject from '../model/subject.js';
import asyncHandler from 'express-async-handler';

export const createSubject = asyncHandler(async (req, res) => {
  const { subjectName, category, subjectCode } = await req.body;

  if (!subjectName || !category || !subjectCode) {
    return res
      .status(400)
      .json({ error: 'Please provide all the required fields' });
  }

  const foundSubject = await Subject.findOne({ subjectName })
    .collation({
      locale: 'en',
      strength: 2,
    })
    .lean()
    .exec();

  if (foundSubject) {
    return res.status(400).json({ error: 'Subject already exists' });
  }

  await Subject.create({
    subjectName,
    category,
    subjectCode,
  });

  res.status(201).json({ message: 'Subject created' });
});

export const getSubject = async (req, res) => {
  const { query } = req.query;

  if (query) {
    const foundSubject = await Subject.find({
      subjectName: { $regex: query, $options: 'i' },
    })
      .select('subjectName category subjectCode')
      .exec();

    res.status(200).json({ subjects: foundSubject });
  } else {
    const allSubjects = await Subject.find()
      .select('subjectName category subjectCode')
      .lean()
      .exec();

    res.status(200).json({ subjects: allSubjects });
  }
};
