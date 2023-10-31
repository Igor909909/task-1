const mongoose = require("mongoose");
const { University } = require("../universities/index")

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  university: {
    type: University,
    required: true
  },
});

const Faculty = mongoose.model("Faculty", facultySchema);

const getAll = async () => {
  return await Faculty.find({});
};

const getSingle = async (id) => {
  return await Faculty.findOne({ _id: id });
};

const create = async (data) => {
  const faculty = new Faculty(data);
  return await faculty.save();
};

const update = async (id, data) => {
  return await Faculty.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Faculty.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  remove,
  Faculty
};
