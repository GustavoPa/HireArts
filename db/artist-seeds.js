const sequelize = require('../config/connection');
const { Artist, Artwork, Profilepic } = require('../models');



const artistData = [
  {
    id: 0,
    username: 'LakynMPhotography',
    email: 'lakynmphotographY@Hotmail.com',
    password: 'password123',
    location: 'Ottawa, ONT',
    artist_type: 'Photographer',
    website: 'www.lakynmphotography.com',
    description: 'Lakyn is a photographer based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Photography. She has been working in the field of photography for over 10 years',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    opento_commission: 'Yes',
  },
  {
    id: 1,
    username: 'DEMS & DOLLS',
    email: 'Dems@hotmail.com',
    password: 'Doll123',
    location: 'Ottawa, ONT',
    artist_type: 'Muraluist',
    website: 'www.Dems&Dolls.com',
    description: 'Dems & Dolls is a muralist based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Art. She has been working in the field of art for over 10 years',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    opento_commission: 'Yes',
  },
  {
    id: 2,
    username: 'Banksy',
    email: 'Banksy@hotmail.com',
    password: 'Banksy123',
    location: 'UK',
    artist_type: 'Graffiti',
    website: 'www.Banksy.com',
    description:'Banky is a graffiti artist based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Art. She has been working in the field of art for over 10 years',  
    work_samples: ['https://i.imgur.com/QQQQQQQ.jpg','https://i.imgur.com/QQQQQQQ.jpg','https://i.imgur.com/QQQQQQQ.jpg'],
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    opento_commission: 'NO',
  },
  {
    id: 3,
    username: 'Vincent van Gogh ',
    email: 'VincentvanGogh@hotmail.com',
    password: 'VanGogh123',
    location: 'Zundert, Netherlands',
    artist_type: 'Painter',
    website: 'www.VincentvanGogh.com',
    description: 'Dutch painter, generally considered the greatest after Rembrandt van Rijn, and one of the greatest of the Post-Impressionists. The striking colour, emphatic brushwork, and contoured forms of his work powerfully influenced the current of Expressionism in modern art. Van Gogh’s art became astoundingly popular after his death, especially in the late 20th century, when his work sold for record-breaking sums at auctions around the world and was featured in blockbuster touring exhibitions. In part because of his extensive published letters, van Gogh has also been mythologized in the popular imagination as the quintessential tortured artist.', 
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    opento_commission: 'NO',
  },
];

const artistSeeds = () => Artist.bulkCreate(artistData);

module.exports = artistSeeds; 
