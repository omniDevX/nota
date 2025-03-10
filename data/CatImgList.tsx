// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", title: "Stunning", shorttitle: "Stunning", cover: genJpg5("abcat/stunning")[0] },
    { id: "abycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genJpgList("abcat/ycc/yc", 5)[0] },
    { id: "absyz", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genJpgList("abcat/syz/sc", 5)[0] },
    { id: "absuren", title: "Girl Next Door \n shirouto素人しろうと", shorttitle: "Girl Next Door", cover: genJpgList("abcat/suren/sc", 5)[0] },
    { id: "igif", title: "GIF MP4", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abwxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genJpgList("abcat/wxy/wc", 5)[0] },
    { id: "abkele", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genJpgList("abcat/kele/kc", 5)[0] },
    { id: "abanran", title: "Anran 安然", shorttitle: "Anran", cover: genJpgList("abcat/anran/ac", 5)[0] },
    { id: "abzyx", title: "Carol 周妍希", shorttitle: "Carol周妍希", cover: genJpg5("abcat/zyx")[0] },
    { id: "abxlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genJpgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genJpgList("abcat/ccc/cc", 5)[0] },
    { id: "ablxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genJpgList("abcat/lxl/lc", 5)[0] },
    { id: "abcel", title: "Celebrities", shorttitle: "Celebrities", cover: genJpgList("abcat/cel/cc", 5)[0] },
    { id: "abholiday", title: "Holidays", shorttitle: "Holidays", cover: genJpgList("abcat/holiday/hc", 5)[0] },
    { id: "abspecialtaste", title: "Special Taste", shorttitle: "Special Taste", cover: genJpgList("abcat/special/sc", 5)[0] },
    { id: "absketch", title: "Sketch & Hand-drawing", shorttitle: "Sketch & Hand-drawing", cover: genJpgList("abcat/sketch/sc", 5)[0] },
    { id: "abmini", title: "Modern Minimalist", shorttitle: "Modern Minimalist", cover: genJpg5("abcat/mini")[0] },
    { id: "abss", title: "Signature Styles", shorttitle: "Signature Styles", cover: genJpg5("abcat/ss")[0] },
    { id: "abplaces", title: "Places", shorttitle: "Places", cover: genJpg5("abcat/places")[0] },
    { id: "abpast", title: "Past Year Collection", shorttitle: "past", cover: genJpg5("abcat/past")[0] },
];

export const Cat2Sub2Img: Cat2SubMap = {
    abycc: [
        { id: "cc1", title: "Daily Fresh & Hot Trends", folder: "stunning" },
        { id: "cc2", title: "Angelically Innocent", folder: "pure" },
        { id: "", title: "Girl Next Door", folder: "nextdoor", cover: genJpg5("abmini/nextdoor")[0] },
        { id: "cc3", title: "Sultry Spaghetti Straps", folder: "spaghetti" },
        { id: "cc4", title: "Elegant in Cheongsam", folder: "cheongsam" },
        { id: "cc5", title: "Bare & Beautiful & Strapless", folder: "strapless" },
        { id: "cc6", title: "Cozy & Seductive Moments in Bed", folder: "bed" },
        { id: "cc7", title: "Cozy & Seductive Moments in Bath", folder: "bath" },
        { id: "cc8", title: "Mystic in Blue", folder: "blue" },
        { id: "cc9", title: "Flirty Floral Charms", folder: "floral" },
        { id: "cc10",title: "Sensual in Glasses", folder: "glass"},
        { id: "cc11",title: "Enchanting in Green", folder: "green" },
        { id: "cc12", title: "Casual Chic in Demin", folder: "demin" },
        { id: "cc13", title: "Pretty in Pink", folder: "pink" },
        { id: "cc14", title: "Fantasy & Cosplay Queens", folder: "cos" },
        { id: "cc15", title: "Dazzling in Sequins", folder: "sparkling" },
        { id: "cc16", title: "Wedding", folder: "wedding" },
    ].map(item => ({
        ...item,
        ghname: "aidres8",
        cover:  genJpg5(`abycc/${item.folder}`)[0]   // Use `folder` for `cover`
    })),
    
    absyz: [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("absyz/stunning/st", 5)[0] },
        { id: "SYZBed", title: "Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("absyz/bbs/be", 5)[0] },
        { id: "SYZDeco", title: "Sublime Décolleté", count: "10", folder: "decollete", cover: genJpgList("absyz/decollete/de", 5)[0] },
        { id: "SYZFlo", title: "Flirty Floral Charms", count: "10", folder: "floral", cover: genJpgList("absyz/floral/fl", 5)[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", count: "10", folder: "lace", cover: genJpgList("absyz/lace/la", 5)[0] },
        { id: "SYZOne", title: "Fantasy & Queens", count: "10", folder: "oneshoulder", cover: genJpgList("absyz/oneshoulder/on", 5)[0] },
        { id: "SYZOff", title: "Chic at Work", count: "10", folder: "office", cover: genJpgList("absyz/office/of", 5)[0] },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", count: "10", folder: "spaghetti", cover: genJpgList("absyz/spaghetti/sp", 5)[0] },
        { id: "SYZStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("absyz/strapless/st", 5)[0] },
    ],



    abwxy: [
        { id: "wxyStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abwxy/stunning/st", 5)[0] },
        { id: "wxyBar", title: "Night Life", count: "10", folder: "bar", cover: genJpgList("abwxy/bar/ba", 5)[0] },
        { id: "wxyBed", title: "Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abwxy/bbs/be", 5)[0] },
        { id: "wxyChe", title: "Elegant in Cheongsam", count: "10", folder: "cheongsam", cover: genJpgList("abwxy/cheongsam/ch", 5)[0] },
        { id: "wxyCro", title: "Sassy in Croptops", count: "10", folder: "croptop", cover: genJpgList("abwxy/croptop/cr", 5)[0] },
        { id: "wxyDeco", title: "Sublime Décolleté", count: "10", folder: "decollete", cover: genJpgList("abwxy/decollete/de", 5)[0] },
        { id: "wxyFormal", title: "Enchanting in Business", count: "10", folder: "formal", cover: genJpgList("abwxy/formal/fo", 5)[0] },
        { id: "wxyHalt", title: "Allure en Halter", count: "10", folder: "haltertop", cover: genJpgList("abwxy/haltertop/ha", 5)[0] },
        { id: "wxyLace", title: "Timeless Grace in Silk & Lace", count: "10", folder: "lace", cover: genJpgList("abwxy/lace/la", 5)[0] },
        { id: "wxyNight", title: "Nocturne in New York", count: "10", folder: "nightnewyork", cover: genJpgList("abwxy/nightnewyork/ni", 5)[0] },
        { id: "wxyOff", title: "Chic at Work", count: "10", folder: "office", cover: genJpgList("abwxy/office/of", 5)[0] },
        { id: "wxyOut", title: "Breeze & Beyond", count: "10", folder: "outdoor", cover: genJpgList("abwxy/outdoor/ou", 5)[0] },
        { id: "wxyPants", title: "Chic in Motion", count: "10", folder: "pants", cover: genJpgList("abwxy/pants/pa", 5)[0] },
        { id: "wxySee", title: "Seethrough ...", count: "10", folder: "seethrough", cover: genJpgList("abwxy/seethrough/se", 5)[0] },
        { id: "wxySpa", title: "Sultry Spaghetti Straps", count: "40", folder: "spaghetti", cover: genJpgList("abwxy/spaghetti/sp", 5)[0] },
        { id: "wxyUni", title: "Mystic in Uniform", count: "10", folder: "uniform", cover: genJpgList("abwxy/uniform/un", 5)[0] },
    ],

    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "Briliant ...", count: "10", folder: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "Sultry", count: "10", folder: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ],

    abstunning: [
        { id: "abs1", title: "Top 10", folder: "top10", cover: genJpg5("abstunning/top10")[0] },
        { id: "abs3", title: "Top 20", folder: "top20", cover: genJpg5("abstunning/top20")[0] },
        { id: "abs2", title: "Bare & Beautiful", folder: "sultry", cover: genJpg5("abstunning/sultry")[0] },
        { id: "abs4", title: "Lovely", folder: "lovely", cover: genJpg5("abstunning/lovely")[0] },
    ],


    abkele: [
        { id: "kelBed", title: "Cozy & Seductive Moments", count: "40", folder: "bbs", cover: genJpgList("abkele/bbs/ba", 5)[0] },
        { id: "kelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", folder: "blacksilk", cover: genJpgList("abkele/blacksilk/bl", 5)[0] },
        { id: "kelChe", title: "Elegant in Cheongsam", count: "30", folder: "cheongsam", cover: genJpgList("abkele/cheongsam/ch", 5)[0] },
        { id: "kelFlo", title: "Flirty Floral Charms", count: "20", folder: "floral", cover: genJpgList("abkele/floral/fl", 5)[0] },
        { id: "kelHome", title: "Cozy Chic & Homely Elegance", count: "30", folder: "home", cover: genJpgList("abkele/home/ho", 5)[0] },
        { id: "kelLeg", title: "Bare & Beautiful Legs", count: "20", folder: "leg", cover: genJpgList("abkele/leg/le", 5)[0] },
        { id: "kelOff", title: "Chic at Work", count: "30", folder: "office", cover: genJpgList("abkele/office/of", 5)[0] },
        { id: "kelSofa", title: "Sofa Soft", count: "40", folder: "sofa", cover: genJpgList("abkele/sofa/so", 5)[0] },
        { id: "kelSpa", title: "Sultry Spaghetti Straps", count: "10", folder: "spaghetti", cover: genJpgList("abkele/spegatti/sp", 5)[0] },
        { id: "kelSto", title: "Silken Allure & Enchanting Legs", count: "20", folder: "stockings", cover: genJpgList("abkele/stockings/st", 5)[0] },
        { id: "kelStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abkele/stunning/st", 5)[0] },
    ],


    ablxl: [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", folder: "bedbathsofa", cover: genJpgList("ablxl/bedbathsofa/be", 5)[0] },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", folder: "cheongsam", cover: genJpgList("ablxl/cheongsam/ch", 5)[0] },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", folder: "deco", cover: genJpgList("ablxl/deco/de", 5)[0] },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", folder: "fishdress", cover: genJpgList("ablxl/fishdress/fi", 5)[0] },
        { id: "lxlOff", title: "Chic at Work", count: "10", folder: "office", cover: genJpgList("ablxl/office/of", 5)[0] },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", folder: "pencilskirt", cover: genJpgList("ablxl/pencilskirt/pe", 5)[0] },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", folder: "spaghetti", cover: genJpgList("ablxl/spaghetti/sp", 5)[0] },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("ablxl/strapless/st", 5)[0] },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", folder: "teacher", cover: genJpgList("ablxl/teacher/te", 5)[0] },
    ],

    abspecialtaste: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "as1", title: "Mask", folder: "mask", cover: genJpg5("abspecialtaste/mask", 5)[0] },
        { id: "as2", title: "Face", folder: "face", cover: genJpg5("abspecialtaste/face", 5)[0] },
        { id: "as3", title: "Back & Butt", folder: "backbutt", cover: genJpg5("abspecialtaste/backbutt", 5)[0] },
        { id: "speBack", title: "Elegance from Behind", folder: "back", cover: genJpgList("abspecialtaste/back/ba", 5)[0] },
        { id: "speButt", title: "Curves & Confidence", folder: "butt", cover: genJpgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "speFinger", title: "Graceful Fingertips", folder: "finger", cover: genJpgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "speLeg", title: "Poise in Every Step", folder: "legfeet", cover: genJpgList("abspecialtaste/legfeet/le", 5)[0] },
    ],

    abholiday: [
        { id: "holLuneryear", title: "Chinese New Year", folder: "luneryear", cover: genJpgList("abholiday/luneryear/lu", 5)[0] },
        { id: "holDeco", title: "Sublime Décolleté", folder: "deco", cover: genJpgList("abholiday/deco/de", 5)[0] },
        { id: "holWal", title: "Elegant Wallpaper", folder: "wallpaper", cover: genJpgList("abholiday/wallpaper/wa", 5)[0] },
    ],

    abanran: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "Silken Allure & Enchanting Legs", folder: "stockings", cover: genJpgList("abanran/stockings/st", 5)[0] },
        { id: "anrOff", title: "Chic at Work", folder: "office", cover: genJpgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", folder: "hotel", cover: genJpgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "Casual Chic in Denim", folder: "denims", cover: genJpgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "Enchanting in Class", folder: "classroom", cover: genJpgList("abanran/classroom/cl", 5)[0] },
        { id: "anr8k", title: "8K", folder: "k8", cover: genJpgList("abanran/k8/k8", 5)[0] },
    ],

    abcel: [
        { id: "cel1", title: "Dong Liya", folder: "dongliya", cover: genJpg5("abcel/dongliya", 5)[0] },
        { id: "cel2", title: "Jing Tian", folder: "jingtian", cover: genJpg5("abcel/jingtian", 5)[0] },
        { id: "cel3", title: "Annonymous", folder: "others", cover: genJpg5("abcel/others", 5)[0] },
        { id: "cel4", title: "Da Mi Mi", folder: "yangmi", cover: genJpg5("abcel/yangmi", 5)[0] },
        { id: "cel5", title: "Raincoat Zhang", folder: "zhangyuyi", cover: genJpg5("abcel/zhangyuyi", 5)[0] },
        { id: "cel6", title: "Liu Yan", folder: "liuyan", cover: genJpg5("abcel/liuyan")[0] },
        { id: "cel7", title: "Yang Mi", folder: "yangmi", cover: genJpg5("abcel/yangmi")[0] },
        { id: "cel8", title: "Du Xiaoyu", folder: "duxiaoyu", cover: genJpg5("abcel/duxiaoyu")[0] },
    ],

    igif: [
        { id: "sc1", title: "GIF", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ],

    absketch: [
        { id: "sc1", title: "Sketch", folder: "sketch", cover: genJpgList("absketch/sketch/sk", 5)[0] },
    ],

    abxlz: [
        { id: "xlzBed", title: "Cozy & Seductive Moments", folder: "bbs", cover: genJpgList("abxlz/bbs/be", 5)[0] },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", folder: "home", cover: genJpgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "Chic at Work", folder: "office", cover: genJpgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "Breeze & Beyond", folder: "outdoor", cover: genJpgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "Seethrough ...", folder: "seethrough", cover: genJpgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", folder: "spaghetti", cover: genJpgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", folder: "stockings", cover: genJpgList("abxlz/stockings/st", 5)[0] },
        { id: "xlzWed", title: "Angelically Innocent", folder: "weddings", cover: genJpgList("abxlz/weddings/we", 5)[0] },
    ],

    absuren: [
        { id: "surOff", title: "Stunning", folder: "stunning", cover: genJpg5("absuren/stunning")[0] },
        { id: "surPure", title: "Angelically Innocent", folder: "pure", cover: genJpg5("absuren/pure")[0] },
        { id: "surFlo", title: "Flirty Socialite", folder: "socialite", cover: genJpg5("absuren/socialite")[0] },
        { id: "surChu", title: "Fantasy & Queens", folder: "chubby", cover: genJpg5("absuren/chubby")[0] },
        { id: "surDog", title: "Friend Forever", folder: "dog", cover: genJpg5("absuren/dog")[0] },
        { id: "surDeco", title: "Middle Age", folder: "mid", cover: genJpg5("absuren/mid")[0] },
        { id: "surDot", title: "Next Door Girls", folder: "nextdoor", cover: genJpg5("absuren/nextdoor")[0] },
        { id: "surFace", title: "Somebody 1", folder: "sb1", cover: genJpg5("absuren/sb1")[0] },
        { id: "surFace3", title: "Somebody 2", folder: "sb2", cover: genJpg5("absuren/sb2")[0] },
        { id: "surFace2", title: "Somebody 3", folder: "sb9", cover: genJpg5("absuren/sb9")[0] },
        { id: "ire1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("absuren/bakunyuu")[0] },

    ],

    abmini: [
        { id: "ire1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("abmini/bakunyuu")[0] },
        { id: "ire2", title: "Deco", folder: "deco", cover: genJpg5("abmini/deco")[0] },
        { id: "ire3", title: "Bodycon", folder: "bodycon", cover: genJpg5("abmini/bodycon")[0] },
        { id: "ire8", title: "Halter Top", folder: "haltertop", cover: genJpg5("abmini/haltertop")[0] },
        { id: "ire4", title: "Girl Next Door", folder: "nextdoor", cover: genJpg5("abmini/nextdoor")[0] },
        { id: "ire5", title: "Spaghetti", folder: "spaghetti", cover: genJpg5("abmini/spaghetti")[0] },
        { id: "ire6", title: "Strapless", folder: "strapless", cover: genJpg5("abmini/strapless")[0] },
        { id: "ire7", title: "Suite", folder: "suite", cover: genJpg5("abmini/suite")[0] },
        { id: "ire17", title: "Sweater", folder: "sweater", cover: genJpg5("abmini/sweater")[0] },
        { id: "ire27", title: "White Shirt", folder: "whiteshirt", cover: genJpg5("abmini/whiteshirt")[0] },
    ],

    abss: [
        { id: "flo1", title: "black heart", folder: "heart", cover: genJpg5("abss/heart")[0] },
        { id: "flo2", title: "high-neck halter", folder: "highneckhalter", cover: genJpg5("abss/highneckhalter")[0] },
        { id: "flo3", title: "Leopard", folder: "leopard", cover: genJpg5("abss/leopard")[0] },
        { id: "flo4", title: "turtle neck", folder: "turtleneck", cover: genJpg5("abss/turtleneck")[0] },
        { id: "fl5", title: "Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abss/cheongsam")[0] },
    ],

    abplaces: [
        { id: "sch1", title: "School", folder: "school", cover: genJpg5("abplaces/school")[0] },
        { id: "sch2", title: "Office", folder: "office", cover: genJpg5("abplaces/office")[0] },
        { id: "sch3", title: "Home", folder: "home", cover: genJpg5("abplaces/home")[0] },
        { id: "sch4", title: "Night", folder: "night", cover: genJpg5("abplaces/night")[0] },
    ],

    abpast: [
        { id: "sch1", title: "2024", folder: "2024", cover: genJpg5("abpast/2024")[0] },
        { id: "sch2", title: "2023", folder: "2023", cover: genJpg5("abpast/2023")[0] },
        { id: "sch3", title: "2022", folder: "2022", cover: genJpg5("abpast/2022")[0] },
        { id: "sch4", title: "2021", folder: "2021", cover: genJpg5("abpast/2021")[0] },
        { id: "sch41", title: "2020", folder: "2020", cover: genJpg5("abpast/2020")[0] },
        { id: "sch42", title: "2019", folder: "2019", cover: genJpg5("abpast/2019")[0] },
        { id: "sch43", title: "2018", folder: "2018", cover: genJpg5("abpast/2018")[0] },
        { id: "sch47", title: "2017", folder: "2017", cover: genJpg5("abpast/2017")[0] },
        { id: "sch46", title: "2016", folder: "2016", cover: genJpg5("abpast/2016")[0] },
        { id: "sch45", title: "2015", folder: "2015", cover: genJpg5("abpast/2015")[0] },
    ],

    abzyx: [
        { id: "az2", title: "bodycon", folder: "bodycon", cover: genJpg5("abzyx/bodycon")[0] },
        { id: "az3", title: "Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abzyx/cheongsam")[0] },
        { id: "wxyHalt", title: "Allure en Halter", folder: "haltertop", cover: genJpg5("abzyx/haltertop")[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abzyx/lace")[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", folder: "spa", cover: genJpg5("abzyx/spa")[0] },


    ],
};
