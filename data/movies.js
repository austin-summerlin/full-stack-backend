const movies = [
  {
    title: 'The Devil&#39s Rain',
    genre: 'Satanism',
    year: 1975,
    director: 'Robert Fuest',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/devilsrain'
  },
  {
    title: 'Baker, Butcher, Nightmare Maker',
    genre: 'Slasher',
    year: 1981,
    director: 'John Carpenter',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/bakerbutcher'
  },
  {
    title: 'Elivra: Mistress of the Dark',
    genre: 'Comedy',
    year: 1988,
    director: 'James Signorelli',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/elivra'
  },
  {
    title: 'The Slumber Party Massacre',
    genre: 'Slasher',
    year: 1982,
    director: 'Amy Holden Jones',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/slumberparty'
  },
  {
    title: 'The Mummy',
    genre: 'Classic, Monster',
    year: 1932,
    director: 'Karl Freund',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/mummy'
  },
  {
    title: 'Society',
    genre: 'Psychological',
    year: 1989,
    director: 'Brian Yuzna',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/society'
  },
  {
    title: 'Night of the Demons',
    genre: 'Haunted House',
    year: 1988,
    director: 'Kevin Tenney',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/nightofthedemons'
  },
  {
    title: 'Cat Calls',
    genre: 'Revenge',
    year: 2017,
    director: 'Kate Dolan',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Ireland',
    image: '/movies/catcalls'
  },
  {
    title: 'Chopping Mall',
    genre: 'Slasher',
    year: 1986,
    director: 'Jim Wynorski',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/choppingmall'
  },
  {
    title: 'Dawn of the Dead',
    genre: 'Zombie',
    year: 1978,
    director: 'George A. Romero',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/dawn.png'
  },

  {
    title: 'Suspiria',
    genre: 'Giallo',
    year: 1977,
    director: 'Dario Argento',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Italy',
    image: '/movies/suspiria.png'
  },

  {
    title: 'Friday The 13th',
    genre: 'Slasher',
    year: 1980,
    director: 'Sean S. Cunningham',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/friday.png'
  },

  {
    title: 'Nightmare On Elm Street ',
    genre: 'Slasher',
    year: 1984,
    director: 'Wes Craven',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/nightmare.png'
  },

  {
    title: 'A Girl Walks Home Alone at Night',
    genre: 'Vampire',
    year: 2014,
    director: 'Ana Lily Amirpour',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Iran',
    image: '/movies/girl.png'
  },

  {
    title: 'Let The Right One In',
    genre: 'Vampire',
    year: 2008,
    director: 'Tomas Alfredson',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Sweeden',
    image: '/movies/let.png'
  },

  {
    title: 'The Babadook',
    genre: 'Supernatural',
    year: 2014,
    director: 'Jennifer Kent',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Australia',
    image: '/movies/babadook.png'
  },

  {
    title: 'Cannibal Holocaust',
    genre: 'Giallo, Cannibal',
    year: 1980,
    director: 'Ruggero Deodato',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Italy',
    image: '/movies/cannibal.png'
  },
  {
    title: 'Scream',
    genre: 'Slasher',
    year: 1996,
    director: 'Wes Craven',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/scream.png'
  },
  {
    title: 'The Exorcist',
    genre: 'Exorcism',
    year: 1973,
    director: 'William Friedkin',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/exorcist.png'
  },
  {
    title: 'Halloween',
    genre: 'Slasher',
    year: 1978,
    director: 'John Carpenter',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/halloween.png'
  },
  {
    title: 'Carrie',
    genre: 'Paranormal, Revenge',
    year: '1976',
    director: 'Brian De Palma',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/carrie.png'
  },
  {
    title: 'The Texas Chainsaw Massacre',
    genre: 'Slasher, Cannibal',
    year: '1974',
    director: 'Tobe Hooper',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/texas.png'
  },
  {
    title: 'zombi 2',
    genre: 'Zombie, Giallo',
    year: '1979',
    director: 'Lucio Fulci',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Italy',
    image: '/movies/zombi2.png'
  },
  {
    title: 'Night of The Living Dead',
    genre: 'Zombie',
    year: '1968',
    director: 'George A. Romero',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/night.png'
  },
  {
    title: 'Day of The Dead',
    genre: 'Zombie',
    year: '1985',
    director: 'George A. Romero',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/day.png'
  },
  {
    title: 'Nosferatu',
    genre: 'Vampire, Silent',
    year: '1922',
    director: 'F.W. Murnau',
    writer: '',
    synopsis: '',
    length: '',
    country: 'Germany',
    image: '/movies/nosferatu.png'
  },
  {
    title: 'Return of The Living Dead',
    genre: 'Zombie',
    year: '1985',
    director: 'Dan O Bannon',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/return.png'
  },
  {
    title: 'The Fly',
    genre: 'Sci-Fi',
    year: '1986',
    director: 'David Cronenberg',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/fly.png'
  },
  {
    title: 'The Witch',
    genre: 'Witches, Supernatural',
    year: '2015',
    director: 'Robert Eggers',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/witch.png'
  },
  {
    title: 'Midsommar',
    genre: 'Cults',
    year: '2019',
    director: 'Ari Aster',
    writer: '',
    synopsis: '',
    length: '',
    country: 'US',
    image: '/movies/midsommar.png'
  },

];

export default movies;
