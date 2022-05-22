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
    },
}

var hv_txt = {
    "lc": {
        "en": "location",
        "no": "plassering",
        "fr": "emplacement",
        "it": "posizione",
        "sp": "localización",
        "de": "lage",
        "jp": "位置"
    },
    "dt": {
        "en": "date taken",
        "no": "dato tatt",
        "fr": "date prise",
        "it": "data presa",
        "sp": "fecha que se tendrá",
        "de": "aufnahmedatum",
        "jp": "取得されたデータ"
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
            "jp": "車の中でベンソン"
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー"
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
            "jp": "草の中のベンソン"
        },
        "location": {
            "en": "Norway",
            "no": "Norway",
            "fr": "Norvège",
            "it": "Norvegia",
            "sp": "Noruega",
            "de": "Norwegen",
            "jp": "ノルウェー"
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
            "jp": "山のある遊歩道にいるベンソン"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "ベンソンは積極性を広める"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "ベンソンは戦争の準備ができています"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "公共交通機関を利用するベンソン"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "ベンソンは彼が間違っているならあなたを刺します"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "ベンソン・チリンと彼の友人"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "ベンソンはキッチン家電です"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "ファンキーな橋の隣のベンソン"
        },
        "location": {
            "en": "Atlanterhavsveien, Norway",
            "no": "Atlanterhavsveien, Norway",
            "fr": "Atlanterhavsveien, Norvège",
            "it": "Atlanterhavsveien, Norvegia",
            "sp": "Atlanterhavsveien, Noruega",
            "de": "Atlanterhavsveien, Norwegen",
            "jp": "Atlanterhavsveien、ノルウェー"
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
            "jp": "カラフルな建物のベンソン"
        },
        "location": {
            "en": "Kristiansund, Norway",
            "no": "Kristiansund, Norway",
            "fr": "Kristiansund, Norvège",
            "it": "Kristiansund, Norvegia",
            "sp": "Kristiansund, Noruega",
            "de": "Kristiansund, Norwegen",
            "jp": "クリスティアンスン、ノルウェー"
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
            "jp": "ベンソン・ヴルーミン"
        },
        "location": {
            "en": "Frei, Norway",
            "no": "Frei, Norge",
            "fr": "Frei, Norvège",
            "it": "Frei, Norvegia",
            "sp": "Frei, Noruega",
            "de": "Frei, Norway",
            "jp": "フライ、ノルウェー"
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
            "jp": "クールな橋のあるベンソン"
        },
        "location": {
            "en": "Bergsøya, Norway",
            "no": "Bergsøya, Norway",
            "fr": "Bergsøya, Norvège",
            "it": "Bergsøya, Norvegia",
            "sp": "Bergsoya, Noruega",
            "de": "Bergsøya, Norwegen",
            "jp": "Bergsøya、ノルウェー"
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
            "jp": "彼の夢を追うベンソン"
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molda, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー"
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
            "jp": "古い家の前のベンソン"
        },
        "location": {
            "en": "Farstad, Norway",
            "no": "Farstad, Norway",
            "fr": "Farstad, Norvège",
            "it": "Farstad, Norvegia",
            "sp": "Farstad, Noruega",
            "de": "Farstad, Norwegen",
            "jp": "Farstad、ノルウェー"
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
            "jp": "ベンソンは空高く飛んでいます"
        },
        "location": {
            "en": "Alberta, Canada (on an airplane)",
            "no": "Alberta, Canada (på et fly)",
            "fr": "Alberta, Canada (dans un avion)",
            "it": "Alberta, Canada (in aereo)",
            "sp": "Alberta, Canadá (en un avión)",
            "de": "Alberta, Kanada (im Flugzeug)",
            "jp": "カナダ、アルバータ州（飛行機内）"
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
            "jp": "ベンソンは刑務所から脱出した"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "ベンソンは今弾薬です"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "考古学者、ベンソン"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "入り口のベンソン"
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー"
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
            "jp": "車のベンソン"
        },
        "location": {
            "en": "Bergsøya, Norway",
            "no": "Bergsøya, Norway",
            "fr": "Bergsøya, Norvège",
            "it": "Bergsøya, Norvegia",
            "sp": "Bergsoya, Noruega",
            "de": "Bergsøya, Norwegen",
            "jp": "Bergsøya、ノルウェー"
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
            "pi": "benson being a great lil nightlight",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, Norway"
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
            "pi": "benson is locked and loaded",
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, Norway"
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
            "pi": "benson looking longingly into the ocean from his turret",
        },
        "location": {
            "en": "Kvalvik Fort, Norway",
            "no": "Kvalvik Fort, Norway",
            "fr": "Fort de Kvalvik, Norvège",
            "it": "Forte di Kvalvik, Norvegia",
            "sp": "Fuerte de Kvalvik, Noruega",
            "de": "Festung Kvalvik, Norwegen",
            "jp": "Kvalvik Fort、ノルウェー",
            "pi": "Kvalvik Fort, Norway"
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
            "pi": "benson in front of a marina",
        },
        "location": {
            "en": "Kristiansund, Norway",
            "no": "Kristiansund, Norway",
            "fr": "Kristiansund, Norvège",
            "it": "Kristiansund, Norvegia",
            "sp": "Kristiansund, Noruega",
            "de": "Kristiansund, Norwegen",
            "jp": "クリスティアンスン、ノルウェー",
            "pi": "Kristiansund, Norway"
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
            "pi": "benson on a mountain",
        },
        "location": {
            "en": "Molde, Norway",
            "no": "Molde, Norway",
            "fr": "Molde, Norvège",
            "it": "Molde, Norvegia",
            "sp": "Molde, Noruega",
            "de": "Molde, Norwegen",
            "jp": "モルデ、ノルウェー",
            "pi": "Molde, Norway"
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
            "pi": "benson by the sea",
        },
        "location": {
            "en": "Helland, Norway",
            "no": "Helland, Norway",
            "fr": "Hellland, Norvège",
            "it": "Helland, Norvegia",
            "sp": "Helland, Noruega",
            "de": "Helland, Norwegen",
            "jp": "ノルウェー、ヘランド",
            "pi": "Helland, Norway"
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
            "pi": "benson is home",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, Norway"
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
            "pi": "benson on da barrel",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, Norway"
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
            "pi": "benson on a benson-sized bench",
        },
        "location": {
            "en": "Borgund, Norway",
            "no": "Borgund, Norge",
            "fr": "Borgund, Norvège",
            "it": "Borgund, Norvegia",
            "sp": "Borgund, Noruega",
            "de": "Borgund, Norwegen",
            "jp": "ノルウェー、ボルガンド",
            "pi": "Borgund, Norway"
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
            "pi": "benson has a rose for you <3",
        },
        "location": {
            "en": "Ålesund, Norway",
            "no": "Ålesund, Norway",
            "fr": "Ålesund, Norvège",
            "it": "Ålesund, Norvegia",
            "sp": "Ålesund, Noruega",
            "de": "Ålesund, Norwegen",
            "jp": "オーレスン、ノルウェー",
            "pi": "Ålesund, Norway"
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
            "pi": "benson in the car",
        },
        "location": {
            "en": "Ålesund, Norway",
            "no": "Ålesund, Norway",
            "fr": "Ålesund, Norvège",
            "it": "Ålesund, Norvegia",
            "sp": "Ålesund, Noruega",
            "de": "Ålesund, Norwegen",
            "jp": "オーレスン、ノルウェー",
            "pi": "Ålesund, Norway"
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
            "pi": "benson in the freezer aisle",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, Norway"
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
            "pi": "benson on the boardwalk",
        },
        "location": {
            "en": "Sykkylven, Norway",
            "no": "Sykkylven, Norway",
            "fr": "Sykkylven, Norvège",
            "it": "Sykkylven, Norvegia",
            "sp": "Sykkylven, Noruega",
            "de": "Sykkylven, Norwegen",
            "jp": "Sykkylven、ノルウェー",
            "pi": "Sykkylven, Norway"
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
            "pi": "benson in front of more mountains",
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
            "pi": "benson with some snow capped mountains",
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
            "pi": "benson staring at a beautiful waterfall",
        },
        "location": {
            "en": "Geirangerfjord, Norway",
            "no": "Geirangerfjord, Norge",
            "fr": "Geirangerfjord, Norvège",
            "it": "Geirangerfjord, Norvegia",
            "sp": "Fiordo de Geiranger, Noruega",
            "de": "Geirangerfjord, Norwegen",
            "jp": "ガイランゲルフィヨルド、ノルウェー",
            "pi": "Geirangerfjord, Norway"
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
            "pi": "Geiranger, Norway"
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
            "pi": "benson on a cliff",
        },
        "location": {
            "en": "Geiranger, Norway",
            "no": "Geiranger, Norway",
            "fr": "Geiranger, Norvège",
            "it": "Geiranger, Norvegia",
            "sp": "Geiranger, Noruega",
            "de": "Geiranger, Norwegen",
            "jp": "ガイランゲル、ノルウェー",
            "pi": "Geiranger, Norway"
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
            "pi": "road work ahead? well yeah, i sure hope it does",
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
            "pi": "benson with the king and queen of norway",
        },
        "location": {
            "en": "Det kongelige slott, Norway",
            "no": "Det kongelige slott, Norway",
            "fr": "Le Palais Royal, Norvège",
            "it": "Il Palazzo Reale, Norvegia",
            "sp": "El Palacio Real, Noruega",
            "de": "Der königliche Palast, Norwegen",
            "jp": "ノルウェー王宮",
            "pi": "The Royal Palace, Norway"
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
            "pi": "benson in an empty fountain",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson in the park",
        },
        "location": {
            "en": "Slottsparken, Oslo, Norway",
            "no": "Slottsparken, Oslo, Norway",
            "fr": "Slottsparken, Oslo, Norvège",
            "it": "Slottsparken, Oslo, Norvegia",
            "sp": "Slottsparken, Oslo, Noruega",
            "de": "Slottsparken, Oslo, Norwegen",
            "jp": "Slottsparken、オスロ、ノルウェー",
            "pi": "Slottsparken, Oslo, Norway"
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
            "pi": "benson in the sun",
        },
        "location": {
            "en": "Slottsparken, Oslo, Norway",
            "no": "Slottsparken, Oslo, Norway",
            "fr": "Slottsparken, Oslo, Norvège",
            "it": "Slottsparken, Oslo, Norvegia",
            "sp": "Slottsparken, Oslo, Noruega",
            "de": "Slottsparken, Oslo, Norwegen",
            "jp": "Slottsparken、オスロ、ノルウェー",
            "pi": "Slottsparken, Oslo, Norway"
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
            "pi": "benson is going shoe shopping",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson is cozy",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson in front of one of the last stave churches in norway",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, Norway"
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
            "pi": "benson in a museum cave",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, Norway"
        },
        "ltlo": [59.903239, 10.698164]
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
            "pi": "benson in a windowsill",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, Norway"
        },
        "ltlo": [59.903244, 10.698186]
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
            "pi": "benson is sewing",
        },
        "location": {
            "en": "Bygdøy, Oslo, Norway",
            "no": "Bygdøy, Oslo, Norway",
            "fr": "Bygdøy, Oslo, Norvège",
            "it": "Bygdøy, Oslo, Norvegia",
            "sp": "Bygdøy, Oslo, Noruega",
            "de": "Bygdoy, Oslo, Norwegen",
            "jp": "ビグドイ、オスロ、ノルウェー",
            "pi": "Bygdøy, Oslo, Norway"
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
            "pi": "benson is going shopping",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "benson has created a galaxy",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "feed me my coins mr freemannnnnnnnn",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson is very kind",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson is laying down (it just doesnt look like it)",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "benson loves flowers",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "benson is by the street",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "benson is now the torch",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "beckham holds benson",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "USA"
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
            "pi": "benson is in the window!!",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson is at the park",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson is feeling grate",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson loves axolotls",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "USA"
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
            "pi": "benson is god",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "USA"
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
            "pi": "benson is at the convention center",
        },
        "location": {
            "en": "Seattle, Washington",
            "no": "Seattle, Washington",
            "fr": "Seattle, Washington",
            "it": "Seattle, Washington",
            "sp": "Seattle, Washington",
            "de": "Seattle, Washington",
            "jp": "ワシントン州シアトル",
            "pi": "Seattle, Washington"
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
            "pi": "benson is in ikea",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "USA"
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
            "pi": "benson is looking good",
        },
        "location": {
            "en": "Seattle, Washington",
            "no": "Seattle, Washington",
            "fr": "Seattle, Washington",
            "it": "Seattle, Washington",
            "sp": "Seattle, Washington",
            "de": "Seattle, Washington",
            "jp": "ワシントン州シアトル",
            "pi": "Seattle, Washington"
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
            "pi": "Gåseid, Norway"
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
            "pi": "benson broke it",
        },
        "location": {
            "en": "USA",
            "no": "USA",
            "fr": "États-Unis",
            "it": "Stati Uniti",
            "sp": "Estados Unidos",
            "de": "USA",
            "jp": "アメリカ合衆国",
            "pi": "USA"
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
            "pi": "benson is screaming",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson along a cool path",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson loves these paths",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson in front of apartment buildings",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson loves the tube",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "benson has gotten off a train",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
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
            "pi": "Oslo, Norway"
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
            "pi": "benson is in the grass in a park and he loves it",
        },
        "location": {
            "en": "Oslo, Norway",
            "no": "Oslo, Norway",
            "fr": "Oslo, Norvège",
            "it": "Oslo, Norvegia",
            "sp": "Oslo, Noruega",
            "de": "Oslo, Norwegen",
            "jp": "ノルウェー、オスロ",
            "pi": "Oslo, Norway"
        },
        "ltlo": [59.924994, 10.706894]
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
        "person": "mother",
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
        "person": "finn",
        "rating": 5
    },





]
