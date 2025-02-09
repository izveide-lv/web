---
title: Kā es izveidoju šo mājaslapu sešu stundu laikā
excerpt: Kā notika izveide.lv izveides process, kādas tehnoloģijas izmantoju un
  kāpēc tā ir tik zibenīgi ātra?
category: Raksti
tags:
  - astro
  - netlify
  - izveide
  - github
  - atvērtais kods
  - decap cms
  - markdown
  - umami
  - github
image: ~/assets/images/izveide-web.webp
publishDate: 2025-02-07T04:18:00.000Z
author: Armands Leimanis
---

## Kas ir statiskā mājaslapa?

Ideja par jaunas pārdošanas lapas izveidi man radās jau sen, jo sapratu, ka vēlos darbu [savā uzņēmumā](https://labojam.lv) fokusēt tieši uz statisko vietņu izstrādi. Tām ir neskaitāmas priekšrocības salīdzinot ar, piemēram, Wordpress vai Drupal mājaslapām un tā ir tehnoloģija, ar kuru man no ❤️ patīk strādāt. Kā arī, cik man zināms, Latvijā neviena cita digitālā aģentūra nepiedāvā statisku vietņu izstrādi, vai arī vismaz ļoti nereklamē to.

Bet kas tad īsti ir statiskā vietne? Mēģināšu uzskaitīt galvenos principus.

- Statiska vietne nenozīmē, ka lapā nav animācijas vai interakcijas. Statiska vietne nozīmē, ka mājaslapa ir pilnībā uzrenderēta, pirms tā nokļūst līdz lietotājam, bez vajadzības veikt atsevišķus datu pieprasījumus vai izmantot datubāzes.
- Lapas ielāde ir zibenīgi ātra, jo serverim nav jāveic nekāds darbs, tikai jāpadod uzģenerētie faili. Šī lapa [Google PageSpeed](https://pagespeed.web.dev/) testā ir ieguvusi 💯/💯/💯/💯 jeb ideālo rezultātu.
- Ir iespējama satura administrēšana caur internetu, nerakstot kodu, izmantojot kādu rīku, kas ļauj veikt izmaiņas uzreiz Git repozitorijā, kurā glabājas faili. Šai lapai es izmantoju [Decap CMS](https://decapcms.org/) kopā ar [Netlify](https://www.netlify.com/) Identity, kas man ļauj autorizēties administrācijas sadaļā un rakstīt šo rakstu ar vizuālo redaktoru.

Statiskās vietnes ir ideāli piemērotas vizītkartes tipa lapām, blogiem, lapām ar daudz informāciju u.tml., taču ir iespējama arī e-komercija, izmantojot, piemēram, [Snipcart](https://snipcart.com/). Ātras statiskās lapas, kas ir pareizi būvētas, patiks arī meklētājprogrammām un labāk kotēsies meklēšanas rezultātos.

## Kā es izveidoju šo mājaslapu?

Šo mājaslapu es mēģināju veidot trīs reizes, no sākuma izmantojot [bolt.new](https://bolt.new) rīku, kas ar mākslīgā intelekta palīdzību raksta kodu lietotāja vietā. Diemžēl ar to man neveicās — dizains, ko veidoja Bolt bija neglīts, visu laiku tika pieļautas kļūdas un es diezgan ātri iztērēju visus savus pieejamos tokenus.

Otrais mēģinājums bija izmantojot [11ty](https://www.11ty.dev/) statisko mājaslapu izstrādes ietvaru, taču arī tas cieta neveiksmi, jo 11ty nav pieejamas tādas tēmas/iesākuma projekti, kas apmierinātu manas vēlmes.

Tad nu visbeidzot es ķēros pie [Astro](https://astro.build/), ko biju lietojis arī iepriekš, izstrādājot mājaslapu vienam no saviem klientiem. Tas ir _framework_, kas ļauj viegli veidot modernas statiskās lapas. Es nevēlējos visu sākt pilnīgi no nulles, tāpēc izpētīju vairākas tēmas, līdz atradu [AstroWind](https://github.com/onwidget/astrowind), uz kura arī ir balstīta šī lapa.

Kopējais izveides laiks šai lapai bija sešas stundas — par to var pārliecināties šīs lapas [Git repozitorijā](https://github.com/izveide-lv/web) (lapa ir atvērtā koda), skaitot laiku no repozitorija izveidošanas līdz pēdējam atjauninājumam. Tas nav nekas neparasts, ka mūsdienās var izveidot pilnvērtīgu lapu tik ātros tempos, pat bez mākslīgā intelekta palīdzības, bet, nu, es to varēju paveikt, jo man ir pieredze programmēšanā.

## Kas lācītim vēderā?

Šīs lapas bloga ieraksti ir _markdown_ formatēti satura faili, kas tiek sakompilēti un pārveidoti .html failos, kas redzami gala lietotājam. Lapa sastāv no vairākkārt izmantojamām komponentēm, nedaudz JavaScript (terminālis sākumlapā ir aizgūts no [CodePen](https://codepen.io/)) un tā tiek hostēta Netlify, kas piedāvā ļoti dāsnu bezmaksas uzturēšanu (līdz 100GB trafika mēnesī, 300 koda būvēšanas minūtes). Netlify vietā to varētu uzturēt arī uz CloudFlare, Vercel vai Surge, taču Netlify pluss ir tāds, ka tas prot saņemt un saglabāt informāciju, kas tiek nosūtīta formās.

Lapā tiek izmantota arī [Umami analītika](https://stats.izveide.lv/share/lkbgT7KjE3faATdh/izveide.lv), lai iegūtu pamata informāciju par apmeklētājiem. Umami ir lietotāju privātumu cienošs rīks, kas neizmanto sīkdatnes un lietotājus neidentificē, tāpēc arī šajā mājaslapā nav nepieciešams paziņojums par sīkdatnēm. Vai nav jauki? 😇

## Nobeiguma vietā

Es mīlu savu darbu un mājaslapu izveides procesu, tāpēc vēlos dot iespēju kādam/-ai tikt pie manis veidotas statiskās mājaslapas **pilnīgi bez maksas**. Lai uzzinātu vairāk par šo piedāvājumu, [klikšķini šeit](/bezmaksas)!
