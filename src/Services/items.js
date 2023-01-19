const baseURL = 'https"//jsnoplaceholder.typicode.com';

export function getAllItems () {
    return fetch (`${baseURL}/items`)
    .then((response) => response.json())
    .then((parsedResponse) => parsedResponse)
    .catch((error) => {
        console.error("[getAllItems] - ERROR: ", error);
        return [];
    });
}

export function getItem (itemId) {
    return fetch (`${baseURL}`)
}

export function getAllCategories () {
    return fetch (`${baseURL}`)
}

export const ITEMS = [
    {
        id:"lemon",
        name:"Lemon",
        category:"Citrus",
        description:"The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses. The pulp and rind are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2, giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.",
    },
    {
        id:"orange",
        name:"Orange",
        category:"Citrus",
        description:"Citrus Sinensis, also known as the sweet oranges, is a commonly cultivated family of oranges that includes blood oranges and navel oranges. The orange fruit is an important agricultural product, used for both the juicy fruit pulp and the aromatic peel. Orange blossoms (the flowers) are used in several different ways, as are the leaves and wood of the tree.",
    },
    {
        id:"japaneseCherry",
        name:"Japanese Cherry",
        category:"Prunus",
        description:"Prunus Serrulata is a species of cherry tree that grows naturally in Japan, China, and Korea, a cherry tree endemic in Japan. Historically, the Japanese have developed many cultivars by selective breeding of cherry trees, which are produced by the complicated crossing of several wild species, and they are used for ornamental purposes all over the world.",
    },
    {
        id:"eucalyptus",
        name:"Eucalyptus",
        category:"Myrtaceae",
        description:"Most species of Eucalyptus are native to Australia, and every state and territory has representative species. About three-quarters of Australian forests are eucalypt forests. Wildfire is a feature of the Australian landscape and many eucalypt species are adapted to fire, and resprout after fire or have seeds which survive fire.",
    },
    {
        id:"plums",
        name:"Plums",
        category:"Prunus",
        description:"Prunus domestica, the European plum is a species of flowering plant in the family Rosaceae. A deciduous tree, it includes many varieties of the fruit trees known as plums in English, though not all plums belong to this species. The greengages and damsons also belong to subspecies of P. domestica.",
    },
    {
        id:"pine",
        name:"Pine",
        category:"Pinus",
        description:"Pines are commonly found in the Northern Hemisphere. Pine may also refer to the lumber derived from pine trees; it is one of the more extensively used types of lumber. The pine family is the largest conifer family and there are currently 818 named cultivars (or trinomials) recognized by the ACS.",
    },
    {
        id:"jacaranda",
        name:"Jacaranda",
        category:"Jacaranda",
        description:"Jacaranda mimosifolia is a sub-tropical tree native to south-central South America that has been widely planted elsewhere because of its attractive and long-lasting violet-colored flowers. It is also known as the jacaranda, blue jacaranda, black poui, Nupur or fern tree.",
    },
    {
        id:"carob",
        name:"Carob",
        category:"Ceratonia",
        description:"The carob is a flowering evergreen tree or shrub in the Caesalpinioideae sub-family of the legume family, Fabaceae. It is widely cultivated for its edible fruit pods, and as an ornamental tree in gardens and landscapes. The carob tree is native to the Mediterranean region and the Middle East. Portugal is the largest producer of carob, followed by Italy and Morocco.",
    },
    {
        id:"ceibaSpeciosa",
        name:"Ceiba Speciosa",
        category:"Ceiba",
        description:"Ceiba speciosa, the floss silk tree, is a species of deciduous tree native to the tropical and subtropical forests of South America. It has several local common names, such as palo borracho (in Spanish literally 'drunken stick') or árbol del puente, samu'ũ (in Guarani) or paineira (in Brazilian Portuguese). In Bolivia, it is called toborochi, meaning 'tree of refuge' or 'sheltering tree'. It belongs to the same family as the baobab and the kapok. Another tree of the same genus, Ceiba chodatii, is often referred to by the same common names.",
    },
    {
        id:"cockspurCoralTree",
        name:"Cockspur Coral Tree",
        category:"Erythrina",
        description:"Erythrina crista-galli, often known as the cockspur coral tree, is a flowering tree in the family Fabaceae, native to Argentina, Uruguay, southern Brazil and Paraguay. It is widely planted as a street or garden tree in other countries, notably in California. It is known by several common names within South America: ceibo, seíbo (Spanish), corticeira (Portuguese) and the more ambiguous bucaré, to name a few. Its specific epithet crista-galli means cock's comb in Latin. The ceibo is the national tree of Argentina, and its flower the national flower of Argentina and Uruguay.",
    },
    {
        id:"lumaApiculata",
        name:"Luma Apiculata",
        category:"Luma",
        description:"Luma apiculata, the Chilean myrtle or temu, is a species of flowering plant in the myrtle family, native to the central Andes between Chile and Argentina, at 33 to 45° south latitude. Growing to 10–15 m (33–49 ft) tall and wide, it is a vigorous, bushy, evergreen tree with fragrant flowers",
    },
];

export const CATEGORIES = [
    {
        id:"citrus",
        name:"Citrus",
    },
    {
        id:"prunus",
        name:"Prunus",
    },
    {
        id:"myrtaceae",
        name:"Myrtaceae",
    },
    {
        id:"pinus",
        name:"Pinus",
    },
    {
        id:"jacaranda",
        name:"Jacaranda",
    },
    {
        id:"ceratonia",
        name:"Ceratonia",
    },
    {
        id:"ceiba",
        name:"Ceiba",
    },
    {
        id:"erythrina",
        name:"Erythrina",
    },
    {
        id:"luma",
        name:"Luma",
    },
];