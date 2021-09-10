const sequelize = require('../config/connection');
const { Artist, Artwork, Profilepic } = require('../models');



const artistData = [
  {
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    username: 'LakynMPhotography',
    email: 'lakynmphotographY@Hotmail.com',
    password: 'password123',
    artist_type: 'Photographer',
    location: 'Ottawa, ONT',
    website: 'www.lakynmphotography.com',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    description: 'Lakyn is a photographer based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Photography. She has been working in the field of photography for over 10 years',
    opento_commission: 'Yes',
  },
  {
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    username: 'DEMS & DOLLS',
    email: 'Dems@hotmail.com',
    password: 'Doll123',
    artist_type: 'Muraluist',
    location: 'Ottawa, ONT',
    website: 'www.Dems&Dolls.com',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    description: 'Dems & Dolls is a muralist based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Art. She has been working in the field of art for over 10 years',
    opento_commission: 'Yes',
  },
  {
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    username: 'Banksy',
    email: 'Banksy@hotmail.com',
    password: 'Banksy123',
    artist_type: 'Graffiti',
    location: 'UK',
    website: 'www.Banksy.com',
    work_samples: ['https://i.imgur.com/QQQQQQQ.jpg','https://i.imgur.com/QQQQQQQ.jpg','https://i.imgur.com/QQQQQQQ.jpg'],
    description:'Banky is a graffiti artist based in Ottawa, Ontario. She is a graduate of the University of Ottawa with a degree in Art. She has been working in the field of art for over 10 years',  
    opento_commission: 'NO',
  },
  {
    profile_pic: 'https://i.imgur.com/QQQQQQQ.jpg',
    username: 'Vincent van Gogh ',
    email: 'VincentvanGogh@hotmail.com',
    password: 'VanGogh123',
    artist_type: 'Painter',
    location: 'Zundert, Netherlands',
    website: 'www.VincentvanGogh.com',
    work_samples: 'https://i.imgur.com/QQQQQQQ.jpg',
    description: 'Dutch painter, generally considered the greatest after Rembrandt van Rijn, and one of the greatest of the Post-Impressionists. The striking colour, emphatic brushwork, and contoured forms of his work powerfully influenced the current of Expressionism in modern art. Van Gogh’s art became astoundingly popular after his death, especially in the late 20th century, when his work sold for record-breaking sums at auctions around the world and was featured in blockbuster touring exhibitions. In part because of his extensive published letters, van Gogh has also been mythologized in the popular imagination as the quintessential tortured artist.', 
    opento_commission: 'NO',
  },
];

const artistSeeds = () => artistData.bulkCreate(artistData);

module.exports = artistSeeds; 
