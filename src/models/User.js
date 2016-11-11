import mongoose, { Schema } from 'mongoose';
// import _ from 'lodash';

const UserSchema = new Schema({
  name: String,
}, {
  timestamps: true,
});

// UserSchema.methods.toObject = function () {
//   return {
//     name: `prefix ${this.name}`,
//   };
// };

UserSchema.methods.toJSON = function () {
  const { name } = this;
  return { name };
};

export default mongoose.model('User', UserSchema);
