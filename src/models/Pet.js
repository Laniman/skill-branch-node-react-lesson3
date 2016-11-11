import mongoose, { Schema } from 'mongoose';

const PetSchema = new Schema({
  type: String,
  name: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

PetSchema.methods.toJSON = function () {
  const { name, type, owner } = this;
  return { name, type, owner };
};

export default mongoose.model('Pet', PetSchema);
