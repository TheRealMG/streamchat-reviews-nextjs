import React from "react";
import ReviewCardList from "./ReviewCard/ReviewCardList";

const DUMMY_REVIEWS = [
  {
    id: "m1",
    image:
      "https://cdn2.unrealengine.com/ac2-gamename-store-landscape-2560x1440-2560x1440-aa944fa0e8c6.jpg",
    game: "Assassin's Creed 2",
    publisher: "Ubisoft",
    developer: "Ubisoft Montreal, Ubisoft Kyiv",
    author: "Tony",
    rating: "6",
    description: `Assassins Creed 2 is a semi open world action adventure game.

        Story: Two plots, one set in the "modern" world and the other in 15th century Italy. Both are connected in an overarching way through the existence of Assassins and Templars. I think everyone one here knows the basis, so I'll leave it at that. The big "gotcha" in this game was just kinda of a head scratcher, pretty interesting but I have no hype cause I'm pretty sure everything gets retconned anyway. 
        
        Graphics: Pretty solid for being a 2009 game. It kinda looks like mud in some areas, but I think it's decent for the time. It somehow looks best on Switch. 
        
        Sound: Some of it's low quality but I can't judge because I think switch has an issue with low quality sound to keep the file size lower. Overall, fine. Music is fine. 
        
        Gameplay: This is where most of my gripes come into play. I have a realization that a game does not age well not only due to the year it came out, but also genre. For the time, I bet the game was really great. But it has aged very poorly if you compare it to other games of the same genre in more recent times. The game is way too long for what it offers gameplay wise (and story wise), and I feel like both was so oddly paced the last 2/3rds of the game. You stop getting any sort of upgrades about mid game, and they just keep feeding you the same sort of filler like missions to continue the story. So not only is the game like 5 hours too long, before you can access the last section of the game, you have to go collect pages from all across the maps you've been to, which you only get the locations of those right then. You can fast travel between areas but not within the city (which are pretty big), combat is pretty mind numbing, parkour is frustrating more than helpful. I didn't really enjoy my time after halfway point of the game. 
        
        Overall, a good game for it's time, but it's pretty dated.`,
  },
  {
    id: "m2",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000051361/256bd3ebd32d472158a53f95206f55f566f1253dc472f3dc3967be31214816d8",
    game: "A Little to the Left",
    publisher: "Secret Mode",
    developer: "Max Inferno",
    author: "Tony",
    rating: "9",
    description: `A Little to the Left is a puzzle/organization game.

        Gameplay:
        
        Gameplay is centered around levels (there's a lot of them) where you have to solve a puzzles in various ways.  For example, organizing short to big, matching up lines, matching patterns, etc. A lot of the puzzles were pretty fun and satisfying, although some puzzles seem to repeat. You can solve a lot of puzzle in multiple ways, so there's a lot of replay value. 
        
        Some were confusing to figure out, but that's why there's a in game hint that may or may not help. But I didn't have to look up any puzzles online, which is nice. You can also skip puzzles if you so desire, which I did not (at least not on purpose). As someone who has trouble and gets frustrated easily with puzzles, the game does everything so you don't have to feel like that.
        
        There's also a daily puzzle thing called "daily tidy" where you get a different type of level every day. It's more often than not just a level from the main game but organized in a different way, but it's still a neat feature for after you beat and complete all the levels.
        
        Story: 
        
        There's not really any story here, you're simply just fixing what a cat messes up. 
        
        Graphics: 
        
        Graphics are really nice and soothing to look at. Probably the best graphics you could ask for for a game like this.
        
        Sound: 
        
        Sound effects are really nice and satisfying, you hear a little ding sometimes when items are in their right places to help you along. Music is really soothing. 
        
        Overall, probably one of the best puzzle games out right now honestly.`,
  },
  {
    id: "m3",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1105510/capsule_616x353.jpg?t=1612955388",
    game: "Yakuza 5",
    publisher: "Sega",
    developer: "Ryu Ga Gotoku Studio",
    author: "Tony",
    rating: "5",
    description: `Lowest scores I've given a Yakuza game and it deserves it. Longest one and not for the right reasons.  Only some good story beats. Lamest last boss in the series so far. Good ost. Same combat from 4 with the exclusion of the new character, which might have the least fun combat in the entire series. Almost all bosses were a slog and not fun to fight.`,
  },
  {
    id: "m4",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1105500/capsule_616x353.jpg?t=1615821114",
    game: "Yakuza 4",
    publisher: "Sega",
    developer: "Ryu Ga Gotoku Studio",
    author: "Tony",
    rating: "8.5",
    description: `Great story. More varied combat. Awesome characters. Great OST. Too much running around. Some annoying bosses.`,
  },
  {
    id: "m5",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1088710/capsule_616x353.jpg?t=1615575232",
    game: "Yakuza 3",
    publisher: "Sega",
    developer: "Ryu Ga Gotoku Studio",
    author: "Tony",
    rating: "7.5",
    description: `Story makes up for aged gameplay, combat is better in the other ones for sure, there's little variety in this. Graphics are fine for a simple remaster, cutscenes sometimes have this weird blur. Plenty of twists and turns in the story, typical Yakuza game. Sound is fine. Play on easy, not worth going through the lackluster combat on anything higher, but worth it for the story, and worth it to see kiryu expanded besdies being badass yakuza man.`,
  },
  {
    id: "m6",
    image:
      "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/14ff-splatoon_3.jpeg",
    game: "Splatoon 3",
    publisher: "Nintendo",
    developer: "Nintendo EPD",
    author: "Tony",
    rating: "9.5",
    description: `Story
    The inklings are up to no good again.
    Actually though, the games story is really good. I enjoyed the lore behind it (Splatoon is a post apocalyptic world where the wishes and feelings of humans fused with squids through crystals) and the objectives along the way. Missions were actually fun and some were rather difficult. I could even qualify it as a 3D Platformer within the story mode. I only had some slight problems such as finding stuff like missions and lore scrolls was kinda annoying and how to complete some stuff was kinda hard to figure out.
    Gameplay
    There is so much content in this game. Want to play a 3D platformer? Go ahead. Want to play a card game? You got it. Want to play a Wave Based PvE Multiplayer mode? You get that too. Multiplayer shootin? Yep. With the multiplayer, casual is linked to turfing your base more than the enemy, while ranked has even more game modes. Bunch of different gear to unlock as well as weapons. Titles, banners, stickers, decoration for your locker. You get a free battlepass.  I mean, there's a lot.
    Graphics
    They look really crisp and clean in handheld mode. OLED really pops the colors like crazy as you could imagine. Great artstyle.
    Sound
    Really awesome unique music, great satisfying sound effects, its all here and at a high level.
    It's the best game in the series easily and would really recommend it if you just want some fun gaming.`,
  },
  {
    id: "m7",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-plus-rabbids-kingdom-battle-switch/herov2",
    game: "Mario + Rabbids Kingdom Battle",
    publisher: "Ubisoft",
    developer: "Ubisoft Milan, ubisoft Paris",
    author: "Tony",
    rating: "5",
    description: `Story makes up for aged gameplay, combat is better in the other ones for sure, there's little variety in this. Graphics are fine for a simple remaster, cutscenes sometimes have this weird blur. Plenty of twists and turns in the story, typical Yakuza game. Sound is fine. Play on easy, not worth going through the lackluster combat on anything higher, but worth it for the story, and worth it to see kiryu expanded besdies being badass yakuza man.`,
  },
  {
    id: "m8",
    image:
      "https://images.gog-statics.com/95129093472bc8111b84d463f2a657be0ac884525ced04dfdd0afe979098191c_product_card_v2_mobile_slider_639.jpg",
    game: "Heretic: Shadow of the Serpent Riders",
    publisher: "id Software",
    developer: "Raven Software",
    author: "Tony",
    rating: "4",
    description: `Story makes up for aged gameplay, combat is better in the other ones for sure, there's little variety in this. Graphics are fine for a simple remaster, cutscenes sometimes have this weird blur. Plenty of twists and turns in the story, typical Yakuza game. Sound is fine. Play on easy, not worth going through the lackluster combat on anything higher, but worth it for the story, and worth it to see kiryu expanded besdies being badass yakuza man.`,
  },
  {
    id: "m9",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/my-time-at-portia-switch/hero",
    game: "My Time at Portia",
    publisher: "Team17 Nuverse",
    developer: "Pathea",
    author: "Tony",
    rating: "6",
    description: `Story makes up for aged gameplay, combat is better in the other ones for sure, there's little variety in this. Graphics are fine for a simple remaster, cutscenes sometimes have this weird blur. Plenty of twists and turns in the story, typical Yakuza game. Sound is fine. Play on easy, not worth going through the lackluster combat on anything higher, but worth it for the story, and worth it to see kiryu expanded besdies being badass yakuza man.`,
  },
  {
    id: "m10",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000029016/b6ca09e9a7f6faf27641f62dabe64c6ff97b4f326aa478379e3c112aa28eb9ab",
    game: "Monster Hunter Rise",
    publisher: "Capcom",
    developer: "Capcom",
    author: "Tony",
    rating: "8.5",
    description: `Story makes up for aged gameplay, combat is better in the other ones for sure, there's little variety in this. Graphics are fine for a simple remaster, cutscenes sometimes have this weird blur. Plenty of twists and turns in the story, typical Yakuza game. Sound is fine. Play on easy, not worth going through the lackluster combat on anything higher, but worth it for the story, and worth it to see kiryu expanded besdies being badass yakuza man.`,
  },
  {
    id: "m11",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000044922/df5237749af09dda942147e22f49a0118b98fa7b5081cf53b31e1bd6530e7a23",
    game: "Disco Elysium",
    publisher: "ZA/UM",
    developer: "ZA/UM",
    author: "Tony",
    rating: "9.5",
    description: ``,
  },
  {
    id: "m12",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/w/windjammers-2-switch/hero",
    game: "Windjammers 2",
    publisher: "DotEmu",
    developer: "DotEmu",
    author: "Tony",
    rating: "8",
    description: ``,
  },
  {
    id: "m13",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000060110/5aad47ab70eca40471500d33801b3d191ac3e22983101cb6710aea78950dff2f",
    game: "Pupperazzi",
    publisher: "Kitfox Games",
    developer: "Sundae Month",
    author: "Tony",
    rating: "8",
    description: ``,
  },
  {
    id: "m14",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/toree-3d-switch/hero",
    game: "Toree 3D",
    publisher: "Siactro",
    developer: "Siactro",
    author: "Tony",
    rating: "5",
    description: ``,
  },
  {
    id: "m15",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/macbat-64-journey-of-a-nice-chap-switch/hero",
    game: "MacBat 64",
    publisher: "Siactro",
    developer: "Siactro",
    author: "Tony",
    rating: "2",
    description: ``,
  },
  {
    id: "m16",
    image:
      "https://cdn1.epicgames.com/0a84818055e740a7be21a2e5b6162703/offer/WatchDogs_Legion_Store_Landscape_2560x1440-2560x1440-6564aab7daeb17650e7fc190714bba76.jpg",
    game: "Watch Dogs: Legion",
    publisher: "Ubisoft",
    developer: "Ubisoft Toronto",
    author: "Tony",
    rating: "4",
    description: ``,
  },
  {
    id: "m17",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000014127/dc8522ee2630e1dc236dae5f26aaf26ef3ad99dcb1397ee0f90f00f36763c398",
    game: "Donut County",
    publisher: "Annapurna Interactive",
    developer: "Ben Esposito",
    author: "Tony",
    rating: "6",
    description: ``,
  },
  {
    id: "m18",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/l/lofi-ping-pong-switch/hero",
    game: "Lofi Ping Pong",
    publisher: "Kalvarez A. Party",
    developer: "Calvares",
    author: "Tony",
    rating: "8",
    description: ``,
  },
  {
    id: "m19",
    image:
      "https://cdn.2kgames.com/2022/01/20/61e8b728a09d5tri3641_yrggn91_w22_key.jpg",
    game: "WWE 2K22",
    publisher: "2K Games",
    developer: "Visual Concepts",
    author: "Tony",
    rating: "3",
    description: ``,
  },
  {
    id: "m20",
    image:
      "https://external-preview.redd.it/xrRxZtt8mggtIRuSyIH91bvSIxl1D9KAXWmvyurCUvk.png?format=pjpg&auto=webp&s=d669c8c55b614fe6fd55bcbda0e0b38f0296865c",
    game: "Elden Ring",
    publisher: "Bandai Namco Entertainment",
    developer: "FromSoftware Inc.",
    author: "Tony",
    rating: "9",
    description: ``,
  },
  {
    id: "m21",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/n/no-more-heroes-switch/hero",
    game: "No More Heroes 1",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "???",
    description: ``,
  },
  {
    id: "m22",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/capsule_616x353.jpg?t=1680293801",
    game: "Hades",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "9.5",
    description: ``,
  },
  {
    id: "m23",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/21980/capsule_616x353.jpg?t=1654079460",
    game: "Call of Juarez: Bound in Blood",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "6.5",
    description: ``,
  },
  {
    id: "m24",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/g/golf-story-switch/hero",
    game: "Golf Story",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "5",
    description: ``,
  },
  {
    id: "m25",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1373510/capsule_616x353.jpg?t=1656342866",
    game: "Bloodrayne: Terminal Cut",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "2",
    description: ``,
  },
  {
    id: "m26",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/235210/capsule_616x353.jpg?t=1644283470",
    game: "Strider (2014)",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "-",
    description: ``,
  },
  {
    id: "m27",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/927380/capsule_616x353.jpg?t=1671625335",
    game: "Yakuza Kiwami 2",
    publisher: "Sega",
    developer: "Ryu Ga Gotoku Studio",
    author: "Tony",
    rating: "8",
    description: ``,
  },
  {
    id: "m28",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/322290/capsule_616x353.jpg?t=1680815086",
    game: "Gurumin: A Monsterous Adventure",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "8",
    description: ``,
  },
  {
    id: "m29",
    image:
      "https://classicreload.com/sites/default/files/wolfensein-3d.png",
    game: "Wolfenstein 3D",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "4",
    description: ``,
  },
  {
    id: "m30",
    image:
      "https://cdn1.epicgames.com/6af58339c2424644988e0fb83dfd9bd5/offer/EGS_FUSER_Harmonix_S3-2560x1440-2560x1440-b4455586675901db4e37e35037f87a52.jpg",
    game: "FUSER",
    publisher: "",
    developer: "",
    author: "Tony",
    rating: "6",
    description: ``,
  },
 ];

const ReviewsContainer = () => {
  return <div className="reviews_container flex-grow">
    <ReviewCardList data={DUMMY_REVIEWS} />
    My Reviews
  </div>;
};

export default ReviewsContainer;
