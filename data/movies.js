const movies = [
  {
    title: 'Psychomania',
    genre: ['Occultism', 'Satanism'],
    year: 1973,
    director: 'Don Sharp',
    writer: ['Arnaud d#&39Usseau', 'Julian Zimet'],
    synopsis: 'A biker gang discovers the secret becoming the undead and terrorize an English village',
    length: '1hr25min',
    country: 'UK',
    image: '/movies/psychomania'
  },
  {
    title: 'Frankenhooker',
    genre: ['Monster', 'Troma', 'Trash', 'Comedy'],
    year: 1990,
    director: 'Frank Henenlotter',
    writer: ['Robert Martin', 'Frank Henenlotter'],
    synopsis: 'A sociopath kills sex workers in an attempt to build his deceased girlfriend a new body.',
    length: '1hr25min',
    country: 'US',
    image: '/movies/frankenhooker'
  },
  {
    title: 'The Devil&#39s Rain',
    genre: ['Satanism'],
    year: 1975,
    director: 'Robert Fuest',
    writer: ['Gabe Essoe', 'James Ashton', 'Gerald Hopman'],
    synopsis: 'Farmers fight Satanists in a battle for the Devil&#39s Rain. Anton LaVey oversaw the ritual scenes for realism and appears. Also the origin of the Michael Myers mask from John Carpenter&#39s Halloween.',
    length: '1hr26min',
    country: 'US',
    image: '/movies/devilsrain'
  },
  {
    title: 'Baker, Butcher, Nightmare Maker',
    genre: ['Slasher', 'Queer'],
    year: 1981,
    director: 'William Asher',
    writer: ['Steve Breimer', 'Alan Jay Glueckman', 'Boon Collins'],
    synopsis: 'A teen slowly becomes aware of his aunt&#39s sinister intentions.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/bakerbutcher'
  },
  {
    title: 'Elivra: Mistress of the Dark',
    genre: ['Comedy', 'Witchcraft'],
    year: 1988,
    director: 'James Signorelli',
    writer: ['Cassandra Peterson, Sam Egan, John Paragon'],
    synopsis: 'Elvira moves to a smalltown to recieve a mystery inheritance.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/elivra'
  },
  {
    title: 'The Slumber Party Massacre',
    genre: ['Slasher', 'Trash'],
    year: 1982,
    director: 'Amy Holden Jones',
    writer: ['Rita Mae Brown', 'Amy Holden Jones'],
    synopsis: 'A serial killer stalks high school students at a slumber party.',
    length: '1hr17min',
    country: 'US',
    image: '/movies/slumberparty'
  },
  {
    title: 'The Mummy',
    genre: ['Classic', 'Monster'],
    year: 1932,
    director: 'Karl Freund',
    writer: [''],
    synopsis: 'Colonizers steal the property of an Egyptian priest.',
    length: '1hr13min',
    country: 'US',
    image: '/movies/mummy'
  },
  {
    title: 'Society',
    genre: ['Psychological', 'Body', 'Trash'],
    year: 1989,
    director: 'Brian Yuzna',
    writer: ['Zeph E. Daniel', 'Rick Fry'],
    synopsis: 'Rich kid with it all becomes paranoid that his family is in a sex cult',
    length: '1hr39min',
    country: 'US',
    image: '/movies/society'
  },
  {
    title: 'Night of the Demons',
    genre: ['Haunted House', 'Possesion'],
    year: 1988,
    director: 'Kevin Tenney',
    writer: ['Joe Augustyn'],
    synopsis: 'Halloween party thrown by the weird goth girl in a haunted funeral home, what could go wrong.',
    length: '1hr30min',
    country: 'US',
    image: '/movies/nightofthedemons'
  },
  {
    title: 'Cat Calls',
    genre: ['Revenge'],
    year: 2017,
    director: 'Kate Dolan',
    writer: ['Kate Dolan'],
    synopsis: 'A sexual predator becomes the prey.',
    length: '9min',
    country: 'Ireland',
    image: '/movies/catcalls'
  },
  {
    title: 'Chopping Mall',
    genre: ['Slasher'],
    year: 1986,
    director: 'Jim Wynorski',
    writer: ['Jim Wynorski', 'Steve Mitchell'],
    synopsis: 'A group of teenagers who gatherd in a furniture store to have sex are terroized by malfunctioning Security Bots.',
    length: '1hr17min',
    country: 'US',
    image: '/movies/choppingmall'
  },
  {
    title: 'Dawn of the Dead',
    genre: ['Zombie'],
    year: 1978,
    director: 'George A. Romero',
    writer: ['George A. Romero'],
    synopsis: 'When there is no more room in hell the dead will walk the earth. So, why not go to the mall?',
    length: '2hr7min',
    country: 'US',
    image: '/movies/dawn.png'
  },

  {
    title: 'Suspiria',
    genre: ['Giallo', 'Witchcraft'],
    year: 1977,
    director: 'Dario Argento',
    writer: ['Dario Argento', 'Daria Nicolodi'],
    synopsis: 'An American ballet student begins to discover the terrifying secrets of her new German school.',
    length: '1hr32min',
    country: 'Italy',
    image: '/movies/suspiria.png'
  },

  {
    title: 'Friday The 13th',
    genre: ['Slasher'],
    year: 1980,
    director: 'Sean S. Cunningham',
    writer: ['Vitor Miller', 'Ron Kurz'],
    synopsis: 'Counselors at Camp Crystal Lake are stalked by an unknown killer out for revenge.',
    length: '1hr35min',
    country: 'US',
    image: '/movies/friday.png'
  },

  {
    title: 'Nightmare On Elm Street ',
    genre: ['Slasher'],
    year: 1984,
    director: 'Wes Craven',
    writer: ['Wes Craven'],
    synopsis: 'Teens are tormented in their nightmares by a child killer',
    length: '1hr31min',
    country: 'US',
    image: '/movies/nightmare.png'
  },

  {
    title: 'A Girl Walks Home Alone at Night',
    genre: ['Vampire'],
    year: 2014,
    director: 'Ana Lily Amirpour',
    writer: ['Ana Lily Amirpour'],
    synopsis: 'A lonely vampire stalks the residents of an Iranian town.',
    length: '1hr41min',
    country: 'Iran',
    image: '/movies/girl.png'
  },

  {
    title: 'Let The Right One In',
    genre: ['Vampire'],
    year: 2008,
    director: 'Tomas Alfredson',
    writer: ['John Ajvide Lindqvist'],
    synopsis: 'A bullied boy befriends a peculiar girl who only plays with at night.',
    length: '1hr54min',
    country: 'Sweeden',
    image: '/movies/let.png'
  },

  {
    title: 'The Babadook',
    genre: ['Supernatural'],
    year: 2014,
    director: 'Jennifer Kent',
    writer: ['Jennifer Kent'],
    synopsis: 'A mother and her son slip into madness after reading a childrens book called "Mr. Babadook"',
    length: '1hr34min',
    country: 'Australia',
    image: '/movies/babadook.png'
  },

  {
    title: 'Cannibal Holocaust',
    genre: ['Giallo', 'Cannibal'],
    year: 1980,
    director: 'Ruggero Deodato',
    writer: ['Gianfranco Clerici', 'Giorgio Stegani'],
    synopsis: 'A professor and his crew invade the home of an indegenouse tribe and suffer the consequences. At one point was banned because it was believed to show real canabilism.',
    length: '1hr35min',
    country: 'Italy',
    image: '/movies/cannibal.png'
  },
  {
    title: 'Scream',
    genre: ['Slasher'],
    year: 1996,
    director: 'Wes Craven',
    writer: ['Kevin Williamson'],
    synopsis: 'A killer targets highschool students using horror movies as inspiration. Particularly Sidney Prescott whose mother was murdered the previous year.',
    length: '1hr51min',
    country: 'US',
    image: '/movies/scream.png'
  },
  {
    title: 'The Exorcist',
    genre: ['Exorcism', 'Possesion'],
    year: 1973,
    director: 'William Friedkin',
    writer: ['William Peter Blatty'],
    synopsis: 'A twelve year old girl is possesed by a Demon, her mother calls on the help of two priests in an attempt to save her soul.',
    length: '1973',
    country: 'US',
    image: '/movies/exorcist.png'
  },
  {
    title: 'Halloween',
    genre: ['Slasher'],
    year: 1978,
    director: 'John Carpenter',
    writer: ['John Carpenter', 'Debra Hill'],
    synopsis: 'Michael Myers escapes from a mental hospital and returns to his home town 15 years after murdering his sister on Halloween night.',
    length: '1hr31min',
    country: 'US',
    image: '/movies/halloween.png'
  },
  {
    title: 'Carrie',
    genre: ['Paranormal', 'Revenge'],
    year: '1976',
    director: 'Brian De Palma',
    writer: ['Stephen King', 'Lawrence D. Cohen'],
    synopsis: 'A bullied girl who is abused by her religious mother, just wants to be normal.',
    length: '1hr38min',
    country: 'US',
    image: '/movies/carrie.png'
  },
  {
    title: 'The Texas Chainsaw Massacre',
    genre: ['Slasher', 'Cannibal'],
    year: '1974',
    director: 'Tobe Hooper',
    writer: '',
    synopsis: 'Friends on a roadtrip stop at the wrong house to try and ask for help and are met by a family of psycho cannibals.',
    length: '1hr23min',
    country: 'US',
    image: '/movies/texas.png'
  },
  {
    title: 'Zombi 2',
    genre: ['Zombie', 'Giallo'],
    year: '1979',
    director: 'Lucio Fulci',
    writer: ['Elisa Briganti', 'Dardano Sacchetti'],
    synopsis: 'In this unoffical sequel to Dawn of the Dead, a group of people arrive at a tropical island in search of a young girls father. Only to find that the island is inhabited by the walking dead.',
    length: '1hr31min',
    country: 'Italy',
    image: '/movies/zombi2.png'
  },
  {
    title: 'Night of The Living Dead',
    genre: ['Zombie'],
    year: '1968',
    director: 'George A. Romero',
    writer: ['John A. Russo', 'George A. Romero'],
    synopsis: 'A group of people lock themselves in an abandoned farm house in an attempt to hide from the walking dead.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/night.png'
  },
  {
    title: 'Day of The Dead',
    genre: ['Zombie'],
    year: '1985',
    director: 'George A. Romero',
    writer: ['George A. Romero'],
    synopsis: 'Survivors in a military base try to determine the best path to survival which includes possibly educating zombies.',
    length: '1hr41min',
    country: 'US',
    image: '/movies/day.png'
  },
  {
    title: 'Nosferatu',
    genre: ['Vampire', 'Silent'],
    year: '1922',
    director: 'F.W. Murnau',
    writer: ['Henrik Galeen', 'Bram Stoker'],
    synopsis: 'Count Orlock wishes to buy a new estate and becomes smitten with the owner&#39s wife',
    length: '1hr34min',
    country: 'Germany',
    image: '/movies/nosferatu.png'
  },
  {
    title: 'The Return of The Living Dead',
    genre: ['Zombie'],
    year: '1985',
    director: 'Dan O&#39Bannon',
    writer: ['Rudy Ricci', 'John A. Russo', 'Russell Streiner'],
    synopsis: 'Warehouse workers accidentaly open military biohazard containers containing zombies. Meanwhile a group of punks party in the cemetary next door.',
    length: '1hr31min',
    country: 'US',
    image: '/movies/return.png'
  },
  {
    title: 'The Fly',
    genre: 'Sci-Fi',
    year: '1986',
    director: 'David Cronenberg',
    writer: ['George Langelaan', 'Charles Edward Pogue', 'David Cronenberg'],
    synopsis: 'A scientist attempting to create genetic hybrids begins to transform into a human/fly after his experiments go wrong.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/fly.png'
  },
  {
    title: 'Midsommar',
    genre: ['Cults', 'Psychological'],
    year: '2019',
    director: 'Ari Aster',
    writer: ['Ari Aster'],
    synopsis: 'After the tragic death of her family a young woman travels to Sweeden to participate in a mid-summer festival. Her and her friends soon find out that this is not what they expected.',
    length: ['2hr28min'],
    country: 'US',
    image: '/movies/midsommar.png'
  },

];

export default movies;
