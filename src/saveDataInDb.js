import Pet from './models/Pet';
import User from './models/User';

export default async (data) => {
  try {
    const user = new User(data.user);
    await user.save();

    const promises = data.pets.map(pet =>
      (new Pet({
        ...pet,
        owner: user._id, // eslit-disable-line
      })).save());
    console.log('success');
    return {
      user,
      pets: await Promise.all(promises),
    };
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

// const kitty = new Pet({
//   type: 'cat',
//   name: 'Zildjian',
// });
//
// kitty.save()
// .then(() => {
//   console.log('success');
// }).catch((err) => {
//   console.log('err', err);
// });
