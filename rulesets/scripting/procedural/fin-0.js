"use strict";!function(){const t=new Map([["alandstidningen.ax",0],["nyan.ax",1],["elmotv.com",2],["facebook.com",3],["m.facebook.com",4],["golfpiste.com",5],["hardelli.com",6],["kalamies.com",7],["koeajolle.com",8],["kohokohta.com",9],["muropaketti.com",10],["pelaajat.com",11],["pienimatkaopas.com",12],["sportti.com",13],["twitter.com",14],["viisitahtea.com",15],["aamulehti.fi",16],["jamsanseutu.fi",16],["janakkalansanomat.fi",16],["kankaanpaanseutu.fi",16],["kmvlehti.fi",16],["merikarvialehti.fi",16],["nokianuutiset.fi",16],["rannikkoseutu.fi",16],["satakunnankansa.fi",16],["suurkeuruu.fi",16],["sydansatakunta.fi",16],["tyrvaansanomat.fi",16],["valkeakoskensanomat.fi",16],["alfatvuutiset.fi",17],["alibi.fi",18],["koululainen.fi",18],["apteekkari.fi",19],["autobild.fi",20],["dawn.fi",21],["edgeski.fi",22],["pottupellossa.fi",22],["eeva.fi",23],["epari.fi",[24,25,26]],["ilkkapohjalainen.fi",[24,25]],["jarviseutu-lehti.fi",[24,25,26]],["jurvansanomat.fi",[24,26]],["komiat.fi",[24,26]],["suupohjansanomat.fi",[24,26]],["vaasalehti.fi",[24,25,26,83]],["viiskunta.fi",[24,26]],["episodi.fi",27],["foreigner.fi",28],["fuengirola.fi",29],["gamereactor.fi",30],["glu.fi",31],["gogolf.fi",32],["gti.fi",33],["high.fi",34],["hs.fi",35],["huonoaiti.fi",36],["iijokiseutu.fi",37],["kaleva.fi",[37,43]],["koillissanomat.fi",37],["lapinkansa.fi",37],["pohjoisenpolut.fi",37],["pyhajokiseutu.fi",37],["raahenseutu.fi",37],["rantalakeus.fi",37],["siikajokilaakso.fi",37],["iltalehti.fi",38],["bbs.io-tech.fi",39],["jp-kunnallissanomat.fi",40],["kaaoszine.fi",41],["kaksplus.fi",42],["kangasalansanomat.fi",44],["kansantahto.fi",45],["karjalainen.fi",46],["kauppalehti.fi",47],["kiinteistoposti.fi",48],["kodinviilennys.fi",49],["kokemaenjokilaakso.fi",50],["koneviesti.fi",[51,52]],["maaseuduntulevaisuus.fi",52],["kotiliesi.fi",53],["ls24.fi",54],["mediuutiset.fi",55],["meillakotona.fi",56],["mma.fi",57],["mobiili.fi",58],["mtv.fi",59],["mtvuutiset.fi",[59,60]],["nettitrendi.fi",61],["olutposti.fi",62],["lennot.rantapallo.fi",63],["seiska.fi",64],["seura.fi",65],["sijoitustieto.fi",66],["sss.fi",67],["suomela.fi",68],["suomenkuvalehti.fi",69],["suomimobiili.fi",70],["talouselama.fi",[71,72]],["tekniikkatalous.fi",[71,73]],["telsu.fi",74],["terve.fi",75],["tilannehuone.fi",76],["tivi.fi",77],["ts.fi",78],["tyyliniekka.fi",79],["ulvilanseutu.fi",80],["uusisuomi.fi",81],["www.uusisuomi.fi",82],["vau.fi",84],["verkkouutiset.fi",85],["viranomaisuutiset.fi",86],["ykkoslohja.fi",87],["gekkonen.net",88],["mvlehti.net",89],["assembly.org",90],["opensubtitles.org",91]]),s=new Map(void 0),e=new Map(void 0);self.proceduralImports=self.proceduralImports||[],self.proceduralImports.push({argsList:[['{"selector":".views-element-container","tasks":[["has-text","Annonsnytt"]]}'],['{"selector":".widget_adrotate_widgets","action":["remove",""]}','{"selector":".wpb_column.vc_column_container.td-pb-span8:has(a[onclick*=\\"banner\\"])","action":["remove",""]}'],['{"selector":".luelisaa > .solu","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"[href]","tasks":[["has-text","LeoVegas"]]}'],['{"selector":"[role=\\"feed\\"] [data-pagelet^=\\"FeedUnit_\\"]","tasks":[["has",{"selector":"div[class][role=\\"button\\"][tabindex]","tasks":[["has-text","Sponsoroitu"]]}]]}','{"selector":"span#ssrb_feed_start + div > div[class]","tasks":[["has",{"selector":"span[class][dir=\\"auto\\"] > span[id]","tasks":[["has-text","Sponsoroitu"]]}]]}'],['{"selector":"article","tasks":[["has",{"selector":"> * header > * span","tasks":[["has-text","Sponsoroitu"]]}]]}'],['{"selector":".section-wrapper > .has-ad-right","action":["style","width: 100% !important"],"tasks":[["has",{"selector":"+ .section--ad","tasks":[["matches-css",{"name":"display","value":"^none$"}]]}]]}'],['{"selector":"div[class=\\"wpb_wrapper\\"][style^=\\"width: 324px;\\"] > div[data-td-block-uid]","tasks":[["has-text","PELIT"]]}'],['{"selector":".widget","tasks":[["has-text","Mainos"],["spath",":not(:has([href=\\"https://kalamies.com/tilaa/\\"]))"]]}'],['{"selector":".post p","tasks":[["has-text","Mainos:"]]}'],['{"selector":".text-center","tasks":[["has-text","loadAd"]]}'],['{"selector":"article.grid__item_md-1-5.grid__item_1","tasks":[["has-text","Mainos"]]}'],['{"selector":".social-media-links + p","tasks":[["has-text","/^ $/"],["spath",":has(+ div[data-ad-unit-id])"]]}'],['{"selector":"#mainos .otsikko","tasks":[["has-text","Lue myös"],["spath"," + div ~ *"]]}'],['{"selector":"div[style=\\"padding-bottom:10px;border-bottom:1px solid gray;margin-bottom:6px;\\"]","tasks":[["has-text","Mainos:"]]}','{"selector":"div[style=\\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\\"]","tasks":[["has",{"selector":"+ [style=\\"font-size:14px;line-height:21px;padding-top:6px;\\"]","tasks":[["has-text","MAINOS"]]}]]}','{"selector":"div[style=\\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\\"]","tasks":[["has-text","MAINOS"]]}','{"selector":"tr","tasks":[["has",{"selector":"+ tr:has(script)"}]]}','{"selector":"tr","tasks":[["has-text",".loadAd"]]}'],['{"selector":"div","tasks":[["has",{"selector":"> div > div > div > h2 > div > span","tasks":[["has-text","Mainostettu twiitti"]]}]]}'],['{"selector":".widget--side","tasks":[["has-text","Mainos"]]}'],['{"selector":"article[class=\\"list bg-positive w-full mb-16\\"]","tasks":[["has-text","Mainos"]]}','{"selector":"div[class|=\\"ab-test-laneitem\\"]","tasks":[["has",{"selector":".list__heading","tasks":[["has-text","Mainos"]]}]]}'],['{"selector":".widget_text","tasks":[["has-text","Advertisement"]]}'],['{"selector":".article__body > p","tasks":[["has-text","/^\\\\xA0$/"]]}'],['{"selector":".container","tasks":[["has-text","MAINOS (TEKSTI JATKUU ALLA)"]]}'],['{"selector":".red-the-latest-issue","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":"","action":["style","margin: -10px auto !important"],"tasks":[["not",{"selector":"","tasks":[["matches-path","/^/$/"]]}],["spath"," .header"],["not",{"selector":"","tasks":[["matches-media","(min-width: 750px)"]]}],["spath"," + div[class] + div[class] .mobile-top-ad"]]}'],['{"selector":".widget_text","tasks":[["has-text","Mainos"]]}'],['{"selector":"a[class^=\\"ContentCard__Card-\\"]","tasks":[["has-text","Mainos: "]]}','{"selector":"div[class^=\\"EmbeddedArticle__Container\\"]","tasks":[["has",{"selector":".category","tasks":[["has-text","Mainos:"]]}]]}','{"selector":"div[class^=\\"StripeBannerBlock__StripeBannerContainer\\"]","tasks":[["has-text","Mainos:"]]}'],['{"selector":"article > div[class]","tasks":[["has-text","Mainos (sisältö jatkuu alla)"]]}'],['{"selector":".voice-no-read","tasks":[["has-text","Mainos päättyy"]]}'],['{"selector":"div[class] > div[id^=\\"sas_\\"] + div","tasks":[["has-text","Mainos"]]}'],['{"selector":".bg-white.pb-2.w-full","tasks":[["has-text","Mainos"]]}','{"selector":".main-article > div","tasks":[["has-text","Mainos"]]}'],['{"selector":"article","tasks":[["has-text","SPONSORED"]]}'],['{"selector":".elementor-widget-divider.elementor-widget.elementor-widget-divider--element-align-center.elementor-widget-divider--view-line_text.elementor-element","tasks":[["has-text","Mainos"]]}'],['{"selector":"article.areview","tasks":[["has-text","Sponsoroitua sisältöä"]]}'],['{"selector":".box","tasks":[["has-text","Mainos:"]]}'],['{"selector":".has-background","tasks":[["has-text","/MAINOS/i"]]}','{"selector":".has-background","tasks":[["has-text","mainos"]]}'],['{"selector":".wall-item__container","tasks":[["has-text","Mainos"]]}'],['{"selector":"article > .main-link","tasks":[["has",{"selector":".source","tasks":[["has-text","sponsoroitu"]]}]]}'],['{"selector":".embedded","tasks":[["has-text","Markkinapaikka"]]}'],['{"selector":".col.article-card.item","tasks":[["has-text","Kaupallinen yhteistyö, yhteistyössä"]]}'],['{"selector":".m-contentListItemThumb.-level-1","tasks":[["has-text","Mainos"]]}'],['{"selector":".card .recommendation","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":".category-double-article-container","tasks":[["has",{"selector":".half-article:nth-child(1)","tasks":[["has-text","Kaupallinen yhteistyö"],["spath"," + .half-article:nth-child(2)"],["has-text","Kaupallinen yhteistyö"]]}]]}','{"selector":".double-column > a[href]","action":["remove",""],"tasks":[["has",{"selector":".article-container","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}','{"selector":".related-articles-list > .link-container","tasks":[["has-text","/^Kaupallinen yhteistyö/"]]}','{"selector":"a.small-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div.card","tasks":[["has-text","Mainos:"]]}','{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) .article-list a[href]","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main .article-container","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main .half-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main div[class=\\"card \\"]","tasks":[["has",{"selector":".half-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}],["not",{"selector":"","tasks":[["has",{"selector":".half-article","tasks":[["not",{"selector":"","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}]]}]]}','{"selector":"div.fp-container.card","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div.is-visible.LazyLoad","tasks":[["has-text","kaupallinen yhteistyö"]]}','{"selector":"div.layout:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) div.card","tasks":[["has",{"selector":"> .full-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}','{"selector":"div[class=\\"card \\"]","tasks":[["has",{"selector":"> .block > div[class=\\"content-router-wrapper\\"]","tasks":[["has-text","kaupallinen yhteistyö"]]}]]}'],['{"selector":"div.node-extra","tasks":[["has-text","Mainos"]]}','{"selector":"li.block-row","tasks":[["has-text","Mainos"]]}'],['{"selector":"a[href^=\\"/artikkeli-\\"]","tasks":[["has-text","MAINOS"]]}'],['{"selector":"article.post","action":["style","height: 1px !important; width: 1px !important; margin-right: 0px !important"],"tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":"#huomiotekstiotsikko","tasks":[["has-text","Mainos"]]}','{"selector":".wp-block-otavamedia-section-management","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":".media-site__widget-container","tasks":[["has",{"selector":"* .media-widget__title","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}'],['{"selector":".td-pb-span6","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":".elementor-widget-divider","tasks":[["has-text","Mainos"]]}','{"selector":".strike","tasks":[["has-text","Mainos"]]}'],['{"selector":".breaking-news-container","action":["style","display: flex !important"],"tasks":[["not",{"selector":"","tasks":[["has-text","mainos:"]]}]]}','{"selector":".breaking-news-container","tasks":[["has-text","mainos:"]]}','{"selector":".card-container","tasks":[["has-text","Mainos alkaa"]]}'],['{"selector":"main","tasks":[["not",{"selector":"> h2","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," [class][data-test] ~ div[class]:has(> a[href^=\\"https://www.kauppalehti.fi/kumppanisisallot/\\"])"]]}','{"selector":"main","tasks":[["not",{"selector":"> h2","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," a[href^=\\"https://www.kauppalehti.fi/kumppanisisallot/\\"][target=\\"_self\\"]"]]}'],['{"selector":".featuredpost","tasks":[["has",{"selector":".gb-post-grid-section-title","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}'],['{"selector":".wp-block-image","tasks":[["has-text","mainos"]]}'],['{"selector":".ai-attributes","tasks":[["has-text","Mainos"]]}'],['{"selector":".layout__article-area__text-content > p","tasks":[["has-text","/^\\\\xA0$/"]]}'],['{"selector":".row .col-small-12.col-medium-12.col-large-12","tasks":[["has-text","Mainos:"]]}'],['{"selector":".article-card-grid li:has(div[id^=\\"dfp__\\"]:not([id^=\\"dfp__desk-1_1\\"]))","action":["remove",""]}'],['{"selector":".article-list--article","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"section[class=\\"page-section page-section--no-main-article\\"]","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":"body","tasks":[["not",{"selector":"#skyscraper-height-div > div > div","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," section > a[href^=\\"https://www.mediuutiset.fi/kumppanisisallot\\"]"]]}','{"selector":"body:not(.is-style-kumppanisisallot)","tasks":[["not",{"selector":"#skyscraper-height-div > div > div","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," div[class]:has(> a[href^=\\"https://www.mediuutiset.fi/kumppanisisallot/\\"]:not(a[class^=\\"site-header\\"]))"]]}'],['{"selector":"div[class^=\\"transitionSlot__component\\"][class*=\\"layout__container\\"]","tasks":[["has-text","MAINOS"]]}'],['{"selector":".commercial__content","tasks":[["has-text","Kumppanilta"]]}'],['{"selector":".fullarticle","tasks":[["has-text","Sponsoroitu"]]}','{"selector":".fullarticle","tasks":[["has-text","src=\\"https://mobiili.fi/aaa.png\\""]]}','{"selector":"div[style=\\"float:left; width:100%; text-align:center; padding:0px; margin-bottom:17px;\\"]","tasks":[["has-text","MAINOS"]]}','{"selector":"p","tasks":[["has",{"selector":"small","tasks":[["has-text","Mainos:"]]}]]}'],['{"selector":".avod-web-player-csai","action":["remove",""]}','{"selector":".avod-web-player-skin > #skin-wrapper > div > div","tasks":[["has-text","Mainos"]]}'],['{"selector":".latest-listing > .listing-items > li","tasks":[["has-text","Mainos"]]}'],['{"selector":".block-block-content","tasks":[["has-text","Jatkuu mainoksen alla"]]}'],['{"selector":".aside.widget","tasks":[["has-text","Mainos"]]}'],['{"selector":".flights.type-provider","tasks":[["has-text","Mainos"]]}'],['{"selector":"#article-body .article div[class^=\\"sc-\\"]","tasks":[["has-text","/Juttu jatkuu ilmoituksen jälkeen|ilmoitus päättyy/i"]]}','{"selector":".jwplayer.column:has(.jw-video[src=\\"https://seiska.b-cdn.net/Mainos.mp4\\"])","action":["remove",""]}'],['{"selector":"section[class=\\"entry-body\\"] > p","tasks":[["has-text","/^\\\\xA0$/"]]}'],['{"selector":"p > em > strong","tasks":[["has-text","Kaupallinen yhteistyö:"]]}'],['{"selector":"aside.widget_text","tasks":[["has-text","MAINOS"]]}'],['{"selector":".custom-title","tasks":[["has-text","Kaupalliset yhteistyöt"]]}'],['{"selector":".clearfloats.content__body > p","tasks":[["has-text","/^\\\\xA0$/"]]}'],['{"selector":".posts-listing-list-alt-b","tasks":[["has-text","Artikkeleita kumppaneilta"]]}'],['{"selector":"section hr","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"Mainos "}],["upward",1]]}'],['{"selector":"[id|=\\"podcasti\\"]","tasks":[["has-text","Kaupallinen Yhteistyö"]]}','{"selector":"li","tasks":[["has-text","MAINOS"]]}'],['{"selector":".article-body > div[class]","tasks":[["has",{"selector":"> span","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"],["spath"," + a[href^=\\"https://koulutus.almatalent.fi/\\"]"]]}]]}','{"selector":"div#skyscraper-height-div > aside > div > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div#skyscraper-height-div > section > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":".ch","tasks":[["has-text","/SP(O|0)NSOROITU/"]]}','{"selector":".ch","tasks":[["has-text","/SPON|SPONS|SPONSO|SPONSOR|SPONSORO|SPONSOROI|SPONSOROIT|SPONSOROITU/"]]}'],['{"selector":"div[class^=\\"PageElementFeedItem__Container\\"]","tasks":[["has-text","Mainos"]]}','{"selector":"div[class^=\\"transitionSlot__component\\"][class*=\\"layout__container\\"]","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}'],['{"selector":"#cnt_lista tr","tasks":[["has-text","/^\\\\s$/"],["has",{"selector":"+ tr:has(.mainosinline)"}]]}'],['{"selector":"aside","tasks":[["has",{"selector":"> div > span","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}]]}','{"selector":"div#skyscraper-height-div > aside > div > section > div","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}','{"selector":"div#skyscraper-height-div > div > aside > div > section > div","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}','{"selector":"div#skyscraper-height-div > section > div > a > div","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":".tsv3-c-common-elementcollection","tasks":[["has-text","/yhteistyö[\\\\u00AD]kumppanimme artikkelit/"]]}','{"selector":".tsv3-c-common-elementlist--layout-mobiili_etusivu","tasks":[["has-text","/yhteistyö[\\\\u00AD]kumppanimme artikkelit/"]]}'],['{"selector":".tdc-row.stretch_row_1400.td-stretch-content","tasks":[["has-text","MAINOS:"]]}'],['{"selector":".elementor-widget-container","tasks":[["has-text","MAINOS"]]}'],['{"selector":".lazyload-wrapper + section","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div#skyscraper-height-div > div > aside > section > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"div#skyscraper-height-div > div > main > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":"aside > section","tasks":[["has-text","Kaupallinen yhteistyö"]]}','{"selector":"body:not(.is-style-kumppanisisallot) main > div[class]","tasks":[["has-text","Kaupallinen yhteistyö"]]}'],['{"selector":"h2 > span","tasks":[["has-text","Mainos"]]}'],['{"selector":"h4","tasks":[["has-text","MAINOS"]]}','{"selector":"hr + h4","tasks":[["has-text","MAINOS"],["spath"," ~ hr"]]}'],['{"selector":".elementor-section-height-default.elementor-section-boxed.elementor-element.elementor-top-section.elementor-section","tasks":[["has",{"selector":".elementor-widget-shortcode:has(.vu-adlabel)"}]]}','{"selector":"article.featured-post","tasks":[["has-text","Mainos"]]}'],['{"selector":".td-footer-wrap .td-block-row","tasks":[["has-text","-Yhteistyössä-"]]}'],['{"selector":"#sidebar-widgets-area-1 > .widget","tasks":[["has-text","Mainos"]]}','{"selector":".widget","tasks":[["has-text","tradedoubler.com"]]}','{"selector":".widget_carousel_slider","tasks":[["has-text","tarjouksia tälle viikolle"]]}','{"selector":"div[id|=\\"block\\"]","tasks":[["has-text","/Lainavertailu/i"]]}','{"selector":"div[id|=\\"block\\"]","tasks":[["has-text","eToro"]]}'],['{"selector":".td_block_wrap.td_block_text_with_title","tasks":[["has-text","/kasino/i"]]}'],['{"selector":".entry-content > h3","tasks":[["has-text","kasino"]]}','{"selector":"[class|=\\"featured-post\\"]","tasks":[["has-text","/rahapeli|kasino/i"],["spath",":has(a[href*=\\"/202\\"])"]]}'],['{"selector":"section:not(section[id], section[class])","tasks":[["has-text","Mainos"]]}'],['{"selector":"fieldset","tasks":[["has-text","Poista mainos"]]}']],hostnamesMap:t,entitiesMap:s,exceptionsMap:e})}();