const fs = require("fs");

const countries_cities = {
    "fr": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes", "Villeurbanne", "Le Mans", "Aix-en-Provence", "Clermont-Ferrand", "Brest", "Tours", "Amiens", "Limoges", "Annecy", "Perpignan", "Metz"],
    "de": ["Berlin", "Munich", "Hambourg", "Cologne", "Francfort", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Brême", "Dresde", "Hanovre", "Nuremberg", "Duisbourg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsbourg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Brunswick", "Chemnitz", "Kiel", "Aix-la-Chapelle"],
    "be": ["Bruxelles", "Anvers", "Gand", "Charleroi", "Liège", "Bruges", "Namur", "Louvain", "Mons", "Alost", "Malines", "La Louvière", "Courtrai", "Hasselt", "Saint-Nicolas", "Ostende", "Tournai", "Genk", "Seraing", "Roulers", "Mouscron", "Verviers", "Forest", "Woluwe-Saint-Lambert", "Jette", "Schaerbeek", "Anderlecht", "Ixelles", "Uccle", "Molenbeek-Saint-Jean"],
    "ca": ["Toronto", "Montréal", "Calgary", "Ottawa", "Edmonton", "Mississauga", "Winnipeg", "Vancouver", "Brampton", "Hamilton", "Québec", "Surrey", "Laval", "Halifax", "London", "Markham", "Vaughan", "Gatineau", "Saskatoon", "Longueuil", "Kitchener", "Burnaby", "Windsor", "Regina", "Richmond", "Richmond Hill", "Oakville", "Burlington", "Sudbury", "Sherbrooke"],
    "es": ["Madrid", "Barcelone", "Valence", "Séville", "Saragosse", "Malaga", "Murcie", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoue", "Valladolid", "Vigo", "Gijón", "L'Hospitalet", "Vitoria-Gasteiz", "La Corogne", "Grenade", "Elche", "Oviedo", "Badalona", "Carthagène", "Terrassa", "Jerez de la Frontera", "Sabadell", "Móstoles", "Santa Cruz de Tenerife", "Alcala de Henares", "Pampelune"],
    "us": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphie", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", "Indianapolis", "Charlotte", "Seattle", "Denver", "Washington", "Boston", "El Paso", "Nashville", "Détroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore"],
    "it": ["Rome", "Milan", "Naples", "Turin", "Palerme", "Gênes", "Bologne", "Florence", "Bari", "Catane", "Venise", "Vérone", "Messine", "Padoue", "Trieste", "Brescia", "Tarente", "Parme", "Prato", "Modène", "Reggio de Calabre", "Reggio d'Émilie", "Pérouse", "Livourne", "Ravenne", "Cagliari", "Foggia", "Rimini", "Salerne", "Ferrare"],
    "uk": ["Londres", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Newcastle", "Sheffield", "Leeds", "Bristol", "Nottingham", "Belfast", "Leicester", "Édimbourg", "Southampton", "Cardiff", "Coventry", "Bradford", "Kingston upon Hull", "Plymouth", "Wolverhampton", "Stoke-on-Trent", "Derby", "Swansea", "Salford", "Aberdeen", "Westminster", "Portsmouth", "York", "Peterborough", "Dundee"],
    "ch": ["Zurich", "Genève", "Bâle", "Lausanne", "Berne", "Winterthour", "Lucerne", "Saint-Gall", "Lugano", "Bienne", "Thoune", "Köniz", "La Chaux-de-Fonds", "Fribourg", "Schaffhouse", "Vernier", "Coire", "Uster", "Sion", "Neuchâtel", "Lancy", "Emmen", "Yverdon-les-Bains", "Zoug", "Dübendorf", "Kriens", "Dietikon", "Rapperswil-Jona", "Montreux", "Frauenfeld"]
};

let out = "export const CITIES = [\n";

Object.entries(countries_cities).forEach(([cid, clist]) => {
    out += `    // --- ${cid.toUpperCase()} ---\n`;
    clist.forEach(cname => {
        let c_id = cname.toLowerCase()
            .replace(/ /g, "-")
            .replace(/'/g, "-")
            .replace(/é/g, "e")
            .replace(/è/g, "e")
            .replace(/ü/g, "u")
            .replace(/ö/g, "o")
            .replace(/ä/g, "a")
            .replace(/â/g, "a")
            .replace(/î/g, "i");
        out += `    { id: "${c_id}", name: "${cname.replace(/"/g, '\\"')}", countryId: "${cid}" },\n`;
    });
});

const africanBlock = `
    // --- AFRIQUE - BÉNIN ---
    { id: "cotonou", name: "Cotonou", countryId: "bj" },
    { id: "porto-novo", name: "Porto-Novo", countryId: "bj" },
    { id: "parakou", name: "Parakou", countryId: "bj" },

    // --- AFRIQUE - CÔTE D'IVOIRE ---
    { id: "abidjan", name: "Abidjan", countryId: "ci" },
    { id: "yamoussoukro", name: "Yamoussoukro", countryId: "ci" },
    { id: "bouake", name: "Bouaké", countryId: "ci" },

    // --- AFRIQUE - SÉNÉGAL ---
    { id: "dakar", name: "Dakar", countryId: "sn" },
    { id: "thies", name: "Thiès", countryId: "sn" },
    { id: "saint-louis", name: "Saint-Louis", countryId: "sn" },

    // --- AFRIQUE - TOGO ---
    { id: "lome", name: "Lomé", countryId: "tg" },

    // --- AFRIQUE - CAMEROUN ---
    { id: "douala", name: "Douala", countryId: "cm" },
    { id: "yaounde", name: "Yaoundé", countryId: "cm" },

    // --- AFRIQUE - MALI ---
    { id: "bamako", name: "Bamako", countryId: "ml" },

    // --- AFRIQUE - BURKINA FASO ---
    { id: "ouagadougou", name: "Ouagadougou", countryId: "bf" },
    { id: "bobo-dioulasso", name: "Bobo-Dioulasso", countryId: "bf" }
`.trim();

out += "    " + africanBlock + "\n";
out += "].sort((a, b) => a.name.localeCompare(b.name, 'fr'));";

const path = "src/data/constants.js";
const text = fs.readFileSync(path, "utf8");

const newText = text.replace(/export const CITIES = [\s\S]*?\]\.sort\(\(a, b\) => a\.name\.localeCompare\(b\.name, 'fr'\)\);/, out);

fs.writeFileSync(path, newText, "utf8");
console.log("Update complete.");
