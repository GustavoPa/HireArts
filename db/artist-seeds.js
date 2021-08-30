const sequelize = require('../config/connection');

const artistdata = [
  {
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    username: 'LakynMPhotography',
    password: 'password123',
    email: 'lakynmphotographY@Hotmail.com',
    password: 'password123',
    artist_type: 'Photographer',
    location_ID: 'Ottawa, ONT',
    website: 'www.lakynmphotography.com',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    description: 'Lakyn is a photographer based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Photography. She has been working in the field of photography for over 10 years',
    opento_commision: 'Yes',
  },
  {
    username: 'DEMS & DOLLS',
    email: 'Dems@hotmail.com',
    password: 'Doll123'

  },
  {
    username: 'Banksy',
    email: 'Banksy@hotmail.com',
    password: 'Banksy123'
  },
  {
    username: 'Waleed',
    email: 'waleed@hotmail.com',
    password: 'waleed123'
  },
 
];



module.exports = artistdata; 
