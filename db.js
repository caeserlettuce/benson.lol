console.debug(`       __                                           __          __ 
      / /_   ___   ____   _____ ____   ____        / / ____    / /
     / __ \\ / _ \\ / __ \\ / ___// __ \\ / __ \\      / / / __ \\  / /
    / /_/ //  __// / / /(__  )/ /_/ // / / / _   / / / /_/ / / /
   /_.___/ \\___//_/ /_//____/ \\____//_/ /_/ (_) /_/  \\____/ /_/
                                                                   
`);

// fancy fancy i know

var lang_vis = {    // for language selector
    "en": {
        "name": "EN",
        "flag": "../flag/en.png"
    },
    "no": {
        "name": "NO",
        "flag": "../flag/no.png"
    },
    "fr": {
        "name": "FR",
        "flag": "../flag/fr.png"
    },
    "it": {
        "name": "IT",
        "flag": "../flag/it.png"
    },
    "sp": {
        "name": "SP",
        "flag": "../flag/sp.png"
    },
    "de": {
        "name": "DE",
        "flag": "../flag/de.png"
    },
    "jp": {
        "name": "JP",
        "flag": "../flag/jp.png"
    }
    /*"pi": {
        "name": "PI",
        "flag": "../flag/pi.png"
    },*/
}

var hv_txt = {
    "lc": {
        "en": "location",
        "no": "plassering",
        "fr": "emplacement",
        "it": "posizione",
        "sp": "localización",
        "de": "lage",
        "jp": "位置",
        "pi": "where ye photo taken"
    },
    "dt": {
        "en": "date taken",
        "no": "dato tatt",
        "fr": "date prise",
        "it": "data presa",
        "sp": "fecha que se tendrá",
        "de": "aufnahmedatum",
        "jp": "取得されたデータ",
        "pi": "when ye photo taken"
    }
}

