const movies = [
  {
    title: 'Halloween Kills',
    genre: 'Slasher',
    year: 2021,
    director: 'David Gordon Green',
    writer: 'John Carpenter, Debra Hill, Scott Teems',
    synopsis: 'Michael Meyers returns and contiunues to terrorize Laurie Strode. The town of Haddonfield rises up to stop him.',
    length: '1hr45min',
    country: 'US',
    image: '/movies/halloweenkills.png'
  },
  {
    title: 'Halloween',
    genre: 'Slasher',
    year: 1978,
    director: 'John Carpenter',
    writer: 'John Carpenter, Debra Hill',
    synopsis: 'Michael Myers escapes from a mental hospital and returns to his home town 15 years after murdering his sister on Halloween night.',
    length: '1hr31min',
    country: 'US',
    image: '/movies/halloween.png'
  },
  {
    title: 'Maneater of Hydra',
    genre: 'Sci-Fi',
    year: 1967,
    director: 'Ernst Ritter von Theumer',
    writer: 'Ernst Ritter von Theumer, Mel Welles',
    synopsis: 'Tourists visit an Island where a mad scientist has been doing experiments with carnivorous plants.',
    length: '1hr28min',
    country: 'Italy',
    image: '/movies/maneater.png'
  },
  {
    title: 'Messiah of Evil',
    genre: 'Occultism, Cults, Zombie',
    year: 1973,
    director: 'Willard Huyck, Gloria Katz',
    writer: 'Willard Huyck, Gloria Katz',
    synopsis: 'A woman heads to a seaside town in search for her father where a mysterious undead cult has taken over.',
    length: '1hr30min',
    country: 'US',
    image: '/movies/messiahofevil.png'
  },
  {
    title: 'Vampyres',
    genre: 'Vampire, LGBTQ',
    year: 1974,
    director: 'José Ramón Larraz',
    writer: 'José Ramón Larraz, Diana Daubeney, Thomas Owen',
    synopsis: 'Two mysterious women lure men into a victorian mansion in order to satiate their hunger for blood.',
    length: '1hr27min',
    country: 'UK',
    image: '/movies/vampyres.png'
  },
  {
    title: 'Fear Street: Part Three - 1666',
    genre: 'Slasher',
    year: 2021,
    director: 'Leigh Janiak',
    writer: 'R.L. Stine, Kyle Killen, Phil Graziadei',
    synopsis: 'The origins of the curse of Sarah Fier\'s is revealed.',
    length: '1hr54min',
    country: 'US',
    image: '/movies/fearstreet1666.png'
  },
  {
    title: 'Fear Street: Part Two - 1978',
    genre: 'Slasher',
    year: 2021,
    director: 'Leigh Janiak',
    writer: 'R.L. Stine, Leigh Janiak, Zak Olkewicz,  Phil Graziadei',
    synopsis: 'In 1978 Camp Nightwing is terrorized by a mysterious killer.',
    length: '1hr49min',
    country: 'US',
    image: '/movies/fearstreet1978.png'
  },
  {
    title: 'Fear Street: Part One - 1994',
    genre: 'Slasher',
    year: 2021,
    director: 'Leigh Janiak',
    writer: 'R.L. Stine, Kyle Killen, Phil Graziadei',
    synopsis: 'A group of high school friends unleashes an ancient evil that has been responsible for brutal murders dating back 300 years.',
    length: '1hr47min',
    country: 'US',
    image: '/movies/fearstreet1994.png'
  },
  {
    title: 'Sorority House Massacre',
    genre: 'Slasher',
    year: 1986,
    director: 'Carol Frank',
    writer: 'Carol Frank',
    synopsis: 'A woman is stalked by a killer who she seems to have a psychic connection with.',
    length: '1hr13min',
    country: 'US',
    image: '/movies/sororityhousemassacre.png'
  },
  {
    title: 'Friday the 13th Part III',
    genre: 'Slasher',
    year: 1982,
    director: 'Steve Miner',
    writer: 'Martin Kitrosser, Carol Watson',
    synopsis: 'Jason terroizes a group of teenagers spending a weekend in a cabin near Camp Crystal Lake. He finally finds his hockey mask and ditches the burlap sack.',
    length: '1hr35min',
    country: 'US',
    image: '/movies/fridaypart3.png'
  },
  {
    title: 'The House That Screamed',
    genre: 'Slasher, Thriller',
    year: 1969,
    director: 'Narciso Ibáñez Serrador',
    writer: 'Narciso Ibáñez Serrador',
    synopsis: 'Students begin to dissapear at a school for wayward girls run by a headmistress with an iron fist.',
    length: '1hr34min',
    country: 'Spain',
    image: '/movies/housethatscreamed.png'
  },
  {
    title: 'Count Dracula\'s Great Love',
    genre: 'Vampire',
    year: 1973,
    director: 'Javier Agguire',
    writer: 'Javier Agguire, Alberto S. Insua, Paul Naschy',
    synopsis: 'A group of friends stay in an abandoned sanitarium. They begin to fall victim to a mysterious vampire. One of them must choose between life and immortality as Dracula\'s mistress.',
    length: '1hr25min',
    country: 'Spain',
    image: '/movies/draculasgreatlove.png'
  },
  {
    title: 'The Devil\'s Wedding Night',
    genre: 'Vampire',
    year: 1973,
    director: 'Luigi Batzella, Joe D\'Amato',
    writer: 'Mark Danby, Ralph Zucker',
    synopsis: 'Lady Dracula uses an ancient ring to lure beautiful girls to her castle where she murders them to bathe in their blood.',
    length: '1hr23min',
    country: 'Italy',
    image: '/movies/devilswedding.png'
  },
  {
    title: 'Legacy of Satan',
    genre: 'Occultism, Satanism',
    year: 1973,
    director: 'Gerard Damiano',
    writer: 'Gerard Damiano',
    synopsis: 'A satanic cult choses an unwitting girl as its new victim.',
    length: '1hr8min',
    country: 'US',
    image: '/movies/legacyofsatan.png'
  },
  {
    title: 'Hellraiser',
    genre: 'Horror, Thriller',
    year: 1987,
    director: 'Clive Barker',
    writer: 'Clive Barker',
    synopsis: 'A woman begins killing in order to ressurect her deceased brother in-law who she had an affair with years earlier.',
    length: '1hr34min',
    country: 'US',
    image: '/movies/hellraiser.png'
  },
  {
    title: 'Psychomania',
    genre: 'Occultism, Satanism',
    year: 1973,
    director: 'Don Sharp',
    writer: 'Arnaud d\'Usseau, Julian Zimet',
    synopsis: 'A biker gang discovers the secret becoming the undead and terrorize an English village.',
    length: '1hr25min',
    country: 'UK',
    image: '/movies/psychomania.png'
  },
  {
    title: 'Frankenhooker',
    genre: 'Monster, Troma, Trash, Comedy',
    year: 1990,
    director: 'Frank Henenlotter',
    writer: 'Robert Martin, Frank Henenlotter',
    synopsis: 'A sociopath kills sex workers in an attempt to build his deceased girlfriend a new body.',
    length: '1hr25min',
    country: 'US',
    image: '/movies/frankenhooker.png'
  },
  {
    title: 'The Devil\'s Rain',
    genre: 'Satanism',
    year: 1975,
    director: 'Robert Fuest',
    writer: 'Gabe Essoe, James Ashton, Gerald Hopman',
    synopsis: 'Farmers fight Satanists in a battle for the Devil\'s Rain. Anton LaVey oversaw the ritual scenes for realism and appears. Also the origin of the Michael Myers mask from John Carpenter\'s Halloween.',
    length: '1hr26min',
    country: 'US',
    image: '/movies/devilsrain.png'
  },
  {
    title: 'Butcher, Baker, Nightmare Maker',
    genre: 'Slasher, Queer',
    year: 1981,
    director: 'William Asher',
    writer: 'Steve Breimer, Alan Jay Glueckman, Boon Collins',
    synopsis: 'A teen slowly becomes aware of his aunt\'s sinister intentions.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/bakerbutcher.png'
  },
  {
    title: 'Elivra: Mistress of the Dark',
    genre: 'Comedy, Witchcraft',
    year: 1988,
    director: 'James Signorelli',
    writer: 'Cassandra Peterson, Sam Egan, John Paragon',
    synopsis: 'Elvira moves to a smalltown to recieve a mystery inheritance.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/elvira.png'
  },
  {
    title: 'The Slumber Party Massacre',
    genre: 'Slasher, Trash',
    year: 1982,
    director: 'Amy Holden Jones',
    writer: 'Rita Mae Brown, Amy Holden Jones',
    synopsis: 'A serial killer stalks high school students at a slumber party.',
    length: '1hr17min',
    country: 'US',
    image: '/movies/slumberparty.png'
  },
  {
    title: 'The Mummy',
    genre: 'Classic, Monster',
    year: 1932,
    director: 'Karl Freund',
    writer: 'Nina Wilcox Putnam, Richard Schayer',
    synopsis: 'Colonizers steal the property of an Egyptian priest.',
    length: '1hr13min',
    country: 'US',
    image: '/movies/mummy.png'
  },
  {
    title: 'Society',
    genre: 'Psychological, Body, Trash',
    year: 1989,
    director: 'Brian Yuzna',
    writer: 'Zeph E. Daniel, Rick Fry',
    synopsis: 'Rich kid with it all becomes paranoid that his family is in a sex cult',
    length: '1hr39min',
    country: 'US',
    image: '/movies/society.png'
  },
  {
    title: 'Night of the Demons',
    genre: 'Haunted House, Possesion',
    year: 1988,
    director: 'Kevin Tenney',
    writer: 'Joe Augustyn',
    synopsis: 'Halloween party thrown by the weird goth girl in a haunted funeral home, what could go wrong.',
    length: '1hr30min',
    country: 'US',
    image: '/movies/nightofthedemons.png'
  },
  {
    title: 'Cat Calls',
    genre: 'Revenge',
    year: 2017,
    director: 'Kate Dolan',
    writer: 'Kate Dolan',
    synopsis: 'A sexual predator becomes the prey.',
    length: '9min',
    country: 'Ireland',
    image: '/movies/catcalls.png'
  },
  {
    title: 'Chopping Mall',
    genre: 'Slasher',
    year: 1986,
    director: 'Jim Wynorski',
    writer: 'Jim Wynorski, Steve Mitchell',
    synopsis: 'A group of teenagers who gatherd in a furniture store to have sex are terroized by malfunctioning Security Bots.',
    length: '1hr17min',
    country: 'US',
    image: '/movies/choppingmall.png'
  },
  {
    title: 'Dawn of the Dead',
    genre: 'Zombie',
    year: 1978,
    director: 'George A. Romero',
    writer: 'George A. Romero',
    synopsis: 'When there is no more room in hell the dead will walk the earth. So, why not go to the mall?',
    length: '2hr7min',
    country: 'US',
    image: '/movies/dawn.png'
  },

  {
    title: 'Suspiria',
    genre: 'Giallo, Witchcraft',
    year: 1977,
    director: 'Dario Argento',
    writer: 'Dario Argento, Daria Nicolodi',
    synopsis: 'An American ballet student begins to discover the terrifying secrets of her new German school.',
    length: '1hr32min',
    country: 'Italy',
    image: '/movies/suspiria.png'
  },

  {
    title: 'Friday The 13th',
    genre: 'Slasher',
    year: 1980,
    director: 'Sean S. Cunningham',
    writer: 'Vitor Miller, Ron Kurz',
    synopsis: 'Counselors at Camp Crystal Lake are stalked by an unknown killer out for revenge.',
    length: '1hr35min',
    country: 'US',
    image: '/movies/friday.png'
  },

  {
    title: 'Nightmare On Elm Street ',
    genre: 'Slasher',
    year: 1984,
    director: 'Wes Craven',
    writer: 'Wes Craven',
    synopsis: 'Teens are tormented in their nightmares by a child killer',
    length: '1hr31min',
    country: 'US',
    image: '/movies/nightmare.png'
  },

  {
    title: 'A Girl Walks Home Alone at Night',
    genre: 'Vampire',
    year: 2014,
    director: 'Ana Lily Amirpour',
    writer: 'Ana Lily Amirpour',
    synopsis: 'A lonely vampire stalks the residents of an Iranian town.',
    length: '1hr41min',
    country: 'Iran',
    image: '/movies/girl.png'
  },

  {
    title: 'Let The Right One In',
    genre: 'Vampire',
    year: 2008,
    director: 'Tomas Alfredson',
    writer: 'John Ajvide Lindqvist',
    synopsis: 'A bullied boy befriends a peculiar girl who only plays with at night.',
    length: '1hr54min',
    country: 'Sweeden',
    image: '/movies/let.png'
  },

  {
    title: 'The Babadook',
    genre: 'Supernatural',
    year: 2014,
    director: 'Jennifer Kent',
    writer: 'Jennifer Kent',
    synopsis: 'A mother and her son slip into madness after reading a childrens book called "Mr. Babadook"',
    length: '1hr34min',
    country: 'Australia',
    image: '/movies/babadook.png'
  },

  {
    title: 'Cannibal Holocaust',
    genre: 'Giallo, Cannibal',
    year: 1980,
    director: 'Ruggero Deodato',
    writer: 'Gianfranco Clerici, Giorgio Stegani',
    synopsis: 'A professor and his crew invade the home of an indegenouse tribe and suffer the consequences. At one point was banned because it was believed to show real canabilism.',
    length: '1hr35min',
    country: 'Italy',
    image: '/movies/cannibal.png'
  },
  {
    title: 'Scream',
    genre: 'Slasher',
    year: 1996,
    director: 'Wes Craven',
    writer: 'Kevin Williamson',
    synopsis: 'A killer targets highschool students using horror movies as inspiration. Particularly Sidney Prescott whose mother was murdered the previous year.',
    length: '1hr51min',
    country: 'US',
    image: '/movies/scream.png'
  },
  {
    title: 'The Exorcist',
    genre: 'Exorcism, Possesion',
    year: 1973,
    director: 'William Friedkin',
    writer: 'William Peter Blatty',
    synopsis: 'A twelve year old girl is possesed by a Demon, her mother calls on the help of two priests in an attempt to save her soul.',
    length: '1973',
    country: 'US',
    image: '/movies/exorcist.png'
  },
  {
    title: 'Carrie',
    genre: 'Paranormal, Revenge',
    year: '1976',
    director: 'Brian De Palma',
    writer: 'Stephen King, Lawrence D. Cohen',
    synopsis: 'A bullied girl who is abused by her religious mother, just wants to be normal.',
    length: '1hr38min',
    country: 'US',
    image: '/movies/carrie.png'
  },
  {
    title: 'The Texas Chainsaw Massacre',
    genre: 'Slasher, Cannibal',
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
    genre: 'Zombie, Giallo',
    year: '1979',
    director: 'Lucio Fulci',
    writer: 'Elisa Briganti, Dardano Sacchetti',
    synopsis: 'In this unoffical sequel to Dawn of the Dead, a group of people arrive at a tropical island in search of a young girls father. Only to find that the island is inhabited by the walking dead.',
    length: '1hr31min',
    country: 'Italy',
    image: '/movies/zombi2.png'
  },
  {
    title: 'Night of The Living Dead',
    genre: 'Zombie',
    year: '1968',
    director: 'George A. Romero',
    writer: 'John A. Russo, George A. Romero',
    synopsis: 'A group of people lock themselves in an abandoned farm house in an attempt to hide from the walking dead.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/night.png'
  },
  {
    title: 'Day of The Dead',
    genre: 'Zombie',
    year: '1985',
    director: 'George A. Romero',
    writer: 'George A. Romero',
    synopsis: 'Survivors in a military base try to determine the best path to survival which includes possibly educating zombies.',
    length: '1hr41min',
    country: 'US',
    image: '/movies/day.png'
  },
  {
    title: 'Nosferatu',
    genre: 'Vampire, Silent',
    year: '1922',
    director: 'F.W. Murnau',
    writer: 'Henrik Galeen, Bram Stoker',
    synopsis: 'Count Orlock wishes to buy a new estate and becomes smitten with the owner\'s wife',
    length: '1hr34min',
    country: 'Germany',
    image: '/movies/nosferatu.png'
  },
  {
    title: 'The Return of The Living Dead',
    genre: 'Zombie',
    year: '1985',
    director: 'Dan O\'Bannon',
    writer: 'Rudy Ricci, John A. Russo, Russell Streiner',
    synopsis: 'Warehouse workers accidentaly open military biohazard containers containing zombies. Meanwhile a group of punks party in the cemetary next door.',
    length: '1hr31min',
    country: 'US',
    image: '/movies/return.png'
  },
  {
    title: 'The Fly',
    genre: 'Sci-Fi, Psychological, Body',
    year: '1986',
    director: 'David Cronenberg',
    writer: 'George Langelaan, Charles Edward Pogue, David Cronenberg',
    synopsis: 'A scientist attempting to create genetic hybrids begins to transform into a human/fly after his experiments go wrong.',
    length: '1hr36min',
    country: 'US',
    image: '/movies/fly.png'
  },
  {
    title: 'Midsommar',
    genre: 'Cults, Psychological',
    year: '2019',
    director: 'Ari Aster',
    writer: 'Ari Aster',
    synopsis: 'After the tragic death of her family a young woman travels to Sweeden to participate in a mid-summer festival. Her and her friends soon find out that this is not what they expected.',
    length: '2hr28min',
    country: 'US',
    image: '/movies/midsommar.png'
  },
];

export default movies;
