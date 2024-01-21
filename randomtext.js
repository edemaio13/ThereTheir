// random there text array



    let textThereArray = [

        "You won't believe it, but <strong>there</strong> is a herd of llamas playing soccer in the park.",
        "Is that a ghost over <strong>there</strong>?",
        "Your friend is throwing up in the bushes over <strong>there.</strong>",
        "Did a UFO just land over <strong>there?</strong>",
        "Your dog just pooped over <strong>there</strong> in my lawn.",
        "Look, people who are bad at grammar are over <strong>there.</strong>",
        "<strong>There</strong> is a platypus wearing a top hat and monocle in the bathtub.",
        "I heard <strong>there</strong> is a giant chicken on the loose, terrorizing the town.",
        "<strong>There</strong> is a frog in my shoe, and it won't stop singing opera.",
        "<strong>There</strong> are parrots in my palm trees, and they won't stop repeating everything I say.",
        "I visited a zoo in Africa, and <strong>there</strong> were elephants there with tusks as long as my arm.",
        "<strong>There</strong> is a monkey on my neighbor's roof, stealing their bananas and throwing them at me.",
        "I went scuba diving in the Caribbean, and <strong>there</strong> were schools of colorful fish swimming everywhere.",
        "I heard that in Australia, <strong>there</strong> are kangaroos that can jump over cars!"
        
    ];

    // get the random p

    let randomThere = document.getElementById("random-there");
    randomThere.innerHTML = textThereArray[0];
        

    // function that displays random text

    function displayRandomThere() {
        
        // generate random index number
            let randomThereIndex = Math.floor(Math.random() * textThereArray.length);
        // get random element from the array
        let randomThereText = textThereArray[randomThereIndex];

        // update p contents with the random text

        randomThere.innerHTML = randomThereText;

    }





//random their text array



    let textTheirArray = [

        "I am <strong>their</strong> pool boy.",
        "The paper company was losing money, <strong>their</strong> only option is bankruptcy.",
        "The ninjas are silently meditating, sharpening <strong>their</strong> katanas, and plotting <strong>their</strong> next move.",
        "The robots are learning to dance <strong>their</strong> mechanical hearts out.",
        "<strong>Their</strong> first mistake was trusting the financial advice of the old hobo.",
        "The aliens are convinced that <strong>their</strong> socks are the most important accessory in the galaxy.",
        "The vampires are arguing about whose turn it is to clean up <strong>their</strong> bat cave.",
        "The werewolves are convinced that <strong>their</strong> howling is the most beautiful sound in the world.",
        "The zombies are always complaining about <strong>their</strong> diet, but they refuse to eat anything that's not brains.",
        "The ghosts are convinced that <strong>their</strong> hauntings are the most effective way to get attention.",
        "The giraffes use <strong>their</strong> long necks to reach the highest leaves on the trees.",
        "The tigers mark <strong>their</strong> territory by spraying urine around <strong>their</strong> habitat.",
        "The peacocks display <strong>their</strong> beautiful feathers to attract mates during mating season.",
        "The elephants use <strong>their</strong> trunks to communicate with each other through sounds and touch.",
        "The pandas rely on <strong>their</strong> bamboo diet to survive in the wild.",

    ];

    // get the random p

    let randomTheir = document.getElementById("random-their");
    randomTheir.innerHTML = textTheirArray[0];

    // function that displays random text

    function displayRandomTheir() {
        
        // generate random index number

        let randomTheirIndex = Math.floor(Math.random() * textTheirArray.length);

        // get random element from the array

        let randomTheirText = textTheirArray[randomTheirIndex];

        // update p contents with the random text

        randomTheir.innerHTML = randomTheirText;

    }



//random theyre text array



    let textTheyreArray = [

        "The aliens are convinced <strong>they're</strong> the most fashionable beings in the galaxy.",
        "The vampires are saying <strong>they're</strong> allergic to garlic, but they keep eating it anyway because it's delicious.",
        "The werewolves are insisting that <strong>they're</strong> not just for Halloween, <strong>they're</strong> for every full moon.",
        "The zombies are moaning and groaning that <strong>they're</strong> misunderstood, but <strong>they're</strong> not exactly helping their case by trying to eat everyone's brains.",
        "The giraffes at the zoo are so tall that <strong>they're</strong> able to reach the highest leaves on trees.",
        "The monkeys at the sanctuary are so intelligent that <strong>they're</strong> able to solve puzzles and use tools.",
        "The tigers in the wild are so majestic that <strong>they're</strong> able to command respect from all other animals.",
        "The parrots in the pet store are so colorful that <strong>they're</strong> able to brighten up any room.",
        "The crocodiles in the river are so stealthy that <strong>they're</strong> able to catch prey without being seen.",

    ];

    // get the random p

    let randomTheyre = document.getElementById("random-theyre");
    randomTheyre.innerHTML = textTheyreArray[0];

    // function that displays random text

    function displayRandomTheyre() {
        
        // generate random index number

        var randomTheyreIndex = Math.floor(Math.random() * textTheyreArray.length);

        // get random element from the array

        var randomTheyreText = textTheyreArray[randomTheyreIndex];

        // update p contents with the random text

        randomTheyre.innerHTML = randomTheyreText;

}
    // display the random p when page loads

    window.addEventListener("load", displayRandomThere);
    window.addEventListener("load", displayRandomTheir);
    window.addEventListener("load", displayRandomTheyre);