var img_db = [
    {
        "img": "../img/b_car1.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson in a car",
            "no": "benson i en bil",
            "fr": "benson dans une voiture",
            "it": "Benson in macchina",
            "sp": "benson en un auto",
            "de": "Benson in einem Auto",
            "jp": "車の中でベンソン",
            "pi": "benson in a landlubber ship"
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "cold land"
        },
        "ltlo": [63.110934, 7.801553]
    },
    {
        "img": "../img/b_grass.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson in the grass",
            "no": "benson i gresset",
            "fr": "benson dans l'herbe",
            "it": "benson nell'erba",
            "sp": "benson en la hierba",
            "de": "Benson im Gras",
            "jp": "草の中のベンソン",
            "pi": "benson in da grass"
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "cold land"
        },
        "ltlo": [63.109461, 7.801954]
    },
    {
        "img": "../img/b_mountain.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson on a boardwalk with the mountains",
            "no": "benson på en strandpromenade med fjellene",
            "fr": "benson sur une promenade avec les montagnes",
            "it": "benson su una passerella con le montagne",
            "sp": "benson en un paseo marítimo con las montañas",
            "de": "Benson auf einer Promenade mit den Bergen",
            "jp": "山のある遊歩道にいるベンソン",
            "pi": "benson is on ye docks with the mountains"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land",
        "pi": ""
        },
        "ltlo": [62.736947, 7.159602]
    },
    {
        "img": "../img/b_rainbow.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson spreading positivity",
            "no": "benson sprer positivitet",
            "fr": "benson propage la positivité",
            "it": "benson diffonde positività",
            "sp": "benson difundiendo positividad",
            "de": "Benson verbreitet Positivität",
            "jp": "ベンソンは積極性を広める",
            "pi": "benson shall make everybody happy"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.09875190006276, 7.894109428616464]
    },
    {
        "img": "../img/b_turret.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson is ready for war",
            "no": "Benson er klar for krig",
            "fr": "benson est prêt pour la guerre",
            "it": "Benson è pronto per la guerra",
            "sp": "benson esta listo para la guerra",
            "de": "Benson ist bereit für den Krieg",
            "jp": "ベンソンは戦争の準備ができています",
            "pi": "benson is ready to fight"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.100515233138644, 7.897152625079914]
    },
    {
        "img": "../img/b_bus.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson using public transport",
            "no": "Benson bruker offentlig transport",
            "fr": "benson utilise les transports en commun",
            "it": "benson utilizzando i mezzi pubblici",
            "sp": "benson usando transporte publico",
            "de": "Benson mit öffentlichen Verkehrsmitteln",
            "jp": "公共交通機関を利用するベンソン",
            "pi": "benson be using landlubber transport"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land"
        },
        "ltlo": [62.73290613684786, 7.058839636246417]
    },
    {
        "img": "../img/b_knives.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson will stab you if he is wronged",
            "no": "benson vil stikke deg hvis han blir forurettet",
            "fr": "benson vous poignardera s'il est lésé",
            "it": "Benson ti pugnalerà se subisce un torto",
            "sp": "benson te apuñalará si es agraviado",
            "de": "Benson wird dich erstechen, wenn ihm Unrecht getan wird",
            "jp": "ベンソンは彼が間違っているならあなたを刺します",
            "pi": ""
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": ""
        },
        "ltlo": [62.73796626818948, 7.183782434170825]
    },
    {
        "img": "../img/b_gorilla.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson chillin with his friend",
            "no": "benson chillin med vennen sin",
            "fr": "benson chillin avec son ami",
            "it": "benson chillin con il suo amico",
            "sp": "benson relajándose con su amigo",
            "de": "benson chillin mit seinem freund",
            "jp": "ベンソン・チリンと彼の友人",
            "pi": "benson found ye matey"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land"
        },
        "ltlo": [62.737823309031704, 7.18353683719408]
    },
    {
        "img": "../img/b_counter.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson is a kitchen appliance",
            "no": "benson er et kjøkkenapparat",
            "fr": "benson est un appareil de cuisine",
            "it": "benson è un elettrodomestico da cucina",
            "sp": "benson es un aparato de cocina",
            "de": "Benson ist ein Küchengerät",
            "jp": "ベンソンはキッチン家電です",
            "pi": "benson shall cook your dinner"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land"
        },
        "ltlo": [62.737952689907, 7.1840305236388655]
    },
    {
        "img": "../img/b_bridge.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson next to a funky bridge",
            "no": "benson ved siden av en funky bro",
            "fr": "benson à côté d'un pont funky",
            "it": "benson accanto a un ponte funky",
            "sp": "benson al lado de un puente funky",
            "de": "benson neben einer funky brücke",
            "jp": "ファンキーな橋の隣のベンソン",
            "pi": "benson found a landlubber crossing"
        },
        "location": {
            "en": "Atlanterhavsveien, Norway",
            "no": "Atlanterhavsveien, Norway",
            "fr": "Atlanterhavsveien, Norvège",
            "it": "Atlanterhavsveien, Norvegia",
            "sp": "Atlanterhavsveien, Noruega",
            "de": "Atlanterhavsveien, Norwegen",
            "jp": "Atlanterhavsveien、ノルウェー",
            "pi": "Atlanterhavsveien, cold land"
        },
        "ltlo": [63.01682241297868, 7.347759809006998]
    },
    {
        "img": "../img/b_kristiansund.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson with colourful buildings",
            "no": "benson med fargerike bygninger",
            "fr": "benson avec des bâtiments colorés",
            "it": "benson con edifici colorati",
            "sp": "benson con edificios coloridos",
            "de": "benson mit bunten gebäuden",
            "jp": "カラフルな建物のベンソン",
            "pi": "benson found the colour houses"
        },
        "location": {
            "en": "Kristiansund, Norway",
            "no": "Kristiansund, Norway",
            "fr": "Kristiansund, Norvège",
            "it": "Kristiansund, Norvegia",
            "sp": "Kristiansund, Noruega",
            "de": "Kristiansund, Norwegen",
            "jp": "クリスティアンスン、ノルウェー",
            "pi": "Kristiansund, cold land"
        },
        "ltlo": [63.11548436710128, 7.7305793325871175]
    },
    {
        "img": "../img/b_toycars.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson vroomin",
            "no": "benson vroomin",
            "fr": "benson vroomin",
            "it": "benson vroomin",
            "sp": "benson vroomin",
            "de": "benson vroomin",
            "jp": "ベンソン・ヴルーミン",
            "pi": "benson be going t'least 50 knots"
        },
        "location": {
            "en": "Frei, Norway",
            "no": "Frei, Norge",
            "fr": "Frei, Norvège",
            "it": "Frei, Norvegia",
            "sp": "Frei, Noruega",
            "de": "Frei, Norway",
            "jp": "フライ、ノルウェー",
            "pi": "Frei, cold land"
        },
        "ltlo": [63.11026679753326, 7.800798398988505]
    },
    {
        "img": "../img/b_bridge2.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson with a cool bridge",
            "no": "benson med en kul bro",
            "fr": "benson avec un pont cool",
            "it": "benson con un bel ponte",
            "sp": "benson con un puente genial",
            "de": "Benson mit einer coolen Brücke",
            "jp": "クールな橋のあるベンソン",
            "pi": "benson found another landlubber crossing"
        },
        "location": {
            "en": "Bergsøya, Norway",
            "no": "Bergsøya, Norway",
            "fr": "Bergsøya, Norvège",
            "it": "Bergsøya, Norvegia",
            "sp": "Bergsoya, Noruega",
            "de": "Bergsøya, Norwegen",
            "jp": "Bergsøya、ノルウェー",
            "pi": "bergsøya, cold land"
        },
        "ltlo": [62.975473029363705, 7.786925827655459]
    },
    {
        "img": "../img/b_escalator.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson following his dreams",
            "no": "benson følger drømmene sine",
            "fr": "benson poursuit ses rêves",
            "it": "benson seguendo i suoi sogni",
            "sp": "benson siguiendo sus sueños",
            "de": "Benson folgt seinen Träumen",
            "jp": "彼の夢を追うベンソン",
            "pi": "benson found his dreams"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land"
        },
        "ltlo": [62.73775061067626, 7.183856378974504]
    },
    {
        "img": "../img/b_oldhouse.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson in front of an old house",
            "no": "benson foran et gammelt hus",
            "fr": "benson devant une vieille maison",
            "it": "benson davanti a una vecchia casa",
            "sp": "benson frente a una casa antigua",
            "de": "Benson vor einem alten Haus",
            "jp": "古い家の前のベンソン",
            "pi": "benson found an abandoned house"
        },
        "location": {
            "en": "Farstad, Norway",
            "no": "Farstad, Norway",
            "fr": "Farstad, Norvège",
            "it": "Farstad, Norvegia",
            "sp": "Farstad, Noruega",
            "de": "Farstad, Norwegen",
            "jp": "Farstad、ノルウェー",
            "pi": "Farstad, cold land"
        },
        "ltlo": [62.98852058457185, 7.209570076810794]
    },
    {
        "img": "../img/b_plane.png",
        "date": "07.05.2022",
        "text": {
            "en": "benson is flying high in the air",
            "no": "benson flyr høyt i luften",
            "fr": "benson vole haut dans les airs",
            "it": "Benson sta volando alto nell'aria",
            "sp": "benson está volando alto en el aire",
            "de": "benson fliegt hoch in die luft",
            "jp": "ベンソンは空高く飛んでいます",
            "pi": "benson found the skies"
        },
        "location": {
            "en": "Alberta, Canada (on an airplane)",
            "no": "Alberta, Canada (på et fly)",
            "fr": "Alberta, Canada (dans un avion)",
            "it": "Alberta, Canada (in aereo)",
            "sp": "Alberta, Canadá (en un avión)",
            "de": "Alberta, Kanada (im Flugzeug)",
            "jp": "カナダ、アルバータ州（飛行機内）",
            "pi": "Alberta, nice people land (in a metal bird)"
        },
        "ltlo": [53.55112098612576, -111.16703246313018]
    },
    {
        "img": "../img/b_door.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson broke out of prison",
            "no": "benson brøt ut av fengselet",
            "fr": "benson s'est évadé de prison",
            "it": "Benson è evaso di prigione",
            "sp": "benson escapó de la prisión",
            "de": "benson brach aus dem gefängnis aus",
            "jp": "ベンソンは刑務所から脱出した",
            "pi": "benson broke out of jail"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.10033334068353, 7.897240631421126]
    },
    {
        "img": "../img/b_turret2.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson is ammunition now",
            "no": "benson er ammunisjon nå",
            "fr": "benson est des munitions maintenant",
            "it": "Benson è ora munizioni",
            "sp": "benson es munición ahora",
            "de": "Benson ist jetzt Munition",
            "jp": "ベンソンは今弾薬です",
            "pi": "benson is ye cannonball"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.10036631713199, 7.897204983969396]
    },
    {
        "img": "../img/b_rock.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson, the archaeologist",
            "no": "benson, arkeologen",
            "fr": "benson, l'archéologue",
            "it": "benson, l'archeologo",
            "sp": "benson, el arqueólogo",
            "de": "Benson, der Archäologe",
            "jp": "考古学者、ベンソン",
            "pi": "benson is now a rock person"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.10030458921284, 7.896393217011947]
    },
    {
        "img": "../img/b_gate.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson in the entrance gate",
            "no": "benson i inngangsporten",
            "fr": "benson dans la porte d'entrée",
            "it": "benson nel cancello d'ingresso",
            "sp": "benson en la puerta de entrada",
            "de": "Benson im Eingangstor",
            "jp": "入り口のベンソン",
            "pi": "benson shall enter"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.09674620978456, 7.891155891553488]
    },
    {
        "img": "../img/b_car2.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson on the car",
            "no": "benson på bilen",
            "fr": "benson sur la voiture",
            "it": "benson in macchina",
            "sp": "benson en el coche",
            "de": "Benson auf dem Auto",
            "jp": "車のベンソン",
            "pi": "benson is on a land ship"
        },
        "location": {
            "en": "Bergsøya, Norway",
            "no": "Bergsøya, Norway",
            "fr": "Bergsøya, Norvège",
            "it": "Bergsøya, Norvegia",
            "sp": "Bergsoya, Noruega",
            "de": "Bergsøya, Norwegen",
            "jp": "Bergsøya、ノルウェー",
            "pi": "Bergsøya, cold land"
        },
        "ltlo": [62.97530109055154, 7.786863174092644]
    },
    {
        "img": "../img/b_nightstand.png",
        "date": "14.05.2022",
        "text": {
            "en": "benson being a great lil nightlight",
            "no": "benson er et flott nattlys",
            "fr": "benson étant une super petite veilleuse",
            "it": "benson è un'ottima luce notturna",
            "sp": "benson siendo una gran pequeña luz nocturna",
            "de": "Benson ist ein tolles kleines Nachtlicht",
            "jp": "ベンソンは素晴らしい常夜灯です",
            "pi": "benson is the best light for nighttime",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, cold land"
        },
        "ltlo": [62.40396894566766, 6.582386557306165]
    },
    {
        "img": "../img/b_turret1.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson is locked and loaded",
            "no": "benson er låst og lastet",
            "fr": "benson est verrouillé et chargé",
            "it": "benson è bloccato e caricato",
            "sp": "benson está bloqueado y cargado",
            "de": "Benson ist gesperrt und geladen",
            "jp": "ベンソンはロックされてロードされています",
            "pi": "benson is ready for fire",
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.100490151010874, 7.897076156103559]
    },
    {
        "img": "../img/b_turret3.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson looking longingly into the ocean from his turret",
            "no": "benson ser lengselsfullt ut i havet fra tårnet sitt",
            "fr": "Benson regarde avec envie l'océan depuis sa tourelle",
            "it": "benson guardava con desiderio nell'oceano dalla sua torretta",
            "sp": "benson mirando con anhelo el océano desde su torreta",
            "de": "Benson blickt von seinem Turm sehnsüchtig ins Meer",
            "jp": "砲塔から海を切望して見つめるベンソン",
            "pi": "benson is protecting ye booty from enemies",
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, cold land"
        },
        "ltlo": [63.10044150246214, 7.897105123897647]
    },
    {
        "img": "../img/b_kristiansund1.png",
        "date": "10.05.2022",
        "text": {
            "en": "benson in front of a marina",
            "no": "benson foran en marina",
            "fr": "benson devant une marina",
            "it": "benson di fronte a un porto turistico",
            "sp": "benson frente a un puerto deportivo",
            "de": "Benson vor einem Jachthafen",
            "jp": "マリーナの前のベンソン",
            "pi": "benson is waiting for us pirates",
        },
        "location": {
            "en": "Kristiansund, Norway",
            "no": "Kristiansund, Norway",
            "fr": "Kristiansund, Norvège",
            "it": "Kristiansund, Norvegia",
            "sp": "Kristiansund, Noruega",
            "de": "Kristiansund, Norwegen",
            "jp": "クリスティアンスン、ノルウェー",
            "pi": "Kristiansund, cold land"
        },
        "ltlo": [63.110958, 7.733211]
    },
    {
        "img": "../img/b_mountain1.png",
        "date": "11.05.2022",
        "text": {
            "en": "benson on a mountain",
            "no": "benson på et fjell",
            "fr": "benson sur une montagne",
            "it": "benson su una montagna",
            "sp": "benson en una montaña",
            "de": "Benson auf einem Berg",
            "jp": "山のベンソン",
            "pi": "benson on da mountain",
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molde, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, cold land"
        },
        "ltlo": [62.74834041394015, 7.127437026726649]
    },
    {
        "img": "../img/b_shore.png",
        "date": "11.05.2022",
        "text": {
            "en": "benson by the sea",
            "no": "benson ved sjøen",
            "fr": "benson au bord de la mer",
            "it": "benson in riva al mare",
            "sp": "benson por el mar",
            "de": "benson am meer",
            "jp": "海沿いのベンソン",
            "pi": "benson by the seven seas",
        },
        "location": {
            "en": "Helland, Norway",
            "no": "Helland, Norway",
            "fr": "Hellland, Norvège",
            "it": "Helland, Norvegia",
            "sp": "Helland, Noruega",
            "de": "Helland, Norwegen",
            "jp": "ノルウェー、ヘランド",
            "pi": "Helland, cold land"
        },
        "ltlo": [62.623153, 7.086450]
    },
    {
        "img": "../img/b_oldhouse_door.png",
        "date": "12.05.2022",
        "text": {
            "en": "benson is home",
            "no": "benson er hjemme",
            "fr": "benson est à la maison",
            "it": "Benson è a casa",
            "sp": "benson esta en casa",
            "de": "Benson ist zu Hause",
            "jp": "ベンソンは家です",
            "pi": "benson is at his home",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, cold land"
        },
        "ltlo": [62.468033, 6.237756]
    },
    {
        "img": "../img/b_barrel.png",
        "date": "12.05.2022",
        "text": {
            "en": "benson on da barrel",
            "no": "benson på da fat",
            "fr": "benson sur un baril",
            "it": "benson on da barrel",
            "sp": "Benson en el barril",
            "de": "Benson auf dem Fass",
            "jp": "ダバレルのベンソン",
            "pi": "benson on da rum barrels",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, cold land"
        },
        "ltlo": [62.468075, 6.238628]
    },
    {
        "img": "../img/b_lil_bench.png",
        "date": "12.05.2022",
        "text": {
            "en": "benson on a benson-sized bench",
            "no": "benson på en benk på størrelse med benson",
            "fr": "benson sur un banc de la taille de benson",
            "it": "benson su una panchina delle dimensioni di un benson",
            "sp": "benson en un banco del tamaño de benson",
            "de": "Benson auf einer Benson-großen Bank",
            "jp": "ベンソンサイズのベンチにベンソン",
            "pi": "benson found his seat",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, cold land"
        },
        "ltlo": [62.467478, 6.233753]
    },
    {
        "img": "../img/b_telefon.png",
        "date": "12.05.2022",
        "text": {
            "en": "benson has a rose for you <3",
            "no": "benson har en rose til deg <3",
            "fr": "benson a une rose pour toi <3",
            "it": "benson ha una rosa per te <3",
            "sp": "benson tiene una rosa para ti <3",
            "de": "Benson hat eine Rose für dich <3",
            "jp": "ベンソンはあなたのためにバラを持っています<3",
            "pi": "benson has the rose",
        },
        "location": {
            "en": "Ålesund, Norway",
            "no": "Ålesund, Norway",
            "fr": "Ålesund, Norvège",
            "it": "Ålesund, Norvegia",
            "sp": "Ålesund, Noruega",
            "de": "Ålesund, Norwegen",
            "jp": "オーレスン、ノルウェー",
            "pi": "Ålesund, cold land"
        },
        "ltlo": [62.473227553812706, 6.156559824850604]
    },
    {
        "img": "../img/b_ålesund.png",
        "date": "13.05.2022",
        "text": {
            "en": "benson in the car",
            "no": "benson i bilen",
            "fr": "benson dans la voiture",
            "it": "Benson in macchina",
            "sp": "benson en el coche",
            "de": "benson im auto",
            "jp": "車の中でベンソン",
            "pi": "benson is in the land machine",
        },
        "location": {
            "en": "Ålesund, Norway",
            "no": "Ålesund, Norway",
            "fr": "Ålesund, Norvège",
            "it": "Ålesund, Norvegia",
            "sp": "Ålesund, Noruega",
            "de": "Ålesund, Norwegen",
            "jp": "オーレスン、ノルウェー",
            "pi": "Ålesund, cold land"
        },
        "ltlo": [62.473303, 6.151189]
    },
    {
        "img": "../img/b_bacon.png",
        "date": "13.05.2022",
        "text": {
            "en": "benson in the freezer aisle",
            "no": "benson i frysegangen",
            "fr": "benson dans l'allée du congélateur",
            "it": "benson nel corridoio del congelatore",
            "sp": "benson en el pasillo del congelador",
            "de": "Benson im Gefriergang",
            "jp": "冷凍庫の通路にいるベンソン",
            "pi": "benson in the cold box",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, cold land"
        },
        "ltlo": [62.391850, 6.583339]
    },
    {
        "img": "../img/b_sykkylven_boardwalk.png",
        "date": "14.05.2022",
        "text": {
            "en": "benson on the boardwalk",
            "no": "benson på strandpromenaden",
            "fr": "benson sur la promenade",
            "it": "benson sul lungomare",
            "sp": "benson en el paseo marítimo",
            "de": "Benson auf der Promenade",
            "jp": "遊歩道のベンソン",
            "pi": "benson is waiting for the pirates to pick him up",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, cold land"
        },
        "ltlo": [62.392822, 6.578183]
    },
    {
        "img": "../img/b_mountain2.png",
        "date": "15.05.2022",
        "text": {
            "en": "benson in front of more mountains",
            "no": "benson foran flere fjell",
            "fr": "benson devant plus de montagnes",
            "it": "benson di fronte a più montagne",
            "sp": "benson frente a mas montañas",
            "de": "Benson vor mehr Bergen",
            "jp": "より多くの山の前でベンソン",
            "pi": "benson with more mountains",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "cold land"
        },
        "ltlo": [62.293258, 6.886656]
    },
    {
        "img": "../img/b_fjord_grass.png",
        "date": "13.05.2022",
        "text": {
            "en": "benson with some snow capped mountains",
            "no": "benson med noen snødekte fjell",
            "fr": "benson avec des montagnes enneigées",
            "it": "benson con alcune montagne innevate",
            "sp": "benson con algunas montañas nevadas",
            "de": "Benson mit einigen schneebedeckten Bergen",
            "jp": "雪をかぶった山々のあるベンソン",
            "pi": "benson with some white mountains",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "cold land"
        },
        "ltlo": [62.188136, 6.923864]
    },
    {
        "img": "../img/b_fjord_waterfall.png",
        "date": "15.05.2022",
        "text": {
            "en": "benson staring at a beautiful waterfall",
            "no": "benson stirrer på en vakker foss",
            "fr": "benson regarde une belle cascade",
            "it": "Benson fissa una bellissima cascata",
            "sp": "benson mirando una hermosa cascada",
            "de": "benson starrt auf einen wunderschönen wasserfall",
            "jp": "美しい滝を見つめるベンソン",
            "pi": "benson staring at a waterfall",
        },
        "location": {
            "en": "Geirangerfjord, Norway",
            "no": "Geirangerfjord, Norge",
            "fr": "Geirangerfjord, Norvège",
            "it": "Geirangerfjord, Norvegia",
            "sp": "Fiordo de Geiranger, Noruega",
            "de": "Geirangerfjord, Norwegen",
            "jp": "ガイランゲルフィヨルド、ノルウェー",
            "pi": "Geirangerfjord, cold land"
        },
        "ltlo": [62.104458, 7.102975]
    },
    {
        "img": "../img/b_fjord_bench.png",
        "date": "15.05.2022",
        "text": {
            "en": "benson sitting on a bench",
            "no": "benson sitter på en benk",
            "fr": "benson assis sur un banc",
            "it": "benson seduto su una panchina",
            "sp": "benson sentado en un banco",
            "de": "benson sitzt auf einer bank",
            "jp": "ベンチに座っているベンソン",
            "pi": "benson sitting on a bench",
        },
        "location": {
            "en": "Geiranger, Norway",
            "no": "Geiranger, Norway",
            "fr": "Geiranger, Norvège",
            "it": "Geiranger, Norvegia",
            "sp": "Geiranger, Noruega",
            "de": "Geiranger, Norwegen",
            "jp": "ガイランゲル、ノルウェー",
            "pi": "Geiranger, cold land"
        },
        "ltlo": [62.091081, 7.222056]
    },
    {
        "img": "../img/b_fjord_geiranger.png",
        "date": "15.05.2022",
        "text": {
            "en": "benson on a cliff",
            "no": "benson på en klippe",
            "fr": "benson sur une falaise",
            "it": "benson su una scogliera",
            "sp": "benson en un acantilado",
            "de": "Benson auf einer Klippe",
            "jp": "崖の上のベンソン",
            "pi": "benson on da cliff",
        },
        "location": {
            "en": "Geiranger, Norway",
            "no": "Geiranger, Norway",
            "fr": "Geiranger, Norvège",
            "it": "Geiranger, Norvegia",
            "sp": "Geiranger, Noruega",
            "de": "Geiranger, Norwegen",
            "jp": "ガイランゲル、ノルウェー",
            "pi": "Geiranger, cold land"
        },
        "ltlo": [62.091350, 7.222064]
    },
    {
        "img": "../img/b_roadwork.png",
        "date": "15.05.2022",
        "text": {
            "en": "road work ahead? well yeah, i sure hope it does",
            "no": "Veiarbeid forut? vel ja, jeg håper det gjør det",
            "fr": "travaux routiers à venir? eh bien oui, j'espère bien que c'est le cas",
            "it": "lavori stradali in vista? beh sì, spero proprio che lo faccia",
            "sp": "¿trabajos en la vía más adelante? bueno, sí, espero que sí",
            "de": "Straßenarbeit voran? Nun ja, ich hoffe es wirklich",
            "jp": "道路工事先？ええ、私はそれがすることを願っています",
            "pi": "ye have road work ahead? ahoy! i sure hope it does",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "cold land"
        },
        "ltlo": [62.499917, 6.889047]
    },
    {
        "img": "../img/b_royal_palace.png",
        "date": "17.05.2022",
        "text": {
            "en": "benson with the king and queen of norway",
            "no": "benson med kongen og dronningen av Norge",
            "fr": "benson avec le roi et la reine de norvège",
            "it": "benson con il re e la regina di Norvegia",
            "sp": "benson con el rey y la reina de noruega",
            "de": "benson mit dem könig und der königin von norwegen",
            "jp": "ノルウェーの王と女王とのベンソン",
            "pi": "benson with ye royalty of cold land",
        },
        "location": {
            "en": "Det kongelige slott, Norway",
            "no": "Det kongelige slott, Norway",
            "fr": "Le Palais Royal, Norvège",
            "it": "Il Palazzo Reale, Norvegia",
            "sp": "El Palacio Real, Noruega",
            "de": "Der königliche Palast, Norwegen",
            "jp": "ノルウェー王宮",
            "pi": "The Royal Palace, cold land"
        },
        "ltlo": [59.916722, 10.728389]
    },
    {
        "img": "../img/b_fountain.png",
        "date": "17.05.2022",
        "text": {
            "en": "benson in an empty fountain",
            "no": "benson i en tom fontene",
            "fr": "benson dans une fontaine vide",
            "it": "benson in una fontana vuota",
            "sp": "benson en una fuente vacia",
            "de": "Benson in einem leeren Brunnen",
            "jp": "空の噴水にいるベンソン",
            "pi": "benson in the empty fountain",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.915661, 10.739292]
    },
    {
        "img": "../img/b_park.png",
        "date": "17.05.2022",
        "text": {
            "en": "benson in the park",
            "no": "benson i parken",
            "fr": "benson dans le parc",
            "it": "benson nel parco",
            "sp": "benson en el parque",
            "de": "benson im park",
            "jp": "公園のベンソン",
            "pi": "benson in da grass field",
        },
        "location": {
            "en": "Slottsparken, Oslo, Norway",
            "no": "Slottsparken, Oslo, Norway",
            "fr": "Slottsparken, Oslo, Norvège",
            "it": "Slottsparken, Oslo, Norvegia",
            "sp": "Slottsparken, Oslo, Noruega",
            "de": "Slottsparken, Oslo, Norwegen",
            "jp": "Slottsparken、オスロ、ノルウェー",
            "pi": "Slottsparken, Oslo, cold land"
        },
        "ltlo": [59.916594, 10.732047]
    },
    {
        "img": "../img/b_park_sun.png",
        "date": "17.05.2022",
        "text": {
            "en": "benson in the sun",
            "no": "benson i solen",
            "fr": "benson au soleil",
            "it": "benson al sole",
            "sp": "benson en el sol",
            "de": "benson in der sonne",
            "jp": "太陽の下でベンソン",
            "pi": "benson is in the sun",
        },
        "location": {
            "en": "Slottsparken, Oslo, Norway",
            "no": "Slottsparken, Oslo, Norway",
            "fr": "Slottsparken, Oslo, Norvège",
            "it": "Slottsparken, Oslo, Norvegia",
            "sp": "Slottsparken, Oslo, Noruega",
            "de": "Slottsparken, Oslo, Norwegen",
            "jp": "Slottsparken、オスロ、ノルウェー",
            "pi": "Slottsparken, Oslo, cold land"
        },
        "ltlo": [59.916781, 10.731531]
    },
    {
        "img": "../img/b_shoes.png",
        "date": "18.05.2022",
        "text": {
            "en": "benson is going shoe shopping",
            "no": "benson skal handle sko",
            "fr": "benson va acheter des chaussures",
            "it": "Benson sta andando a fare la spesa",
            "sp": "benson va a comprar zapatos",
            "de": "Benson geht Schuhe einkaufen",
            "jp": "ベンソンは靴の買い物に行きます",
            "pi": "benson is buying himself some of ye new shoes",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.91463463470055, 10.740621062825157]
    },
    {
        "img": "../img/b_blanket.png",
        "date": "18.05.2022",
        "text": {
            "en": "benson is cozy",
            "no": "benson er koselig",
            "fr": "benson est confortable",
            "it": "Benson è accogliente",
            "sp": "benson es acogedor",
            "de": "Benson ist gemütlich",
            "jp": "ベンソンは居心地が良い",
            "pi": "benson is verrrrry comfortable",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.914638562590646, 10.740610851233862]
    },
    {
        "img": "../img/b_stave_church.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson in front of one of the last stave churches in norway",
            "no": "benson foran en av de siste stavkirkene i norge",
            "fr": "benson devant l'une des dernières églises en bois debout de norvège",
            "it": "benson davanti a una delle ultime chiese a doghe in Norvegia",
            "sp": "benson frente a una de las últimas iglesias de madera de noruega",
            "de": "benson vor einer der letzten stabkirchen norwegens",
            "jp": "ノルウェーで最後のスターヴ教会の前にあるベンソン",
            "pi": "benson in front of one of ye last stave churches in all of the cold land",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, cold land"
        },
        "ltlo": [59.908122, 10.682969]
    },
    {
        "img": "../img/b_moai.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson in a museum cave",
            "no": "benson i en museumshule",
            "fr": "benson dans une grotte de musée",
            "it": "benson in una grotta del museo",
            "sp": "benson en una cueva del museo",
            "de": "Benson in einer Museumshöhle",
            "jp": "博物館の洞窟のベンソン",
            "pi": "benson in a museum's version of davey jones' lockarrr",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, cold land"
        },
        "ltlo": [59.9035439483444, 10.698020773721245]
    },
    {
        "img": "../img/b_window.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson in a windowsill",
            "no": "benson i en vinduskarm",
            "fr": "benson dans un rebord de fenêtre",
            "it": "benson sul davanzale",
            "sp": "Benson en el alféizar de una ventana",
            "de": "Benson auf einer Fensterbank",
            "jp": "窓辺のベンソン",
            "pi": "benson in a window",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, cold land"
        },
        "ltlo": [59.9033155398052, 10.698028690214068]
    },
    {
        "img": "../img/b_sewing.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson is sewing",
            "no": "benson syr",
            "fr": "benson coud",
            "it": "Benson sta cucendo",
            "sp": "benson esta cosiendo",
            "de": "Benson näht",
            "jp": "ベンソンは縫っています",
            "pi": "benson is sewing some new clothes",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, cold land"
        },
        "ltlo": [59.903336, 10.699439]
    },
    {
        "img": "../img/b_cart.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson is going shopping",
            "no": "benson skal handle",
            "fr": "benson fait du shopping",
            "it": "Benson sta andando a fare la spesa",
            "sp": "benson va de compras",
            "de": "Benson geht einkaufen",
            "jp": "ベンソンは買い物に行きます",
            "pi": "benson is shopping",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.911922, 10.748244]
    },
    {
        "img": "../img/b_oslo_church.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson in front of a church",
            "no": "benson foran en kirke",
            "fr": "benson devant une église",
            "it": "benson davanti a una chiesa",
            "sp": "benson frente a una iglesia",
            "de": "Benson vor einer Kirche",
            "jp": "教会の前のベンソン",
            "pi": "benson in front of a church",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.912853, 10.746875]
    },
    {
        "img": "../img/b_leek.png",
        "date": "19.05.2022",
        "text": {
            "en": "benson found a leek",
            "no": "benson fant en purre",
            "fr": "benson a trouvé un poireau",
            "it": "Benson ha trovato un porro",
            "sp": "benson encontró un puerro",
            "de": "Benson hat einen Lauch gefunden",
            "jp": "ベンソンはネギを見つけました",
            "pi": "benson found a leek",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.913167, 10.746622]
    },
    {
        "img": "../img/b_tokyo_store.png",
        "date": "19.05.2022",
        "text": {
            "en": "they met benson!!!",
            "no": "de møtte benson!!!",
            "fr": "ils ont rencontré benson !!!",
            "it": "hanno incontrato benson!!!",
            "sp": "conocieron a benson!!!",
            "de": "sie trafen benson!!!",
            "jp": "彼らはベンソンに会いました!!!",
            "pi": "they met benson!!!",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.911675, 10.747859]
    },
    {
        "img": "../img/b_bed.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson has created a galaxy",
            "no": "benson har skapt en galakse",
            "fr": "Benson a créé une galaxie",
            "it": "benson ha creato una galassia",
            "sp": "benson ha creado una galaxia",
            "de": "Benson hat eine Galaxie erschaffen",
            "jp": "ベンソンは銀河を作りました",
            "pi": "benson has created a brrrrand new galaxy",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.917983, 10.733197]
    },
    {
        "img": "../img/b_coins.png",
        "date": "20.05.2022",
        "text": {
            "en": "feed me my coins mr freemannnnnnnnn",
            "no": "mate meg mine mynter herr freemannnnnnnn",
            "fr": "nourris moi mes pièces monsieur freemannnnnnnnn",
            "it": "dammi le mie monete signor freemannnnnnnnn",
            "sp": "dame de comer mis monedas señor freemannnnnnnnn",
            "de": "füttere mich mit meinen Münzen, Herr Freemannnnnnnnn",
            "jp": "私のコインを送ってくださいmrfreemannnnnnnnn",
            "pi": "feed me my coins mr frrrrrrrreemannnn!!!",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.916528, 10.735067]
    },
    {
        "img": "../img/b_mainroad_oslo.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson is very kind",
            "no": "benson er veldig snill",
            "fr": "Benson est très gentil",
            "it": "Benson è molto gentile",
            "sp": "benson es muy amable",
            "de": "Benson ist sehr nett",
            "jp": "ベンソンはとても親切です",
            "pi": "benson is very kind to all",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.914906, 10.735053]
    },
    {
        "img": "../img/b_oslo_lay.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson is laying down (it just doesnt look like it)",
            "no": "benson legger seg (det ser bare ikke ut som det)",
            "fr": "benson se couche (ça n'en a pas l'air)",
            "it": "Benson si sta sdraiando (semplicemente non sembra)",
            "sp": "Benson está acostado (simplemente no lo parece)",
            "de": "Benson legt sich hin (es sieht nur nicht so aus)",
            "jp": "ベンソンは横たわっています（それはちょうどそれのようには見えません）",
            "pi": "benson is resting",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.915022, 10.735569]
    },
    {
        "img": "../img/b_bush.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson in a bush",
            "no": "benson i en busk",
            "fr": "benson dans un buisson",
            "it": "benson in un cespuglio",
            "sp": "benson en un arbusto",
            "de": "Benson in einem Busch",
            "jp": "茂みの中のベンソン",
            "pi": "benson in a bush",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.914939, 10.734839]
    },
    {
        "img": "../img/b_flowers.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson loves flowers",
            "no": "benson elsker blomster",
            "fr": "benson aime les fleurs",
            "it": "benson ama i fiori",
            "sp": "benson ama las flores",
            "de": "Benson liebt Blumen",
            "jp": "ベンソンは花が大好き",
            "pi": "benson loves the flowerrrrs",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.914917, 10.735672]
    },
    {
        "img": "../img/b_roses.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson found roses",
            "no": "benson fant roser",
            "fr": "Benson a trouvé des roses",
            "it": "Benson ha trovato delle rose",
            "sp": "benson encontró rosas",
            "de": "Benson hat Rosen gefunden",
            "jp": "ベンソンはバラを見つけました",
            "pi": "benson found roses",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.913672, 10.735894]
    },
    {
        "img": "../img/b_street.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson is by the street",
            "no": "benson er ved gaten",
            "fr": "benson est dans la rue",
            "it": "benson è per strada",
            "sp": "benson está en la calle",
            "de": "Benson ist an der Straße",
            "jp": "ベンソンは通りのそばにあります",
            "pi": "benson is by the main street",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.913739, 10.735953]
    },
    {
        "img": "../img/b_oslo_marina.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson",
            "no": "Benson",
            "fr": "Benson",
            "it": "Benson",
            "sp": "benson",
            "de": "Benson",
            "jp": "ベンソン",
            "pi": "Benson",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.910328, 10.735078]
    },
    {
        "img": "../img/b_torch.png",
        "date": "20.05.2022",
        "text": {
            "en": "benson is now the torch",
            "no": "benson er nå fakkelen",
            "fr": "benson est maintenant le flambeau",
            "it": "Benson è ora la torcia",
            "sp": "benson es ahora la antorcha",
            "de": "Benson ist jetzt die Fackel",
            "jp": "ベンソンは今やトーチです",
            "pi": "benson is now the torrrch",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.907506, 10.736403]
    },
    {
        "img": "../img/b_beckham.png",
        "date": "11.02.2022",
        "text": {
            "en": "beckham holds benson",
            "no": "beckham holder benson",
            "fr": "Beckham tient Benson",
            "it": "beckham tiene benson",
            "sp": "beckham tiene benson",
            "de": "beckham hält benson",
            "jp": "ベッカムはベンソンを保持します",
            "pi": "beckham holds ye benson",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "\"free\" land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_munch.png",
        "date": "21.05.2022",
        "text": {
            "en": "benson is in the window!!",
            "no": "benson er i vinduet!!",
            "fr": "benson est dans la fenêtre !!",
            "it": "benson è alla finestra!!",
            "sp": "benson esta en la ventana!!",
            "de": "benson ist im fenster!!",
            "jp": "ベンソンは窓の中にいます！",
            "pi": "benson is in da window!!",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_oslo_park.png",
        "date": "21.05.2022",
        "text": {
            "en": "benson is at the park",
            "no": "benson er i parken",
            "fr": "benson est au parc",
            "it": "Benson è al parco",
            "sp": "benson esta en el parque",
            "de": "Benson ist im Park",
            "jp": "ベンソンは公園にいます",
            "pi": "benson is at the parrrrk",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.907689, 10.753731]
    },
    {
        "img": "../img/b_grate.png",
        "date": "21.05.2022",
        "text": {
            "en": "benson is feeling grate",
            "no": "benson føler seg glad",
            "fr": "benson se sent râpé",
            "it": "benson si sente grato",
            "sp": "benson se siente agradecido",
            "de": "benson freut sich",
            "jp": "ベンソンはすりおろしている",
            "pi": "benson is feeling just grrrrrate!!",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.919078, 10.732972]
    },
    {
        "img": "../img/b_xavier_bag.png",
        "date": "11.02.2022",
        "text": {
            "en": "benson loves axolotls",
            "no": "benson elsker axolotler",
            "fr": "benson aime les axolotls",
            "it": "Benson adora gli axolotl",
            "sp": "Benson ama a los ajolotes",
            "de": "Benson liebt Axolotl",
            "jp": "ベンソンはアホロートルが大好きです",
            "pi": "benson loves the axolotls",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "\"free\" land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_heldup.png",
        "date": "11.02.2022",
        "text": {
            "en": "benson is god",
            "no": "benson er gud",
            "fr": "benson est dieu",
            "it": "benson è dio",
            "sp": "benson es dios",
            "de": "Benson ist Gott",
            "jp": "ベンソンは神です",
            "pi": "benson is our god",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "\"free\" land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_convcenter.png",
        "date": "05.12.2021",
        "text": {
            "en": "benson is at the convention center",
            "no": "benson er på konferansesenteret",
            "fr": "benson est au palais des congrès",
            "it": "benson è al centro congressi",
            "sp": "benson está en el centro de convenciones",
            "de": "Benson ist im Kongresszentrum",
            "jp": "ベンソンはコンベンションセンターにいます",
            "pi": "benson is at the center for meetings",
        },
        "location": {
            "en": "Seattle, Washington",
            "no": "Seattle, Washington",
            "fr": "Seattle, Washington",
            "it": "Seattle, Washington",
            "sp": "Seattle, Washington",
            "de": "Seattle, Washington",
            "jp": "ワシントン州シアトル",
            "pi": "Seattle, washing state"
        },
        "ltlo": [47.611029842952, -122.33165985759916]
    },
    {
        "img": "../img/b_ikea.png",
        "date": "18.02.2022",
        "text": {
            "en": "benson is in ikea",
            "no": "benson er i ikea",
            "fr": "benson est chez ikea",
            "it": "benson is in ikea",
            "sp": "benson está en ikea",
            "de": "benson ist bei ikea",
            "jp": "ベンソンはイケアにいます",
            "pi": "benson is in the swedish furniture store",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "\"free\" land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_ferry.png",
        "date": "23.07.2021",
        "text": {
            "en": "benson is looking good",
            "no": "benson ser bra ut",
            "fr": "benson a l'air bien",
            "it": "Benson sta bene",
            "sp": "benson se ve bien",
            "de": "Benson sieht gut aus",
            "jp": "ベンソンは格好良い",
            "pi": "benson is looking very nice",
        },
        "location": {
            "en": "Seattle, Washington",
            "no": "Seattle, Washington",
            "fr": "Seattle, Washington",
            "it": "Seattle, Washington",
            "sp": "Seattle, Washington",
            "de": "Seattle, Washington",
            "jp": "ワシントン州シアトル",
            "pi": "Seattle, washing state"
        },
        "ltlo": [47.60463558488405, -122.3951981018473]
    },
    {
        "img": "../img/b_fireplace.png",
        "date": "12.05.2022",
        "text": {
            "en": "benson is the fire",
            "no": "benson er ilden",
            "fr": "benson est le feu",
            "it": "benson è il fuoco",
            "sp": "benson es el fuego",
            "de": "Benson ist das Feuer",
            "jp": "ベンソンは火です",
            "pi": "benson is the fire",
        },
        "location": {
            "en": "Gåseid, Norway",
            "no": "Gåseid, Norway",
            "fr": "Gaseid, Norvège",
            "it": "Gåseid, Norvegia",
            "sp": "Gåseid, Noruega",
            "de": "Gaseid, Norwegen",
            "jp": "Gåseid、ノルウェー",
            "pi": "Gåseid, cold land"
        },
        "ltlo": [62.46810737711126, 6.236436673198563]
    },
    {
        "img": "../img/b_tv.png",
        "date": "18.03.2022",
        "text": {
            "en": "benson broke it",
            "no": "benson brøt den",
            "fr": "Benson l'a cassé",
            "it": "Benson l'ha rotto",
            "sp": "benson lo rompió",
            "de": "Benson hat es kaputt gemacht",
            "jp": "ベンソンはそれを壊した",
            "pi": "benson has broke it",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "\"free\" land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_scream.png",
        "date": "21.05.2022",
        "text": {
            "en": "benson is screaming",
            "no": "Benson skriker",
            "fr": "benson crie",
            "it": "Benson sta urlando",
            "sp": "benson esta gritando",
            "de": "Benson schreit",
            "jp": "ベンソンは叫んでいます",
            "pi": "benson is scrrrreaming",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.905722062753696, 10.755382399133437]
    },
    {
        "img": "../img/b_path2.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson along a cool path",
            "no": "benson langs en kul sti",
            "fr": "benson le long d'un chemin cool",
            "it": "benson lungo un bel sentiero",
            "sp": "benson por un camino genial",
            "de": "benson auf einem coolen weg",
            "jp": "クールな道に沿ったベンソン",
            "pi": "benson along a cool walking path",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.920011, 10.747603]
    },
    {
        "img": "../img/b_path1.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson loves these paths",
            "no": "benson elsker disse stiene",
            "fr": "benson aime ces chemins",
            "it": "benson ama questi percorsi",
            "sp": "benson ama estos caminos",
            "de": "Benson liebt diese Pfade",
            "jp": "ベンソンはこれらの道が大好きです",
            "pi": "benson loves the paths",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.920067, 10.747236]
    },
    {
        "img": "../img/b_afartments.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson in front of apartment buildings",
            "no": "benson foran leilighetsbygg",
            "fr": "benson devant des immeubles d'habitation",
            "it": "benson di fronte a condomini",
            "sp": "benson frente a edificios de apartamentos",
            "de": "Benson vor Mehrfamilienhäusern",
            "jp": "アパートの前のベンソン",
            "pi": "benson in front of many living quarters",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.920161, 10.748550]
    },
    {
        "img": "../img/b_tube.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson loves the tube",
            "no": "benson elsker røret",
            "fr": "benson aime le tube",
            "it": "benson adora il tubo",
            "sp": "benson ama el tubo",
            "de": "Benson liebt die Röhre",
            "jp": "ベンソンはチューブが大好きです",
            "pi": "benson loves the underground train",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_tube2.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson has gotten off a train",
            "no": "benson har gått av toget",
            "fr": "benson est descendu d'un train",
            "it": "Benson è sceso da un treno",
            "sp": "benson se ha bajado de un tren",
            "de": "Benson ist aus einem Zug gestiegen",
            "jp": "ベンソンは電車を降りた",
            "pi": "benson has left a train",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_bus_window.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson rides a bus",
            "no": "benson kjører buss",
            "fr": "benson monte dans un bus",
            "it": "Benson va su un autobus",
            "sp": "Benson viaja en autobús",
            "de": "Benson fährt mit dem Bus",
            "jp": "ベンソンはバスに乗る",
            "pi": "benson rides a bus",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.907214, 10.687578]
    },
    {
        "img": "../img/b_parktm.png",
        "date": "22.05.2022",
        "text": {
            "en": "benson is in the grass in a park and he loves it",
            "no": "benson er i gresset i en park og han elsker det",
            "fr": "benson est dans l'herbe dans un parc et il adore ça",
            "it": "benson è nell'erba in un parco e lo adora",
            "sp": "benson está en el césped de un parque y le encanta",
            "de": "benson ist im gras in einem park und er liebt es",
            "jp": "ベンソンは公園の芝生にいて、それが大好きです",
            "pi": "benson is in grass and he loves it",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, cold land"
        },
        "ltlo": [59.924994, 10.706894]
    },
    {
        "img": "../img/b_fireplace2.png",
        "date": "13.05.2022",
        "text": {
            "en": "benson started a fire >:)",
            "no": "benson startet en brann >:)",
            "fr": "benson a allumé un feu > :)",
            "it": "benson ha appiccato un incendio >:)",
            "sp": "Benson inició un incendio >:)",
            "de": "Benson hat ein Feuer gemacht >:)",
            "jp": "ベンソンが火事を起こしました>:)",
            "pi": "benson started a fire >:)",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, cold land"
        },
        "ltlo": [62.403928, 6.582472]
    },
    {
        "img": "../img/b_ost.png",
        "date": "23.05.2022",
        "text": {
            "en": "benson with some brown cheese",
            "no": "benson med litt brunost",
            "fr": "benson avec du fromage brun",
            "it": "benson con del formaggio marrone",
            "sp": "benson con un poco de queso moreno",
            "de": "Benson mit etwas braunem Käse",
            "jp": "いくつかの茶色のチーズとベンソン",
            "pi": "benson with some brown cheeses",
        },
        "location": {
            "en": "Trondheim Airport, Norway",
            "no": "Trondheim lufthavn, Norge",
            "fr": "Aéroport de Trondheim, Norvège",
            "it": "Aeroporto di Trondheim, Norvegia",
            "sp": "Aeropuerto de Trondheim, Noruega",
            "de": "Flughafen Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム空港",
            "pi": "Trondheim Airport, cold land"
        },
        "ltlo": [63.454231, 10.917764]
    },
    {
        "img": "../img/b_view.png",
        "date": "23.05.2022",
        "text": {
            "en": "benson in a windowsill",
            "no": "benson i en vinduskarm",
            "fr": "benson dans un rebord de fenêtre",
            "it": "benson sul davanzale",
            "sp": "Benson en el alféizar de una ventana",
            "de": "Benson auf einer Fensterbank",
            "jp": "窓辺のベンソン",
            "pi": "benson in a windowsill",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.433919, 10.399972]
    },
    {
        "img": "../img/b_burg.png",
        "date": "23.05.2022",
        "text": {
            "en": "benson at a burger king",
            "no": "benson på en burger king",
            "fr": "benson chez un burger king",
            "it": "benson da un burger king",
            "sp": "benson en un burger king",
            "de": "Benson bei einem Burger King",
            "jp": "バーガーキングのベンソン",
            "pi": "benson at a burger king",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.433231718937876, 10.400638638796694]
    },
    {
        "img": "../img/b_burg2.png",
        "date": "23.05.2022",
        "text": {
            "en": "benson in a burger king window",
            "no": "benson i et burger king-vindu",
            "fr": "benson dans une vitrine de burger king",
            "it": "benson nella finestra di un burger king",
            "sp": "benson en una ventana de burger king",
            "de": "Benson in einem Burger-King-Fenster",
            "jp": "バーガーキングの窓にいるベンソン",
            "pi": "benson in a burger king window",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.433222142840705, 10.400637162773355]
    },
    {
        "img": "../img/b_pocket.png",
        "date": "23.05.2022",
        "text": {
            "en": "benson in a pocket",
            "no": "benson i en lomme",
            "fr": "benson dans une poche",
            "it": "benson in tasca",
            "sp": "benson en un bolsillo",
            "de": "Benson in einer Tasche",
            "jp": "ポケットの中のベンソン",
            "pi": "benson in a coat pocket",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.433221849413655, 10.400594843406667]
    },
    {
        "img": "../img/b_chairs_cathedral.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson on some chairs",
            "no": "benson på noen stoler",
            "fr": "benson sur certaines chaises",
            "it": "benson su alcune sedie",
            "sp": "benson en algunas sillas",
            "de": "Benson auf einigen Stühlen",
            "jp": "いくつかの椅子にベンソン",
            "pi": "benson on some seats",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.427589, 10.398225]
    },
    {
        "img": "../img/b_cathedral_jebus.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson in a cathedral",
            "no": "benson i en katedral",
            "fr": "benson dans une cathédrale",
            "it": "benson in una cattedrale",
            "sp": "benson en una catedral",
            "de": "Benson in einer Kathedrale",
            "jp": "大聖堂のベンソン",
            "pi": "benson in a jesus building",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.426892, 10.395831]
    },
    {
        "img": "../img/b_cathedral_light.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson in the light",
            "no": "benson i lyset",
            "fr": "benson dans la lumière",
            "it": "benson nella luce",
            "sp": "benson en la luz",
            "de": "Benson im Licht",
            "jp": "光の中のベンソン",
            "pi": "benson in the light",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.426897, 10.395856]
    },
    {
        "img": "../img/b_sentrum.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson in the city center",
            "no": "benson i sentrum",
            "fr": "Benson dans le centre-ville",
            "it": "benson nel centro della città",
            "sp": "benson en el centro de la ciudad",
            "de": "Benson im Stadtzentrum",
            "jp": "市内中心部のベンソン",
            "pi": "benson in the town center",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.430606, 10.395311]
    },
    {
        "img": "../img/b_smallchurch.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson in front of a small church",
            "no": "benson foran en liten kirke",
            "fr": "benson devant une petite église",
            "it": "benson davanti ad una chiesetta",
            "sp": "benson frente a una pequeña iglesia",
            "de": "Benson vor einer kleinen Kirche",
            "jp": "小さな教会の前のベンソン",
            "pi": "benson in front of a small church",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.43027750127714, 10.399089088918105]
    },
    {
        "img": "../img/b_waterway.png",
        "date": "24.05.2022",
        "text": {
            "en": "benson in a waterway",
            "no": "benson i en vannvei",
            "fr": "benson dans un cours d'eau",
            "it": "benson in un corso d'acqua",
            "sp": "benson en un canal",
            "de": "Benson in einer Wasserstraße",
            "jp": "水路のベンソン",
            "pi": "benson in the seas",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.43019731035507, 10.402754363955346]
    },
    {
        "img": "../img/b_marina_birb.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson on the marina with a friend",
            "no": "benson på marinaen med en venn",
            "fr": "benson sur la marina avec un ami",
            "it": "benson sul porto turistico con un amico",
            "sp": "benson en el puerto deportivo con un amigo",
            "de": "Benson am Yachthafen mit einem Freund",
            "jp": "友達とマリーナでベンソン",
            "pi": "benson on the marina with his matey",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.435833147436604, 10.399059311165194]
    },
    {
        "img": "../img/b_røros_bridge.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson on da bridge",
            "no": "benson på broen",
            "fr": "benson sur le pont",
            "it": "benson sul ponte da",
            "sp": "benson en el puente da",
            "de": "Benson auf der Brücke",
            "jp": "ダブリッジのベンソン",
            "pi": "benson on da land crossing",
        },
        "location": {
            "en": "Røros, Norway",
            "no": "Røros, Norway",
            "fr": "Roros, Norvège",
            "it": "Roros, Norvegia",
            "sp": "Roros, Noruega",
            "de": "Röros, Norwegen",
            "jp": "ノルウェー、レーロス",
            "pi": "Røros, cold land"
        },
        "ltlo": [62.575894, 11.389289]
    },
    {
        "img": "../img/b_røros_church.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson is in front of a church",
            "no": "benson er foran en kirke",
            "fr": "benson est devant une église",
            "it": "benson è davanti a una chiesa",
            "sp": "benson esta frente a una iglesia",
            "de": "Benson steht vor einer Kirche",
            "jp": "ベンソンは教会の前にいます",
            "pi": "benson is in front of a church",
        },
        "location": {
            "en": "Røros, Norway",
            "no": "Røros, Norway",
            "fr": "Roros, Norvège",
            "it": "Roros, Norvegia",
            "sp": "Roros, Noruega",
            "de": "Röros, Norwegen",
            "jp": "ノルウェー、レーロス",
            "pi": "Røros, cold land"
        },
        "ltlo": [62.577169, 11.391033]
    },
    {
        "img": "../img/b_røros_street.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson on a street",
            "no": "benson på en gate",
            "fr": "benson dans une rue",
            "it": "benson in una strada",
            "sp": "benson en una calle",
            "de": "Benson auf einer Straße",
            "jp": "通りのベンソン",
            "pi": "benson on a road",
        },
        "location": {
            "en": "Røros, Norway",
            "no": "Røros, Norway",
            "fr": "Roros, Norvège",
            "it": "Roros, Norvegia",
            "sp": "Roros, Noruega",
            "de": "Röros, Norwegen",
            "jp": "ノルウェー、レーロス",
            "pi": "Røros, cold land"
        },
        "ltlo": [62.574839, 11.384300]
    },
    {
        "img": "../img/b_street_river.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson in front of the river",
            "no": "benson foran elven",
            "fr": "benson devant la rivière",
            "it": "benson davanti al fiume",
            "sp": "benson frente al rio",
            "de": "Benson vor dem Fluss",
            "jp": "川の前のベンソン",
            "pi": "benson in front of the river",
        },
        "location": {
            "en": "Røros, Norway",
            "no": "Røros, Norway",
            "fr": "Roros, Norvège",
            "it": "Roros, Norvegia",
            "sp": "Roros, Noruega",
            "de": "Röros, Norwegen",
            "jp": "ノルウェー、レーロス",
            "pi": "Røros, cold land"
        },
        "ltlo": [62.575439, 11.388528]
    },
    {
        "img": "../img/b_train_dark1.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson is in the dark train",
            "no": "benson er i mørketoget",
            "fr": "benson est dans le train sombre",
            "it": "Benson è nel treno oscuro",
            "sp": "benson esta en el tren oscuro",
            "de": "Benson ist im dunklen Zug",
            "jp": "ベンソンは暗い電車の中にいます",
            "pi": "benson is in the dark train",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "レーロス",
            "pi": "cold land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_train_dark2.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson sees himself in his reflection",
            "no": "benson ser seg selv i sitt speilbilde",
            "fr": "benson se voit dans son reflet",
            "it": "benson vede se stesso nel suo riflesso",
            "sp": "benson se ve a sí mismo en su reflejo",
            "de": "benson sieht sich in seinem spiegelbild",
            "jp": "ベンソンは自分の振り返りに自分自身を見ています",
            "pi": "benson sees heself in his reflection",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "レーロス",
            "pi": "cold land"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_train_greens.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson is on the train",
            "no": "benson er på toget",
            "fr": "Benson est dans le train",
            "it": "Benson è sul treno",
            "sp": "benson esta en el tren",
            "de": "Benson ist im Zug",
            "jp": "ベンソンは電車に乗っています",
            "pi": "benson is on the train",
        },
        "location": {
            "en": "Brubakken, Norway",
            "no": "Brubakken, Norway",
            "fr": "Brubakken, Norvège",
            "it": "Brubakken, Norvegia",
            "sp": "Brubakken, Noruega",
            "de": "Brubakken, Norwegen",
            "jp": "Brubakken、ノルウェー",
            "pi": "Brubakken, cold land"
        },
        "ltlo": [63.295994, 10.298756]
    },
    {
        "img": "../img/b_train_mirror.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson is prime beauty",
            "no": "benson er førsteklasses skjønnhet",
            "fr": "benson est la première beauté",
            "it": "benson è la prima bellezza",
            "sp": "benson es la belleza principal",
            "de": "benson ist erstklassige schönheit",
            "jp": "ベンソンは最高の美しさです",
            "pi": "benson is prime prettiness",
        },
        "location": {
            "en": "Ålen, Norway",
            "no": "Ålen, Norway",
            "fr": "Ålen, Norvège",
            "it": "Alen, Norvegia",
            "sp": "Ålen, Noruega",
            "de": "Alen, Norwegen",
            "jp": "Ålen、ノルウェー",
            "pi": "Ålen, cold land"
        },
        "ltlo": [62.809247, 11.369864]
    },
    {
        "img": "../img/b_trondheim_umbrellas.png",
        "date": "25.05.2022",
        "text": {
            "en": "benson is ready for the rain",
            "no": "benson er klar for regnet",
            "fr": "benson est prêt pour la pluie",
            "it": "benson è pronto per la pioggia",
            "sp": "benson está listo para la lluvia",
            "de": "Benson ist bereit für den Regen",
            "jp": "ベンソンは雨の準備ができています",
            "pi": "benson is ready for rain",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, cold land"
        },
        "ltlo": [63.432919, 10.397503]
    },
    {
        "img": "../img/b_busstop.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson waiting patiently at a bus stop",
            "no": "benson venter tålmodig på et busstopp",
            "fr": "Benson attend patiemment à un arrêt de bus",
            "it": "Benson aspetta pazientemente alla fermata dell'autobus",
            "sp": "benson esperando pacientemente en una parada de autobús",
            "de": "benson wartet geduldig an einer bushaltestelle",
            "jp": "バス停で辛抱強く待っているベンソン",
            "pi": "benson waiting patiently at a bus stop",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, Norway"
        },
        "ltlo": [63.430000, 10.373769]
    },
    {
        "img": "../img/b_lion.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson is lion to you",
            "no": "benson er en løve for deg",
            "fr": "benson est un lion pour toi",
            "it": "benson è leone per te",
            "sp": "benson es un león para ti",
            "de": "Benson ist Löwe für Sie",
            "jp": "ベンソンはあなたにとってライオンです",
            "pi": "benson is lion to you",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, Norway"
        },
        "ltlo": [63.421658, 10.358128]
    },
    {
        "img": "../img/b_nightman.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson in the house",
            "no": "benson i huset",
            "fr": "benson dans la maison",
            "it": "benson in casa",
            "sp": "benson en la casa",
            "de": "benson im haus",
            "jp": "家の中のベンソン",
            "pi": "benson in the house",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, Norway"
        },
        "ltlo": [63.421997, 10.359536]
    },
    {
        "img": "../img/b_stage.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson is on the stage",
            "no": "benson er på scenen",
            "fr": "benson est sur scène",
            "it": "Benson è sul palco",
            "sp": "benson está en el escenario",
            "de": "Benson ist auf der Bühne",
            "jp": "ベンソンが舞台に立つ",
            "pi": "benson is on the stage",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, Norway"
        },
        "ltlo": [63.417828, 10.356236]
    },
    {
        "img": "../img/b_grasses.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson is in more grass",
            "no": "benson er i mer gress",
            "fr": "benson est dans plus d'herbe",
            "it": "benson è in più erba",
            "sp": "benson esta en mas pasto",
            "de": "Benson ist in mehr Gras",
            "jp": "ベンソンはもっと草の中にいます",
            "pi": "benson is in more grass",
        },
        "location": {
            "en": "Trondheim, Norway",
            "no": "Trondheim, Norge",
            "fr": "Trondheim, Norvège",
            "it": "Trondheim, Norvegia",
            "sp": "Trondheim, Noruega",
            "de": "Trondheim, Norwegen",
            "jp": "ノルウェー、トロンハイム",
            "pi": "Trondheim, Norway"
        },
        "ltlo": [63.420581, 10.358253]
    },
    {
        "img": "../img/b_restaurant_hell.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson is eating at the restaraunt",
            "no": "benson spiser på restauranten",
            "fr": "benson mange au restaurant",
            "it": "benson sta mangiando al ristorante",
            "sp": "benson esta comiendo en el restaurante",
            "de": "Benson isst im Restaurant",
            "jp": "ベンソンはレストランで食べています",
            "pi": "benson is eating at the restaurant",
        },
        "location": {
            "en": "Hell, Norway",
            "no": "Helvete, Norge",
            "fr": "Enfer, Norvège",
            "it": "Inferno, Norvegia",
            "sp": "Infierno, Noruega",
            "de": "Hölle, Norwegen",
            "jp": "ノルウェー、ヘル村",
            "pi": "Hell, Norway"
        },
        "ltlo": [63.448422, 10.911614]
    },
    {
        "img": "../img/b_airport_hell.png",
        "date": "26.05.2022",
        "text": {
            "en": "benson overlooking the airport",
            "no": "benson med utsikt over flyplassen",
            "fr": "benson surplombant l'aéroport",
            "it": "benson con vista sull'aeroporto",
            "sp": "benson con vistas al aeropuerto",
            "de": "Benson mit Blick auf den Flughafen",
            "jp": "空港を見下ろすベンソン",
            "pi": "benson overlooking the airport",
        },
        "location": {
            "en": "Hell, Norway",
            "no": "Helvete, Norge",
            "fr": "Enfer, Norvège",
            "it": "Inferno, Norvegia",
            "sp": "Infierno, Noruega",
            "de": "Hölle, Norwegen",
            "jp": "ノルウェー、ヘル村",
            "pi": "Hell, Norway"
        },
        "ltlo": [63.448917, 10.912750]
    },
    {
        "img": "../img/b_hotel_hell.png",
        "date": "27.05.2022",
        "text": {
            "en": "benson in the hotel lobby",
            "no": "benson i hotellets lobby",
            "fr": "benson dans le hall de l'hôtel",
            "it": "benson nella hall dell'hotel",
            "sp": "benson en el vestíbulo del hotel",
            "de": "Benson in der Hotellobby",
            "jp": "ホテルロビーのベンソン",
            "pi": "benson in the hotel lobby",
        },
        "location": {
            "en": "Hell, Norway",
            "no": "Helvete, Norge",
            "fr": "Enfer, Norvège",
            "it": "Inferno, Norvegia",
            "sp": "Infierno, Noruega",
            "de": "Hölle, Norwegen",
            "jp": "ノルウェー、ヘル村",
            "pi": "Hell, Norway"
        },
        "ltlo": [63.448886, 10.912614]
    },
    {
        "img": "../img/b_hell_station.png",
        "date": "27.05.2022",
        "text": {
            "en": "benson is at the train station",
            "no": "benson er på jernbanestasjonen",
            "fr": "benson est à la gare",
            "it": "Benson è alla stazione dei treni",
            "sp": "benson está en la estación de tren",
            "de": "Benson ist am Bahnhof",
            "jp": "ベンソンは駅にいます",
            "pi": "benson is at the train station",
        },
        "location": {
            "en": "Hell, Norway",
            "no": "Helvete, Norge",
            "fr": "Enfer, Norvège",
            "it": "Inferno, Norvegia",
            "sp": "Infierno, Noruega",
            "de": "Hölle, Norwegen",
            "jp": "ノルウェー、ヘル村",
            "pi": "Hell, Norway"
        },
        "ltlo": [63.445897, 10.899400]
    },
    {
        "img": "../img/b_car_again.png",
        "date": "27.05.2022",
        "text": {
            "en": "benson is in the car again",
            "no": "benson er i bilen igjen",
            "fr": "benson est de nouveau dans la voiture",
            "it": "Benson è di nuovo in macchina",
            "sp": "benson está en el auto otra vez",
            "de": "Benson ist wieder im Auto",
            "jp": "ベンソンは再び車の中にいます",
            "pi": "benson is in the car again",
        },
        "location": {
            "en": "Hamar, Norway",
            "no": "Hamar, Norway",
            "fr": "Hamar, Norvège",
            "it": "Hamar, Norvegia",
            "sp": "Hamar, Noruega",
            "de": "Hamar, Norwegen",
            "jp": "ノルウェー、ハーマル",
            "pi": "Hamar, Norway"
        },
        "ltlo": [60.790036, 11.092022]
    },
    {
        "img": "../img/b_viking_ship.png",
        "date": "28.05.2022",
        "text": {
            "en": "benson in front of a viking ship",
            "no": "benson foran et vikingskip",
            "fr": "benson devant un bateau viking",
            "it": "benson davanti a una nave vichinga",
            "sp": "benson frente a un barco vikingo",
            "de": "Benson vor einem Wikingerschiff",
            "jp": "バイキング船の前のベンソン",
            "pi": "benson in front of a viking ship",
        },
        "location": {
            "en": "Tønsburg, Norway",
            "no": "Tønsburg, Norway",
            "fr": "Tonsburg, Norvège",
            "it": "Tonsburg, Norvegia",
            "sp": "Tonsburg, Noruega",
            "de": "Tönsburg, Norwegen",
            "jp": "ノルウェー、テンスベルグ",
            "pi": "Tønsburg, Norway"
        },
        "ltlo": [59.265228, 10.406469]
    },
    {
        "img": "../img/b_candle.png",
        "date": "28.05.2022",
        "text": {
            "en": "benson likes fire",
            "no": "benson liker ild",
            "fr": "benson aime le feu",
            "it": "a benson piace il fuoco",
            "sp": "a benson le gusta el fuego",
            "de": "Benson mag Feuer",
            "jp": "ベンソンは火が好き",
            "pi": "benson likes fire",
        },
        "location": {
            "en": "Borre, Norway",
            "no": "Borre, Norge",
            "fr": "Borré, Norvège",
            "it": "Borre, Norvegia",
            "sp": "Borre, Norway",
            "de": "Borre, Norwegen",
            "jp": "Borre、ノルウェー",
            "pi": "Borre, Norway"
        },
        "ltlo": [59.387383, 10.469953]
    },
    {
        "img": "../img/b_godray.png",
        "date": "28.05.2022",
        "text": {
            "en": "benson is the god of light",
            "no": "benson er lysets gud",
            "fr": "benson est le dieu de la lumière",
            "it": "benson è il dio della luce",
            "sp": "benson es el dios de la luz",
            "de": "Benson ist der Gott des Lichts",
            "jp": "ベンソンは光の神です",
            "pi": "benson is the god of light",
        },
        "location": {
            "en": "Borre, Norway",
            "no": "Borre, Norge",
            "fr": "Borré, Norvège",
            "it": "Borre, Norvegia",
            "sp": "Borre, Norway",
            "de": "Borre, Norwegen",
            "jp": "Borre、ノルウェー",
            "pi": "Borre, Norway"
        },
        "ltlo": [59.387419, 10.470053]
    },
    {
        "img": "../img/b_gravesite.png",
        "date": "28.05.2022",
        "text": {
            "en": "benson at an ancient burial site",
            "no": "benson på et gammelt gravsted",
            "fr": "benson sur un ancien lieu de sépulture",
            "it": "benson in un antico luogo di sepoltura",
            "sp": "benson en un antiguo lugar de enterramiento",
            "de": "Benson an einer alten Grabstätte",
            "jp": "古代の埋葬地でのベンソン",
            "pi": "benson at an ancient burial site",
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー",
            "pi": "Norway"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_petrol.png",
        "date": "28.05.2022",
        "text": {
            "en": "filling the car with pure, liquefied, benson",
            "no": "fylle bilen med ren, flytende benson",
            "fr": "remplir la voiture de pur, liquéfié, benson",
            "it": "riempiendo l'auto di benson puro, liquefatto",
            "sp": "llenando el carro de puro, licuado, benson",
            "de": "Füllen Sie das Auto mit reinem, verflüssigtem Benson",
            "jp": "車を純粋な液化ベンソンで満たす",
            "pi": "filling the car with pure, liquefied, benson",
        },
        "location": {
            "en": "Oslo Airport, Norway",
            "no": "Oslo Lufthavn, Norge",
            "fr": "Aéroport d'Oslo, Norvège",
            "it": "Aeroporto di Oslo, Norvegia",
            "sp": "Aeropuerto de Oslo, Noruega",
            "de": "Flughafen Oslo, Norwegen",
            "jp": "ノルウェー、オスロ空港",
            "pi": "Oslo Airport, Norway"
        },
        "ltlo": [60.179375, 11.081778]
    },
    {
        "img": "../img/b_bensons.png",
        "date": "02.07.2022",
        "text": {
            "en": "benson has found the best restaurant",
            "no": "benson har funnet den beste restauranten",
            "fr": "benson a trouvé le meilleur restaurant",
            "it": "benson ha trovato il miglior ristorante",
            "sp": "benson ha encontrado el mejor restaurante",
            "de": "Benson hat das beste Restaurant gefunden",
            "jp": "ベンソンは最高のレストランを見つけました",
            "pi": "benson has found the best restaurant",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_grass_marshs.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson is in some more grass",
            "no": "benson er i litt mer gress",
            "fr": "Benson est dans un peu plus d'herbe",
            "it": "Benson è in un po' più di erba",
            "sp": "benson está en algo más de hierba",
            "de": "Benson ist in etwas mehr Gras",
            "jp": "ベンソンはもう少し草の中にいます",
            "pi": "benson is in some more grass",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [46.34882359822199, -124.05479728416039]
    },
    {
        "img": "../img/b_fryingpan.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson will not be fried",
            "no": "benson vil ikke bli stekt",
            "fr": "benson ne sera pas frit",
            "it": "benson non sarà fritto",
            "sp": "benson no será frito",
            "de": "Benson wird nicht gebraten",
            "jp": "ベンソンは揚げられません",
            "pi": "benson will not be fried",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [46.34903823271921, -124.05450549631858]
    },
    {
        "img": "../img/b_fisherman.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson will go fishing with statue fisherman",
            "no": "Benson skal fiske med statuefisker",
            "fr": "benson ira pêcher avec statue pêcheur",
            "it": "Benson andrà a pescare con il pescatore di statue",
            "sp": "benson irá a pescar con estatua pescador",
            "de": "Benson wird mit dem Statuenfischer fischen gehen",
            "jp": "ベンソンは彫像漁師と釣りに行きます",
            "pi": "benson will go fishing with statue fisherman",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [46.34906582402745, -124.05452765004587]
    },
    {
        "img": "../img/b_grass_swapmeet.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson is in his natural habitat",
            "no": "benson er i sitt naturlige habitat",
            "fr": "benson est dans son habitat naturel",
            "it": "benson è nel suo habitat naturale",
            "sp": "benson esta en su habitat natural",
            "de": "Benson ist in seinem natürlichen Lebensraum",
            "jp": "ベンソンは彼の自然の生息地にいます",
            "pi": "benson is in his natural habitat",
        },
        "location": {
            "en": "Ocean Park, WA",
            "no": "Ocean Park, WA",
            "fr": "Ocean Park, WA",
            "it": "Ocean Park, WA",
            "sp": "Ocean Park, Washington",
            "de": "Ozeanpark, WA",
            "jp": "ワシントン州オーシャンパーク",
            "pi": "Ocean Park, WA"
        },
        "ltlo": [46.54672148706268, -124.02944267029513]
    },
    {
        "img": "../img/b_grass_swapmeet2.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson is very comfy in the grass",
            "no": "benson er veldig komfortabel i gresset",
            "fr": "benson est très à l'aise dans l'herbe",
            "it": "benson è molto a suo agio sull'erba",
            "sp": "benson es muy cómodo en la hierba",
            "de": "Benson fühlt sich im Gras sehr wohl",
            "jp": "ベンソンは芝生でとても快適です",
            "pi": "benson is very comfy in the grass",
        },
        "location": {
            "en": "Ocean Park, WA",
            "no": "Ocean Park, WA",
            "fr": "Ocean Park, WA",
            "it": "Ocean Park, WA",
            "sp": "Ocean Park, Washington",
            "de": "Ozeanpark, WA",
            "jp": "ワシントン州オーシャンパーク",
            "pi": "Ocean Park, WA"
        },
        "ltlo": [46.54673275819134, -124.0295396708313]
    },
    {
        "img": "../img/b_grass_swapmeet3.png",
        "date": "03.07.2022",
        "text": {
            "en": "benson is still comfy in the grass",
            "no": "benson er fortsatt komfortabel i gresset",
            "fr": "benson est toujours à l'aise dans l'herbe",
            "it": "Benson è ancora a suo agio sull'erba",
            "sp": "benson todavía está cómodo en la hierba",
            "de": "Benson fühlt sich immer noch wohl im Gras",
            "jp": "ベンソンはまだ草の中で快適です",
            "pi": "benson is still comfy in the grass",
        },
        "location": {
            "en": "Ocean Park, WA",
            "no": "Ocean Park, WA",
            "fr": "Ocean Park, WA",
            "it": "Ocean Park, WA",
            "sp": "Ocean Park, Washington",
            "de": "Ozeanpark, WA",
            "jp": "ワシントン州オーシャンパーク",
            "pi": "Ocean Park, WA"
        },
        "ltlo": [46.54670726781045, -124.02957673635937]
    },
    {
        "img": "../img/b_bench.png",
        "date": "04.07.2022",
        "text": {
            "en": "benson is overlooking the beach",
            "no": "Benson har utsikt over stranden",
            "fr": "benson surplombe la plage",
            "it": "benson si affaccia sulla spiaggia",
            "sp": "benson está mirando a la playa",
            "de": "Benson überblickt den Strand",
            "jp": "ベンソンはビーチを見下ろしています",
            "pi": "benson is overlooking the beach",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_log.png",
        "date": "04.07.2022",
        "text": {
            "en": "benson is on the log",
            "no": "benson er på loggen",
            "fr": "benson est sur le journal",
            "it": "benson è sul registro",
            "sp": "benson está en el registro",
            "de": "Benson ist im Protokoll",
            "jp": "ベンソンはログにあります",
            "pi": "benson is on the log",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_sunset_bench.png",
        "date": "04.07.2022",
        "text": {
            "en": "benson loves the sunset",
            "no": "benson elsker solnedgangen",
            "fr": "benson aime le coucher du soleil",
            "it": "benson ama il tramonto",
            "sp": "benson ama la puesta de sol",
            "de": "Benson liebt den Sonnenuntergang",
            "jp": "ベンソンは夕日が大好き",
            "pi": "benson loves the sunset",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_sea.png",
        "date": "04.07.2022",
        "text": {
            "en": "benson is living and loving his life by the sea",
            "no": "benson lever og elsker livet sitt ved sjøen",
            "fr": "benson vit et aime sa vie au bord de la mer",
            "it": "benson vive e ama la sua vita in riva al mare",
            "sp": "benson vive y ama su vida junto al mar",
            "de": "Benson lebt und liebt sein Leben am Meer",
            "jp": "ベンソンは海のそばで彼の人生を生き、愛しています",
            "pi": "benson is living and loving his life by the sea",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_firework.png",
        "date": "04.07.2022",
        "text": {
            "en": "benson with the fireworks",
            "no": "benson med fyrverkeriet",
            "fr": "benson avec les feux d'artifice",
            "it": "benson con i fuochi d'artificio",
            "sp": "benson con los fuegos artificiales",
            "de": "Benson mit dem Feuerwerk",
            "jp": "花火でベンソン",
            "pi": "benson with the fireworks",
        },
        "location": {
            "en": "Long Beach, WA",
            "no": "Long Beach, WA",
            "fr": "Long Beach, WA",
            "it": "Long Beach, WA",
            "sp": "Long Beach, Washington",
            "de": "Long Beach, Washington",
            "jp": "ワシントン州ロングビーチ",
            "pi": "Long Beach, WA"
        },
        "ltlo": [, ]
    },
    {
        "img": "../img/b_bridge_seattle.png",
        "date": "21.08.2022",
        "text": {
            "en": "benson is under the bridge",
            "no": "benson er under broen",
            "fr": "benson est sous le pont",
            "it": "benson è sotto il ponte",
            "sp": "benson esta debajo del puente",
            "de": "Benson ist unter der Brücke",
            "jp": "ベンソンは橋の下にいます",
            "pi": "benson is under the bridge",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.65095619071674, -122.3473418125129]
    },
    {
        "img": "../img/b_centerplant.png",
        "date": "20.08.2022",
        "text": {
            "en": "benson is with the plants",
            "no": "benson er med plantene",
            "fr": "benson est avec les plantes",
            "it": "benson è con le piante",
            "sp": "benson esta con las plantas",
            "de": "Benson ist bei den Pflanzen",
            "jp": "ベンソンは植物と一緒です",
            "pi": "benson is with the plants",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.61149031006518, -122.33068704563222]
    },
    {
        "img": "../img/b_spaceneedle_cer.png",
        "date": "21.08.2022",
        "text": {
            "en": "benson is with the space needle",
            "no": "benson er med space needle",
            "fr": "benson est avec l'aiguille de l'espace",
            "it": "Benson è con lo Space Needle",
            "sp": "benson esta con la aguja espacial",
            "de": "Benson ist mit der Raumnadel",
            "jp": "ベンソンはスペースニードルを持っています",
            "pi": "benson is with the space needle",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.61741456169409, -122.34332977984141]
    },
    {
        "img": "../img/b_camp_sea.png",
        "date": "16.08.2022",
        "text": {
            "en": "benson loves the sea",
            "no": "benson elsker havet",
            "fr": "benson aime la mer",
            "it": "benson ama il mare",
            "sp": "benson ama el mar",
            "de": "Benson liebt das Meer",
            "jp": "ベンソンは海が大好き",
            "pi": "benson loves the sea",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_sunset_bench2.png",
        "date": "16.08.2022",
        "text": {
            "en": "benson is on the bench",
            "no": "benson er på benken",
            "fr": "benson est sur le banc",
            "it": "Benson è in panchina",
            "sp": "benson esta en el banquillo",
            "de": "Benson sitzt auf der Bank",
            "jp": "ベンソンはベンチにいる",
            "pi": "benson is on the bench",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_i5.png",
        "date": "20.08.2022",
        "text": {
            "en": "benson is watching everyone commute",
            "no": "benson ser på alle pendler",
            "fr": "benson regarde tout le monde faire la navette",
            "it": "Benson sta guardando tutti i pendolari",
            "sp": "benson está viendo a todos viajar",
            "de": "Benson sieht allen beim Pendeln zu",
            "jp": "ベンソンはみんなの通勤を見守っています",
            "pi": "benson is watching everyone commute",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.610893773881934, -122.33156380536994]
    },
    {
        "img": "../img/b_pikest.png",
        "date": "20.08.2022",
        "text": {
            "en": "benson loves pike street",
            "no": "benson elsker pike street",
            "fr": "benson aime la rue des brochets",
            "it": "Benson adora Pike Street",
            "sp": "benson ama la calle pike",
            "de": "Benson liebt Pike Street",
            "jp": "ベンソンはパイクストリートが大好き",
            "pi": "benson loves pike street",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.61168034168815, -122.33292214259319]
    },
    {
        "img": "../img/b_center.png",
        "date": "20.08.2022",
        "text": {
            "en": "benson is at the convention center",
            "no": "benson er på konferansesenteret",
            "fr": "benson est au palais des congrès",
            "it": "benson è al centro congressi",
            "sp": "benson está en el centro de convenciones",
            "de": "Benson ist im Kongresszentrum",
            "jp": "ベンソンはコンベンションセンターにいます",
            "pi": "benson is at the convention center",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.61091909047631, -122.33156883679197]
    },
    {
        "img": "../img/b_escalator_center.png",
        "date": "20.08.2022",
        "text": {
            "en": "benson sees the building",
            "no": "benson ser bygningen",
            "fr": "benson voit le bâtiment",
            "it": "Benson vede l'edificio",
            "sp": "benson ve el edificio",
            "de": "Benson sieht das Gebäude",
            "jp": "ベンソンは建物を見る",
            "pi": "benson sees the building",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.611335964948005, -122.3311005070969]
    },
    {
        "img": "../img/b_troll.png",
        "date": "21.08.2022",
        "text": {
            "en": "benson does a little trolling",
            "no": "benson troller litt",
            "fr": "Benson fait un peu de pêche à la traîne",
            "it": "benson fa un po' di trolling",
            "sp": "benson hace un poco de trolleo",
            "de": "Benson trollt ein wenig",
            "jp": "ベンソンは少しトローリングをします",
            "pi": "benson does a little trolling",
        },
        "location": {
            "en": "Seattle, WA",
            "no": "Seattle, WA",
            "fr": "Seattle, WA",
            "it": "Seattle, WA",
            "sp": "Seattle, WA",
            "de": "Seattle, WA",
            "jp": "Seattle, WA",
            "pi": "Seattle, WA"
        },
        "ltlo": [47.65099006928717, -122.34734918858734]
    },
    {
        "img": "../img/b_sunset_platforms.png",
        "date": "16.08.2022",
        "text": {
            "en": "benson is the sunset",
            "no": "benson er solnedgangen",
            "fr": "benson est le coucher du soleil",
            "it": "benson è il tramonto",
            "sp": "benson es la puesta de sol",
            "de": "Benson ist der Sonnenuntergang",
            "jp": "ベンソンは夕日",
            "pi": "benson is the sunset",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_wall_plants.png",
        "date": "27.08.2022",
        "text": {
            "en": "benson is with the flowers",
            "no": "benson er med blomstene",
            "fr": "benson est avec les fleurs",
            "it": "benson è con i fiori",
            "sp": "benson esta con las flores",
            "de": "Benson ist bei den Blumen",
            "jp": "ベンソンは花と一緒です",
            "pi": "benson is with the flowers",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_thames_lmao.png",
        "date": "27.08.2022",
        "text": {
            "en": "benson is on a bridge",
            "no": "benson er på en bro",
            "fr": "benson est sur un pont",
            "it": "Benson è su un ponte",
            "sp": "benson esta en un puente",
            "de": "Benson ist auf einer Brücke",
            "jp": "ベンソンは橋の上にいます",
            "pi": "benson is on a bridge",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_tophat_statue.png",
        "date": "27.08.2022",
        "text": {
            "en": "benson has found the top hat man",
            "no": "benson har funnet topphatten",
            "fr": "benson a trouvé l'homme haut de forme",
            "it": "Benson ha trovato l'uomo con il cappello a cilindro",
            "sp": "benson ha encontrado al hombre del sombrero de copa",
            "de": "Benson hat den Zylindermann gefunden",
            "jp": "ベンソンはシルクハットの男を見つけた",
            "pi": "benson has found the top hat man",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    {
        "img": "../img/b_thames_lamppost.png",
        "date": "27.08.2022",
        "text": {
            "en": "benson is with the bridge lamp",
            "no": "benson er med brolampen",
            "fr": "benson est avec la lampe de pont",
            "it": "benson è con la lampada da ponte",
            "sp": "benson está con la lámpara del puente",
            "de": "Benson ist mit der Brückenlampe",
            "jp": "ベンソンはブリッジランプを持っています",
            "pi": "benson is with the bridge lamp",
        },
        "location": {
            "en": "Washington State, USA",
            "no": "Washington State, USA",
            "fr": "État de Washington, États-Unis",
            "it": "Stato di Washington, USA",
            "sp": "Estado de Washington, EE. UU.",
            "de": "Staat Washington, USA",
            "jp": "米国ワシントン州",
            "pi": "Washington State, USA"
        },
        "ltlo": [0, 0]
    },
    
    
    


]

var pre_coords = {
    "unknown": [0, 0],
    "usa": [39.933562, -101.598240],
    "norway": [61.903060, 9.401304]
}

/*

empty image entry

    {
        "img": "img/b_.JPG",
        "date": "..2022",
        "text": {
            "en": "",
            "no": "",
            "fr": "",
            "it": "",
            "sp": "",
            "de": "",
            "jp": "",
            "pi": ""
        },
        "location": {
            "en": "",
            "no": "",
            "fr": "",
            "it": "",
            "sp": "",
            "de": "",
            "jp": "",
            "pi": ""
        },
        "ltlo": [0, 0]
    },


*/


var ratings = [
    {
        "text": "it's cute!",
        "person": "my mother",
        "rating": 5
    },
    {
        "text": "HE SPIN IN THE BACKGROUND",
        "person": "bluey bean",
        "rating": 4
    },
    {
        "text": "im gonna break it",
        "person": "18_gallons",
        "rating": 4
    },
    {
        "text": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "person": "Chell",
        "rating": 5
    },
    {
        "text": "im gonna voiceover all of this site in every language available",
        "person": "doe's world",
        "rating": 5
    },
    {
        "text": "BENSON IS MY LIFE. I WOULD NOT TRADE HIM FOR ANYTHING.",
        "person": "SVENSON",
        "rating": 6.5
    },
    {
        "text": "my brother looks fabulous",
        "person": "finn the duck",
        "rating": 5
    },
    {
        "text": "yippee!",
        "person": "anonymous friend",
        "rating": 3
    },
    {
        "text": "i love benson so much. benson is our lord and savior, our sweet baby boy. i love this website and i also love its creator.",
        "person": "dakota",
        "rating": 6
    }





]
