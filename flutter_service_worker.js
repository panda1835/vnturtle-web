'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "772297075a890345dbe7e76543e54777",
"index.html": "bd6a60b7fb08e3861eac07f1e0c4d29c",
"/": "bd6a60b7fb08e3861eac07f1e0c4d29c",
"main.dart.js": "d315a8fd8ce464ea1bda4c5f3915a1ee",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "7d672e8731197a2a7887e108d6ecc4f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3cf7149588cedc52e5ed383746fdf9c",
"assets/images/reference_images/Amyda_ornata/Amyda_ornata_thumbnail.jpg": "e8ac3c4f372fa5fec167ff798e75216a",
"assets/images/reference_images/Mauremys_mutica/Mauremys_mutica_thumbnail.jpg": "a3dd0967cf5259f7cf604d142132aba1",
"assets/images/reference_images/Cuora_picturata/Cuora_picturata_thumbnail.jpg": "33619f7a1ff5a88d478e9f54a2012b2d",
"assets/images/reference_images/Cuora_amboinensis/Cuora_amboinensis_thumbnail.jpg": "64aa6b77b120d7d4310c3cf2c82b127c",
"assets/images/reference_images/Pelodiscus_sinensis/Pelodiscus_sinensis_thumbnail.jpg": "e1bd8a0420537319e47509627e567bcd",
"assets/images/reference_images/Cuora_galbinifrons/Cuora_galbinifrons_thumbnail.jpg": "45b1fbed81ed211f0c1260843ab9b7bf",
"assets/images/reference_images/Malayemys_subtrijuga/Malayemys_subtrijuga_thumbnail.jpg": "c25990d8d35eeab114f48a2dd2244334",
"assets/images/reference_images/Cuora_cyclornata/Cuora_cyclornata_thumbnail.jpg": "002a7d12ab03e3982527f8f273efad7b",
"assets/images/reference_images/Pelochelys_cantorii/Pelochelys_cantorii_thumbnail.jpg": "7474e3bb4df9afba946f8c431ada8743",
"assets/images/reference_images/Cuora_mouhotii/Cuora_mouhotii_thumbnail.jpg": "0303ef6d39887537a959f62ea3831697",
"assets/images/reference_images/Platysternon_megacephalum/Platysternon_megacephalum_thumbnail.jpg": "7e57b37573ea0b0b6086f9766a860238",
"assets/images/reference_images/Geoemyda_spengleri/Geoemyda_spengleri_thumbnail.jpg": "3d3eeb09b37d08f682094422b65bdab1",
"assets/images/reference_images/Heosemys_annandalii/Heosemys_annandalii_thumbnail.jpg": "342fee3e5bb8069490123c2e382c1424",
"assets/images/reference_images/Cyclemys_oldhamii/Cyclemys_oldhamii_thumbnail.jpg": "6b11b40985d1ebdf5c5819bcacd4a01f",
"assets/images/reference_images/Indotestudo_elongata/Indotestudo_elongata_thumbnail.jpg": "a241547f12ca8d0fd4821e1e6848f11c",
"assets/images/reference_images/Cyclemys_pulchristriata/Cyclemys_pulchristriata_thumbnail.jpg": "434bd51036c2e2319c1e097b53b6995d",
"assets/images/reference_images/Pelodiscus_variegatus/Pelodiscus_variegatus_thumbnail.jpg": "4e87a94f6fc1d2defd50bace93f2155f",
"assets/images/reference_images/Palea_steindachneri/Palea_steindachneri_thumbnail.jpg": "f622376901248bed57575a2fe0d741e7",
"assets/images/reference_images/Rafetus_swinhoei/Rafetus_swinhoei_thumbnail.jpg": "3ca104a52ed450295678316d139cc4ef",
"assets/images/reference_images/Cyclemys_atripons/Cyclemys_atripons_thumbnail.jpg": "e4d921b110675035fcfb768351962f70",
"assets/images/reference_images/Sacalia_quadriocellata/Sacalia_quadriocellata_thumbnail.jpg": "7d08481db3075cb826e4dcf4c983fc0a",
"assets/images/reference_images/Mauremys_annamensis/Mauremys_annamensis_thumbnail.jpg": "aae7afc32eca6a4e3f0d93e0bd167b4c",
"assets/images/reference_images/Siebenrockiella_crassicollis/Siebenrockiella_crassicollis_thumbnail.jpg": "49bacf6c9ab6aca1b7af7e9951ebcb70",
"assets/images/reference_images/Mauremys_sinensis/Mauremys_sinensis_thumbnail.jpg": "ce6b66a70a1a6a49b6726e95fc201021",
"assets/images/reference_images/Cuora_bourreti/Cuora_bourreti_thumbnail.jpg": "0fdd6f6e07573b8c4de0a6369d835421",
"assets/images/reference_images/Heosemys_grandis/Heosemys_grandis_thumbnail.jpg": "100fef9f354177488176ae88e7881687",
"assets/images/reference_images/Manouria_impressa/Manouria_impressa_thumbnail.jpg": "bbd428093d60d788159c5e9d46623b1b",
"assets/images/temp/Amyda_cartilaginea.jpg": "31fbffa56dc760b54ccf9b37cd395393",
"assets/images/temp/Amyda_cartilaginea%202.jpg": "31fbffa56dc760b54ccf9b37cd395393",
"assets/images/identification_images/Amyda_ornata/image-51.jpg": "b2d024fa15b29fb3ae520df3725a208e",
"assets/images/identification_images/Amyda_ornata/image-50.jpg": "c25226a62c0b78933be03c353c68061d",
"assets/images/identification_images/Amyda_ornata/image-51%20copy.jpg": "84eb73e7e6fea16bc0a2a0a76621cdc3",
"assets/images/identification_images/Amyda_ornata/image-51%20copy%203.jpg": "3073d277a0e29dd6d0147a1c660436bd",
"assets/images/identification_images/Amyda_ornata/image-51%20copy%202.jpg": "39c9e3fd4ef67ea64de8a911ab3818bb",
"assets/images/identification_images/Amyda_ornata/image-51%20copy%204.jpg": "35642c8b82c7dc2a8a7b1aae403337fd",
"assets/images/identification_images/Mauremys_mutica/00.jpg": "d7b24fc0679b392fbc2715f5758d5e0d",
"assets/images/identification_images/Mauremys_mutica/01.jpg": "e75dc7cf36423dc59c79920a794460b2",
"assets/images/identification_images/Mauremys_mutica/02.jpg": "ed5fae88286210bcfe3cfe5533bd90b8",
"assets/images/identification_images/Cuora_picturata/00.jpg": "c4e319841492e08abf326a0dca8918ec",
"assets/images/identification_images/Cuora_picturata/01.jpg": "437d64849985915c4e8ce09d5ef3f1fa",
"assets/images/identification_images/Cuora_picturata/03.jpg": "29d8060977a5aac7c4752006ba41018d",
"assets/images/identification_images/Cuora_picturata/02.jpg": "2583e8cd5e5b5271a26c6f1b6e0f82c5",
"assets/images/identification_images/Trachemys_scripta/00.jpg": "37950c6be753d86c2c7b66682bda3f61",
"assets/images/identification_images/Trachemys_scripta/01.jpg": "2c4edd3e9ea4eafd982bcf8dd6d525aa",
"assets/images/identification_images/Trachemys_scripta/03.jpg": "77d99a67fb98d93f5e8d5ff84116fdae",
"assets/images/identification_images/Trachemys_scripta/02.jpg": "8460d1f4040c78651a250c620dfbfb4e",
"assets/images/identification_images/Cuora_amboinensis/00.jpg": "b8d66dbde72057d0fda8243f0b7f431a",
"assets/images/identification_images/Cuora_amboinensis/01.jpg": "78476dc8a7e7236a5770fcc6940d47ca",
"assets/images/identification_images/Cuora_amboinensis/03.jpg": "08564b4b29a6790a8880b18af239a018",
"assets/images/identification_images/Cuora_amboinensis/02.jpg": "30b4b18118adfea762428bf45b9d4130",
"assets/images/identification_images/Pelodiscus_sinensis/00.jpg": "56ad30a09777acfd3c74d75293ba4632",
"assets/images/identification_images/Pelodiscus_sinensis/01.jpg": "307d44bf9634d869becb3a84e4060a59",
"assets/images/identification_images/Pelodiscus_sinensis/03.jpg": "29a87da6461343249892b3b8d6d69b89",
"assets/images/identification_images/Pelodiscus_sinensis/02.jpg": "d316e34699c02f3acaf868685f819b2b",
"assets/images/identification_images/Cuora_galbinifrons/00.jpg": "550d1c664e180889f2e822c2d872c425",
"assets/images/identification_images/Cuora_galbinifrons/01.jpg": "c9fca1d54eecbec4e7862b6fb3bdf626",
"assets/images/identification_images/Cuora_galbinifrons/03.jpg": "50b4303ecec096d37f96109e6ae501e5",
"assets/images/identification_images/Cuora_galbinifrons/02.jpg": "669bc157cfdbc930848f893868a68ce5",
"assets/images/identification_images/Malayemys_subtrijuga/00.jpg": "70666e39083240d1c4d983f460e8c2d9",
"assets/images/identification_images/Malayemys_subtrijuga/01.jpg": "f181c9ac47127a9dd3f69410589036e3",
"assets/images/identification_images/Malayemys_subtrijuga/03.jpg": "58398115b3a2f0051bdf419570cd0763",
"assets/images/identification_images/Malayemys_subtrijuga/02.jpg": "f9d6ce67a917ff9a82995b5050be4463",
"assets/images/identification_images/Cuora_cyclornata/00.jpg": "e6a4299d826e7355dc3284f707e0a648",
"assets/images/identification_images/Cuora_cyclornata/01.jpg": "522072332448f3baff1fe740dde7c3cc",
"assets/images/identification_images/Cuora_cyclornata/03.jpg": "60b51b752929feb4f1608cacebade335",
"assets/images/identification_images/Cuora_cyclornata/02.jpg": "ee8afd6712774f7f9d2626b8371fc09d",
"assets/images/identification_images/Cuora_cyclornata/04.jpg": "f705f514322dfe902bdc5276c9a0501c",
"assets/images/identification_images/Pelochelys_cantorii/00.jpg": "5c4bea5fd8580fa709b0ddc015a229e7",
"assets/images/identification_images/Pelochelys_cantorii/01.jpg": "267f90b5f84e67ca41ccc7b33e97591f",
"assets/images/identification_images/Pelochelys_cantorii/03.jpg": "db29b31a1c95cada889df07d5877a22c",
"assets/images/identification_images/Pelochelys_cantorii/02.jpg": "aa239b3472efd00e00a3f993353f3105",
"assets/images/identification_images/Cuora_mouhotii/00.jpg": "55911badafd7970363c0fef0cb97f447",
"assets/images/identification_images/Cuora_mouhotii/01.jpg": "9699d530b46ad7a480d6a71b924c04b7",
"assets/images/identification_images/Cuora_mouhotii/03.jpg": "bd60db210788895dab5ef954f07b14a0",
"assets/images/identification_images/Cuora_mouhotii/02.jpg": "7d471f3816cb056a8f9d480b7ae2c991",
"assets/images/identification_images/Platysternon_megacephalum/00.jpg": "cce006f56e4bc4a7b07bc2e26a326ebf",
"assets/images/identification_images/Platysternon_megacephalum/01.jpg": "6990924db2ec65ceaeb21caf750ff3e1",
"assets/images/identification_images/Platysternon_megacephalum/03.jpg": "0e32188da9aea8e53a6d83d3760f71be",
"assets/images/identification_images/Platysternon_megacephalum/02.jpg": "8723a6481bbec0872cdbc5289b9c6237",
"assets/images/identification_images/Geoemyda_spengleri/00.jpg": "a340926444423ad5fb7446d01338e85b",
"assets/images/identification_images/Geoemyda_spengleri/01.jpg": "fc7d7cebcf2e24ab9942696ab16f4d6a",
"assets/images/identification_images/Geoemyda_spengleri/03.jpg": "da89bd042a9d000cf7fd8488a3d32805",
"assets/images/identification_images/Geoemyda_spengleri/02.jpg": "926c795a14c1d3d7f84a7b77ac60e227",
"assets/images/identification_images/Geoemyda_spengleri/04.jpg": "c53b0af227b08738ed92db192b816e35",
"assets/images/identification_images/Heosemys_annandalii/00.jpg": "a19521ac38d1dde66c123f39d2f70e16",
"assets/images/identification_images/Heosemys_annandalii/01.jpg": "b82fbbfed14119487bcbf2e6bc61f3e7",
"assets/images/identification_images/Heosemys_annandalii/03.jpg": "38c144ae45bcb5ad8251b0391acd5722",
"assets/images/identification_images/Heosemys_annandalii/02.jpg": "09d26a59b9876432143be63159aa909b",
"assets/images/identification_images/Heosemys_annandalii/04.jpg": "3c04bb380ed857b3730591d0796ea133",
"assets/images/identification_images/Cyclemys_oldhamii/00.jpg": "9789329a4c19f58ba148969d341fe2ac",
"assets/images/identification_images/Cyclemys_oldhamii/01.jpg": "e0ef1ab0bdce374955fd602230cf3391",
"assets/images/identification_images/Cyclemys_oldhamii/03.jpg": "4abc31883d1ce7043978f3f619a642ae",
"assets/images/identification_images/Cyclemys_oldhamii/02.jpg": "16b6f17855513c31dc61ad375b1e9682",
"assets/images/identification_images/Indotestudo_elongata/00.jpg": "c1d3d60be47e1b5eedb99431ac06684c",
"assets/images/identification_images/Indotestudo_elongata/01.jpg": "9e9c2f5d16bbac2c17ce0486425754b7",
"assets/images/identification_images/Indotestudo_elongata/03.jpg": "236e4a83373fc5a12cbec09993f9b1fa",
"assets/images/identification_images/Indotestudo_elongata/02.jpg": "d13e8ce8c2dfe645d10eb3582c6e7053",
"assets/images/identification_images/Cyclemys_pulchristriata/00.jpg": "5c9dabba1dac6214525ba7bcb35116db",
"assets/images/identification_images/Cyclemys_pulchristriata/01.jpg": "6e1380251af070a1035a851d71dbe030",
"assets/images/identification_images/Cyclemys_pulchristriata/03.jpg": "ff56f441822908510559c5c27256e31f",
"assets/images/identification_images/Cyclemys_pulchristriata/02.jpg": "ddeaaadd6e237e0c22340f1fddcb04d0",
"assets/images/identification_images/Pelodiscus_variegatus/00.jpg": "d77039d9c5c1ad9c9060db36364fbbf5",
"assets/images/identification_images/Pelodiscus_variegatus/01.jpg": "bad227dfd45d9190e45b8b3e26a87fa5",
"assets/images/identification_images/Pelodiscus_variegatus/03.jpg": "60c8a68115257300d42eff49c05acd4a",
"assets/images/identification_images/Pelodiscus_variegatus/02.jpg": "f34f7a5b864c434d23028a776e6daa20",
"assets/images/identification_images/Palea_steindachneri/00.jpg": "efc9c60bef6747f7668c25989cc901d7",
"assets/images/identification_images/Palea_steindachneri/01.jpg": "c29a73c7b1954c8915775a0129c292e6",
"assets/images/identification_images/Palea_steindachneri/03.jpg": "0d29a7287fba5aa578027cff18cd87f4",
"assets/images/identification_images/Palea_steindachneri/02.jpg": "ada5b32ff375980673985eacccacad09",
"assets/images/identification_images/Palea_steindachneri/04.jpg": "10e4890e0cbbc6448631b56441de9da6",
"assets/images/identification_images/Rafetus_swinhoei/00.jpg": "04b1ec565fb5403045bea83110efdd2b",
"assets/images/identification_images/Rafetus_swinhoei/01.jpg": "b24dedd1bf6fba1ab833a90b84fda35f",
"assets/images/identification_images/Rafetus_swinhoei/02.jpg": "cda41bf85afe44e6be584ac7b7d302f0",
"assets/images/identification_images/Cyclemys_atripons/00.jpg": "cbceb4609c9f87981fc92002e422e4a0",
"assets/images/identification_images/Cyclemys_atripons/01.jpg": "85d9893608b87fa0fbe150deda0f281e",
"assets/images/identification_images/Cyclemys_atripons/03.jpg": "0342e013cc0b679392e6c5351a698984",
"assets/images/identification_images/Cyclemys_atripons/02.jpg": "fae0b9344246a49329fcc6461091b0ee",
"assets/images/identification_images/Sacalia_quadriocellata/00.jpg": "b415058b4df4d24f2eb4fc420dc1d660",
"assets/images/identification_images/Sacalia_quadriocellata/01.jpg": "6e436790463adc586b88752bd84b234d",
"assets/images/identification_images/Sacalia_quadriocellata/03.jpg": "566fad628028b49c8df5d6c7ffcbc39a",
"assets/images/identification_images/Sacalia_quadriocellata/02.jpg": "769007fc948f9e7c135b09a932501622",
"assets/images/identification_images/Mauremys_annamensis/00.jpg": "78801f2d68bf7346483a9139ba2c6ed5",
"assets/images/identification_images/Mauremys_annamensis/01.jpg": "5ce7a8051b86d7bfdffde7b85cc10384",
"assets/images/identification_images/Mauremys_annamensis/03.jpg": "a80f599b79b7871342774ea7b3f26d3d",
"assets/images/identification_images/Mauremys_annamensis/02.jpg": "1fef0c9c58bbf9452ae8d1be0f04249c",
"assets/images/identification_images/Siebenrockiella_crassicollis/00.jpg": "626241be8ee7aa294a63b12ac1b3ebf5",
"assets/images/identification_images/Siebenrockiella_crassicollis/01.jpg": "8faa3ec62d1ecb6b2f4c602b49c91746",
"assets/images/identification_images/Siebenrockiella_crassicollis/03.jpg": "ef95c86452cf712b74103b4074d02553",
"assets/images/identification_images/Siebenrockiella_crassicollis/02.jpg": "0f23a1274aee65a0a2c89e1e53458952",
"assets/images/identification_images/Mauremys_sinensis/00.jpg": "18c6c9b59b6f2dc36d1313ff3b9d3223",
"assets/images/identification_images/Mauremys_sinensis/01.jpg": "91da0be8a6996fd99dcff1de7a1ceb44",
"assets/images/identification_images/Mauremys_sinensis/03.jpg": "9c064375b78981045332689ced90df68",
"assets/images/identification_images/Mauremys_sinensis/02.jpg": "e1be80d4d56386cc428c184e82f705b2",
"assets/images/identification_images/Cuora_bourreti/00.jpg": "0cbf18ee1f19c8ce60dbff896cf683a3",
"assets/images/identification_images/Cuora_bourreti/01.jpg": "709e476e824dce652a2eebee25927593",
"assets/images/identification_images/Cuora_bourreti/02.jpg": "ec08ba5ac5c43beedda5a1eee83d518b",
"assets/images/identification_images/Heosemys_grandis/00.jpg": "8a017f454fd5bd41e8915acc51283d0c",
"assets/images/identification_images/Heosemys_grandis/01.jpg": "ae23ea2de5abd792b72c1c669eb21ed3",
"assets/images/identification_images/Heosemys_grandis/03.jpg": "f90177714c7d28be085929f3b32f62a3",
"assets/images/identification_images/Heosemys_grandis/02.jpg": "4a332643f8eabb6372f03513e560cbe9",
"assets/images/identification_images/Manouria_impressa/00.jpg": "cfa3bd4c45780cf1a60846e4e72ebf1f",
"assets/images/identification_images/Manouria_impressa/01.jpg": "301945947549a2d9e96722b459159594",
"assets/images/identification_images/Manouria_impressa/03.jpg": "35a365e2f8f65ac530b254233abde432",
"assets/images/identification_images/Manouria_impressa/02.jpg": "0eefb3fb9ed7619e2b714dcf26c87210",
"assets/images/identification_images/Manouria_impressa/04.jpg": "f3a9a8c0548cf62c2645d6eb9afb0682",
"assets/images/icons/logo.png": "15ae18f81456b625b5d0bf084fcb13a6",
"assets/images/artworks/Amyda_ornata/Amyda_ornata_artwork.jpg": "a4d2e31f6860f36be1d21ddee5a3a1b9",
"assets/images/artworks/Mauremys_mutica/Mauremys_mutica_artwork.jpg": "eab827ea8cba9c30f760add2310e26b2",
"assets/images/artworks/Cuora_picturata/Cuora_picturata_artwork.jpg": "76e2f99214d695859e817e4e653e710b",
"assets/images/artworks/Cuora_amboinensis/Cuora_amboinensis_artwork.jpg": "8c5afb7f1b6978b74044b61fb278145f",
"assets/images/artworks/Cuora_galbinifrons/Cuora_galbinifrons_artwork.jpg": "df7a139abd660397c59c7943b71d3cd2",
"assets/images/artworks/Malayemys_subtrijuga/Malayemys_subtrijuga_artwork.jpg": "5b678a145fae4cd9cfd6ee9139c7b154",
"assets/images/artworks/Cuora_cyclornata/Cuora_cyclornata_artwork.jpg": "07155f1805325b7172b1bc956bf5fd54",
"assets/images/artworks/Pelochelys_cantorii/Pelochelys_cantorii_artwork.jpg": "718a3e0d3e0e4e69380ab10f020fdc57",
"assets/images/artworks/Cuora_mouhotii/Cuora_mouhotii_artwork.jpg": "5b9a725ec9f8d4c675f60f8839885624",
"assets/images/artworks/Platysternon_megacephalum/Platysternon_megacephalum_artwork.jpg": "c939b35b95520bbcf270ca2472547446",
"assets/images/artworks/Geoemyda_spengleri/Geoemyda_spengleri_artwork.jpg": "dd8caf48d1bd66b918eef892899ffb40",
"assets/images/artworks/Heosemys_annandalii/Heosemys_annandalii_artwork.jpg": "b88617133543e98d1229bd36ad611551",
"assets/images/artworks/Cyclemys_oldhamii/Cyclemys_oldhamii_artwork.jpg": "ed9a185f7a3676846b4ee4ae5b04ce6a",
"assets/images/artworks/Indotestudo_elongata/Indotestudo_elongata_artwork.jpg": "c3362a5c9f89fb3d5036c09e90cc1ae4",
"assets/images/artworks/Cyclemys_pulchristriata/Cyclemys_pulchristriata_artwork.jpg": "aa26b018c115e27419e9592d835560ff",
"assets/images/artworks/Pelodiscus_variegatus/Pelodiscus_variegatus_artwork.jpg": "2fd2ed71ed60431cfd3655c1cb725db4",
"assets/images/artworks/Palea_steindachneri/Palea_steindachneri_artwork.jpg": "7b1edfd1e2af28e105e1968a9494998b",
"assets/images/artworks/Rafetus_swinhoei/Rafetus_swinhoei_artwork.jpg": "1d2a2f198b6cf9a158017b58dfb941af",
"assets/images/artworks/Cyclemys_atripons/Cyclemys_atripons_artwork.jpg": "5c5ece495dca56ef30fbdf4a3f172251",
"assets/images/artworks/Sacalia_quadriocellata/Sacalia_quadriocellata_artwork.jpg": "0ec37ad00f25976b2a6a73f699d01de5",
"assets/images/artworks/Siebenrockiella_crassicollis/Siebenrockiella_crassicollis_artwork.jpg": "a6cd76b6e1784f562854925c3ca90835",
"assets/images/artworks/Mauremys_sinensis/Mauremys_sinensis_artwork.jpg": "96b134fbbbd1fb677f93cf50fd37e826",
"assets/images/artworks/Cuora_bourreti/Cuora_bourreti_artwork.jpg": "e1dfe8abb54a707d51ffeba4b116801b",
"assets/images/artworks/Heosemys_grandis/Heosemys_grandis_artwork.jpg": "5b30e91f4b810cdebd310e8a0b324a38",
"assets/images/artworks/Manouria_impressa/Manouria_impressa_artwork.jpg": "9b64b3f0c0329ba45945da161388d536",
"assets/images/placeholder-image.jpeg": "8865f01b09e3902c0a7c342fa11a0234",
"assets/AssetManifest.json": "43ab934c785a168828122e121634870d",
"assets/content/sample_api.json": "70fee31e0bafd5c67835bfa61c287aca",
"assets/content/faq_vi.json": "f2c229ac7d4b7b3638e4a2716c147b65",
"assets/content/about_us_vi.md": "0fa7f93ee99cdce462cd8454a7f92bbf",
"assets/content/species_info_vi.json": "e710268be0cd3c31775e03ed7b196d79",
"assets/content/species_info.json": "94b28afdd644212bdae748f84f02fa2d",
"assets/content/faq_en.json": "27e1215e0e19f44d52391e0106b3f609",
"assets/content/laws.json": "a5d1d1815a26308c4cdb2a952ad1d622",
"assets/content/unsupported_species_info.json": "a3d5677530035edc5626e39fe270b0d4",
"assets/content/about_us_en.md": "2ad9df175daf2a3ffc771ad67337e6b2",
"assets/content/species_info_en.json": "520538cc760bb5cbd375c13cbb093002",
"assets/NOTICES": "5646ad0920cf3e16cce9ad2fb3149645",
"assets/FontManifest.json": "bf436384b828ee915a34d6123d1d189f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2a792b62946f0880044e208d75a50a48",
"assets/fonts/HappyMonkey-Regular.ttf": "e97d8141e3bb9967f810609fc4860ada",
"assets/fonts/MaterialIcons-Regular.otf": "6f4aee771d7f657f613424b55dbc6d9d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
