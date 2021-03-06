$(document).ready(function() {
  pannellum.viewer('panorama', {

    "default": {
      "author": "ProTibet",
      "firstScene": "RoadToKee",
      "sceneFadeDuration": 1000
    },

    "scenes": {
      "RoadToKee": {
        "title": "Cesta do kláštera Ki",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/pqqS10T.jpg",
        "autoLoad": true,
        "hfov": 360,
        "hotSpots": [
          {
            "pitch": -12,
            "yaw": 170,
            "type": "info",
            "text": "Cesta vedoucí do Kiberu - Oblast Spiti a Ladaku spadá pod indickou vládu a díky tomu byly v těchto oblastech zachovány kulturní tradice, které v zemi sněhu byly a jsou stále utlačovány pod vlivem Kulturní revoluce a čínské normalizace."
          },
          {
            "pitch": 6,
            "yaw": -14,
            "type": "info",
            "text": "Klášter Ki - Věří se, že kopec, na kterém je klášter postaven, představuje palác tantrického božstva Čakrasamvary. Ki gompa neboli „klášter uprostřed mandaly“ je také znám jako Norbu Gephel „Klenot, který rozšiřuje ctnosti“."
          },
          {
            "pitch": -20,
            "yaw": 40,
            "type": "info",
            "text": "Řeka Spiti - Údolí Spiti je rozděleno do dvou oblastí s rozličnou morfologií. Na jihu je údolí zúžené a více skalnaté, na severu je rozšířenější a nachází se zde více vegetace vhodné pro pastvu."
          },
          {
            "pitch": 7,
            "yaw": 32,
            "type": "info",
            "text": "Klimatické podmínky - Spiti se nachází ve výšce 3500 m n. m.  Klimatické podmínky jsou typické pro vysokohorské pouštní oblasti – suché s minimálním množstvím dešťových srážek. Období letních měsíců, kdy není zem pokrytá sněhem, se dá odhadnout na 5 měsíců od května do října. V této letní sezóně se v údolí při jasném počasí pohybují teploty kolem 15 – 25 stupni C, ostré slunce a studený vítr. Při oblačnosti jsou podmínky méně hostinné."
          },
          {
            "pitch": -14,
            "yaw": 10,
            "type": "info",
            "text": "Vesnice Ki - Ki se nachází v údolí Spiti v severozápadním indickém Himálaji. Pustá a syrová krajina překypující krásnými výhledy hrála klíčovou roli při formování kulturních zvyklostí Tibeťanů a místních obyvatel."
          },
          {
            "pitch": -3,
            "yaw": -26,
            "type": "scene",
            "text": "Cesta ke Ki",
            "sceneId": "OuterGate"
          }
        ]
      },

      "OuterGate": {
        "title": "Vnější brána kláštera Ki",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/IoCySNG.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 80,
        "hotSpots": [
          {
            "pitch": -22,
            "yaw": 106,
            "type": "info",
            "text": "Kora - Kora je rituální obcházení chrámů, klášterů, stůp nebo posvátných hor. Obchází se vždy po směru hodinových ručiček, neboť toto je směr, kterým dle starých buddhistických textů uctívá slunce horu Méru, která je středem vesmíru. Rovněž řeky, které pramení na jejím úpatí se stáčejí v tomto směru. Prováděním kory je dle buddhistů pročišťována negativní karma vykonaná tělem."
          },
          {
            "pitch": -22,
            "yaw": 146,
                      "type": "play",
            "text": "Hra na Tibetské misky",
            "audio": "tibetan-bowls.mp3"
          },
          {
            "pitch": -26,
                      "yaw": 200,
                      "type": "info",
            "text": "Políčko, pěstování, zavlažování - Většina místních obyvatel této oblasti se zabývá drobným farmařením, které je v nadmořské výšce 3500 m n. m. ztíženo zkráceným vegetačním obdobím na 4 měsíce. Místní farmáři pěstují brambory, hrášek, listovou zeleninu, obilí. Nehostinná půda musí byt dobře zavlažována a vyživována, aby byla úrodná."
          },
          {
            "pitch": 22,
            "yaw": 28,
            "type": "info",
            "text": "Tři vrcholky nad klášterem - Tři skalní výběžky nad klášterem představují obydlí tří božstev ochraňující klášter: Čamtsing, Lhamo, Nezer"
          },
          {
            "pitch": -10,
            "yaw": 72,
            "type": "scene",
            "text": "Pokračujte směrem do kláštera",
            "sceneId": "SchoolCourtyard"
          },
          {
            "pitch": -10,
            "yaw": -92,
            "type": "scene",
            "text": "Cesta do Kiberu",
            "sceneId": "RoadToKee"
          }
        ]
      },

      "SchoolCourtyard": {
        "title": "Školní dvůr",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/YAjk3vC.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 108,
        "hotSpots": [
          {
            "pitch": 66,
            "yaw": 164,
            "type": "info",
            "text": "Buddhistická vlajka - Tato vlajka byla navržena a uvedena na Srí Lance ke konci 19. století. V roce 1952 pak byla přijata Světovým společenstvím buddhistů jako mezinárodní buddhistická vlajka. A dnes se s ní můžeme setkat v celém buddhistickém světě. Její barvy odkazují k duhové auře, kterou zazářil Buddha v okamžik své nirvány a zároveň odkazují ke kvalitám buddhistické praxe jako jsou soucit, moudrost, vyhýbání se extrémům a tak dále."
          },
          {
            "pitch": 1,
            "yaw": 222,
            "type": "info",
            "text": "Debaty - Debaty tvoří součást tradičního klášterního vzdělání – mají za účel ověřit logické uvažování a argumentační schopnosti. Ostatní mniši kladou otázky tázané osobě, která studovala buddhistické texty a ta argumentuje na otázky."
          },
          {
            "pitch": 8,
            "yaw": 88,
            "type": "info",
            "text": "Budova školy – klášterní škola poskytuje základní, střední a vyšší vzdělání. Škola má celkem 105 studentů (45 nižší ročníky a 60 – buddhistická filosofie, vyšší ročníky).  Usilují o zavádění moderních předmětů (IT, AJ). Rozpočet školy na rok je 1 441 750RS (převažující položky: strava, platby učitelů, učebnice), příspěvek MOST ProTibet tvoří 75 % rozpočtu."
          },
          {
            "pitch": -44,
            "yaw": -102,
            "type": "info",
            "text": "Nádvoří pro čham - Rituální tanec, má podobně jako mnoho \"typických buddhistických tradic\" původ v předbuddhistickém tibetském náboženství bon. Téměř v každém klášteře se provádí alespoň jednou do roka a tato silná náboženská představení jsou vždy důvodem setkání a trhů pro obyvatele z širokého okolí. Existuje mnoho druhů a variací čhamových tanců. V klášteře Ki se jednou za dva roky v létě provádí Gju Tor - Devět obětin, který je zasvěcen božstvu Jámantakovi a jeho doprovodu."
          },
          {
            "pitch": -2,
            "yaw": 52,
            "type": "scene",
            "text": "Navštivte školní třídu",
            "sceneId": "Classroom"
          },
          {
            "pitch": -10,
            "yaw": -108,
            "type": "scene",
            "text": "K vnější bráně",
            "sceneId": "OuterGate"
          },
          {
            "pitch": -10,
            "yaw": -120,
            "type": "scene",
            "text": "K vnitřní bráně",
            "sceneId": "InnerGate"
          },
          {
            "pitch": 25,
            "yaw": 36,
            "type": "scene",
            "text": "Vylézt kopec",
            "sceneId": "HillAboveKee"
          }
         ]
      },

      "HillAboveKee": {
        "title": "Kopec nad klášterem Ki",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/jSUVKGQ.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 108,
        "hotSpots": [
          {
            "pitch": -18,
            "yaw": 130,
            "type": "info",
            "text": "Stupa - příbytek ochranného božstva"
          },
          {
            "pitch": -17,
            "yaw": -32,
            "type": "info",
            "text": "Vesnice Gete"
          },
          {
            "pitch": -1,
            "yaw": 231,
            "type": "info",
            "text": "Praporky - Modlitební praporky a jejich tradice vznikla již v dávném Tibetu, a pochází z tradice Bön, tehdy se však na praporky netiskly modlitby. Pět barev představuje pět elementů/živlů, nebo také pět ctností a moudrostí. Dle vyobrazených božstev je uvedena i adekvátní modlitba na daném praporku. Tradice věří, že vítr se opírá do modliteb a přání uvedených na praporku a přináší je všem bytostem. Vyvěšují se na vysoce položená a posvátná místa."
          },
          {
            "pitch": -18,
            "yaw": 252,
            "type": "info",
            "text": "Oheň, rituály, vonné bylinky - Na tomto vrcholku probíhají rituály, při kterých se pálí vonné bylinky, mouka a další substance. Cílem je obětovat ochráncům nauk. Jedná se o ochranné a očistné rituály."
          },
          {
            "pitch": -10,
            "yaw": 66,
            "type": "info",
            "text": "Cesta do Šimly přes Kinaur"
          },
          {
            "pitch": -24,
            "yaw": 110,
            "type": "scene",
            "text": "Zpátky ke Ki",
            "sceneId": "SchoolCourtyard"
          }
        ]
      },

      "InnerGate": {
        "title": "Brána do kláštera Ki",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/OfHsBBY.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": -9,
            "yaw": 28,
            "type": "play",
            "text": "Spustit uvítání mnicha",
            "audio": "tanzin-loud.mp3"
          },
          {
            "pitch": 28,
            "yaw": -12,
            "type": "info",
            "text": "Drahocenný slunečník - je symbolem ochrany před žárem znečištění - třemi hlavními nečistotami mysli, tj. ulpíváním, hněvem a nevědomostí."
          },
          {
            "pitch": 28,
            "yaw": 58,
            "type": "info",
            "text": "Zlaté ryby - jsou obě stejně postavené, většinou mají hlavy dole. V duchovní oblasti se uvádí, že ryby symbolizují vysvobození z oceánu samsáry – koloběhu znovuzrození."
          },
          {
            "pitch": 18,
            "yaw": 58,
            "type": "info",
            "text": "Lotosový květ - představuje vnitřní čistotu. Kořenící v bahně, přesto neposkvrněný, takové je poselství květu symbolizujícího moudrost."
          },
          {
            "pitch": 5,
            "yaw": 58,
            "type": "info",
            "text": "Nekonečný uzel - je grafický symbol vzájemně propletený bez začátku a konce, symbolizuje v duchovní rovině nekonečnou moudrost a soucit, jako dvě klíčové kvality vedoucí k probuzení."
          },
          {
            "pitch": -10,
            "yaw": 58,
            "type": "info",
            "text": "Kolo dharmy (Dharmačakra) symbolizuje výklad Buddhova učení."
          },
          {
            "pitch": 18,
            "yaw": -12,
            "type": "info",
            "text": "Číše velkého pokladu (váza) - na duchovní úrovni je číše spojována s mimořádnými schopnostmi a v tibetském buddhismu se používá pro různé tantrické obřady. Je symbolem vyplnění přání."
          },
          {
            "pitch": 6,
            "yaw": -12,
            "type": "info",
            "text": "Pravotočivá ulita - je předmět dokonalých tvarů a dokonalého zvuku. Jako symbol starého rituálního předmětu představuje dharmu, která se šíři do všech směrů formou zvuku."
          },
          {
            "pitch": -10,
            "yaw": -12,
            "type": "info",
            "text": "Praporec vítězství - symbolizuje vítězství moudrosti nad překážkami nevědomosti."
          },
          {
            "pitch": 20,
            "yaw": -50,
            "type": "info",
            "text": "Lochen Tulku Rinpoče – je 19. inkarnací velkého překladatele Rincehn Sangpa (958 – 1055), který je od počátku držitelem trůnu v klášteře Ki. Patří mezi jedny z největších duchovních učitelů svého regionu a jeho historická vtělení jsou známá v tibetské buddhistické tradici školy Gelugpa široko daleko."
          },
          {
            "pitch": -24,
            "yaw": 220,
            "type": "scene",
            "text": "Ke škole",
            "sceneId": "SchoolCourtyard"
          },
          {
            "pitch": -36,
            "yaw": 15,
            "type": "scene",
            "text": "Vstupte na hlavní nádvoří",
            "sceneId": "CentralCourtyard"
          }
        ]
      },

      "CentralCourtyard": {
        "title": "Centrální nádvoří",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/zVag0NA.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": -24,
            "yaw": 360,
            "type": "info",
            "text": "Mniši v čhamových maskách - Masky se vyrábějí z nadrceného papíru technikou papírmaš, protože dřevěné by byly příliš těžké."
          },
          {
            "pitch": -22,
            "yaw": 328,
            "type": "info",
            "text": "Meme"
          },
          {
            "pitch": -90,
            "yaw": 360,
            "type": "info",
            "text": "Kruh života"
          },
          {
            "pitch": -10,
            "yaw": -59,
            "type": "info",
            "text": "Poštovní schránka"
          },
          {
            "pitch": 8,
            "yaw": -216,
            "type": "info",
            "text": "Deska – Klášter byl v roce 2000 poctěn návštěvou 14. dalajlamy při příležitosti konání Kalačakry. Sjelo se zde z okolí na více než 30 000 lidí. V té době se tvrdilo, že je JSD nejblíže svému domovu Tibetu – 16 kilometrů od tibetských hranic."
          },
          {
            "pitch": 24,
            "yaw": 20,
            "type": "info",
            "text": "Solární panel"
          },
          {
            "pitch": -10,
            "yaw": -20,
            "type": "info",
            "text": "Nejstarší chrám – Místnost s velkým modlitebním mlýnkem (mani khorlo) místnost, kterou střežil nejstarší mnich v klášteře Meme"
          },
          {
            "pitch": -22,
            "yaw": 234,
            "type": "scene",
            "text": "Do kuchyně!",
            "sceneId": "Kitchen"
          },
          {
            "pitch": -32,
            "yaw": 50,
            "type": "info",
            "text": "Vysoký sloup – Tradičně umístěn na nádvořích klášterů s vyvěšenými praporci."
          },
          {
            "pitch": 1,
            "yaw": 108,
            "type": "scene",
            "text": "Hlavní chrám",
            "sceneId": "MainPrayerHallEntrance"
          },
          {
            "pitch": -24,
            "yaw": 134,
            "type": "scene",
            "text": "K vnitřní bráně",
            "sceneId": "InnerGate"
          },
          {
            "pitch": -4,
            "yaw": 162,
            "type": "scene",
            "text": "Manufaktura",
            "sceneId": "CandlesManufactory"
          },
          {
            "pitch": -32,
            "yaw": -80,
            "type": "scene",
            "text": "Navštívit mnicha",
            "sceneId": "MonksRoom"
          },
          {
            "pitch": -2,
            "yaw": -80,
            "type": "scene",
            "text": "Střecha ubytovny",
            "sceneId": "DormitoryRoof"
          }
        ]
      },

      "CandlesManufactory": {
        "title": "Manufaktura na svíčky",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/rZxWLKs.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": -46,
            "yaw": 260,
            "type": "info",
            "text": "Máslová lampička - obětování zdroje světla je rozšířené mezi takřka všemi náboženstvími. V tibetském buddhismu se světlo obětuje ve formě máslových lamp. Ty se vyrábějí z čistého, přepuštěného másla. Lampa je symbolem moudrosti a osvícení, konce utrpení. Stejně jako její světlo zahání tmu, tak i světlo Buddhových nauk rozhání temnotu nevědomosti."
          },
          {
            "pitch": -26,
            "yaw": 210,
            "type": "info",
            "text": "Olej a máslo"
          },
          {
            "pitch": 4,
            "yaw": 40,
            "type": "shop",
            "text": "Tibetský ozdobný závěs – odkaz na eshop",
            "URL": "http://www.shop.protibet.cz/kategorie-produktu/buddhisticke/tibetske-dvere/"
          },
          {
            "pitch": -6,
            "yaw": 48,
            "type": "scene",
            "text": "Na hlavní střechu",
            "sceneId": "CentralRoof"
          },
          {
            "pitch": -14,
            "yaw": 196,
            "type": "scene",
            "text": "Centrální nádvoří",
            "sceneId": "CentralCourtyard"
          }
        ]
      },

      "Kitchen": {
        "title": "Kuchyně",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/1A6cYzH.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": 130,
            "yaw": 40,
            "type": "info",
            "text": "Spálený strop - Plameny z pece někdy sahají velmi vysoko a na stropě je to za ta dlouhá léta dobře vidno."
          },
          {
            "pitch": -33,
            "yaw": 214,
            "type": "info",
            "text": "Odpadové hospodářství – V Asii a v Indii speciálně je odpadové hospodářství pojato zcela jinak, než jak jsme zvyklí. Odpadky jsou odhozeny na zem a následně bývají spáleny buď na příslušném místě mimo obydlí, nebo v kamnech."
          },
          {
            "pitch": -8,
            "yaw": 254,
            "type": "info",
            "text": "Hrnec na momo - Kaskádový hrnec s otvory ve dně, kterými při pečení momo prochází horká pára."
          },
          {
            "pitch": -8,
            "yaw": 240,
            "type": "info",
            "text": "Mantry - Již vybledlá mantra nahoře je mantrou čištící od zlých duchů. Ta dobře viditelná je prostým přáním do Nového roku."
          },
          {
            "pitch": -40,
            "yaw": 180,
            "type": "info",
            "text": "Palivo – Dřevo je vzácná a drahá komodita ve vyprahlé horské poušti. Dováží se z daleka a každým rokem je dražší."
          },
          {
            "pitch": -34,
            "yaw": 180,
            "type": "shop",
            "text": "Přispějte na otop. Kliknutím otevřete e-shop.",
            "URL": "http://www.shop.protibet.cz/obchod/darovaci-certifikaty/certifikat-otop-na-zimu-2/"
          },
          {
            "pitch": -18,
            "yaw": 102,
            "type": "info",
            "text": "Mnišská strava - Mniši se stravují prostě a levně. Vesměs mají ve stravě kombinaci rýže, čočky, mouky, zeleniny, vajíčka. Příležitostně snědí trochu masa, které jim v krušné zimě dodá živiny."
          },
          {
            "pitch": -14,
            "yaw": 200,
            "type": "info",
            "text": "Kuchyňské hrnce na peci – Tradiční potravou je rýže s čočkou (dhal), plněné taštičky (momo) napařované v páře, sukovité knedlíčky (tingmo), sladký a slaný čaj, a vydatná polévka thukpa."
          },
          {
            "pitch": -14,
            "yaw": 146,
            "type": "scene",
            "text": "Hlavní nádvoří",
            "sceneId": "CentralCourtyard"
          },
          {
            "pitch": -14,
            "yaw": 136,
            "type": "scene",
            "text": "Sýpka",
            "sceneId": "Pantry"
          }
        ]
      },

      "Pantry": {
        "title": "Sýpka",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/gGpfDfS.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": -58,
            "yaw": 38,
            "type": "info",
            "text": "Pytle s tsampou - Ke kuchyni tradičně patří i místnost pro skladování mouky, v tomto případě tsampy – pražený mletý ječmen. Tento tradiční pokrm zasytí a říká se, že pražený mletý ječmen je i tělu prospěšný. Tato místnost je jednou z těch, do kterých se žádný turista jen tak nepodívá."
          },
          {
            "pitch": 2,
            "yaw": 136,
            "type": "info",
            "text": "Nízké dveře – Jsou přítomny skoro ve všech starých klášterech a obydlích. Vypráví se, že když někdo zemře, duše zemřelého se nemůže v zádech sklonit a dveřmi projít."
          },
          {
            "pitch": -14,
            "yaw": 136,
            "type": "scene",
            "text": "Zpět do kuchyně",
            "sceneId": "Kitchen"
          }
        ]
      },

      "MonksRoom": {
        "title": "Pokoj mnichů",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/zCZqpvZ.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 26,
        "hotSpots": [
          {
            "pitch": -5,
            "yaw": 160,
            "type": "info",
            "text": "Mnich – Mniši se intenzivně věnují studiu textů a modlitbám. Pijí hodně horkou vodu, která je zahřeje a sytí se tsampou, praženou ječnou moukou. Jsou velmi skromní, štědří a laskaví."
          },
          {
            "pitch": 4,
            "yaw": -106,
            "type": "info",
            "text": "Obrázek Jeho Svatosti dalajlamy – Klášter patří do linie Gelugpa – jejíž hlavním držitelem je 14. dalajlama"
          },
          {
            "pitch": -48,
            "yaw": -88,
            "type": "info",
            "text": "Obětní misky - Každý den je na oltář Třem klenotům věnováno sedm obětních misek s vodou."
          },
          {
            "pitch": 0,
            "yaw": 28,
            "type": "info",
            "text": "Pohostinost – Přestože místní lidé nevlastní mnoho, rádi se s Vámi podělí i o to málo, které mají. Pohostinost je jim vlastní. Jejich místnosti většinou zdobí pouze měděné nádobí v kuchyni a oltář. "
          },
          {
            "pitch": 0,
            "yaw": 50,
            "type": "info",
            "text": "Komín – Většina místních domácností a místností má ve stropě díru, aby skrze ni mohli protáhnout komín."
          },
          {
            "pitch": -60,
            "yaw": 38,
            "type": "shop",
            "text": "Otop - Zimy jsou v horách tuhé, izolace téměř žádná. Mniši i místní jsou velmi odolní, ale jejich oblečení je skromné. Přispějte na otop místních obyvatel. Kliknutím otevřete e-shop v novém okně",
            "URL" : "http://www.shop.protibet.cz/obchod/darovaci-certifikaty/certifikat-otop-na-zimu-2/"
          },
          {
            "pitch": 0,
            "yaw": -96,
            "type": "info",
            "text": "Vypínače - Elektřina v oblasti jde, ale pravidelně každý den vypadává. Proto mají mniši v pokojích solární svítilny, kamínka na tuhá paliva a také plyn na vaření."
          },
          {
            "pitch": -22,
            "yaw": 2,
            "type": "info",
            "text": "Plynová bomba – Osvědčený zdroj pro vaření, který je využíván většinou domácností v oblasti Asie."
          },
          {
            "pitch": -8,
            "yaw": 106,
            "type": "scene",
            "text": "Zpět na nádvoří",
            "sceneId": "CentralCourtyard"
          }
        ]
      },

      "MainPrayerHallEntrance": {
        "title": "Hlavní chrám - vchod",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/NUiQlmM.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 146,
        "pitch": -10,
        "hotSpots": [
          {
            "pitch": -22,
            "yaw": 12,
            "type": "info",
            "text": "Púdža - modlitby mnichů. Průběh ranní Púdžy: chrám se ráno otevře a sejdou se zde starší i mladší mniši. Začnou recitovat určité sutry (buddhistické texty) a rytmický zpěv probíhá minimálně hodinu, spíše dvě. Při těchto zpěvech se používají i rituální předměty jako je zvonek (dilbu) a dordže, bubny, trumpetky, činely. V průběhu ranní Púdžy se nalévá slaný čaj a snídá pražený ječmen, který je mnichům servírován v průběhu mladšími."
          },
          {
            "pitch": -22,
            "yaw": 62,
            "type": "play",
            "text": "Přehrát náhrávku z Púdžy.",
            "audio": "prayer.mp3"
          },
          {
            "pitch": -16,
            "yaw": -98,
            "type": "info",
            "text": "Buben - Jeden z nástrojů využívaný pro ceremonie."
          },
          {
            "pitch": -28,
            "yaw": -160,
            "type": "donate",
            "text": "Donation box - přispějte",
                      "overlay": "http://www.protibet.cz/kee/img/boxshine.png",
                      "URL": "http://www.protibet.cz/zapojte-se/prispejte/"
          },
          {
            "pitch": -56,
            "yaw": 140,
            "type": "scene",
            "text": "Hlavní chrám - střed",
            "sceneId": "MainPrayerHallCenter"
          },
          {
            "pitch": -41,
            "yaw": 64,
            "type": "scene",
            "text": "Hlavní chrám - levé křídlo",
            "sceneId": "MainPrayerHallLeftWing"
          },
          {
            "pitch": -21,
            "yaw": -38,
            "type": "scene",
            "text": "Zpátky na nádvoří",
            "sceneId": "CentralCourtyard"
          }
        ]
      },

      "MainPrayerHallCenter": {
        "title": "Hlavní chrám - střed",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/1iA5xqo.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 126,
        "hotSpots": [
          {
            "pitch": -28,
            "yaw": -60,
            "type": "info",
            "text": "Buben - Hudební nástroj využívaný při Púdžách."
          },
          {
            "pitch": -30,
            "yaw": -3,
            "type": "info",
            "text": "Dilbu a Dordže - Dordže je rituální předmět, který se používá dohromady se zvonkem neboli Dilbu. Dordže symbolizuje nezničitelnou povahu moudrosti a podstaty mysli a Dilbu je snoubením mužského (horní část) a ženského (dolní část) principu."
          },
          {
            "pitch": -20,
            "yaw": 6,
            "type": "info",
            "text": "Váza – Rituální předmět využívaný při tantrických rituálech pro požehnání."
          },
          {
            "pitch": -18,
            "yaw": 36,
            "type": "info",
            "text": "Trůn - Čestné místo pro Rinpočeho – na obrázku mladičký Lochen Tulku Rinpoče."
          },
          {
            "pitch": -18,
            "yaw": 216,
            "type": "info",
            "text": "Trůn - Čestné místo pro představeného kláštera – hlavního lamu, který vede modlitby."
          },
          {
            "pitch": -8,
            "yaw": 126,
            "type": "info",
            "text": "Čelní trůn - Čestné místo pro držitele linie, v tomto případě buddhistická linie Gelugpa, jímž je JS dalajlama."
          },
          {
            "pitch": -18,
            "yaw": 100,
            "type": "info",
            "text": "Khatag - bílý šál zdobený 8 šťastnými symboly, který se nabízí vysoce postaveným duchovním jako symbol úcty a uznání. Daruje se také na oltáře a posvátná místa. Jedná se o tibetskou tradici."
          },
          {
            "pitch": 4,
            "yaw": -142,
            "type": "info",
            "text": "Thangka - Thangky jsou tradiční tibetské malby božstev rámované v brokátu. Tato forma je nejjednodušší na transport, prostě se svine a zaváže. Jednoduché přenášení obrazů bylo a je stále podstatné pro nomádské obyvatelstvo a cestující lámy."
          },
          {
            "pitch": -62,
            "yaw": 82,
            "type": "scene",
            "text": "Hlavní chrám - levé křídlo",
            "sceneId": "MainPrayerHallLeftWing"
          },
          {
            "pitch": -52,
            "yaw": -66,
            "type": "scene",
            "text": "Hlavní chrám - vstup",
            "sceneId": "MainPrayerHallEntrance"
          }
        ]
      },

      "MainPrayerHallLeftWing": {
        "title": "Hlavní chrám - levé křídlo",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/CMeN7YU.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 86,
        "hotSpots": [
          {
            "pitch": -22,
            "yaw": 80,
            "type": "info",
            "text": "Torma – Obětina jídla zhotovená z těsta, obvykle z mouky a vody a másla. Jsou zdobeny plastickými vzory a soškami. Jejich vzhled, tvar, barva i náročnost zdobení závisí na účelu, pro který jsou vyráběny a rovněž na konkrétní linii tibetského buddhismu."
          },
          {
            "pitch": -16,
            "yaw": 102,
            "type": "info",
            "text": "Mandala - Schematické zobrazení paláce určitého buddhistického božstva nahlíženým seshora. Její tvar, rozměry, barvy jakož i všechny jednotlivé symboly mají přesně daný řád, a není povoleno se od něj v nepatrnosti odchýlit. Mandala je obkroužená ohněm moudrosti, který brání vstupu nepovolaným. Dále se zde nachází brány střežené ochránci, za nimi pak parky a zahrady a samotný palác. Božstva vždy sídlí v jeho středu, obklopeny dalšími božstvy, buddhy a bodhisattvy."
          },
            {
            "pitch": -18,
            "yaw": 142,
            "type": "info",
            "text": "Obětní misky - Obětních misek se předkládá sedm, protože sedm je příznivé číslo pro obětiny. Každé ráno se naplní čerstvou vodou a večer opět vylijí a obrátí dnem vzhůru, neboť není zdvořilé předkládat před jakékoli hosty prázdné talíře nebo misky, tím víc, jsou-li těmito \"hosty\" Buddha, bodhisattvové a božstva."
          },
          {
            "pitch": 7,
            "yaw": 117,
            "type": "info",
            "text": "Buddhistické texty - Tibetské knihy se tisknou na podlouhlé listy papíru, nesvazují se, ale jsou dány mezi pevné desky s označením titulu a ovázány látkovým čtvercem. Formát tibetských knih, tedy podlouhlé nesvázané listy, vychází z indických knih psaných na palmové listy, které se do Tibetu dostaly během začátku šíření buddhismu."
          },
          {
            "pitch": 3,
            "yaw": 169,
            "type": "info",
            "text": "Květiny – Květiny patří mezi vzácné obětiny, protože v regionu Himálaje rostou minimálně."
          },
          {
            "pitch": -58,
            "yaw": 204,
            "type": "scene",
            "text": "Hlavní chrám - střed",
            "sceneId": "MainPrayerHallCenter"
          },
          {
            "pitch": -48,
            "yaw": 284,
            "type": "scene",
            "text": "Hlavní chrám - vstup",
            "sceneId": "MainPrayerHallEntrance"
          }
        ]
      },

      "DormitoryRoof": {
        "title": "Střecha ubytovny",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/Dj7Me3b.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 146,
        "hotSpots": [
          {
            "pitch": -19,
            "yaw": 288,
            "type": "scene",
            "text": "Na hlavní nádvoří",
            "sceneId": "CentralCourtyard"
          },
          {
            "pitch": 20,
            "yaw": 20,
            "type": "scene",
            "text": "Jít na kopec",
            "sceneId": "HillAboveKee"
          },
          {
            "pitch": -15,
            "yaw": -172,
            "type": "info",
            "text": "Vesnice Kurik"
          },
          {
            "pitch": -12,
            "yaw": -216,
            "type": "info",
            "text": "Vesnice Rangrik"
          },
          {
            "pitch": -13,
            "yaw": -223,
            "type": "info",
            "text": "Klášterní škola Kowang – Klášterní škola pro dívky, kterou od roku 2006 podporují čeští dárci."
          },
          {
            "pitch": -21,
            "yaw": 120,
            "type": "info",
            "text": "Altánek se sochou Buddhy a jeho učnů"
          }
        ]
      },

      "CentralRoof": {
        "title": "Střecha",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/GAFRwRv.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 106,
        "hotSpots": [
          {
            "pitch": -19,
            "yaw": 288,
            "type": "scene",
            "text": "Na hlavní nádvoří",
            "sceneId": "CentralCourtyard"
          },
          {
            "pitch": -19,
            "yaw": 40,
            "type": "scene",
            "text": "Vstup do malého chrámu",
            "sceneId": "SmallPrayerHall"
          },
          {
            "pitch": -14,
            "yaw": 138,
            "type": "scene",
            "text": "Hlavní střecha",
            "sceneId": "MainRoof"
          },
          {
            "pitch": 0,
            "yaw": 95,
            "type": "info",
            "text": "Zimchung – bývalá rezidence Rinpočeho."
          }
        ]
      },

      "SmallPrayerHall": {
        "title": "Malý chrám - chrám ochránců",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/EWx7dre.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 88,
        "hotSpots": [
          {
            "pitch": -14,
            "yaw": 258,
            "type": "scene",
            "text": "Jít ven",
            "sceneId": "CentralRoof"
          },
          {
            "pitch": -40,
            "yaw": 312,
            "type": "donate",
            "text": "Darovat",
                      "URL": "http://www.protibet.cz/zapojte-se/prispejte/"
          },
          {
            "pitch": -89,
            "yaw": 85,
            "type": "info",
            "text": "Šest ornamentů Náropy – Posvátné kostěné ornamenty velkého učence Náropy."
          },
          {
            "pitch": 10,
            "yaw": 170,
            "type": "info",
            "text": "Lochen Tulku Rinpoče – současná podoba Rinpočeho."
          },
          {
            "pitch": 3,
            "yaw": 107,
            "type": "info",
            "text": "Tantrické ornamenty – Posvátné kostěné ornamenty velkého učence Náropy na obraze."
          },
          {
            "pitch": -9,
            "yaw": 78,
            "type": "info",
            "text": "Ochránci - ochránci nauk vystupují ve svých hrůzu nahánějících podobách, aby zastrašili a zničili démony. Mnoho z ochránců je pouze hněvivým projevem jinak pokojného buddhy, či bodhisattvy. Ti se takto objevují, aby účiněji ochránili cítící bytosti."
          }
        ]
      },

      "MainRoof": {
        "title": "Hlavní střecha",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/ehaNS8i.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 88,
        "hotSpots": [
          {
            "pitch": -24,
            "yaw": -2,
            "type": "scene",
            "text": "Na centrální střechu",
            "sceneId": "CentralRoof"
          },
          {
            "pitch": -18,
            "yaw": 32,
            "type": "info",
            "text": "Vesnice Ki"
          },
          {
            "pitch": -34,
            "yaw": 202,
            "type": "info",
            "text": "Tajný tunel - V období příprav kláštera na vzácnou událost Kalačakry v roce 2000 byl obejvený tunel, který spojuje horní část kláštera se základnou kopce. Tento tajný tunel sloužil zejména k dopravě vody do kláštera."
          },
          {
            "pitch": -8,
            "yaw": -10,
            "type": "info",
            "text": "Makara - jedna ze tří mýtických bytostí harmonie. Tři mýtické bytosti harmonie. Vodní netvor, mořský drak, který bývá často ztotožňován s krokodýlem - čelist krokodýla, chobot slona, kly a uši divokého kance, šupinaté tělo ryby, ocas páva. Symbolizuje prvek vody a proto často jeho hlava zdobí střechy jako chrlič."
          },
          {
            "pitch": -8,
            "yaw": -10,
            "type": "info",
            "text": "Chrlič"
          },
          {
            "pitch": -10,
            "yaw": 68,
            "type": "info",
            "text": "Vesnice Kurik"
          },
          {
            "pitch": -8,
            "yaw": 24,
            "type": "info",
            "text": "Vesnice Rangrik"
          }
        ]
      },

      "Classroom": {
        "title": "Třída",
        "type": "equirectangular",
        "panorama": "http://i.imgur.com/ogZrsFE.jpg",
        "autoLoad": true,
        "hfov": 360,
        "yaw": 88,
        "hotSpots": [
          {
            "pitch": -24,
            "yaw": -46,
            "type": "scene",
            "text": "Zpátky na školní dvůr",
            "sceneId": "SchoolCourtyard"
          },
          {
            "pitch": -28,
            "yaw": 120,
            "type": "info",
            "text": "Průměrný počet žáků ve třídě je 16. Ročně přijímají ke studiu 6-7 studentů."
          },
          {
            "pitch": -48,
            "yaw": 180,
            "type": "info",
            "text": "Probíhá výuka tradiční (buddhistická filosofie, bodhi, modlitby) i moderní (hindi, matematika, angličtina, v omezené míře IT)."
          },
          {
            "pitch": -38,
            "yaw": 279,
            "type": "shop",
            "text": "Koupit učebnici - Kliknutím otevřete e-shop",
                      "URL": "http://www.shop.protibet.cz/obchod/darovaci-certifikaty/certifikat-ucebnice-tibetstiny-2/"
          },
          {
            "pitch": -10,
            "yaw": 372,
            "type": "info",
            "text": "Po ukončení 1. – 2. Stupně žáci mohou studovat buddhistickou filosofii."
          },
          {
            "pitch": 11,
            "yaw": 181,
            "type": "info",
            "text": "Menší výskyt učebních pomůcek."
          },
          {
            "pitch": 5,
            "yaw": 280,
            "type": "info",
            "text": "Potenciál vylepšení – výuka angličtiny"
          },
          {
            "pitch": -38,
            "yaw": 420,
            "type": "info",
            "text": "Učitelé pocházejí z kláštera Ki a zatím neprobíhá další vzdělávání učitelů."
          },
          {
            "pitch": 1,
            "yaw": 56,
            "type": "info",
            "text": "Okno – sluníčko, hodně slunečných dnů v roce"
          }
        ]
      }
    }
  });
});
