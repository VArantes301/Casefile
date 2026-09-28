const privateData = {
  male: [
    "Alexander", "Aiden", "Antoine", "Aurelio", "Axel", "Asher", "Amir", "Atticus", "August", "Alessandro",
    "Bastian", "Benjamin", "Boris", "Brody", "Bruno", "Balthazar", "Björn", "Beau", "Brandon", "Blake",
    "Caleb", "Caspian", "Ciarán", "Cédric", "Christian", "Conrad", "Connor", "Cristian", "Corbin", "Cruz",
    "Dante", "Damian", "Dominic", "Dmitri", "Dorian", "Dario", "Declan", "Diego", "Dylan", "Drake",
    "Ethan", "Elijah", "Enzo", "Ezra", "Emiel", "Ezekiel", "Elio", "Elliot", "Evander", "Emil",
    "Felix", "Finnegan", "Fabian", "Flynn", "Florian", "Francesco", "Fletcher", "Finn", "Felipe", "Gael",
    "Gideon", "Gavin", "Giovanni", "Gabriel", "Guillaume", "Grayson", "Gareth", "Göran", "Gianluca", "Harrison",
    "Heitor", "Hugo", "Henrik", "Hunter", "Hector", "Hassan", "Hans", "Harlan", "Hayden", "Ian",
    "Ignacio", "Igor", "Iker", "Isaac", "Ivan", "Ismael", "Ilan", "Jaxon", "Julian", "Jasper",
    "Jonas", "Javier", "Julien", "Jan", "Judah", "Joaquin", "Kaelen", "KAI", "Kieran", "Kilian",
    "Kenneth", "Klaus", "Koa", "Kyrie", "Lars", "Liam", "Leo", "Lucas", "Lorenzo", "Lucien",
    "Luka", "Levi", "Lysander", "Logan", "Luca", "Mateo", "Milo", "Maximilian", "Mathias", "Mikhail",
    "Micah", "Malachi", "Marcus", "Milan", "Mason", "Noah", "Nico", "Nikolai", "Nathaniel", "Nehemiah",
    "Niels", "Nolan", "Nicolas", "Naoki", "Oliver", "Orion", "Owen", "Otto", "Orlando", "Omar",
    "Olivier", "Oskar", "Paul", "Pablo", "Philip", "Phoenix", "Pierce", "Pietro", "Quinn", "Quentin",
    "Raphael", "Rowan", "Roman", "Ren", "Rory", "Ruben", "Remi", "Ryder", "Ronan", "Rafael",
    "Sebastian", "Soren", "Silas", "Stefan", "Samuel", "Sven", "Sacha", "Santino", "Santiago", "Sean",
    "Tristan", "Théo", "Tobias", "Tatsuya", "Tariq", "Theodore", "Timothy", "Travis", "Titus", "Uriel",
    "Victor", "Valentin", "Vincent", "Vincenzo", "Viktor", "Vance", "Wyatt", "Xavier", "Youssef", "Zack"
  ],

  female: [
    "Amara", "Astrid", "Aurora", "Aria", "Adeline", "Amélie", "Alessia", "Anastasia", "Aaliyah", "Anouk",
    "Beatrice", "Bella", "Bianca", "Briar", "Bridget", "Camila", "Charlotte", "Cora", "Céleste", "Chiara",
    "Chloe", "Clara", "Daphne", "Delilah", "Diana", "Dahlia", "Dominique", "Elena", "Eliana", "Elise",
    "Evangeline", "Eva", "Evelyn", "Eleni", "Esme", "Freya", "Fiona", "Francesca", "Florence", "Flora", "Gia",
    "Genevieve", "Giselle", "Giovanna", "Georgia", "Grace", "Greta", "Hazel", "Helena", "Harper", "Hana",
    "Ines", "Iris", "Isla", "Isabella", "Ivy", "Ingrid", "Ilaria", "Jasmine", "Jade", "Juliet",
    "Josephine", "Julia", "June", "Kaia", "Kira", "Keira", "Katarina", "Kendra", "Lara", "Luna",
    "Layla", "Lucia", "Leilani", "Lilith", "Livia", "Lyra", "Lola", "Lorelai", "Maya", "Mila", "Mia",
    "Maeve", "Margot", "Matilda", "Melody", "Milena", "Miriam", "Nora", "Noelle", "Nadia", "Naomi",
    "Nina", "Natalia", "Niamh", "Ophelia", "Olivia", "Octavia", "Odette", "Penelope", "Piper", "Phoebe",
    "Paola", "Persephone", "Quinn", "Rosalie", "Rowan", "Ruby", "Rhea", "Renata", "Rory", "Sienna",
    "Stella", "Sophia", "Seraphina", "Saskia", "Sylvia", "Sabrina", "Scarlett", "Sierra", "Selena", "Talia",
    "Tessa", "Thea", "Tatiana", "Tamsin", "Uma", "Valentina", "Violet", "Victoria", "Vienna", "Vivienne",
    "Vera", "Valerie", "Willa", "Willow", "Winona", "Xanthe", "Ximena", "Yara", "Yasmin", "Yvette",
    "Zoe", "Zara", "Zaria", "Zelda", "Zuri", "Astrid", "Aylin", "Belen", "Calla", "Elowen"
  ],

  surname: [
    "Anderson", "Adler", "Alvarez", "Amato", "Armstrong", "Bennett", "Bernardi", "Boucher", "Beck", "Blackwood",
    "Bourbon", "Brooks", "Campbell", "Castillo", "Conti", "Chen", "Crawford", "Dubois", "De Luca", "Dupont",
    "Dietrich", "Donovan", "Evans", "Esposito", "Erickson", "Fischer", "Fontaine", "Ferrari", "Fletcher", "Ferreira",
    "García", "Gruber", "Gallagher", "Gérard", "Guordano", "Harrison", "Hansen", "Hoffmann", "Hayes", "Howard",
    "Ivanov", "Jansen", "Jenkins", "Johansson", "Kovacs", "Keller", "King", "Kaiser", "Klein", "Kim",
    "Laurent", "Lambert", "Lombardi", "Lindqvist", "Leblanc", "Leclerc", "Miller", "Moreau", "Moretti", "Meyer",
    "Mercier", "Marshall", "Monroe", "Müller", "Novak", "Nielsen", "Nakamura", "Navarro", "O'Connor", "Orlov",
    "O'Brien", "Petrov", "Perez", "Picard", "Park", "Palmer", "Quinn", "Ricci", "Russo", "Romano",
    "Rossi", "Reid", "Richter", "Roux", "Schneider", "Santanera", "Snyder", "Sinclair", "Soto", "Sullivan",
    "Takahashi", "Taylor", "Tremblay", "Vanderbilt", "Vargas", "Vogel", "Vane", "Van Dijk", "Weber", "Wagner",
    "Walker", "Wright", "White", "Winter", "Xavier", "Young", "Zimmermann", "Zhao", "Almeida", "Azevedo",
    "Barros", "Cardoso", "Carvalho", "Costa", "Cunha", "Dias", "Duarte", "Fernandes", "Ferreira", "Fonseca",
    "Gomes", "Gonçalves", "Lima", "Lopes", "Machado", "Martins", "Mendes", "Miranda", "Monteiro", "Moreira",
    "Nascimento", "Nogueira", "Oliveira", "Pereira", "Ribeiro", "Rocha", "Rodrigues", "Santos", "Silva", "Souza"
  ]
};

module.exports = {
    male: privateData.male,
    female: privateData.female,
    surname: privateData.surname
}