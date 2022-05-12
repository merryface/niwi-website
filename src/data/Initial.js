// Initial state
const initial = {
    page: "home",
    squadInfoDisplayed: 1,
    menuDisplayed: false,

    currentVideo: 0,
    youtube: true,

    youtubeVideos: [
        "jFfqnLAef7A",
        "0jowwYm2xiI",
        "GLq4RUuTxvs",
    ],

    currentStreamer: 0,
    twitchStreamers: [
        "barisaxbro",
        "marineballer",
        "selrathegreat",
        "wolfsfang7531",
        "merryfacegaming",
    ],

    currentPhoto: 0,
    photos: [
        ["https://live.staticflickr.com/65535/50996618868_3a91c663b9_c.jpg", "ISD on Yavin"],
        ["https://live.staticflickr.com/65535/50997312501_8da61fb8e1_c.jpg","X-wing fighting Tie Defender"],
        ["https://live.staticflickr.com/65535/50996617213_410a9637c2_c.jpg", "U-Wing",],
        ["https://live.staticflickr.com/65535/50996616483_f8b5469b4b_c.jpg", "Exploding Ship"],
        ["https://live.staticflickr.com/65535/50997311011_3193728efa_c.jpg", "ThumbnailNiWivFiraxaCinematic"],
        ["https://live.staticflickr.com/65535/50997423687_810907c9a5_c.jpg", "Wolf in defender"],
        ["https://live.staticflickr.com/65535/50997423702_3d6c04c860_c.jpg", "Wolf in defender 2"],
        ["https://live.staticflickr.com/65535/50997304996_ec50600d7a_c.jpg", "unnamed uwing 1"],
        ["https://live.staticflickr.com/65535/50997305031_d42b244368_c.jpg", "TiesFormationOld"],
        ["https://live.staticflickr.com/65535/50997305061_e25716dabd_c.jpg", "tie bomber"],
        ["https://live.staticflickr.com/65535/50997423792_4368e54826_c.jpg", "tiebomber 3"],
        ["https://live.staticflickr.com/65535/50997305101_cd871066fb_c.jpg", "tiebomber 2"],
        ["https://live.staticflickr.com/65535/50996610513_cc325c50e6_c.jpg", "tiebomber 1"],
        ["https://live.staticflickr.com/65535/50996610538_58ffe83dc0_c.jpg", "Tie Bomber Arc"],
        ["https://live.staticflickr.com/65535/50996610558_594e852a9d_c.jpg", "Thumbnail TFA Nova Cinematic"],
        ["https://live.staticflickr.com/65535/50996571988_df138b17f0_c.jpg", "Slipped the Surly Bonds of Earth"],
        ["https://live.staticflickr.com/65535/50997392677_4214e559b8_c.jpg", "Glow Up"],
        ["https://live.staticflickr.com/65535/50996593248_1b06142023_c.jpg", "Hotshot 1"],
        ["https://live.staticflickr.com/65535/50997423987_df239fbe7c_c.jpg", "bayes"],
        ["https://live.staticflickr.com/65535/50996610618_a8f1778c16_c.jpg", "B-Wing Rockets 1"],
        ["https://live.staticflickr.com/65535/50997423922_21ba900f02_c.jpg", "Combat Maneuvers"],

    ],

    squadrons: {
        hexInfo: {
            name: "Hex Squadron",
            description: "After receiving antiquated light cruisers as payment for fighting off a band of partisans off a small fleet of battle bruised Imperial ships, Hex Squadron formed the Night Witches. With the newfound firepower, Hex built the Night Witches headquarters inside a small asteroid on the outer rim, and became renown for their skills as guns for hire. NiWi grew both in size and fame quickly, but it all started with this very squadron.",
            playerRoster: [
                " \"Scatch\" || Hex Leader",
                "\"Professor\" Autumn || Hex 2",
                "\"Slacks\" || Hex 3",
                "\"Red\" Ciel R || Hex 4",
                "\"Clutch\" || Hex 5",
                "Null || Hex 6",
                "\"Checkers\" || Hex 7",
                "\"Swiper\" || Hex 8",
                "\"Lancer\" || Hex 10",
                "Slayer || Hex 11",
                "saberpowers || Hex 12",
                "JC || Hex 13",
            ]
        },

        croneInfo: {
            name: "Crone Squadron",
            description: "The galaxy is a large place, and as the Night Witches’ services became more and more demanded, it was time to expand. Manning the outpost on the other side of the outer rim, Crone Squadron became the Night Witches’ second most famous squadron, taking on missions where Hex could not due to distance or other pressing matters. Hidden in an asteroid field, Crone repurposed a section of a defeated and abandoned Imperial Star Destroyer and made it their home.",
            playerRoster: [
                "Merryface || Crone Leader",
                "Marineballer || Crone 2",
                "Melon130 || Crone 3",
                "BasAsBob || Crone 4",
                "Dunes || Crone 5",
                "Sandro \"Mad Eye\" || Crone 6",
                "\"Meme Machine\" SeLRa || Crone 7",
                "Rizgar || Crone 8",
                "\"Hoon\" || Crone 9",
                "Curro5150 || Crone 10",
            ]
        },

        broomstickInfo: {
            name: "Broomstick Squadron",
            description: "Embedded among other squadrons currently stationed on the MC-75 Star Cruiser Percipience sits Broomstick Squadron - elite mercenary fighter pilots hailing from all corners of the galaxy. While sympathetic to the cause of the struggling New Republic, Broomstick Squadron’s pilots fight to survive more than anything else - and for now escorting diplomatic corvettes and splashing TIEs brings in the credits to keep the holoprojectors glowing and the cantina drinks flowing.",
            playerRoster: [
                "Lokki || Broomstick Leader",
                "\"Slug\" Bodhi || Broomstick 3",
                "Dalton || Broomstick 4",
                "VigyoJames || Broomstick 5",
                "Wolflock || Broomstick 6",
                "Swift Crescendo || Broomstick 7",
                "Xeperu || Broomstick 8",
                "\"Robo\" || Broomstick 9",
                "\"Vex\" Archer || Broomstick 10",
                "Raven || Broomstick 11",
                "\"Binks\" || Broomstick 12",
                "Poof Donut || Broomstick 14",
                "JediNinja || Broomstick 15",
                "Zmoney261 || Broomstick 16",
                "SteelVyper || Broomstick 17",
                "BigSpoon || Broomstick 18",
                "R1H4 \"Glennn\" || Broomstick 19",
                "WobbleGomber || Broomstick 20",
                "Wazimbo || Broomstick 21",
                "Amandamygdala || Broomstick 22",
            ]
        },


        waywardInfo: {
            name: "Wayward Squadron",
            description: "With the Night Witches' fame growing, it did not take long until their stories spread into the dreams of young foolhardy pilots of all backgrounds. Wishing to partake in the morally ambiguous glory, they sought them out with the hopes of one day joining their ranks. After undertaking the perilous trip to the hidden Crone outpost, the leaders were impressed by their dedication and established Wayward squadron. Wayward was assigned an old Raider, tasked with defending Crone's outpost and being on call whenever there is need for more firepower.",
            playerRoster: [
                "\"Sparrow\" || Wayward 2",
                "Martian || Wayward 3",
                "Hera || Wayward 4",
                "R3M1X_R3XY|| Wayward 5",
                "\"Solar\" Ivy || Wayward 6",
                "\"Hero\" || Wayward 7",
            ]
        },

    },
};

export default initial;