class Game {
    constructor(canvas) {
        const canvasElement = document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);
        this.mathHelper = new MathHelper;
        this.question = new Question;
        this.player = new Player;
        this.highscore = new Highscore;
        this.introText = new IntroText;
        ScreenSwitch.makeScreens(canvas);
        PlayerHandler.makePlayer();
    }
    draw() {
        ScreenSwitch.draw('startScreen');
    }
    gameLoop() {
        this.draw();
    }
}
window.addEventListener("load", init);
function init() {
    const spelletje = new Game(document.getElementById('canvas'));
    spelletje.gameLoop();
}
class Mapview {
    constructor(canvas) {
        this.canvas = new Canvas(canvas);
    }
}
class Highscore {
}
class IntroText {
    constructor() {
        this.intro = [
            {
                intro1: 'Nederland, het land van de klompen, windmolens  en de tulpen.',
                intro2: 'In Nederland wordt al sinds 400 na Christus kaas gemaakt.',
                intro3: 'De Nederlandse KLM is de oudste nationale luchtmaatschappij ter wereld.',
                intro4: 'De VOC (Verenigde Oost-Indische Compagnie) werd in 1602 opgericht en was het eerste echte bedrijf ter wereld.',
                intro5: '70% van bacon in de wereld komt uit Nederland.',
                intro6: 'Oranje is de officiële kleur van Nederland als gevolg van het Huis van Oranje.'
            },
            {
                intro1: 'België, het land van de chocolade.',
                intro2: 'Het is een van de grootste chocolademakers ter wereld,',
                intro3: 'België produceert al 400 jaar chocolade en er word jaarlijks meer dan 173.000.000 kg geproduceerd',
                intro4: 'Antwerpen is de diamant hoofdstad van de wereld, ',
                intro5: 'ongeveer 80 procent van de ongeslepen en 50 procent van de geslepen diamanten worden hier verhandeld.',
                intro6: 'De 3 bekendste Belgische stripfiguren zijn Kuifje, de smurfen en Lucky Luke.'
            },
            {
                intro1: 'Luxemburg, het oudste land van de UNESCO Werelderfgoedsite.',
                intro2: 'Het motto van Luxemburg is “Mir wëlle bleiwe wat mir sin”, wat “We willen blijven wat we zijn” betekend.',
                intro3: 'De naam van Luxemburg komt van Lucinlinburhuc',
                intro4: 'Lucinlinburhuc is een kasteel dat in 963 door Siegfried, graaf van de Ardennen, aangekocht werd.',
                intro5: 'Een van de meest indrukwekkende bezienswaardigheden zijn de Bockkazematten,',
                intro6: 'een ondergronds tunnelnetwerk van 21 kilometer lang. De Rooms-Katholieke godsdienst is dominant in het land.'
            },
            {
                intro1: 'Frankrijk, het land van de stokbroden, kunst en de wijn.',
                intro2: 'De bekendste bouwwerken zijn: de Eifeltoren, Art de Triomphe en het Louvre.',
                intro3: 'Elk jaar worden er in Frankrijk ongeveer 10 miljard stokbroden verkocht',
                intro4: 'en er worden 1.200 verschillende kazen geproduceerd.',
                intro5: 'De Eifeltoren is als 125 jaar hét symbool van Parijs en één van de meest gefotografeerde objecten op aarde.',
                intro6: 'De koksmuts is uitgevonden in Frankrijk.'
            },
            {
                intro1: 'Spanje, het land van stier-vechten, tapas en sangría.',
                intro2: 'In Spanje houden de mensen ’s middags siësta (ofwel een dutje), vooral in de warme zomermaanden.',
                intro3: 'Spaans is de tweede wereldtaal, ruim 500 miljoen mensen over de hele wereld spreken Spaans.',
                intro4: 'Spanjaarden luiden het nieuwe jaar in door om klokslag 12 uur een drijf te eten.',
                intro5: 'Een traditie die de wijnbouwers bedachten om zo van hun overtollige drijven af te komen.',
                intro6: 'Spanje is het enige Europese land waar bananen groeien.',
            },
            {
                intro1: 'Portugal, het land van protwijn en de schitterende natuur.',
                intro2: 'Het is één van de oudste landen ter wereld.',
                intro3: 'Eén van de oudste universiteit van Europa staat in Portugal.',
                intro4: 'Portugal was helemaal niet betrokken in de Tweede Wereldoorlog.',
                intro5: 'De Portugese stad Sāo Paulo is de stad met de meest Portugees sprekende inwoners ter wereld.',
                intro6: 'Portugal is de zesde meest gesproken taal ter wereld.',
            },
            {
                intro1: 'Italië, het land van de pasta en de pizza, Ook werd in Italië de Opera bedacht.',
                intro2: 'De pizza werd in Italië uitgevonden door Napels in de 19de eeuw en de het nationale gerecht van Italië is pasta.',
                intro3: 'Er zijn 3 grote actieve vulkanen in Italië: Vesuvius, Etna en Stromboli.',
                intro4: 'De nationale bloem van Italië is de lelie en de nationale volgen is de blauwe lijster.',
                intro5: 'Italië maakt al erg lang wijnen, al zo’n 2.800 jaar.',
                intro6: 'De langste rivier in Italië is de Po met 652 kilometer.',
            },
            {
                intro1: 'Zwitserland, het land van de natuur, bergen, dalen en meren.',
                intro2: 'Stel er breekt een nucleaire oorlog uit dan is Zwitserland daar standaard klaar voor,',
                intro3: 'ze hebben bunkers waar 100% van de bevolking in past.',
                intro4: 'In Zwitserland is het illegaal om 1 cavia te hebben, je moet er volgens de wet minstens 2 hebben.',
                intro5: 'Albert Einstein heeft de beroemde formule E=MC2 in Zwitserland uitgevonden.',
                intro6: 'Bizarre uitvindingen: chocolademelk, aardappelschilmesje, muesli, Absinthe, LDS en zwitsers zakmes.',
            },
            {
                intro1: 'Duitsland, het land van auto’s, bier en bradwurst.',
                intro2: 'In Duitsland zijn zo’n 1.250 brouwerijen.',
                intro3: 'Ook heeft Duitsland het grootste bevolkingsaantal in Europa, met 82 miljoen inwoners.',
                intro4: 'Duitsland is ook een van de grootste autoproducenten ter wereld.',
                intro5: 'De meest bekende Duitse merken zijn BMW, Mercedes-Benz, Audi, Porsche en Volkswagen.',
                intro6: '1/3 van Duitsland is bedekt door bossen.',
            },
            {
                intro1: 'Oostenrijk, het land van dranken en Skiën.',
                intro2: 'Als wintersportland is Oostenrijk al jarenlang het meest populair.',
                intro3: 'Je mag in Oostenrijk ook bijna overal een nacht wildkamperen.',
                intro4: 'Een erg bekend gerecht in Oostenrijk is de Wiener Schnitzel.',
                intro5: 'De hoogste berg in Oostenrijk is 3798 m hoog.',
                intro6: 'Oostenrijk is 2x zo groot als Nederland, maar heeft maar de helft van het aantal inwoners.',
            },
            {
                intro1: 'Polen, het land van de sterke drank.',
                intro2: 'De witte adelaar is het nationale symbool van Polen.',
                intro3: 'De meeste winnaars van de “Sterkste mannen van de wereld” word geschept door de Polen.',
                intro4: 'De Poolse mensen hebben de grootste boerderij in de Europese Unie.',
                intro5: 'Sinds 2006 is Polen een van de weinige landen in Europa waar rock en hiphop domineren over popmuziek.',
                intro6: 'De Poolse keuken is beïnvloed door de keukens van de omringende landen.',
            },
            {
                intro1: 'Noorwegen, het land van de natuurlandschappen.',
                intro2: 'Waar je in Noorwegen ook is, water uit de kraan is altijd gratis verkrijgbaar.',
                intro3: 'De kaasschaaf is uitgevonden in Noorwegen.',
                intro4: 'In de winter word het hier soms geen licht overdag, maar dan kun je s’ avonds wel het Noorderlicht zien.',
                intro5: 'Ook heb je midnight sun: een zonsondergang waarbij de zon nooit ondergaat.',
                intro6: 'In Noorwegen mag je ook bijna overal wild kamperen.',
            },
            {
                intro1: 'Zweden, het land van Pippi Langkous, IKEA, Volvo en ABBA.',
                intro2: 'Net als in Nederland wordt er ook in Zweden veel waarde gehecht aan sociale voorzieningen.',
                intro3: 'Elke vrijdagavond is taco-dag in Zweden.',
                intro4: 'Ze zien boterhammen niet als lunch, maar als tussendoortje.',
                intro5: 'In de winter gaan ze over naar winterbanden voor de auto EN voor de fiets.',
                intro6: 'Het model van de Zweedse vlag ( ontwerpen in de 16e eeuw) is waarschijnlijk afgeleid van de Deense vlag.',
            },
            {
                intro1: 'Finland, het land van de Sauna’s.',
                intro2: 'Het word ook wel ‘het land van de duizend meren’ genoemd, want er zijn maar liefst 187.888 meren.',
                intro3: 'Dit was ook het eerste land in Europa dat vrouwen stemrecht gaf.',
                intro4: 'Finland bied als enkele van ’s werelds beste mogelijkheden voor “Freedom to Roam”,',
                intro5: 'dit betekend  dat je kunt slapen, zwemmen, varen, vissen, kamperen of op zoektocht kun gaan waar je wilt.',
                intro6: 'In Finland zijn ze ook gek op de tango!',
            },
            {
                intro1: 'Estland, het land van hartige pannenkoeken en peperwodka.',
                intro2: 'In Estland is een ‘overschot’ aan vrouwen, voor elke 100 vrouwen zijn er 82 mannen.',
                intro3: 'Estland heeft meer dan 2000 eiland(jes), waarvan een overgrote deel onbewoond is.',
                intro4: 'Ook is er erg weinig hoogte verschil, het hoogste punt ligt op 300 meter.',
                intro5: 'Er is ook veel bos, wel 52% van het land is er mee bedekt.',
                intro6: 'Estland is één van de meest moderne landen uit de regio, de scholen hebben zonder uitzondering wifi.',
            },
            {
                intro1: 'Letland, een van de Balkische landen.',
                intro2: 'Het land kent over het algemeen droge, warme zomers.',
                intro3: 'Het voorjaar en het najaar zijn onvoorspelbaar, zon en regen wisselen elkaar af.',
                intro4: 'In de winter ligt er in grote delen van Letland sneeuw',
                intro5: 'De voornaamste producten die van hier naar Nederland worden geëxporteerd zijn aardolieproducten, hout en textiel',
                intro6: 'en Nederland exporteert chemicaliën, transportmaterieel en voedingsmiddelen naar Letland.',
            },
            {
                intro1: 'Litouwen, een land van de meest zuidelijk gelegen Baltische staat.',
                intro2: 'Trouwfeesten in Litouwen duren hier 2 tot 5 dagen.',
                intro3: 'Ze geloven dat als je weddingwodka dring, dat je binnen een jaar zal trouwen.',
                intro4: 'Litouwen is een heel groen land en is ongeveer voor 1/3 bebost.',
                intro5: 'Litouwen ligt in het geografische middelpunt van Europa.',
                intro6: 'Het volkslied van Litouwen heet Tautiska Giesme (Litouwen, Land van Helden).',
            },
            {
                intro1: 'Tsjechië, het land van … ',
                intro2: 'De Praagse Burcht staat in het Guinness Book of World Records als het grootste kasteel ter wereld,',
                intro3: 'het kasteel heeft een oppervlak van wel 70.000m2.',
                intro4: 'Tsjechië is pas sinds 1993 een zelfstandig land.',
                intro5: 'In Tsjechië zijn er geen fietspaden, als je wilt fietsen moet je op de autoweg.',
                intro6: 'Twaalf locaties in Tsjechië staan op de Werelderfgoedlijst van UNESCO.',
            },
            {
                intro1: 'Denemarken, het land van de Vikingen',
                intro2: 'eeuwen geleden was het één van de machtigste landen ter wereld, door de Vikingen.',
                intro3: 'Het klimaat in Denemarken kan worden vergeleken met het klimaat in Nederland.',
                intro4: 'Denemarken is omringd door water en heeft een kustlijn van maar liefst 7000 km.',
                intro5: 'Het brood wordt niet standaard gesneden, maar je kunt hier wel om vragen.',
                intro6: 'ongesneden brood krijg je hier in een papieren zak en gesneden brood in een plastiek zak.',
            },
            {
                intro1: 'Engeland, het land van thee.',
                intro2: 'De Londen Eye is even lang als vier voetbalvelde, Ook staat het hoogste gebouw van de EU in Londen.',
                intro3: 'Londen is een erg grote stad, maar alsnog is 40% groen.',
                intro4: 'Er worden in Engeland meer dan 300 talen gesproken.',
                intro5: 'Engels is niet de meest gesproken taal ter wereld, maar wel een van de vrolijkste talen.',
                intro6: 'Van de hele Engelse taal is 12% de letter ‘E’',
            },
            {
                intro1: 'Ierland, het land met als nationale symbool een Keltische harp.',
                intro2: 'Officieel komt Halloween uit Ierland als een Keltische traditie: Samhain.',
                intro3: 'De Ierse taal is een van de oudste levende talen.',
                intro4: 'De gemiddelde Ier drinkt rond de 155 liter bier per jaar.',
                intro5: 'Ook heeft Ierland al 7 keer het Eurovisie Songfestival gewonnen.',
                intro6: 'In de jaren 70 werd Baileys gelanceerd en nu is het een van de populairste sterke dranken ter wereld.',
            },
            {
                intro1: 'IJsland, het land van natuur.',
                intro2: 'De IJslandse vrouwen nemen niet de naam van de man over als ze trouwen.',
                intro3: 'Het land telt ongeveer 270.000 inwoners in het land.',
                intro4: 'IJsland heeft werelds oudste democratie, het parlement bestaat al sinds ongeveer 1000 jaar.',
                intro5: 'Ook heeft IJsland een enorme hoeveelheden water en het regent er heel veel.',
                intro6: 'het water is zo schoon en zuiver zodat het zonder behandeling uit de kraan kan komen.',
            },
            {
                intro1: 'Rusland, het land van literatuur, klassieke muziek en ballet.',
                intro2: 'De oppervlakte van Rusland is even groot als de oppervlakte van Pluto.',
                intro3: 'Met de Russische gasreserve kun je ongeveer 31,2 Olympische zwembaden vullen ',
                intro4: 'Als je alle pijpleidingen van Rusland aan elkaar zou leggen zou je 6 keer rond de aarde kunnen.',
                intro5: 'Rusland bestaat uit 9 tijdzones.',
                intro6: '1/5 van ’s werelds vers water word bezit door Rusland.',
            },
            {
                intro1: 'Oekraïne, het land van het levensmotto: ‘pluk de dag’.',
                intro2: 'Het Oekraïense alfabet heeft vier letters die in het Russische alfabet niet voorkomen, ',
                intro3: 'en het Russische alfabet heeft weer vier letters die het Oekraïense alfabet niet heeft.',
                intro4: 'Oekraïne is de trotse houder van het wereldrecord langste plantenbak',
                intro5: 'De bak is 2847,49 meter lang en was volgebouwd met 80.693 bloemen en planten.',
                intro6: 'De McDonalds op het Vokzalna-plein is Kiev is een van de drukst bezochte McDonalds-vestigingen ter wereld'
            },
            {
                intro1: 'Moldavië, het land is rijk aan cultureel erfgoed: gekenmerkt door de vele kerken en kloosters uit de 15de eeuw.',
                intro2: 'Ook is Moldavië bekend om haar goede wijnen en er worden daarom ook veel wijntours aangeboden aan de toeristen.',
                intro3: 'Het merendeel van de wijnproductie is gemaakt voor export.',
                intro4: 'Door de rijke bodem en het gematigde klimaat, heeft het land veel productieve langbouwgebieden.',
                intro5: 'Wat ook opvallend is is dat veel gezinnen hun eigen recepten hebben die op generaties word doorgegeven.',
                intro6: '',
            },
            {
                intro1: 'Roemenië, het land van Dracula.',
                intro2: 'één van de 2 grootste ondergrondse gletsjers van Europa is gevestigd in Roemenië',
                intro3: 'Onder Salina Turda is een ondergronds pretpark gevestigd in één van de oude mijnen.',
                intro4: 'Het zwaarste gebouw ter wereld staat ook in Roemenië, hier hebben ze ook een wereldrecord voor.',
                intro5: 'Ook telt Roemenië 7 UNESCO op de Werelderfgoed site.',
                intro6: 'De meest voorkomende grondstof in Roemenië is zout.',
            },
            {
                intro1: 'Slowakije, het land van de bergen.',
                intro2: 'De berg, Kriváň, heeft een symbolische betekenis in Slowakije',
                intro3: 'deze berg staat, mede door zijn bijzondere vorm, als nationaal symbool op de Slowaakse euromunten van 2009 staat.',
                intro4: 'Slowakije is een bergachtig land waar je heel goed terecht kunt voor de wintersport.',
                intro5: 'In het Slowaaks Ertsgebergte ligt een nationaal park wat in het Slowaaks ‘Slovenský kras’ heet',
                intro6: 'dit gebied kenmerkt zich met ongeveer 4450 kalksteengrotten waarvan enkele geopend zijn voor publiek.',
            },
            {
                intro1: 'Hongarije, het land van lange historie van bevolkingsgroepen, gebouwen en gebieden.',
                intro2: 'De hoofdstad van Budapest en heeft 2 miljoen inwoners.',
                intro3: 'Het land werd van 1945 tot 1989 overheerst door de Sovjet-Unie.',
                intro4: 'De Belangrijkste industrieen zijn: Deltstoffen(ijzererts, steenkool, bruinkool, bauxiet, mangaan, kopererts),',
                intro5: 'landbouw, akkerbouw (tarwe, maïs, rijst, suikerbieten, paprika’s, fruit), bouw, textiel, chemische industrie en auto’s.',
                intro6: 'De belangrijkste handelspartners zijn: Duitsland, Oostenrijk, Italië en Rusland',
            },
            {
                intro1: 'Kroatië, het land van prachtige stranden, natuurparken en de flora & fauna.',
                intro2: 'Het meest beroemde strand van Kroatië is Zlatni Rat,',
                intro3: 'dit komt omdat het constant van vorm veranderd door stroming, golven en windrichting.',
                intro4: 'Op het schiereiland Istria vind je Hum, het kleinste stadje ter wereld en telt maar 2 straten, 12 huizen en 27 inwoners.',
                intro5: 'In de stad Zadar is ’s werelds eerste orgel dat bespeelt wordt door het water',
                intro6: 'afhankelijk van de kracht van de golven worden er verschillende tonen gespeeld. ',
            },
            {
                intro1: 'Bosnië, het land van de flora en fauna.',
                intro2: 'Archeologen hebben bewijs gevonden dat er al sinds circa 200.000 jaar geleden in deze streken mensen leefden',
                intro3: 'Deze mensen leefden in het Paleolighicum( de oude steentijd: de oudste periode in de voorgeschiedenis van de mens)',
                intro4: 'Deze mensen waren jagers en verzamelaars',
                intro5: 'Het klimaat van Bosnië heeft een continentaal klimaat met warme zomers en koude sneeuwrijke winters.',
                intro6: 'De flora en fauna is ook erg rijk: er zijn 3500 plantsoorten en zeer bosrijk en kent een rijk gevarieerd dierenleven.',
            },
            {
                intro1: 'Servië, het land van rivieren.',
                intro2: 'De langste en belangrijkste rivier in Servië is de Donau met 2850 km,',
                intro3: 'Hieraan ligt het bekende kloofdal “de IJzeren poort”.',
                intro4: 'Zo’n 85 jaar lang is Servië onderdeel geweest van Joegoslavië, maar sinds juni 2006 is het een onafhankelijke staat.',
                intro5: 'De meeste Servische achternaam eindigen met “ic”.',
                intro6: 'Servië heeft ongeveer 7 miljoen inwoners.',
            },
            {
                intro1: 'Montenegro, het land met de bijnaam: Parel van de Balken.',
                intro2: 'Er zijn veel verborgen baaitjes en kleine strandjes te vinden in Montenegro.',
                intro3: 'Dé hotspot van Montenegro is Kotor, dit is een oude havenstad.',
                intro4: 'Ook de oude stad wordt omringd door een vestingmuur.',
                intro5: 'De totale oppervlakte van Montenegro (14.000 km2) is slechts 1,5% water.',
                intro6: '',
            },
            {
                intro1: 'Slovenië, het enige land ter wereld met het woord LOVE in de naam.',
                intro2: 'De steensoort in de Postojna grot dateert uit de tijd van de dinosaurussen.',
                intro3: 'er bestaan in Slovenië ook munten van 3 euro.',
                intro4: 'Slovenië is na Zweden en Noorwegen het meeste beboste land.',
                intro5: 'Je kunt hier de helderste rivieren in Europa vinden en er zijn méér dan 8500 grotten.',
                intro6: 'Maar liefst 78% van het grondgebied van Slovenië ligt hoger dan 700 m.',
            },
            {
                intro1: 'Bulgarije, een van de oudste landen van Europa.',
                intro2: 'Het land Bulgarije is ontstaan in het jaar 681 en wordt nog steeds gezien als het hart van de Balkan.',
                intro3: 'Het Rilaklooster is een van de meest unieke bezienswaardigheden in Bulgarije.',
                intro4: 'Net als Nederland is Bulgarije ook een echt fietsland.',
                intro5: 'Ook zijn Bulgaren bijzonder bijgelovig,',
                intro6: 'ze zijn ervan overtuigd dat als je je handtas op de grond zet, dit onmiddellijk tot geldverlies leidt',
            },
            {
                intro1: 'Turkije, het land van kleurrijke tapijten.',
                intro2: 'Het woord ‘turquoise’ is afgeleid van het woord ‘Turk’ en verwijst naar de intens blauwe zee aan de kust van Turkije',
                intro3: 'Het woord ‘yoghurt’ komt uit het Turks (yoğurt). ',
                intro4: '2 van de 7 wereldwonderen liggen in Turkije: de Tempel van Artemis en het Halicarnassus Mausoleum.',
                intro5: 'Ook staat de eerste kerk ooit gebouwd is in de staat Hatay',
                intro6: 'de metro van Istanbul is de op één na oudste ter wereld, was in 1875 al in gebruik.',
            },
            {
                intro1: 'Macedonië, het land van de wijn.',
                intro2: 'De wijn uit Macedonië staat internationaal heel goed aangeschreven',
                intro3: 'De hoogste berg genaamd Korab van het land is 2763 meter.',
                intro4: 'Ondanks het feit dat Macedonië niet aan zee ligt heeft het toch een eiland',
                intro5: 'dit eiland ligt in het Prespameer.',
                intro6: 'Ook staan de Macedoniërs bekend als een zeer vriendelijk volk.',
            },
            {
                intro1: 'Albanië, het land van de vriendelijke volk.',
                intro2: 'als je hier nee schudt dan bedoel je eigenlijk ja, en andersom.',
                intro3: 'Net als de Macedoniërs staan de Albanezen bekend als een zeer vriendelijk volk.',
                intro4: 'Zelfs na de dood van Stalin bleef Albanië nog een stalinistisch land.',
                intro5: 'Op 28 november 1912 riep Albanië zijn onafhankelijkheid uit maar dat ging niet zonder slag of stoot.',
                intro6: '',
            },
            {
                intro1: 'Griekenland, het land van de vele eilanden.',
                intro2: 'Het exacte aantal eialnden is onbekend, dit aantal wordt geschat tussen de 1.200 en 6.000.',
                intro3: 'Het grootste eiland van Griekenland is Kreta, het eiland is 8.336 km2 groot en past ongeveer 5 keer in Nederland.',
                intro4: 'De officiële naam van Griekenland is de Helleense Republiek.',
                intro5: 'In Griekenland schilderen mensen deuren en ramen blauw, omdat ze geloven dat de kleur beschermt tegen het kwaad.',
                intro6: 'Er staan 120.000.000 olijfbomen in Griekenland.',
            },
        ];
    }
}
class Player {
    constructor() {
        this.player1 = {
            name: '',
            score: 0,
            hints: 0
        };
    }
}
class Question {
    constructor() {
    }
    getQuestion(index) {
        let quiz = [
            {
                introToQuestion: "Anne Frank is een Joods meisje.",
                introToQuestion2: " Ze is bekend geworden omdat ze een dagboek heeft geschreven over ",
                introToQuestion3: "de Tweede Wereld oorlog, toen ze ondergedoken was. Ze is gestorven aan uitputting ",
                introToQuestion4: "in het concentratiekamp Bergen-Belsen. Haar dagboek is na de oorlog",
                introToQuestion5: " gepubliceerd en is 1 van de meest gelezen boeken ter wereld.",
                question: " Waar staat het huis waar Anne Frank was ondergedoken?",
                answer: "Noord-Holland"
            },
            {
                introToQuestion: "De hunebedden zijn de bekendste archeologische monumenten in Nederland.",
                introToQuestion2: "Deze grafmonumenten werden gebouwd door de trechterbekercultuur.",
                introToQuestion3: "De hunebedden zijn gemaakt tussen circa 3.400 en 3.050 voor Christus.",
                introToQuestion4: "Hunebedden zijn volgens de gangbare theorie resten van prehistorische grafkamers.",
                introToQuestion5: "",
                question: "Waar staan de bekendste hunebedden in Nederland?",
                answer: "Drenthe"
            },
            {
                introToQuestion: "De VOC staat voor de Verenigde Oostindische Compagnie en is opgericht in 1602.",
                introToQuestion2: "De VOC was het eerste bedrijf met vrij verhandelbare aandelen.",
                introToQuestion3: "De VOC wordt vaak genoemd als het",
                introToQuestion4: "eerste bedrijf dat in meerdere landen vestigingen had",
                introToQuestion5: "en richtte een handelsnetwerk op tussen de diverse handelsposten in de Aziatische regio.",
                question: "Waar is de VOC opgericht?",
                answer: "Noord-Holland"
            },
            {
                introToQuestion: "De Levalloistechniek hield in dat gewerkt werd met een voorbereide kernsteen ",
                introToQuestion2: "waarvan de zijnen waren afgeslagen. Met gerichte slagen werden",
                introToQuestion3: "er schilfers afgeslagen die als werktuig werden gebruikt.",
                introToQuestion4: "Het resultaat was een vlak stuk steen met aan alle zijden sherpe randen.",
                introToQuestion5: "",
                question: "Waar zijn de eerste stenen werktuigen gevonden?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De kerk werd vanaf 1254 gebouwd als voorzetting van de romaanse kathedraal",
                introToQuestion2: "van het rooms-katholieke bisdom en was gewijd aan Sint-Maarten.",
                introToQuestion3: "De Domtoren  is 112.32 meter hoog en is hiermee de hoogste kerktoren van Nederland.",
                introToQuestion4: "De naam ‘Dom’ komt van het Latijnse woord ‘Domus Dei’,",
                introToQuestion5: " dat betekent ‘Huis van god’ zo werd de kerk vroeger genoemd.",
                question: "Waar staat de Domtoren?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De Deltawerken zijn een verdedigingssysteem ter bescherming ",
                introToQuestion2: "tegen hoogwater van de zee. Er is decennia lang gebouwd aan de Deltawerken.",
                introToQuestion3: "Het Deltaplan was voor de Tweede Wereldoorlog bedacht,",
                introToQuestion4: "Na de Watersnoodramp van 1953 besloot",
                introToQuestion5: " de Nederlandse regering om dit plan sneller uit te voeren.",
                question: "In welke provincie staan de meeste Deltawerken? ",
                answer: "Zeeland"
            },
            {
                introToQuestion: "Willem van Oranje, ook wel de ‘Vader des vaderlands’,",
                introToQuestion2: "is geboren op 24 april 1533 op sol Dillenburg in Duitsland.",
                introToQuestion3: "Toen hij 11 jaar oud was, erfde hij het prinsdom Oranje in Frankrijk.",
                introToQuestion4: "De koninklijke familie heeft nu nog steeds Oranje-Nassau.",
                introToQuestion5: "Op 10 juli 1584 is de prins vermoord door Balthasar Gerards.",
                question: "Waar is Willem van Oranje vermoord?",
                answer: "Zuid-Holland"
            },
        ];
        return { introToQuestion: quiz[index].introToQuestion, introToQuestion2: quiz[index].introToQuestion2, introToQuestion3: quiz[index].introToQuestion3, introToQuestion4: quiz[index].introToQuestion4, introToQuestion5: quiz[index].introToQuestion5, question: quiz[index].question, answer: quiz[index].answer, };
    }
    getHint(index) {
        let hints = [
            {
                hint: "De hoofdstad van het land",
                questionNumber: 1
            },
            {
                hint: "Noord-oost",
                questionNumber: 2
            },
            {
                hint: "Aan zee (links)",
                questionNumber: 3
            },
            {
                hint: "In het midden van het land",
                questionNumber: 4
            },
            {
                hint: "Je zit in deze provincie op school",
                questionNumber: 6
            },
            {
                hint: "West",
                questionNumber: 7
            }
        ];
        return { hint: hints[index].hint, questionNumber: hints[index].questionNumber };
    }
}
var ScreenSwitch;
(function (ScreenSwitch) {
    function makeScreens(canvas) {
        this.canvas = new Canvas(canvas);
        this.startScreen = new StartScreen();
        this.europeScreen = new EuropeScreen(canvas);
        this.countryScreen = new CountryScreen(canvas);
        this.shopScreen = new ShopScreen();
    }
    ScreenSwitch.makeScreens = makeScreens;
    function draw(currentScreen) {
        this.canvas.clearScreen();
        if (currentScreen == 'startScreen') {
            this.startScreen.draw();
        }
        if (currentScreen == 'europeScreen') {
            this.europeScreen.draw();
        }
        if (currentScreen == 'countryScreen') {
            this.countryScreen.draw();
        }
        if (currentScreen == 'shopScreen') {
            this.shopScreen.draw();
        }
    }
    ScreenSwitch.draw = draw;
})(ScreenSwitch || (ScreenSwitch = {}));
class Canvas {
    constructor(canvas) {
        this.selectedCountry = '';
        this.countryIndex = null;
        this.questionNumber = 0;
        this.countries = [
            { country: 'Nederland', red: 255, green: 106, blue: 0 },
            { country: 'België', red: 140, green: 255, blue: 172 },
            { country: 'Luxemburg', red: 255, green: 191, blue: 0 },
            { country: 'Frankrijk', red: 20, green: 51, blue: 255 },
            { country: 'Spanje', red: 255, green: 0, blue: 25 },
            { country: 'Portugal', red: 255, green: 221, blue: 0 },
            { country: 'Italië', red: 0, green: 255, blue: 59 },
            { country: 'Zwitserland', red: 255, green: 40, blue: 115 },
            { country: 'Duitsland', red: 81, green: 165, blue: 255 },
            { country: 'Oostenrijk', red: 255, green: 151, blue: 25 },
            { country: 'Polen', red: 210, green: 255, blue: 96 },
            { country: 'Noorwegen', red: 255, green: 91, blue: 181 },
            { country: 'Zweden', red: 255, green: 57, blue: 22 },
            { country: 'Finland', red: 114, green: 255, blue: 198 },
            { country: 'Estland', red: 163, green: 255, blue: 25 },
            { country: 'Letland', red: 255, green: 169, blue: 40 },
            { country: 'Litouwen', red: 178, green: 182, blue: 255 },
            { country: 'Tsjechië', red: 255, green: 152, blue: 142 },
            { country: 'Denemarken', red: 55, green: 0, blue: 255 },
            { country: 'Engeland', red: 116, green: 89, blue: 255 },
            { country: 'Ierland', red: 189, green: 84, blue: 255 },
            { country: 'Ijsland', red: 137, green: 243, blue: 255 },
            { country: 'Rusland', red: 255, green: 131, blue: 119 },
            { country: 'Oekraïne', red: 20, green: 255, blue: 196 },
            { country: 'Moldavië', red: 231, green: 255, blue: 99 },
            { country: 'Roemenië', red: 114, green: 112, blue: 255 },
            { country: 'Slowakije', red: 255, green: 21, blue: 0 },
            { country: 'Hongarije', red: 255, green: 0, blue: 255 },
            { country: 'Kroatië', red: 48, green: 213, blue: 255 },
            { country: 'Bosnië', red: 255, green: 181, blue: 215 },
            { country: 'Servië', red: 193, green: 255, blue: 223 },
            { country: 'Montenegro', red: 255, green: 94, blue: 110 },
            { country: 'Slovenië', red: 229, green: 255, blue: 63 },
            { country: 'Bulgarije', red: 255, green: 0, blue: 102 },
            { country: 'Turkije', red: 206, green: 73, blue: 255 },
            { country: 'Macedonië', red: 255, green: 196, blue: 248 },
            { country: 'Albanië', red: 152, green: 114, blue: 255 },
            { country: 'Griekenland', red: 255, green: 246, blue: 2 },
            { country: 'Corsica', red: 255, green: 197, blue: 96 },
            { country: 'Noord-Ierland', red: 205, green: 178, blue: 255 },
            { country: 'Wit-Rusland', red: 124, green: 144, blue: 255 },
            { country: 'Kaliningrad', red: 2, green: 255, blue: 255 }
        ];
        this.netherlandsProvince = [
            { province: 'Zeeland', red: 0, green: 102, blue: 204 },
            { province: 'Noord-Brabant', red: 255, green: 204, blue: 0 },
            { province: 'Limburg', red: 183, green: 75, blue: 42 },
            { province: 'Zuid-Holland', red: 166, green: 161, blue: 20 },
            { province: 'Noord-Holland', red: 255, green: 130, blue: 9 },
            { province: 'Flevoland', red: 255, green: 140, blue: 167 },
            { province: 'Utrecht', red: 0, green: 105, blue: 120 },
            { province: 'Gelderland', red: 0, green: 145, blue: 215 },
            { province: 'Overijssel', red: 192, green: 213, blue: 0 },
            { province: 'Drenthe', red: 102, green: 153, blue: 51 },
            { province: 'Groningen', red: 200, green: 63, blue: 105 },
            { province: 'Friesland', red: 73, green: 222, blue: 232 }
        ];
        this.canvas = canvas;
        this.question = new Question;
        this.introText = new IntroText;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.europeMap = new Image();
        this.europeMap.src = './assets/images/mapEurope.png';
    }
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center", font) {
        this.ctx.font = `${fontSize}px ${font}`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    returnCtx() {
        return this.ctx;
    }
    writeImageToCanvas(src, xCoordinate, yCoordinate, width, height) {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
        };
    }
    getWidth() {
        return this.canvas.width;
    }
    getHeight() {
        return this.canvas.height;
    }
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    writeButtonToCanvas(imageSource, imageX, imageY, imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, imageX, imageY);
            this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
        });
    }
    drawShopBox(x, y) {
        this.ctx.fillRect(x, y, 100, 100);
        this.ctx.stroke();
        this.ctx.clearRect(x + 10, y + 10, 80, 80);
        this.ctx.stroke();
    }
    writeImageToCanvasPreload(image, xCoordinate, yCoordinate, width, height) {
        this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
    }
    colorClick() {
        this.canvas.addEventListener("click", (event) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data;
            for (let index = 0; index < this.countries.length; index++) {
                if (clickEventColor[0] == this.countries[index].red &&
                    clickEventColor[1] == this.countries[index].green &&
                    clickEventColor[2] == this.countries[index].blue) {
                    console.log(this.countries[index].country);
                    this.countryIndex = index;
                    this.selectedCountry = this.countries[index].country;
                }
            }
            if (this.selectedCountry !== '') {
                this.clearScreen();
                this.writeImageToCanvasPreload(this.europeMap, this.getWidth() / 28, this.getWidth() / 19, this.getHeight() - this.getHeight() / 9.3, this.getHeight() - this.getHeight() / 9.3);
                this.writeTextToCanvas(this.selectedCountry, 35, this.getWidth() / 1.35, this.getHeight() / 4, "black", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro1, 17, this.getWidth() / 1.35, this.getHeight() / 3.4, "white", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro2, 17, this.getWidth() / 1.35, this.getHeight() / 3.1, "white", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro3, 17, this.getWidth() / 1.35, this.getHeight() / 2.85, "white", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro4, 17, this.getWidth() / 1.35, this.getHeight() / 2.625, "white", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro5, 17, this.getWidth() / 1.35, this.getHeight() / 2.425, "white", "center", "Old English Text MT");
                this.writeTextToCanvas(this.introText.intro[this.countryIndex].intro6, 17, this.getWidth() / 1.35, this.getHeight() / 2.25, "white", "center", "Old English Text MT");
                if (this.selectedCountry == 'Nederland') {
                    this.writeCountryButton("./assets/images/oldButton.png", this.getWidth() / 1.35 - 125, this.getHeight() / 2, "Start", 35, this.getWidth() / 1.35, this.getHeight() / 1.62, "black", "center", "Old English Text MT");
                }
            }
        });
    }
    getSelectedCountry() {
        if (this.selectedCountry !== '') {
            return this.selectedCountry;
        }
        else {
            return null;
        }
    }
    resetSelectedCountry() {
        this.selectedCountry = '';
    }
    colorClickNederland(question, answer) {
        this.canvas.addEventListener("click", (event) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data;
            for (let index = 0; index < this.netherlandsProvince.length; index++) {
                if (clickEventColor[0] == this.netherlandsProvince[index].red &&
                    clickEventColor[1] == this.netherlandsProvince[index].green &&
                    clickEventColor[2] == this.netherlandsProvince[index].blue) {
                    console.log(this.netherlandsProvince[index].province);
                    this.selectedProvince = this.netherlandsProvince[index].province;
                }
                if (this.getSelectedProvince() === this.question.getQuestion(this.questionNumber).answer) {
                    alert("GOED");
                    this.questionNumber++;
                    PlayerHandler.scorePlus(100);
                    if (this.questionNumber > 6) {
                        this.clearArea(this.getWidth() / 1.9, 0, this.getWidth() / 2, this.getHeight() / 1.8);
                        this.writeTextToCanvas(`${PlayerHandler.getName()} je score is: ${PlayerHandler.getScore()}`, 40, this.getWidth() / 1.35, this.getHeight() / 6, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`Je hebt alle vragen goed beantwoord!!`, 40, this.getWidth() / 1.35, this.getHeight() / 2.8, 'white', 'center', 'Pristina');
                    }
                    else {
                        this.resetSelectedProvince();
                        this.clearArea(this.getWidth() / 1.9, 0, this.getWidth() / 2, this.getHeight() / 1.8);
                        this.writeTextToCanvas(`${PlayerHandler.getName()} je score is: ${PlayerHandler.getScore()}`, 40, this.getWidth() / 1.35, this.getHeight() / 6, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.7, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion2}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.2, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion3}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.8, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion4}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.5, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion5}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.2, 'white', 'center', 'Pristina');
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).question}`, 30, this.getWidth() / 1.35, this.getHeight() / 1.9, 'white', 'center', 'Pristina');
                    }
                }
            }
        });
    }
    getSelectedProvince() {
        return this.selectedProvince;
    }
    resetSelectedProvince() {
        this.selectedProvince = '';
    }
    clearArea(x, y, width, height) {
        this.ctx.clearRect(x, y, width, height);
    }
    writeCountryButton(imageSource, imageX, imageY, imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;
        this.ctx.drawImage(buttonElement, imageX, imageY);
        this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
    }
    getquestionNumber() {
        return this.questionNumber;
    }
}
class MathHelper {
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
var PlayerHandler;
(function (PlayerHandler) {
    function makePlayer() {
        this.player = new Player;
        console.log(this.player.player1);
    }
    PlayerHandler.makePlayer = makePlayer;
    function SavePlayer() {
        localStorage.setItem('Player1', JSON.stringify(this.player.player1));
        alert(`The save file for ${this.player.player1.name} was saved`);
    }
    PlayerHandler.SavePlayer = SavePlayer;
    function loadPlayer() {
        this.player.player1 = JSON.parse(localStorage.getItem('Player1'));
        alert(`The save file for ${this.player.player1.name} was loaded`);
    }
    PlayerHandler.loadPlayer = loadPlayer;
    function setName(name) {
        this.player.player1.name = name;
    }
    PlayerHandler.setName = setName;
    function getScore() {
        return this.player.player1.score;
    }
    PlayerHandler.getScore = getScore;
    function getName() {
        return this.player.player1.name;
    }
    PlayerHandler.getName = getName;
    function scoreMinus(minusAmount) {
        this.player.player1.score -= minusAmount;
    }
    PlayerHandler.scoreMinus = scoreMinus;
    function scorePlus(plusAmount) {
        this.player.player1.score += plusAmount;
    }
    PlayerHandler.scorePlus = scorePlus;
    function getHints() {
        return this.player.player1.hints;
    }
    PlayerHandler.getHints = getHints;
    function addHint() {
        this.player.player1.hints++;
    }
    PlayerHandler.addHint = addHint;
    function minusHint() {
        this.player.player1.hints--;
    }
    PlayerHandler.minusHint = minusHint;
})(PlayerHandler || (PlayerHandler = {}));
class CountryScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
        this.questionImage = new Image();
        this.shopButton = new Image();
        this.shopButton.src = "./assets/images/oldButton.png";
        this.questionImage.src = "./assets/images/questionpaper.png";
        this.question = new Question();
        this.player = new Player();
        this.listeners = [];
    }
    draw() {
        this.canvas.colorClickNederland(this.question.getQuestion(2).question, this.question.getQuestion(2).answer);
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X / 4, this.canvas.getCenter().Y / 2.7, this.canvas.getWidth() / 2.5, this.canvas.getHeight() / 1.25);
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 1.35, "Winkel", 35, this.canvas.getWidth() / 1.28, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.toShopHandler();
        this.canvas.writeTextToCanvas(`${PlayerHandler.getName()} je score is: ${PlayerHandler.getScore()}`, 40, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 6, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.7, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion2}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.2, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion3}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.8, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion4}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.5, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion5}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.2, 'white', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).question}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 1.9, 'white', 'center', 'Pristina');
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.8, this.canvas.getHeight() / 1.35, "Terug", 35, this.canvas.getWidth() / 1.62, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.backToEuropeHandler();
        this.canvas.writeTextToCanvas(`je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getWidth() / 6, this.canvas.getHeight() / 6, "white", "center", "Old English Text MT");
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 10, this.canvas.getHeight() / 5, "Gebruik hint", 35, this.canvas.getWidth() / 6, this.canvas.getHeight() / 3.5, "black", "center", "Old English Text MT");
        this.hintHandler();
    }
    backToEuropeHandler() {
        let listenerBackToEurope = (event) => {
            if (event.x > this.canvas.getWidth() / 1.8 && event.x < this.canvas.getWidth() / 1.8 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    ScreenSwitch.draw('europeScreen');
                    this.removeButtons();
                }
            }
        };
        this.listeners.push(listenerBackToEurope);
        window.addEventListener('click', listenerBackToEurope);
    }
    toShopHandler() {
        let listenerToShop = (event) => {
            if (event.x > this.canvas.getWidth() / 1.4 && event.x < this.canvas.getWidth() / 1.4 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    ScreenSwitch.draw('shopScreen');
                    this.removeButtons();
                }
            }
        };
        this.listeners.push(listenerToShop);
        window.addEventListener('click', listenerToShop);
    }
    hintHandler() {
        let hintListener = (event) => {
            if (event.x > this.canvas.getWidth() / 10 && event.x < this.canvas.getWidth() / 10 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 5 && event.y < this.canvas.getHeight() / 5 + this.shopButton.height) {
                    if (PlayerHandler.getHints() > 0)
                        PlayerHandler.minusHint();
                    this.canvas.clearArea(this.canvas.getWidth() / 10.5, this.canvas.getHeight() / 10, this.canvas.getWidth() / 6, this.canvas.getHeight() / 12);
                    this.canvas.writeTextToCanvas(`je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getWidth() / 6, this.canvas.getHeight() / 6, "white", "center", "Old English Text MT");
                }
            }
        };
        this.listeners.push(hintListener);
        window.addEventListener('click', hintListener);
    }
    removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }
}
class EuropeScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
        this.listeners = [];
        this.canvas.colorClick();
        this.europeMap = new Image();
        this.europeMap.src = './assets/images/mapEurope.png';
    }
    draw() {
        this.canvas.writeImageToCanvasPreload(this.europeMap, this.canvas.getWidth() / 28, this.canvas.getWidth() / 19, this.canvas.getHeight() - this.canvas.getHeight() / 9.3, this.canvas.getHeight() - this.canvas.getHeight() / 9.3);
        this.canvas.getSelectedCountry();
        console.log(this.canvas.getSelectedCountry());
        this.canvas.writeTextToCanvas('Kies een land om te beginnen!', 35, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 4, "black", "center", "Old English Text MT");
        this.clickCountry();
    }
    removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }
    clickCountry() {
        let listenerToCountry = (event) => {
            if (event.x > this.canvas.getWidth() / 1.35 - 125 && event.x < this.canvas.getWidth() / 1.35 + 125) {
                if (event.y > this.canvas.getCenter().Y && event.y < this.canvas.getCenter().Y + 170) {
                    if (this.canvas.getSelectedCountry() == 'Nederland') {
                        this.canvas.resetSelectedCountry();
                        ScreenSwitch.draw('countryScreen');
                        this.removeButtons();
                    }
                }
            }
        };
        this.listeners.push(listenerToCountry);
        window.addEventListener('click', listenerToCountry);
    }
}
class ShopScreen {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.listeners = [];
    }
    draw() {
        this.canvas.writeTextToCanvas('Winkel', 150, this.canvas.getCenter().X, this.canvas.getCenter().Y - 260, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas('Hints :', 100, this.canvas.getCenter().X - 424, this.canvas.getCenter().Y - 100, "white", 'center', "Old English Text MT");
        this.drawShopBoxes(225, 175);
        this.hintShopHandler(225, 175);
        this.canvas.writeTextToCanvas('Achtergrond :', 100, this.canvas.getCenter().X - 550, this.canvas.getCenter().Y + 100, "white", 'center', "Old English Text MT");
        this.drawShopBoxes(225, -25);
        this.canvas.writeTextToCanvas('Muziek :', 100, this.canvas.getCenter().X - 455, this.canvas.getCenter().Y + 300, "white", "center", "Old English Text MT");
        this.drawShopBoxes(225, -225);
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X + 325, this.canvas.getCenter().Y + 175, "terug", 35, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y + 260, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas('Hints = 10 punten', 30, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 5, "black", 'center', "Pristina");
        this.canvas.writeTextToCanvas('Achtergrond = nog niet verkrijgbaar', 30, this.canvas.getWidth() / 1.315, this.canvas.getHeight() / 4.25, "black", 'center', "Pristina");
        this.canvas.writeTextToCanvas('Muziek = nog niet verkrijgbaar', 30, this.canvas.getWidth() / 1.34, this.canvas.getHeight() / 3.75, "black", 'center', "Pristina");
        this.shopOutHandler();
    }
    drawShopBoxes(xBox, yBox) {
        for (let index = 0; index < 4; index++) {
            this.canvas.writeTextToCanvas("Koop", 50, this.canvas.getCenter().X - xBox + 50 + (index * 130), this.canvas.getCenter().Y - yBox - 20, "black", "center", "Old English Text MT");
            this.canvas.drawShopBox(this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox);
            let listenerShopBoxesCheckMark = (event) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        this.canvas.writeImageToCanvas("assets/images/checkmark.png", this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox, 100, 100);
                    }
                }
            };
            this.listeners.push(listenerShopBoxesCheckMark);
            window.addEventListener('click', listenerShopBoxesCheckMark);
        }
    }
    hintShopHandler(xBox, yBox) {
        for (let index = 0; index < 4; index++) {
            let isClicked = 0;
            this.canvas.writeTextToCanvas(`Je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT");
            this.canvas.writeTextToCanvas(`${PlayerHandler.getScore()} punten`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT");
            let listenerHintShop = (event) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        if (PlayerHandler.getScore() >= 10 && isClicked == 0) {
                            this.canvas.clearArea(this.canvas.getCenter().X + 275, this.canvas.getCenter().Y - 140, 400, 100);
                            this.canvas.clearArea(this.canvas.getCenter().X - 550, this.canvas.getCenter().Y - 300, 300, 100);
                            isClicked = 1;
                            if (PlayerHandler.getHints() < 4) {
                                PlayerHandler.scoreMinus(10);
                                PlayerHandler.addHint();
                            }
                            this.canvas.writeTextToCanvas(`Je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT");
                            this.canvas.writeTextToCanvas(`${PlayerHandler.getScore()} punten`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT");
                            console.log(PlayerHandler.getHints());
                        }
                    }
                }
            };
            this.listeners.push(listenerHintShop);
            window.addEventListener('click', listenerHintShop);
        }
    }
    removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }
    shopOutHandler() {
        let shopOutListener = (event) => {
            if (event.x > this.canvas.getCenter().X + 325 && event.x < this.canvas.getCenter().X + 575) {
                if (event.y > this.canvas.getCenter().Y + 200 && event.y < this.canvas.getCenter().Y + 370) {
                    this.removeButtons();
                    ScreenSwitch.draw('countryScreen');
                }
            }
        };
        this.listeners.push(shopOutListener);
        window.addEventListener('click', shopOutListener);
    }
}
class StartScreen {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
    }
    draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, 'black', 'center', "Old English Text MT");
        this.canvas.writeTextToCanvas('Vul hier je naam in:', 70, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.55, 'black', 'center', "Pristina");
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 125, this.canvas.getCenter().Y + 250, "Start", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y + 340, "black", "center", "Old English Text MT");
        this.canvas.writeImageToCanvas('./assets/images/emblem-with-a-wind-rose-old-compass-and-sailboat-vector-20874003.png', this.canvas.getWidth() / 15, this.canvas.getHeight() / 1.8, 350, 350);
        this.buttonPressed = false;
        document.getElementById("wereld").style.top = '23%';
        document.getElementById('wereld').style.left = '40%';
        document.getElementById('wereld').style.width = '20%';
        document.getElementById('wereld').style.height = '40%';
        document.getElementById('name').style.top = '70%';
        document.getElementById('name').style.left = '38%';
        document.getElementById('name').style.width = '24%';
        document.getElementById('name').style.height = '8%';
        window.addEventListener("click", (event) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X - 125 && event.x < this.canvas.getCenter().X + 125) {
                    if (event.y > this.canvas.getCenter().Y + 250 && event.y < this.canvas.getCenter().Y + 420) {
                        let names = document.getElementById('name');
                        names.type = "hidden";
                        PlayerHandler.setName(names.value);
                        console.log(names.value);
                        document.getElementById("wereld").setAttribute('style', 'hidden');
                        this.canvas.clearScreen();
                        ScreenSwitch.draw('europeScreen');
                        this.buttonPressed = true;
                    }
                }
            }
        });
    }
}
//# sourceMappingURL=app.js.map