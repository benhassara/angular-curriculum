angular.module('portfolio')

  .controller('HomeCtrl', function($scope) {
    $scope.heading = 'This here is a portfolio!';
  })

  .controller('ProjectsCtrl', function($scope) {
    $scope.projects = [
      {
        title: 'The Avengers Initiative',
        image: 'http://f1.bcbits.com/img/a2962739620_10.jpg',
        text: 'The Avengers are a team of powerful superheroes assembled by Nick Fury and S.H.I.E.L.D. through the Avengers Initiative as a team that could fight the battles that they could never handle alone. After saving the world in the battle of New York, they gained world-wide recognition, being referred to as the Heroes of New York by many. They oversaw the return of Loki to Asgard, and then dissolved.'
      },
      {
        title: 'God Squad',
        image: 'http://majorspoilers.com/wp-content/uploads/2010/11/CHAOSWAR_4_COVER.jpg',
        text: 'God Squad is the name fictional comic book character Amadeus Cho gave to a team of gods brought together in the Marvel Universe to face the oncoming Secret Invasion. The team was brought together in Incredible Hercules #117 (2008) by writers Greg Pak and Fred Van Lente, and artist Rafa Sandoval.'
      },
      {
        title: 'Asgardian Government',
        image: 'http://vignette2.wikia.nocookie.net/marvelmovies/images/8/8f/Thor-asgardians.jpg/revision/latest?cb=20110924204730',
        text: "That's me with the red cape."
      }
    ];

  })

  .controller('BioCtrl', function($scope) {
    $scope.quote = "All the power of the storm, from all the world, flows through my veins, and can be summoned by mine hammer at any time, wherever it is. A lightning storm in Japan? Mine. A hurricane off the coast of Barbados? Mine again. A brace of tornadoes in Kansas? Aye...mine. All that might, all that destructive force, mine to command. Channeled and guided through the mystic might of this hammer, guided right at thee!";
    $scope.intro = "Thor is the blood-son of Odin, All-Father of the Asgardians, and Jord, who was also known as Gaea, the goddess who was one of the Elder Gods. Odin sought to father a son whose power would derive from both Asgard and Midgard (as the Earth realm is called by Asgardians), and hence he sought to mate with Jord. Odin created a cave in Norway where Jord gave birth to Thor. Months after the infant Thor was weaned, Odin brought him to Asgard to be raised. Odin's wife, the goddess Frigga, acted as Thor's mother from that time onward. Not until many decades later did Thor learn that Jord was his birth mother.";
    $scope.earlyLife = [
      "The young Thor was raised alongside Loki, who had been adopted by Odin after Loki's Frost Giant father Laufey had been killed in battle. For all of their childhood, Loki was jealous of Thor. Loki's jealousy, which grew to hatred, resulted in a desire to kill Thor. Thus began Loki's enmity for Thor, which persisted for many centuries.",
      "For example, when Thor was eight, Odin sent him to Nidavellir, the land of the Dwarves, to bid the dwarf lords Brokk and Eitri to create three treasures for Asgard's ruler. Among the three treasures that Brokk and Eitri created was the Uru hammer Mjolnir (although Loki sabotaged the creation of the hammer so that its handle was made too short by distracting the dwarven weaponsmiths). Odin bestowed various enchantments upon the hammer, including one that made it impossible for anyone to lift it except someone who was truly worthy of wielding it. Odin then declared that he was reserving the use of Mjolnir for Thor, who would receive it on the day that great deeds of selfless valor had proved him worthy of its power. (Many of the stories contradict each other. This story of the origin of Mjolnir was contradicted by another story that showed Odin wielding Mjolnir long before Thor was even born). For years, Thor strove to become physically strong enough to wield the hammer, and was responsible for many heroic deeds. Finally, when Thor was sixteen, Odin sent him and his friends Balder and Sif on a quest to teach him what was truly required to wield Mjolnir which was a pure heart.",
      "Thor became Asgard's greatest warrior. Before Thor was twenty, he had fallen in love with the goddess Sif. In fact, when Sif had been kidnapped by Storm Giants and ended up as a prisoner of Hela, Thor offered his own life in exchange for Sif's freedom. The goddess of death was so impressed by the young Thunder God's nobility that she let both of them go. The romance between Sif and Thor waxed and waned over the centuries.",
      "Sometime in the 9th Century AD, Thor traveled to Earth to promote his worship among the Vikings. Both the Norsemen and the Germans, who called him Donner ('Thunder'), came to worship Thor and other Asgardians. Thor actively encouraged the adulation of his Viking worshipers for years, and also encouraged them to find glory in battle. When Thor discovered that his more zealous Viking worshipers had slaughtered the inhabitants of a Christian monastery, he was shocked and ashamed that they committed atrocities in his name. Thor then withdrew from Earthly activities altogether, and the active worship of the gods of Asgard effectively ended. For centuries, the only memory that man would have of the Asgardians would be through myths and legends.",
      "According to the severed eye of Odin, Odin himself later caused Thor to live on Earth in the mortal guises of the Germanic heroes Siegmund and his son, Siegfried. In these two roles, Thor played a major role in Odin's efforts to regain the dangerously powerful Ring of the Nibelung. The warrior Hunding killed Siegmund, but Thor was reborn as Siegfried, the son of Siegmund and his lover Sieglinda. Siegfried took possession of the Ring after killing the giant Fafnir, who guarded it in the guise of a dragon (this Fafnir is not to be confused with the former king of Nastrond).",
      "Siegfried then fell in love with the Valkyrie Brunnhilde, but was murdered by Hagen, the son of Alberich, the dwarf who had created the Ring and placed a curse upon it. Odin, however, resurrected Siegfried as Thor, who again had his full godly powers, but wiped out Thor's memory of his two mortal identities. (It is unclear how much, if any, of this account by Odin's severed eye is true.)"
    ];
  })

  .controller('ResumeCtrl', function($scope) {
    $scope.workHistory = [
      'Odin, All-Father - son and heir to the throne of Asgard',
      'The Avengers Initiative - founding member',
      'Extremely successful self-employed vigilante'
    ];

    $scope.skillset = [
      'Lightning and climate control mastery',
      'Superhuman strength, resilence, speed, and stamina',
      'Flight',
      'Extremely heavy hammer toss',
      'Traversal through space and time',
      'Translation'
    ];
  });
