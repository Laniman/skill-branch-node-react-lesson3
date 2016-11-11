import mongoose, { Schema } from 'mongoose';

const PetSchema = new Schema({
  type: {
    type: String,
    enum: ['cat', 'dog'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

PetSchema.methods.toJSON = function () {
  const { name, type, owner } = this;
  return { name, type, owner };
};

export default mongoose.model('Pet', PetSchema);
