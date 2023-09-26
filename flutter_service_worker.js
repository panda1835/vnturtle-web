'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "772297075a890345dbe7e76543e54777",
"index.html": "31df7dc1446f0f87bdd784e1ce679dbf",
"/": "31df7dc1446f0f87bdd784e1ce679dbf",
"main.dart.js": "3fa9d09e721f702ce2a695080fd87fe8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "120ba9ca3beb3889bf9716b6fb91dfbe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3cf7149588cedc52e5ed383746fdf9c",
".git/config": "b685832115273ea4af3c383d87a87658",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/9e/6c4999ab3a1fce441c33809d3db16e04c944ae": "f08e46414b5e3f8f1b65f246bf9e5e0a",
".git/objects/6a/7157e3e930009fb12269646df7b5a67c3b43c7": "c165685bb1020675a9c2ae0043011891",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/57b57cab6f7a1ab3ac5e4a44798dcb2e8ea824": "3d06275ac0bfc0b000a5e5d1e4441a48",
".git/objects/56/546d546d54db52fb4ab4ac4b0f2562895a867d": "21599710bc349c3a61e40222f15046ba",
".git/objects/3d/29fa9daeca2d8e50500131a0d0bc5da59b0bff": "f9f9abb9da16448eebee38c1405b3d07",
".git/objects/58/0b2adb3da9bf8f7fa1de360af939f455e61de4": "ee32168a6b4e332a463f91a35c0027e6",
".git/objects/0b/4fffc3c45936fccebe70b970d4b1e182c1eae0": "5c5474cf66e3db3a4d79f7d401973392",
".git/objects/93/af4d3c4f273481b661bbf28126649a15f4f679": "c68b99baf546b04ba70aa921f8f9b3fd",
".git/objects/34/856c7f23e020a9831245addae134b2c875c2c5": "6d13373a0af9207e5312fd6dee106c6d",
".git/objects/5a/ddaadb38e887d061f3e839ec2c915685140a3c": "87b9b3d6403c85dab8b449b8c003cf7c",
".git/objects/33/f158f81739a7f60977fb7bb5efe3d8e63a4045": "869a004149016298d8cb98d1568d9d60",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ad/e30c58e3486416aa460e62b35d7f52fc0c353c": "34b9cc3606e000c358fd48ffbd25e9e9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/0278a016e0eda2d6d1d0f7dd4b8410587969f2": "8ab69f86bce20793987653ef784ad400",
".git/objects/d0/e201f2ef4adffcdce42d58adb373ea016016fb": "c3136d5bf704d68d1a5625f4499a0375",
".git/objects/be/4930a92ed114469760ec37bbab90def26d8487": "c26bf2b36cf4bf839806379af7a6619f",
".git/objects/be/72019b12e6035bb4a5895aab5e4c541cbbbc8b": "aad2771151d8a4dcc61c79a8738402a8",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/480eb7ed93a8d55bf67515d4a35f314fcb486a": "f388a9bb6720bf2252a6384d590761a5",
".git/objects/df/de6c2e17736e58f9403de98afaad845760a639": "fa55da9e67c25219c88f0dbb1ce29194",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/602d658b5eae560d4df4214f908b3a3d038621": "0a97bc04ddfe90e42bc4c2464c066cf8",
".git/objects/d1/944811404e73747795aa15dd12e729e033156a": "50fad68d5f437f2fe75132461ad18f21",
".git/objects/d6/f5bfffe258ae9e5dda6e6eab084edab41f3651": "4d7b6a200d7582f4065ffd3781fb01c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a2ead2bf60270b6bf8f6d0d13b21951baff776": "7cd77eb7ad8d3c0339c1986e3e4b0c4c",
".git/objects/ee/52197e4cdb046a71bc01c2efc254c898f79705": "676ddbb2f582f457f4fdada77d96e69b",
".git/objects/c9/f30d915dd95ce4b955ab726fb8a95a82b339ac": "9fbd589047ec66381eb1ffbd6233c664",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/cf8eb1ab767229c3fcae6550989dc4851435cf": "d7c4e7e4fbec6953d89c20a6a6a87832",
".git/objects/fd/d54eb3cc4f47ab257433feaa3de6e8503d6aee": "9eb3dff9646ecf50decae31e3502f45a",
".git/objects/f2/d15a7dde43ef9e3813da808546d6d5dd936908": "8b87fe31153137c3f00c13eb6b59cabc",
".git/objects/e3/535ab383bca954c1f80047a744dc062e8b3d9d": "12dfd95e67ed0f46a47e181c2a5b8781",
".git/objects/e3/9814c6a0a6313543b9833c6aaeb2004565225f": "22c6cbd5b6cf5aab304adfee1b935b10",
".git/objects/ca/3bd1dab92b969010c7bea02e81e7b383b78a3e": "240e2dfef8833b4880f163e4a1f94ca5",
".git/objects/c6/3c758fcb6881d7ca051678a53b602fc310451c": "fd26e4ca103900f40f9a139fda08e15b",
".git/objects/4e/2409d773fa84aa29c09d27308ed056c1dbfec0": "26ee5cee4c84c330446c7158b3395f7e",
".git/objects/20/eedca7aec930c3470747ac2fb18b8c4b93a5f6": "bf4c09118a740783bc080c876ac0e9d1",
".git/objects/4b/d3a0e62ec839239d1e2bb5e14e7ffe890bb91d": "dcb13b1dae4128cc326ec56b68d73cc9",
".git/objects/17/5195d749f72a9d7b1a7d5ec3f0d611c0101c8e": "e7279eac1ca1897f96020cfc9056cad5",
".git/objects/7b/3f5b608dc5da77947fd8c11955496f38a30b27": "891612f4c3ffa04809c97202575c82f4",
".git/objects/8a/8dd876bdc27276f2ec48e46ecf078710609f2d": "f12ced4b7d99c03647e9aa8f2d7d45ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4444718a8cdf0a00f69b9faf037482ecc54909": "51ef2479cd5dfb96c45fdad69c8ddc9d",
".git/objects/10/526911e5a2c1808a547994515eed72c8ce0072": "5febe5de8b23d7bf98fe726dafba6130",
".git/objects/19/4ef3ccc966303dde9babd6621356b6b08d97ef": "93042da1899dca9e2f372b351a621867",
".git/objects/21/158838eb7bc942d8fb9f648cddaff67adc7dbd": "fcafa5582e557bff3da81b6a331700f8",
".git/objects/4d/364c365befe835c7eb1b5638b9676a314ff424": "9bae50d9de6cdb4b3fccf9129b9a75cd",
".git/objects/75/1f940fdb7eb3060684701cd894408592d16a39": "0faa27b874a26c433af51731064583c9",
".git/objects/44/1a2d7d40afe09fa40956a5e8fd69f433a83641": "94c49a96c44081ee7f9084ebc88f39d8",
".git/objects/2a/3b01c6d2514ea3b3a4e91d1586cb9d0e5549f4": "4ceb7c42276b8e27df1f481ed7a4c082",
".git/objects/2f/bbd5fc28902fd0459db6391e3fd9d0eb2fc46f": "f0ed4fe7dd2cfb716ff5d0d3939fdac1",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/52a3366f704f6d3a0a848c93688aae75f3d6c3": "3879ebd86577f949230a2ccff04241a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/580b0cd5eff096c38ebcec6ca9c659d0e6944c": "90b8341c73bfce30f2a99d45cddea9ce",
".git/objects/6e/bfa79bd225277cc852bce168112415ee4c6541": "5bca510f15f6122bbeefc6a70cb7f25b",
".git/objects/9a/4576d138f2c4799549adcc91b2b9ea5a8e0a2a": "c728eae180f852e01c8b87f4a7e71fae",
".git/objects/65/489ff93254393e2dd137d4b904d6d123e7f3ab": "dfc597369db1f15fa5b88b93b1ec8271",
".git/objects/3a/b4b39b6e572fcaefcde38dd98e7acdb1025139": "25da93b5b2ed28f2e088d75fb208a609",
".git/objects/53/7a55978074f6c0e2b5da100f089b94f842665e": "a14285ed79b1c9dd66274b94dc1e9f87",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/915db1680c46fe2ef2676b814d8d84cedb67bf": "a47323d72a437a869277ea8c4f7c541b",
".git/objects/30/d106ffab39bead15052710ce04f8c5be2c39e5": "fab0208050ded2c144b022e9af6f2780",
".git/objects/6d/c533c94523e203b7e515e264254ff0c4372564": "2f1590f876a64cc5f5fbb4eca08e71c0",
".git/objects/06/363a9091c635ff82bf53dd273f664ca100ae2d": "8c2f78ee7557cadacc54e70861f3ab1e",
".git/objects/6c/ca4a99b13f6e50e083bd8319ebf9034ac748b7": "9bedd6692b7908ad05376c90f17a72f1",
".git/objects/99/794024ba4d20cc5acfbeaa2ac0b51102af00e5": "50317853cff0007af190bbe4f2283730",
".git/objects/55/fd4778ed77a69b32d973c71afbbb167b9fd4c8": "709a4686d026fc3212837f8c00489750",
".git/objects/97/bfc062a6cbc566d1e4267f0cefa9b4d5da44ed": "ce4fc8cc930d239b774997dc5c3469b4",
".git/objects/0f/faa468be7d917681b3de79286e56dbe4f8a170": "250a70e9188cb54a4bd1834a9952708c",
".git/objects/0a/9137c3a5ac60552e4c2faeec39b29af4f7419c": "8bb318cf1acc1bb0bd1a5bc9c9c4d865",
".git/objects/0a/1d1c67b8354e45435702e4c3a434b084edb75f": "a260023f9b72fac30fb88a05254a4ff0",
".git/objects/0a/c8e1aa1cc28b586c7fe5ac4dc3e68e51905add": "0050b8a6ae4abcfa0b358c49d688e3b7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/1bc4a2a349f4bd90530df380106756b296ff71": "0e7500f6d6a3fe55905d8a781f72b752",
".git/objects/ba/657b66aefdb523dd35493836a549a5d324ead6": "39dfa44ea2e0ec73c30bcdaf35768386",
".git/objects/a9/efd8e87df4b29d7e49e58c2e4f509821864ebe": "729f168fa9f280c2c13524545a61d8ce",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/478935f30fad30cf8889eeb90a5453993fa3dd": "843160268615e486adae9ab71b3a138c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/80ed9a1b6b1c46a1e6e0029247e141de5158ca": "0a369f11dc707447507c4693a7734053",
".git/objects/db/bfd02767c5984e1107a07e6a8f75abb767a236": "ce59dab97152b50bdf28a3cc7475cd07",
".git/objects/b0/0f137fe660e3353912e3ff9ae95be1ee291a57": "db54a0fedc951a8e51d337b7138b7366",
".git/objects/b0/fc10f6e9745f2102b8e2d210cde5242234c1b9": "5cab123e1d3ca1659029dd9333cb0c5b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/2c83cd4b6291becda1d58bb68060b0334d73a1": "1243a73fdd5816e7334bb746f395be02",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/3314047383b6328ae92632a1000fa45247175c": "22b460cb08d9bd9c62d4cc1c1444bdfe",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f1/6984c08f91d1b9239c06d6da9e59bd026ab8b5": "43781b07c690e17905df5c88ffe3d935",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/79/87e33d93b74ebfd45643fbb39ca1615c87d00e": "c8f5e987346525bc7e5df6d3a701ba10",
".git/objects/79/86b875692b56f22da43f0afba1dd9b27403a22": "9f53028618348e675802061aea72e4bf",
".git/objects/2d/844fce34e22956717b1579428e66602094d157": "dccc62690fb8f27fad09dee4fa94b5d8",
".git/objects/41/5831290a7b64def597ed94b87069881eb1b3a8": "7c27f9f5921cab11e60336e8086e4cab",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/41/e0d4b89c18a54eb473829ebe6155a4ead72acc": "9a11aaed48fd03c9339fca720d42ad90",
".git/objects/48/532b2524da2ad3b725df9cb98fa12372b2a01e": "cbc17f5a294af993d43ee5bac0d2e6f9",
".git/objects/4a/245757efc84da8faa8f1302a46baa18bff2be8": "1ac8f1f82909e5e4b468e2e8c5b5aa68",
".git/objects/8c/8e693cb5869dece74a17d56b4b77368eccbdb8": "b3121960a42dd46930813feaec63d3ab",
".git/objects/76/e49bf0bea1ddacaf8937e6e4561349ee9d6925": "a8b4e849c7f44834b11f8dc152877c37",
".git/objects/40/0afca7135d11694b31a1021c25b18cd1611680": "8263495f03d37be7930192da7c55cbd2",
".git/objects/22/af9e7ec23b84577bef4b8dbf023b39785fb720": "03080bb3f404aeac6a4cf3afc2ece5ea",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "945e8cfb108b3c90941d3c594c59e298",
".git/logs/refs/heads/main": "90e1e3076ef6e353398acaca1f7988fd",
".git/logs/refs/remotes/origin/main": "395dd27bf23091dcac484d08b0b4e5a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0ad86d7910ef7ff7d1e880e521c7945e",
".git/refs/remotes/origin/main": "0ad86d7910ef7ff7d1e880e521c7945e",
".git/index": "04ea09ff8372087b4ee0c15f9d671b9d",
".git/COMMIT_EDITMSG": "ac432b5c6421da1faa3dde55c46a09c2",
"assets/images/reference_images/Amyda_ornata/Amyda_ornata_thumbnail.jpg": "e8ac3c4f372fa5fec167ff798e75216a",
"assets/images/reference_images/Mauremys_mutica/Mauremys_mutica_thumbnail.jpg": "a3dd0967cf5259f7cf604d142132aba1",
"assets/images/reference_images/Cuora_picturata/Cuora_picturata_thumbnail.jpg": "33619f7a1ff5a88d478e9f54a2012b2d",
"assets/images/reference_images/Cuora_amboinensis/Cuora_amboinensis_thumbnail.jpg": "64aa6b77b120d7d4310c3cf2c82b127c",
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
"assets/images/icons/logo.png": "15ae18f81456b625b5d0bf084fcb13a6",
"assets/images/placeholder-image.jpeg": "8865f01b09e3902c0a7c342fa11a0234",
"assets/AssetManifest.json": "43ab934c785a168828122e121634870d",
"assets/content/faq.json": "f2c229ac7d4b7b3638e4a2716c147b65",
"assets/content/sample_api.json": "70fee31e0bafd5c67835bfa61c287aca",
"assets/content/species_info_vi.json": "99e0c4c57a258c2f809e4db06a8a157e",
"assets/content/about_us.md": "0fa7f93ee99cdce462cd8454a7f92bbf",
"assets/content/conservation_status.json": "a771a74ab21043f4736b3398211b157a",
"assets/content/species_info_en.json": "ebe309fa2797d2a5ee5c380dfc9839f2",
"assets/NOTICES": "9ab719535aec52028030477fce251864",
"assets/FontManifest.json": "bf436384b828ee915a34d6123d1d189f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2a792b62946f0880044e208d75a50a48",
"assets/fonts/HappyMonkey-Regular.ttf": "e97d8141e3bb9967f810609fc4860ada",
"assets/fonts/MaterialIcons-Regular.otf": "b4db7444919584beb818c6d59eb79a4a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
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
