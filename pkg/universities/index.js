const mongoose = require("mongoose");
const { Faculty } = require("../faculties/index");

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  faculties: {
    type: [Faculty],
    required: true
  },
});

const University = mongoose.model("University", universitySchema);

const getAll = async () => {
  return await University.find({});
};

const getSingle = async (id) => {
  return await University.findOne({ _id: id });
};

const create = async (data) => {
  const university = new University(data);
  return await university.save();
};

const update = async (id, data) => {
  return await University.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await University.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  remove,
  University
};
