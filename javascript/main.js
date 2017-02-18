
var App = {};
// ready 
$(document).ready(init);



function init() {
    var shape = document.getElementsByTagName("svg")[0];
    var w = $(window).width();
    var h = $(window).height()
    var str = w + " " + h;
    shape.setAttribute("width", w);
    shape.setAttribute("height", h);
    shape.setAttribute("viewBox", "0 0 " + str);
    App.modal = document.getElementById('myModal');
    App.statedata = $("#statedata");
    App.mheader =$("#mheader")
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        App.modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == App.modal) {
            App.modal.style.display = "none";
        }
    }
    $(document).on("click", ".land", landClick);

}


// events
function landClick() {
    var _this = $(this);
    App.mheader.text(_this.attr("title"));
    getDetails(_this.attr("id"));
    showModal();
}
function showModal() {
    App.modal.style.display = "block";
}
App.data = {
    "VJAN": "Andaman and Nicobar Islands",
    "VJAP": "Ugadi is the most exclusive festival known to this state. Being the harbinger of a new year, people harmonize Panchanga recitals which is known by the process of Panchanga Shravanam. The festival imbibes a special vibe of unity for all the residents of the state",
    "VJAR": "Losar Festival is one of the most exquisite festivals celebrated in this hearty state. Celebrated annually, the festival brings a perfect fusion of dance, music, serenity and celebrations",
    "VJAS": "Bihu, also a dance form is a festival that is most common in the midst of this out modern state. The festival involves dance, music and mind boggling scenarios. It brings about the dawn of a new and exciting year",
    "VJBR": "Chhath, most commonly celebrated across the Northern India is a big celebration which is brought about twice a year wherein it is celebrated as an arduous observance requiring the worshippers to fast without water for more than 24 hours",
    "VJCH": "Maghi Purnima is the flagship festival of this state which encompasses the birth anniversary of Guru Ghasidas.  The dancers dance around a jaitkhamb set up for the occasion, with songs eulogizing their spiritual head.",
    "VJCT": "Maghi Purnima is the flagship festival of this state which encompasses the birth anniversary of Guru Ghasidas.  The dancers dance around a jaitkhamb set up for the occasion, with songs eulogizing their spiritual head.",
    "VJDD": "Daman and Diu",
    "VJDL": "Delhi",
    "VJDN": "Dadra and Nagar Haveli",
    "VJGA": "Shigmo Mel, a counterpart of the festival of colours Holi, is a celebration that incorporates spring celebrations bringing about unity in diversity within this small and extra modern state.",
    "VJGJ": "The state is known to have a heart full of festivals but on of the most magnificent ones is Navaratra which involves nine days of exasperating dandiya dance all throughout the night following which the festival of Dusshera comes into the calendar.",
    "VJHP": "Its one of a kind festival is the Gochi Festival which originated from the Bhaga Valley. In this festival the villagers celebrate the birth of male children. Token marriages of children below the age of six are also performed. Some children also throw snow balls at each other.",
    "VJHR": "This state has a very unique festival by the name of Gugga Naumi which is a religious festival, in connection with snake-worship. It is observed in the months of August-September.",
    "VJJH": "The most exciting festival in this state is the Karam Festival which holds a very important place in people’s social and religious lives. It is usually celebrated 15 days after the Kunwaar-Shukl-Paksh. People buy new clothes, lighten up their homes and prepare exclusive dishes for one another.",
    "VJJK": "One of the most authentic biannual festivals of Jammu and Kashmir is the Bahu Mela which is a major festival, held at the Kali Temple in Bahu Fort, twice a year in the month of March-April and September-October.",
    "VJKA": "The marked festival of this state is the Mysore Dasara which attracts people from all around the state to the temples of Mysore. It involves a heart full of activities ranging from dance, music and serene architecture on display.",
    "VJKL": "The iconic festival of Onam is the flagship festival of Kerala.",
    "VJLD": "Lakshadweep",
    "VJMH": "Ganesh Chaturthi, the most marvellous festival ever seen is this one wherein people bring in idols of Lord Ganesha to their homes and they are kept for 7 days as a symbolic harbinger of peace, success and harmony.",
    "VJML": "The flagship festival of this state is a dance festival called Khasis. Dances are magnificently presented in the village of Shnong, a Raid (group of villages), and a Hima (conglomeration of Raids).",
    "VJMN": "Yaoshang, one of the most exclusive festivals of this hearty state comes to live in November wherein people celebrate a saga of activities for 5 days",
    "VJMP": "Lokrang festival is one of the most iconic dance festivals of MP which signifies the existing legacy of it’s dance. It is a cultural exposition organised by Madhya Pradesh Adivasi Lok Kala Academy and encompasses many dance celebrations.",
    "VJMZ": "This state goes about many mind boggling festivals in one go but one of the most serene ones is Chapchar Kut which is particularly a heritage celebration festival. People prepare many exotic dishes and consequently take part in a community dance to celebrate their rich culture.",
    "VJNL": "The whopping number of tribes in this area have many different individual festivals but the most famous one is Sekrenyi celebrated by the Angami Tribe. It is also associated with celebrating the rich culture of the tribes that has lasted for many a moon.",
    "VJOR": "Dola Yatra is the notable festival of this state which triggers the construction of the oriya calendar and it’s consequent presentation to their deity Jagannath who also carries another name of DolaGovinda.",
    "VJPB": "The most commonly known festival of this state is the Bandi Chhor Divas which is a sikh festival and celebrates the release of Guru Hargobind Ji, the sixth Guru from a prison along with 52 other princes.",
    "VJPY": "Puducherry",
    "VJRJ": "The heartiest flagship festival of this state is Gangaur which is very beautifully celebrated across the state with utmost joy and a heart full of magnificence. The festival encompasses worship of Goddess Gauri and consequent celebrations of the harvest",
    "VJSK": "Losar, the most serene and harmonious festival of Tibetans is celebrated across the native lands of Sikkim on the dawn of the new Tibetan year. The festival brings about a great deal of cuisines, dance and music which exhibits the rich culture of this area.",
    "VJTG": "Although it has recently stood up to it’s feet, Telangana has also bifurcated some special festivals for it. Bathukamma is one of the most special festivals of Telangana which involves worship of goddess Gauri and consequent celebrations.",
    "VJTN": "Pongal, or the local Makar Sakranti of this state is a really exquisite festival wherein people burn up their old belongings, give offerings to cattle and consequently celebrate the dusk of the harvest season.",
    "VJTR": "Kharchi Puja is the festival which is the pride of the residents of Tripura. The festival involves a unique theme of worshiping the earth for providing it’s extraordinary qualities. It ends up with sacrifices of cattle to the Earth God.",
    "VJUP": "Ram Navmi is the festival which originally evolved from the state of UP. The festival marks the birth anniversary of God Rama and is celebrated with worship of girls and other females of the society",
    "VJUT": "Before the coming of the most exotic Kumbh Mela, Uttarakhand organises the Purna Kumbh Mela at the holy city of Haridwar. Purna Kumbh Mela is a celebration saga and involves a bunch of musical and dance affairs.",
    "VJWB": " Durga Puja is the most serene festival of this state which runs parallel to the 9 days of Navratra. Goddess Durga is praised with great soul and zeal all around the state and consequent dance/music celebrations make their way"
}
function getDetails(id) {
    if (App.data[id]) {
        App.statedata.text(App.data[id]);
    }
}