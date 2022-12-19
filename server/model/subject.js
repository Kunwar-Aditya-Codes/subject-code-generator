import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  subjectCode: {
    type: String,
    required: true,
  },
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
