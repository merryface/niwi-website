// Initial state
const initial = {
    page: "home",
    squadInfoDisplayed: 1,

    currentVideo: 1,
    youtube: true,

    youtubeVideos: [
        "https://www.youtube.com/embed/jFfqnLAef7A",
        "https://www.youtube.com/embed/KZ1zVEeot7o&t",
        "https://www.youtube.com/embed/HTzl_AOcMLU&ab",
    ],

    hexInfo: {
        name: "Hex Squadron",
        description: "This is where Hex Squadron's blurb will go",
        playerRoster: [
            " \"Scatch\" || Hex Leader",
            "\"Slacks\" || Hex 2",
            "\"Professor\" Autumn || Hex 3",
            "\"Red\" || Hex 4",
            "\"Wazimbo\" || Hex 5",
            "\"Clutch\" || Hex 6",
            "Null || Hex 7",
            "\"Checkers\" || Hex 10",
            "\"Swiper\" || Hex 11",
        ]
    },

    croneInfo: {
        name: "Crone Squadron",
        description: "This is where Crone Squadron's blurb will go",
        playerRoster: [
            "Merryface || Crone Leader",
            "Marineballer || Crone 2",
            "Melon130 || Crone 3",
            "BasAsBob || Crone 4",
            "Dunes || Crone 5",
            "Sandro \"Mad Eye\" || Crone 6",
            "SeLRa || Crone 7",
            "Rizgar || Crone 8",
            "\"Hoon\" || Crone 9",
        ]
    },

    broomstickInfo: {
        name: "Broomstick Squadron",
        description: "This is where Broomstick Squadron's blurb will go",
        playerRoster: [
            "Lokki || Broomstick Leader",
            "Dalton || Broomstick 4",
        ]
    },


    waywardInfo: {
        name: "Wayward Squadron",
        description: "This is where Wayward Squadron's blurb will go",
        playerRoster: [
            "\"Sparrow\" || Wayward 2",
            "Martian || Wayward 3",
        ]
    },


};

export default initial;