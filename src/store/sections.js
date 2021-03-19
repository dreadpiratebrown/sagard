const sections = [
    {
        section: 1,
        id: 'introduction',
        title: 'Introduction',
        text:`You are Sagard.

You are sixteen years old.

A mistral wind howls across the icy moors, blowing back your thick dark hair. On the horizon, jagged peaks of the mountains that form Ratik’s border gnaw at the sky like wolves’ teeth. Below you is your tribal village. Your tribe is small, with scarcely three hundred members. You live as hunters, trading pelts for those things you need from the civilized world. Mostly, however, you shun the soft life of those who are civilized and prefer to think of yourselves as the Strong - people of iron.

A tall plume of white smoke rises from the chimney of a wood and stone building. The door opens and a tall, muscular warrior steps out, laughing into the waning dusk. Wafts of song and loud bragging pour out after him. When the door swings shut, the Warriors’ Lodge is once again silent.

All your life you have wanted to enter the Warriors’ Lodge, but you are not yet a warrior. Though your thews are strong and you have already reached a height of over six feet, the warriors think you are still a boy. You will not be a warrior until you pass the Ordeal of Courage.

In Ratik there are no laws - only customs, which are stronger than laws to your tribe. One day you will set out on your Ordeal of Courage. You must perform a brave deed and bring back a trophy as proof. Your trophies, whatever they may be - the fang from a deathviper or the scalp of a mountain bandit - will be presented before the warriors. They shall eye them and fondle them, and you  shall tell your tale. If they approve, the elk’s-horn chalice shall be passed to you. But if they find no might in your deed, you will be greeted with echoing laughter and forced to leave the hut in shame, never again to return to your tribe.

There is no set age for the Ordeal of Courage. Some men have grown old in the village without ever putting themselves through the Ordeal. But they are not warriors. They are kwads and are treated as lessers. You are no kwad. You are to become a warrior, and tonight you shall begin the Ordeal of Courage.

To the west lie the Rakers, a dark mountain vastness. They are largely unmapped, though legends have placed strange and dangerous creatures there. Some tales tell of great treasures, others of vague rumors of an Ice Dragon. To the south is the Marsh, where Painted Frustis roam. It is said that an ancient structure, the Lost Colosseum, was built in the ancient antediluvian age when the northern lands were a jungle. The land it now stands on is an ice-covered wasteland.`,
        choices: [
            {
                btnText: 'Head to the west',
                sectionId: '/section/leaving-home'
            },
            {
                btnText: 'Take the southern route',
                sectionId: '/section/the-journey-south'
            }
        ]
    },
    {
        section: 2,
        id: 'leaving-home',
        title: 'Leaving Home',
        text: `As custom dictates, you stealthily slipped away from your home without telling a soul,
arming yourself with a spear, a dagger, twenty silver coins, a cloak, a skin of wine, and a flint sparking kit.

Night blanketed Ratik as you left. Reaching the summit of the first mountain, you could not help but look back at the small village where you have lived all of your life.

You criticized yourself for this, because a true Ratikkan is taught to be suspicious of all things that resemble civilization. Nevertheless, tonight was the first time you had strayed far from the warm fires of your village, which flickered behind you like the last embers of a dying fire.

The snow-crested mountains glow in the moonlight as you cross into the valley. Ahead of you and above you, faintly swirling like drifting smoke, is a long, narrow pass. Night winds howl, and stray bits of icy snow sting your eyes. Instinct tells you it would be best to negotiate that path during the day when vision is clear. Not far away, you notice a dark recess in the mountain wall. Stepping closer, you find that it is a yawning cave.

Stooping your massive frame slightly, you enter the cave. It is still inside, removed from the howling wind. Striking a flint to spark some tinder, you create a small fire. In its light you see that this will be a good place to spend the night.

Suddenly, you hear a low growl. The hair at the nape of your neck stands up, and your skin turns to gooseflesh. Your eyes scan the cave. A pure white Mountain Lion eyes you hungrily. Its teeth are bared, and it is poised to leap for your throat. You have never before encountered a Mountain Lion so large. To fight it may mean pain or even death, but to stray into the night will mean certain injury from cold.`,
        choices: [
            {
                btnText: 'Will you fight the Mountain Lion?',
                sectionId: '/battle/fighting-the-mountain-lion'
            },
            {
                btnText: 'Or will you leave the cave to escape the Mountain Lion?',
                sectionId: '/section/the-frost-fighters'
            }
        ]
    },
    {
        section: 4,
        id: 'the-frost-fighters',
        title: 'The Frost Fighters',
        text: `Your heart pounds as you run up the long trail that leads away from the cave. The cold rips
at your flesh.

At the top of the trail, your flesh tingles. You sense that something unnatural is near you. Instinct tells you to flee back down the hill, but what you see stops you.

Coming up the trail are five menacing figures. They are shaped like humans, but light glimmers off them. Through their transparent bodies, you see the distant stars and mountains. Long ago, in the comfort of your bed, you were told a tale of the Frost Fighters. Never did you think you would come face to face with one.

You are seized with a cold, inhuman fear. Were you to run back down the hill, you would present your back to the Frost Fighters and be skewered on a long icicle spear.

You must fight the Frost Fighters, but you may use one of two strategies. You may attack, receiving a bonus of 4 surprise attacks, or you may move to a large crevasse near you, thus ensuring that only one Frost Fighter may attack you at a time.`,
        choices: [
            {
                btnText: 'Surprise Attack',
                sectionId: '/battle/attacking-the-frost-fighters'
            },
            {
                btnText: 'Move',
                sectionId: '/battle/fighting-the-frost-fighters-one-by-one'
            }
        ]
    },
    {
        section: 7,
        id: 'the-wreckage-of-the-frost-fighters',
        title: 'The Wreckage of the Frost Fighters',
        text: `You ache from the combat. Before you lie the shattered icy remnants of the Frost Fighters. You search
for a trophy of the Frost Fighters, but there is none to be found, for they are composed of ice, which would surely melt as you carried it home. You now understand why they are legendary; no one has physical proof that they exist. Still, your quest is rewarded with **2 XP**.

Walking against the driving wind, you cross the summit of the mountain and discover below you a tiny, pleasant valley where there is no snow.
        
Arriving in the valley, you find that the floor is covered with warm pine needles, and by a fluke of nature, this valley, out of the wind, retains the sun’s heat. You can sleep soundly in this place. A night’s sleep restores **5 HP**.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'shadow-in-the-mist'
            }
        ],
        updates: {
            hp: 5,
            xp: 2
        }
    },
    {
        section: 8,
        id: 'the-mountain-lions-cave',
        title: 'The Mountain Lion\'s Cave',
        text: `Not only did the Mountain Lion provide you with his **skin** as a **trophy**, but he also left a
fresh rabbit kill in the corner. Using scraps of wood in the cave to build a small fire, you cook and devour the rabbit, and have a soft sleep on the Mountain Lion’s skin. The kill gained you **2 XP**. The food and rest restore **6 HP**.

You awaken the following morning and head up the path that had seemed uncrossable the night before. At nightfall, you find yourself in a fertile valley, pitch camp, and sink into a deep sleep.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'shadow-in-the-mist'
            }
        ],
        updates: {
            hp: 6,
            xp: 2,
            trophies: [
                {
                    name: 'Mountain Lion\'s pelt',
                    points: 2,
                    add: true
                }
            ]
        }
    },
    {
        section: 9,
        id: 'fleeing-the-ratikkan-boy',
        title: 'Fleeing the Ratikkan Boy',
        text: `You have had enough. Seeing that the Ratikkan boy is tough, you rush off. From behind you come roars of
laughter, and a male and a female voice call you disparaging names.

Nevertheless, you are alive. For having the wisdom to know that Glanda was not worth dying for, you gain **1 XP**.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'the-medigian-traders'
            }
        ],
        updates: {
            xp: 1
        }
    },
    {
        section: 10,
        id: 'beaten-by-the-mountain-lion',
        title: 'Beaten by the Mountain Lion',
        text: `Running for your life, you stumble from the cave, shuddering as you hear the roars from the Mountain
Lion. Strength spent from battle, you stagger a few more feet before blackness overtakes you. In the morning, you awaken cold, aching, and groggy. Ashamed and vowing never again to be beaten by an animal, you stumble up the path. After putting many miles between you and the lion, you fall into an exhausted slumber.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'shadow-in-the-mist'
            }
        ]
    },
    {
        section: 11,
        id: 'fleeing-the-aerdian-warriors',
        title: 'Fleeing the Aerdian Warriors',
        text: `You dash away from the onrushing Aerdian Warriors. At first, the chase is tight, but removing the **mail
shirt** greatly increases your speed.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'the-frost-fighters'
            }
        ],
        updates: {
            gear: [
                {
                    name: "Mail shirt",
                    remove: true
                }
            ]
        }
    },
    {
        section: 12,
        id: 'shadow-in-the-mist',
        title: 'Shadow in the Mist',
        text: `Your barbarian instincts bring you suddenly awake from a deep, soothing sleep. Steeling your nerve, you
lie still, lightly breathing, but through your partially opened eyes you see a human shape hovering over you. Your nostrils detect a soft scent of perfume, and you imagine a beautiful woman, but you know not to rely on scents from civilization - the scent could also be that of a Medigian Trader who would just as soon kill you as talk to you.

Your hand creeps stealthily to the shaft of your spear; you don’t know whether the figure in the mist is friend or foe. You can try talking to the figure, but if the shadow in the mist has evil intentions, you will lose all advantage of surprise. You may strike at the figure, but you would risk damaging a potential ally.`,
        choices: [
            {
                btnText: 'Strike at the figure',
                sectionId: '/battle/striking-at-the-shadow'
            },
            {
                btnText: 'Talk to the figure',
                sectionId: 'talking-to-the-shadow-creature'
            }
        ]
    },
    {
        section: 14,
        id: 'talking-to-the-shadow-creature',
        title: 'Talking to the Shadow Creature',
        text: `With your spear in hand, you sit up. “Who disturbs my sleep?” you call in your toughest, most manly
voice. The figure jumps. In the light of dawn, you see that it is a Ratikkan girl. Like yours, her hair is dark and her eyes are blue. She is very pretty and about your age. You were wise not to attack her.`,
        choices: [
            {
                btnText: 'Talk to her',
                sectionId: 'the-ratikkan-girl'
            }
        ]
    },
    {
        section: 15,
        id: 'the-small-portal',
        title: 'The Small Portal',
        text: `Bowing, you enter a small portal. It is pitch dark. As your eyes adjust to the darkness, you slowly
make out four ghostly shapes several yards away, moving ominously toward you. You feel a cold chill and reach for your sword. Faces hideously skeleton-like, eyes glowing red as rubies, the apparitions sweep through the air, using no natural propulsion.

Coming toward you, they pass through a stone sarcophagus in the center of the room.`,
        choices: [
            {
                btnText: 'Dive for the small portal and get out',
                sectionId: 'the-valley\'s end'
            },
            {
                btnText: 'Stand and fight them',
                sectionId: 'fighting-the-ghosts'
            }
        ]
    },
    {
        section: 16,
        id: 'breaking-off-the-attack',
        title: 'Breaking Off the Attack',
        text: `The Ratikkan girl, having just lashed you with her whip, recoils. She is hurt. Your two thrusts didn’t
damage her as much as you might have thought; they just grazed her. You feel stupid for having struck at a girl. By casting your spear to the ground, you show her that you mean to damage her no further.

She stares at you for a moment, trembling. “Who are you?” you ask. “And why did you disturb my sleep?”`,
        choices: [
            {
                btnText: 'Talk to her',
                sectionId: 'the-ratikkan-girl'
            }
        ]
    },
    {
        section: 17,
        id: 'sneaking-past-the-tehnites-1',
        title: 'Sneaking Past the Tehnites',
        text: `Growing up in the forest, you have learned how to stalk silently. Slowly, you creep past the Tehnite
camp. In the distance, you hear the whistle of wind through trees, and in moments the mist that hides you dissipates. Wheeling around, you see two Tehnites. It was a trap. You must stand and fight.`,
        choices: [
            {
                btnText: 'Prepare for combat',
                sectionId: '/battle/two-tehnites-in-the-mist'
            }
        ]
    },
    {
        section: 18,
        id: 'losing-to-the-ratikkan-girl',
        title: 'Losing to the Ratikkan Girl',
        text: `You fall into a deep slumber. Hideous visions of dancing demons fill your head. After hours of fitful
sleep, where alien hands seem to rub you with peculiar ointments, you hear a voice. “Drink this.”

A glass comes to your lips, and you drink. A new vigor comes to you. You regain **4 HP**. As your eyes begin to focus, you see the Ratikkan girl who just defeated you in combat.
        
“Why do you aid me when you should kill me?” you ask.
        
“Because I cannot watch any animal die in pain.”
        
“And who behaves so charitably?” you ask.`,
        choices: [
            {
                btnText: 'Talk to her',
                sectionId: 'the-ratikkan-girl'
            }
        ],
        updates: {
            hp: 4
        }
    },
    {
        section: 19,
        id: 'defeating-the-ratikkan-girl',
        title: 'Defeating the Ratikkan Girl',
        text: `Though she is hurt, your opponent lashes her whip, catching your forehead. A torrent of blood gushes
down into your eyes, blurring your vision. Before you can react, she grasps your money pouch and vanishes. You lose **1 XP**.

It was foolish to try to destroy her. She could have been a valuable ally; now she is a bitter enemy, and this might come back to haunt you.`,
        choices: [
            {
                btnText: 'Wiser now, continue on your quest',
                sectionId: 'the-medigian-traders'
            }
        ],
        updates: {
            xp: -1
        }
    },
    {
        section: 20,
        id: 'the-ratikkan-girl',
        title: 'The Ratikkan Girl',
        text: `“I am Glanda, girl of Ratik. Like you, I am undergoing my Ordeal of Courage.”

“And what item do you seek?” you ask.
        
“Eat with me, and I shall tell you,” she says, beginning a fire.
        
Together you eat. Food brings back your strength. You regain **10 HP**.
        
After dinner, Glanda says, “I intend to bring back the heart of the Ice Dragon.”
        
You laugh heartily. “No man has ever attacked the Ice Dragon and lived. Certainly a young girl could not do it,” you say. “Many warriors have died trying to accomplish that task.”
        
“They intended to use strength. I shall use guile and speed. Journey with me.”
        
You eye her. She is a beautiful young girl on an epic mission. One side of you wants to go with her; the other tells you that trying to steal the heart of the Ice Dragon is the pinnacle of foolishness.`,
        choices: [
            {
                btnText: 'Journey with her',
                sectionId: 'plotting-the-mission'
            },
            {
                btnText: 'This plan is foolishness',
                sectionId: 'refusing-glanda'
            }
        ],
        updates: {
            hp: 10
        }
    },
    {
        section: 21,
        id: 'plotting-the-mission',
        title: 'Plotting the Mission',
        text: `“It is said that the Ice Dragon’s lair is in a temple built by the ancient Gondorians,” Glanda begins.

You chuckle. “I have never heard of a dragon living in human habitations.”
        
“Nor have I,” she says. Her voice drops to a low whisper. “I have an idea, but you must promise me that you will never repeat what I am about to tell you.”
        
“You don’t have to worry. They would laugh at me if I did,” you answer.
        
A look of hurt crosses her face. “Then you promise me also that you will never tell anyone that you are searching for this place?”
        
“Get on with it,” you say. “I do not want to be here until summer making promises.” She watches you, her expression frozen. “I promise,” you answer with a shrug.
        
“I believe that the Gondorians brought the Ice Dragon to that building.”
        
“For what purpose?”
        
“I haven’t figured that out yet,” she answers, “but the Gondorians were a strange race, advanced far beyond any ‘civilized’ races of our time.”
        
“And how do you intend to find this lair?”
        
Glanda smiles mysteriously. “I have some notions about where it might be.”
        
“You mean you don’t know where it is?” you ask.
        
“No, but if we look hard enough, we’ll find it,” she says cheerfully.`,
        choices: [
            {
                btnText: 'Your adventure continues',
                sectionId: 'with-glanda'
            }
        ]
    },
    {
        section: 22,
        id: 'the-medigian-traders',
        title: 'The Medigian Traders',
        text: `You journey through the mountains for two days. Your body heals, and you regain **4 HP**. In this time
you have seen no humans, nor encountered any dangerous beasts. However, progress has been very slow; you have not yet found a path.

At noon on the third day, you spot a wide mountain path, which is not shown on any map you have seen of Ratik. You deduce by observing the deep, rutted wagon tracks that it is some kind of a trade route.
        
To gain distance before nightfall, you jog quickly down the path. Cold wind chills your lungs, but warm blood courses in your veins. As you round a narrow curve, your ears are struck by the shrill squeaking of unoiled wagon wheels. Quickly, you climb a narrow pass and hide behind a large boulder.
        
Moments later, a gaudily designed caged wagon comes into view, and your suspicions grow. Two Medigian Traders in the civilized dress of those who inhabit the Great Kingdom lead a team of stout but aged horses.
        
On top of the wagon and hanging from the sides are a variety of wares. Your eyes settle on a beautiful sword which hangs just behind the riders.
        
From your hiding place, you hear the mournful please of a Ratikkan woman, and you spy her in the cage. She is drawing a worn cloak of animal skin around her scantily clad body. “Please release me; I have two children I must watch after,” she pleads.
        
The driver of the wagon laughs a throaty laugh. “You will bring many silver pieces in the slave markets or Atirr. Your children will have to watch after themselves.”
        
His partner on the carriage beats the cage with a slaver’s club, drowning out the woman’s pleas. Her voice breaks down to sobbing.
        
You feel your hackles rise as you assess the two traders. One is a stout, tough fellow, who looks as if much of his time has been spent in the Ratikkan Mountains; the other is younger and, with a slightly grayish cast to his skin, looks as if he might have a bit of Orc in his lineage.
        
Were you to jump from your perch to the wagon, you would achieve nearly total surprise; however, there are two traders and only one of you. Fear dictates that you let the wagon pass. You do not know the woman, for she is not of your tribe. You wonder whether it is worth risking limb, or even death, by attacking the traders. A third option crosses your mind: you might barter with the traders for the sword. Though swords are often expensive in Raitk, you have heard of great bargains on swords purchased from traders.`,
        choices: [
            {
                btnText: 'Attack the traders',
                sectionId: 'attacking-the-medigian-traders'
            },
            {
                btnText: 'Avoid the traders',
                sectionId: 'avoiding-the-medigian-traders'
            },
            {
                btnText: 'Bargain with the traders',
                sectionId: 'bargaining-with-the-medigian-traders'
            }
        ],
        updates: {
            hp: 4
        }
    },
    {
        section: 23,
        id: 'avoiding-the-medigian-traders',
        title: 'Avoiding the Medigian Traders',
        text: `You hide in your place as the wagon passes. Slowly, the squeaking sound of the wheels dies away, and
you creep from your perch. Coming down to the path, you follow in the wagon’s trail.

The trail heads in a zigzagging path through what was once a small river. As you pass each outcropping of rock, you understand why invading armies have avoided crossing this range. Nearly any place would be good for an ambush. As you look up, the peaks of mountains block out the sky, save for a patch directly above you.
        
A small white rabbit appears on the ground before you. Hunger gnaws at you, so you stealthily creep up to it, your dagger drawn. It is motionless, as if it does not hear you. You crouch down to pounce on the rabbit, then realize that it is stuffed!
        
Suddenly, you hear a loud rustling sound above you.`,
        roll: [
            {
                btnText: 'Your carelessness will cost you',
                sectionId: 'jumped-by-the-medigian-traders'
            },
            {
                btnText: 'Your carelessness will cost you',
                sectionId: 'netted-by-the-medigian-traders'
            }
        ]
    },
    {
        section: 24,
        id: 'netted-by-the-medigian-traders',
        title: 'Netted by the Medigian Traders',
        text: `A black rope drops down on you. Before you can get away, the two Medigian Traders run out from hiding 
and wrap you in a net. You lash out with your dagger and start to cut the net.

Your efforts are to no avail, as the traders begin to beat you with stout wooden clubs. They are laughing and joking in their oily, guttural tongue.
        
“He will draw a great price in the slave camps.”
        
Darkness settles in.`,
        choices: [
            {
                btnText: 'Continue your adventure',
                sectionId: 'the-face-in-the-mist'
            }
        ]
    },
    {
        section: 25,
        id: 'icicle-teeth',
        title: 'Icicle Teeth',
        text: `With a mighty lunge, the Ice Golem shoves you. His hideous icicle teeth grind in a sadistic laugh as
you plummet backward into the churning, rushing river below you. All goes black as you crash into the dark, murky water.`,
        choices: [
            {
                btnText: 'Sink',
                sectionId: 'out-of-the-roiling-river'
            }
        ]
    },
    {
        section: 26,
        id: 'jumped-by-the-medigian-traders',
        title: 'Jumped by the Medigian Traders',
        text: `You look up in time to see both Medigian Traders standing over you, their greasy, mean faces laughing.
They swing their slaving clubs at you, thus giving each of them 1 free attack.`,
        choices: [
            {
                btnText: 'The traders attack first!',
                sectionId: '/battle/fighting-the-medigian-traders'
            }
        ]
    },
    {
        section: 27,
        id: 'bargaining-with-the-medigian-traders',
        title: 'Bargaining with the Medigian Traders',
        text: `You call to the Medigian Traders from your perch. They look up, surprised, and draw their weapons. You
assure them that you mean them no hard, and the older trader gestures to the other to lower his club. You scramble down the rocks and meet them on the ground.

You make a quick assessment of your items and offer them a trophy. “I offer you 20 silver pieces in exchange for that sword.”
        
The traders huddle together for a moment. You watch them, trying to determine whether they will accept your offer.
        
Finally, the older one looks down at you. “You must have awakened under a lucky star today. I will make the trade.”
        
Suddenly, and without warning, the two traders jump from their carriage. You are taken partially by surprise.`,
        choices: [
            {
                btnText: 'The traders attack first!',
                sectionId: '/battle/fighting-the-medigian-traders'
            }
        ]
    },
    {
        section: 29,
        id: 'attacking-the-medigian-traders',
        title: 'Attacking the Medigian Traders',
        text: `You jump from your perch and land on top of the Medigian Traders’ carriage, completely surprising them.

Your spear is held high, and you see a look of terror on their treacherous red faces. 
        
Before they can react, you get 4 free attacks.`,
        choices: [
            {
                btnText: 'Attack!',
                sectionId: '/battle/surprising-the-medigian-traders'
            }
        ]
    },
    {
        section: 30,
        id: 'fleeing-the-medigian-traders',
        title: 'Fleeing the Medigian Traders',
        text: `Breaking off the attack on the Medigian Traders, you bolt up the path. The younger of the traders
pursues you several paces. His hot breath beats on your back. He swings twice and misses you.

You run several miles down the mountain trail, leaving the traders far behind. Panting and worn, you kneel down before a small pool and cup water to your mouth. An uneasy feeling of tiredness comes over you. In moments, you have fallen into unconsciousness.`,
        choices: [
            {
                btnText: 'You are unconscious',
                sectionId: 'the-face-in-the-mist'
            }
        ]
    },
    {
        section: 31,
        id: 'sneaking-past-the-tehnites-2',
        title: 'Sneaking Past the Tehnites',
        text: `Growing up in the forest has taught you how to stalk silently. Slowly, you creep past the Tehnite camp.
Using the mist as a shroud, you easily slip past the Tehnites, whose native senses have been dulled by civilization.`,
        choices: [
            {
                btnText: 'Continue your adventure',
                sectionId: 'the-furred-snake'
            }
        ]
    },
    {
        section: 32,
        id: 'the-face-in-the-mist',
        title: 'The Face in the Mist',
        text: `You hear pounds as a sinister face appears out of a blue mist. An evil priest of Izu? “Drink this!” he
says. You squirm, but your arms are restrained by manacles. You jerk up with a start.

“Lie still; let the potion act.” You slowly open your eyes, and the form you had mistaken for a priest of Izu is the woman who had been enslaved by the Medigian Traders. The scent of burning pine stings your nostrils. You look around and see that you are in the caged wagon.
        
In the cool blue light of the moon and stars, you see that the traders have set up camp nearby. You are on a small path in a large, dark forest. One of the traders gazes into the night, keeping watch. The other turns over lazily in a sleeping bag and snores.
        
In minutes, the potion brings you back to full strength. You regain **10 HP**.
        
You inspect the cage. Only a cheap Medigian lock separates you from freedom. Looking into the weary eyes of the Ratikkan woman, you realize that you have to make a choice. It may be your last choice ever.
        
You know that you can outrun the traders, but the Ratikkan woman cannot. You think you might be able to beat the traders in a fight, especially because one of them is sleeping. However, losing to the traders could well mean death.`,
        choices: [
            {
                btnText: 'Slip off into the night',
                sectionId: '/battle/breaking-free-of-the-cage'
            },
            {
                btnText: 'Fight the traders',
                sectionId: '/battle/fighting-the-medigian-traders-2'
            }
        ],
        updates: {
            hp: 10
        }
    },
    {
        section: 34,
        id: 'vanquished',
        title: 'Vanquished',
        text: `A fire crackles nearby. You stir, not knowing where you are or how you arrived at this place. Before
regaining your senses, you are awakened by a bellowing voice. “You have failed in all you have attempted. You have failed to defeat a pair of foolish traders from the Medigian Kingdom, and you have run away from saving a woman of your own race. Thus far, I have protected you, Sagard, but the god Telchur is no friend to the cowardly or the weak. From this moment, you must behave as a Ratikkan warrior - or die!”

Your eyes clear. Though you remember your hideous fight, you feel no pain from it. Your HP are restored to their full 20.
        
Hovering over you is the powerful, menacing form of a Valkyrie. “Telchur!” you exclaim. She is a beautiful form, very tall and strong. Her long blond hair falls to her breastplate. At her side she wears an Aesir sword of gleaming blue metal.
        
You start to speak, but her voice cuts through. “To regain your manhood, you must enter the cave of the Ice Dragon and retrieve his heart. No other task will redeem you!” This task will take all of the courage and strength you can muster. Death will probably come to you for it. Death, however, shall come as a friend, because it will be a hero’s death.
        
“To accomplish this end, I shall give you a sword. It is a proud sword; carry it as such.” Your eyes are struck by the blue glint of the sword in her hand. It is a beautiful weapon. She hands it down to you, and you admire it. Beautiful runes are etched on its sides. This sword will give you added fighting ability.
        
As long as you carry this **sword**, you add 1 point of damage to all of your attacks. Give up your life before you give up this sword.
        
While you admire the amazing weapon, the Valkyrie’s voice bells on: “You will find the Ice Dragon beyond where the Valley of Glare ends! Get on your way!” As if carried by an invisible force, you rise from your seat and dash to the door. Once again, you are alone in the woods.
        
You look in all directions, and know not which to take. “Follow the southern star, fool.” Seeing the southern star, you dash off.`,
        choices: [
            {
                btnText: 'Onward!',
                sectionId: 'search-for-the-ice-dragon'
            }
        ],
        updates: {
            hp: 20,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ]
        }
    },
    {
        section: 35,
        id: 'defeating-the-devil-bear',
        title: 'Defeating the Devil Bear',
        text: `The Devil-Bear has fallen before you. You gain **4 XP**. Tired from the struggle and yet excited by the kill,
you stumble toward the bear. The Medigian Traders lie lifeless on the ground. From behind, you hear a voice. “Though your thews are strong, your heart is weak.”

You turn, and there stands the Ratikkan woman! She looks strangely different from how you remember her. She seems much larger and radiates a weird light. Her torn peasant cloak has fallen from her to reveal the scantily clad form of a much younger woman than you had thought. The moonlight reflects off the taut muscles in her abdomen and thighs. She raises her hands like a witch. From the ends of her fingers shoot spears of blue light. The spears strike the fallen traders, as if to make sure of their demise.
        
A sudden chill overtakes you as her eyes let off a strange blue radiance. “I am not the humble Ratikkan woman you mistook me for. I am a Valkyrie. I was merely riding with the traders to learn of their route. Were I to tell your tribesmen of your cowardice, you would be banished forever, but that is not my wish. It is my wish to see you grow up a true Ratikkan warrior. For that reason, I grant you reprieve.”
        
Your eyes are locked to this strange apparition. You do not dare cross her, because you realize that she would strike you down in a moment. “You are to claim the heart of the Ice Dragon and return it to your tribe, or die on the quest.”
        
She raises her hands again, and another bluish glow comes from them; this time, it radiates to your sword, surrounds it in a steely, icy energy, and settles. The sword you borrowed from the trader now looks and feels different, lighter and stronger. Strange runes appear on its side.
        
This **sword** will work well for you. The weapon will add 1 damage point every time you attack.
        
“Your quest is to the south. Be gone!” With that, the Valkyrie turns, and she seems to dissolve into the woods. In just a few moments, you are alone.`,
        choices: [
            {
                btnText: 'Onward!',
                sectionId: 'search-for-the-ice-dragon'
            }
        ],
        updates: {
            xp: 4,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ],
            trophies: [
                {
                    name: 'Devil-Bear\'s claw',
                    points: 4
                }
            ]
        }
    },
    {
        section: 37,
        id: 'crushing-the-medigian-traders',
        title: 'Crushing the Medigian Traders',
        text: `The Medigian Traders lie face down in the gloom. Your heart pounds with the exertion of the struggle
and the thrill of victory. Your efforts gain you **3XP**.

Suddenly, you feel a strong presence behind you. It does not feel like an ordinary person, but something stronger. Your flesh curdles with goosebumps as you wheel around.
        
The Ratikkan woman holds a strange lantern that bathes you in a warm, powerful light. So completely has she changed that you barely recognize her. Moments ago, in the cage, she had appeared to be a scared tribewife. Now, scantily clad in a tight fur outfit, wearing a broadsword and the horns of a Valkyrie, she is a person of great power. “One day you may make a great warrior,” she says.
        
“A Valkyrie!” you mutter, not fully regaining your voice.
        
She laughs wildly. “Many Ratikkan women have been kidnapped and sold into slavery in evil foreign lands. I set out to trace the route, to give them a taste of blunt steel.”
        
“I have ruined your plan.”
        
She laughs. “There will be other traders to ride with. And for you, there will be another test of courage.” She draws the broadsword from the belt at her supple waist. “In the mountains to the south, there are rumored to be the remnants of an ice empire. The empire has long since passed into history, but it is said that it is still guarded by the legendary Ice Dragon. Bring the Ice Dragon’s heart to Ratik and you will become a warrior of great renown.” She holds the broadsword out, hilt forward. “Do you accept the quest?” she asks.
        
With your voice choked, you nod yes.
        
“Take this sword. It will stand you in good stead.”
        
This **sword** will give you a good advantage in combat. The weapon adds 1 damage point to all of your attacks.`,
        choices: [
            {
                btnText: 'Continue the quest',
                sectionId: 'search-for-the-ice-dragon'
            },
            {
                btnText: 'Return to the village to stand before the tribal elders',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            xp: 3,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ]
        }
    },
    {
        section: 38,
        id: 'losing-to-the-medigian-traders',
        title: 'Losing to the Medigian Traders',
        text: `The last blow strikes. White dots flash before your eyes. You stumble backward and fall to the ground.
In the darkness above you, one of the Medigian Traders raises his sword, ready to decapitate you. You move your legs, but you cannot stand. In the trader’s eyes, you see the cold flame of death. Suddenly, his eyes bulge and he collapses like a marionette whose strings have been cut. His body tumbles to the ground next to you, and his head rolls a few feet away. Standing in his place is the Ratikkan woman, though she looks greatly changed from when you last saw her. Gone is the tattered shawl that covered her.

She stands before you nearly naked, save for a scanty fur tunic which is cut low at her chest and ends several inches above her knees. At her side she wears a drinking horn and a broadsword. You wonder where she had concealed this weapon when you rode in the wagon, but it is not for you to know such things about the servants of the god Telchur. On her head, she wears the distinctive silver horns of a Valkyrie.
        
“Telchur!” you mutter.
        
“One day, you shall be a great warrior, but there is much for you to learn.” Before the blackness of death can overtake you, she bends down and holds the Horn of Redemption to your mouth. In moments, your full barbarian strength returns to you. You regain all of your HP.
        
“I have saved you from death, but should you come so close again, nothing can save you. In return for this gift of life, you will carry out my will, for it is a mission that only one of your strength might accomplish.”
        
You sit up, not comprehending your sudden surge of strength and vigor, and not believing that you had been so completely tricked by the Valkyrie.
        
“To the south lie the mountains. Secreted in the tallest mountain of the range, a dormant volcano, from which rise great plumes of steam, is the Ice King’s Hall. There, so legend has it, dwells the Ice Dragon, a hearty beast with a ruby heart. Take the heart, and bring it to your tribe. It will be a trophy people will speak of for many ages.”
        
She wipes her broadsword off with a cloth and hands it to you. It is a powerful-looking weapon. The cold light of the moon reflects the blue glint of prize steel, and strange runes carved in the blade seem to slither and alter their shapes. “Take this weapon. It will stand you in good stead through combat.”
        
You admire the weapon. It would take the lifelong earnings of several men to pay for such a sword. “And what payment do you ask from me?” you ask her.
        
She smiles. “That you have courage.”
        
You take the **weapon** into your callused hand. The sword will help you. In all combat, you will do 1 extra damage point to your enemies.`,
        choices: [
            {
                btnText: 'Your quest continues',
                sectionId: 'search-for-the-ice-dragon'
            }
        ],
        updates: {
            hp: 20,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ]
        }
    },
    {
        section: 39,
        id: 'search-for-the-ice-dragon',
        title: 'Search for the Ice Dragon',
        text: `Through the seemingly endless night you trudge across marshes, hills, forests, and thickets. All is
strangely still, like the wind before a storm.

In the dead of night, you step onto a path of marble blocks. Though you know them to be centuries old, they still shine and glow eerily in the moonlight. Many have walked these stones before you: the Gondorians who laid them, the Aerdians, the Hitaxian Merchants, the Priests of the Scarlet Brotherhood, and wild adventurers from all lands.
        
At the end of the path stands a large, cracked stadium that was built by the ancient Gondorians. Viewing its craftsmanship and nearly perfect symmetrical design, you can almost hear the roar of gladiator contests. Admiring it, you pause to wonder what other great structures these clever and industrious people built.
        
Little is actually known of the Gondorians, but myth recounts them as a great civilization which thrived in ancient times. It is said that all people of this world are descended from them, for in the moments before their destruction (which some say was by earthquake and others claim was by divine conflagration), they sent out the one hundred greatest men and women of their world to begin a new one.
        
At dawn, the burnt orange light of a Ratikkan dawn paints the mountains to the south. You stand on a tall ridge, about to embark on the greatest journey of your life.`,
        choices: [
            {
                btnText: 'Your quest calls you on',
                sectionId: 'the-valley-in-the-rakers'
            }
        ]
    },
    {
        section: 40,
        id: 'the-valley-in-the-rakers',
        title: 'The Valley in the Rakers',
        text: `A mysterious fog shrouds the valley, like a lacy curtain of death. High above, the mountain peaks melt
into the clouds, and before you the skeletal shapes of gnarled trees line a frozen riverbank which meanders down through the valley. The scent of charred wood tickles your nose. Somewhere, not far away, is a dying fire.

Following the smoke, you come upon two small, tattered skin tents. Stalking closer, you can detect nothing of interest in the camp, save for an ornately pointed Tehnite shield. You know not what the strange men of Tehn are doing this far east, but you lust for the shield. It would protect you well in a battle if you could steal it, and it would serve as a fine trophy if you could take it back to your tribe.
        
Taking the shield is extremely dangerous. Tehnites are brutal fighters, and the tents indicate that there are two of them.`,
        choices: [
            {
                btnText: 'Take the shield',
                sectionId: '/battle/two-tehnites-in-the-mist'
            },
            {
                btnText: 'Avoid the Tehnites',
                sectionId: 'avoiding-the-tehnites'
            }
        ]
    },
    {
        section: 42,
        id: 'fleeing-the-tehnites',
        title: 'Fleeing the Tehnites',
        text: `A Tehnite blade whistles overhead. In a blind fury, you lunge at your opponent with your spear. He
deftly steps out of your way, laughing. “We shall have Ratikkan beef roasting over our fire tonight.”

Panicked, you wheel around and dash into the mist. Running blindly, you lose your way in a thick, wooded bog. Looking back, you see no Tehnites. Either your speed put them far behind, or they felt you were not worth the effort of the chase.
        
Your lungs burning with fiery pain, you stop in the shelter of a thick oak. Moments later, you hear Tehnite voices. “Come out, Ratikkan, and face us… or does your race fear the mighty Tehnites?”
        
        
“Come in here and get me, Tehnite, or are you afraid to travel where there are no paths?”
        
For several minutes you wait, but you hear no sound of the Tehnites. As night falls, you lie back and rest, for they have gone on their way. You regain **8 HP**.`,
        choices: [
            {
                btnText: 'There are other battles to be fought',
                sectionId: '/battle/the-furred-snake'
            }
        ],
        updates: {
            hp: 8
        }
    },
    {
        section: 43,
        id: 'avoiding-the-tehnites',
        title: 'Avoiding the Tehnites',
        text: `Though you have never met a Tehnite, you have heard tales of their ferocity, ruthlessness, and cruelty.
Having no desire to end your life as an offering on some altar of their evil god Nerull, you creep past them under cover of mist, thinking there will be other shields to grab.

All your life, you have lived near the woods. You have stalked foxes, deer, and wild boar with men of your tribe. Slipping past humans whose ears have been deafened by civilization should be easy.`,
        roll: [
            {
                btnText: 'Tread carefully...',
                sectionId: 'sneaking-past-the-tehnites-1'
            },
            {
                btnText: 'Tread carefully...',
                sectionId: 'sneaking-past-the-tehnites-2'
            }
        ]
    },
    {
        section: 44,
        id: 'defeating-the-tehnites',
        title: 'Defeating the Tehnites',
        text: `Blood drips off your freshly christened sword. You have swiftly killed the Tehnites.

The round shield, just a few feet away, is made of leather and brass, emblazoned with a carved Tehnite raven on a red field.
        
This shield counts as both a **weapon** and a **trophy**. As a weapon, it will absorb up to 10 damage points. After that, it is of no use, but you may take the **raven** off it as a well-respected trophy. You gain **2XP**. Before leaving the camp, you devour a pheasant, which is slowly cooking over an open fire. The Tehnites will not be needing it. Eat this pheasant and regain **6HP**.`,
        choices: [
            {
                btnText: 'Your quest continues...',
                sectionId: '/battle/the-furred-snake'
            }
        ],
        updates: {
            hp: 6,
            xp: 2,
            gear: [
                {
                    name: 'Tehnite shield',
                    effect: '-1 damage taken, max 10',
                    max: 10,
                    points: 3
                }
            ]
        }
    },
    {
        section: 46,
        id: 'killing-the-furred-snake',
        title: 'Killing the Furred Snake',
        text: `The Furred Snake lies in an oozing coil. You have slain it. You rip out the fang. If legend is true,
its venom has mystical curative powers.

You may either drink this venom now to return to your full strength of 20 HP, or may save it later for desperate combat. Curative effects are instant and can be employed at any time, even in the middle of battle. If you have a good number of HP left, you may want to save it.
        
Killing the Furred Snake gains you **3XP**; the **fang** serves as a trophy.
        
You set forth along the meandering riverbank which leads you to the end of the valley.`,
        choices: [
            {
                btnText: 'Your options await you',
                sectionId: 'the-valleys-end'
            }
        ],
        updates: {
            xp: 3,
            trophies: [
                {
                    name: 'Furred Snake\'s fang',
                    points: 3,
                    usable: true,
                    add: true
                }
            ]
        }
    },
    {
        section: 47,
        id: 'the-valleys-end',
        title: 'The Valley\'s End',
        text: `In front of you, to your left and to your right, are three sheer cliffs that extend well above the fog.
Inspecting the mountain, you realize that there are three potential entrances to it.

To your left is a **crevasse**. It appears to be some kind of natural formation.
        
Directly in front of you is a **natural cave**, carved by the river. It is now dry, with only small trickles of icy water.
        
To your right is a **small portal** hewn out of the rock. This looks as if it were man-made. Near it is a large boulder. It appears that the boulder may once have been used to seal off the portal.
        
Instinct tells you that you are near the lair of the Ice Dragon. Not wanting to risk any of the **trophies** you have already acquired, you stash them here (except, of course, for the trophies that also serve as **weapons**, **armor**, or **special items**, such as the **shield**, **sword**, or **snake’s fang**.)
        
_Warning_: You are entering an extremely dangerous place. Proceed with courage and caution.`,
        choices: [
            {
                btnText: 'Enter the crevasse',
                sectionId: '/battle/the-crevasse'
            },
            {
                btnText: 'Investigate the natural cave',
                sectionId: 'the-natural-cave'
            },
            {
                btnText: 'Enter the small portal',
                sectionId: 'the-small-portal'
            }
        ],
        updates: {
            trophies: [
                {
                    name: 'Mountain Lion\'s pelt',
                    stash: true
                },
                {
                    name: 'Knight\'s Plume',
                    stash: true
                },
                {
                    name: 'Raven from shield',
                    stash: true
                },
                {
                    name: 'Devil-Bear\'s claw',
                    stash: true
                },
                {
                    name: 'Frusti Sage\'s map',
                    stash: true
                }
            ]
        }
    },
    {
        section: 49,
        id: 'the-natural-cave',
        title: 'The Natural Cave',
        text: `The cave opens around you like a gigantic mouth. You enter and glance around. Strange runes were carved
on the inner walls long ago and have been nearly rubbed off by running water through the ages. The floor is solid ice. Twenty yards from the opening, the floor of ice ends on a sharp slope. You are standing at the top of what appears to be a frozen waterfall. You can slide down the waterfall, but there is no way to get back up.`,
        choices: [
            {
                btnText: 'Slide down the waterfall',
                sectionId: '/battle/the-zokapers'
            },
            {
                btnText: 'Try one of the other caves',
                sectionId: 'the-valleys-end'
            }
        ]
    },
    {
        section: 50,
        id: 'the-journey-south',
        title: 'The Journey South',
        text: `All night you travel southward. It is a wet, muddy trek, as winter showers fall lightly on
you.

Toward dawn, you stop to rest. The night fog lifts, and along the eastern horizon is the pink band of light that presages the sun’s rising. In the distance you hear the low roar of thunder. A gust of wind picks up your hair and blows it back.

You break out your flint and steel kit to begin a fire. A sickly sweet smell strikes your nose. It is neither a natural herb nor a flower, though it smells like a combination of several flowers. It could only be some ghastly concoction of civilization.

Whirling around, you see a silver blur. Instinctively, you dive away as the blade of a broadsword swishes over your head. Scrambling for your spear, you see your opponent as he lumbers slowly toward you. He is a knight of some sort in gleaming silver armor. Atop his head is a fluttering plume.

His armor is thick, but by the way he handles his sword you can see that he is no great fighter. It is your guess that he is a soldier from the North Province. You could outrun him, but your eyes fix on a possible **trophy** - the **plume** on his head.

Though Ratikkans do not wear plate armor, you will wear chain mail on occasion. The Plumed Knight’s **armor** could help you in further encounters.`,
        choices: [
            {
                btnText: 'Fight the Plumed Knight',
                sectionId: '/battle/fighting-the-plumed-knight'
            }
        ]
    },
    {
        section: 52,
        id: 'beating-the-plumed-knight',
        title: 'Beating the Plumed Knight',
        text: `The Plumed Knight drops his sword, goes down on his knees, and assumes the posture of a beggar. You
gain **1 XP**. He removes his helmet, and you see him for what he is: a round-faced, scared Provincial boy. “Please harm me no more, Ratikkan. I will give you anything you ask.”

“Why should I spare you?” you ask. “You would have cleaved me in two, given the chance.”

“Spare me, and one day I might be able to help you. Kill me, and you will only have blood on your sword, and perhaps provoke my fellow Aerdians to attack Ratik.”

You laugh. “Why would Aerdians go to war over the life of a weakling such as yourself?”
        
“I am no fighter, but I am a good prince.”
        
“A prince, no less? Give me your plume and mail shirt, and I shall leave you alone.”
        
He does as requested. You take the **plume** as a trophy. The **mail shirt** will serve you well in combat, deducting 1 HP each time you are struck. 
        
As you put on the mail shirt, you hear several voices. In the distance, you see the silhouettes of four Aerdian Warriors.`,
        choices: [
            {
                btnText: 'Stalk carefully',
                sectionId: '/battle/the-young-aerdian-warriors'
            }
        ],
        updates: {
            xp: 1,
            trophies: [
                {
                    name: "Knight's Plume",
                    points: 1,
                    add: true
                }
            ],
            gear: [
                {
                    name: "Mail shirt",
                    effect: "-1 damage taken"
                }
            ]
        }
    },
    {
        section: 53,
        id: 'losing-to-the-plumed-knight',
        title: 'Losing to the Plumed Knight',
        text: `Something is wrong here. You are a Level 2 fighter, and the Plumed Knight is a Level 1 fighter. You
have 20 HP and he has only 15. You should have beaten him easily. Because this was your first battle, and the vigor of youth courses in your veins, fight him again.

You will not be shown such mercy again. If this is your second time reading this, go back to the beginning and head west.`
    },
    {
        section: 54,
        id: 'beating-the-zokapers',
        title: 'Beating the Zokspers',
        text: `Defeated, the Zokapers lie on the ground. You remove their flasks from their bodies and drink a
healthy liquid, which fills your veins with fire. You regain **all HP**. Fighting the skating enemies gains you **2 XP**. Stronger and still wondering what the nature is of these men, you cross through the great gateway.`,
        choices: [
            {
                btnText: 'Your journey continues',
                sectionId: 'the-gateway'
            }
        ],
        updates: {
            hp: 20,
            xp: 2
        }
    },
    {
        section: 56,
        id: 'beating-the-aerdian-warriors',
        title: 'Beating the Aerdian Warriors',
        text: `The Aerdian Warriors lie wounded. This was an act of great courage; you gain **4XP**.

The Plumed Knight looks up at you with awe. “One day you will be a great warrior. I wish to learn from you. May I travel with you?”
        
You laugh derisively. “My fair prince, you are meant for the scented salons of Aerdie. Return there before a Ratikkan wolf makes dinner of you.”
        
The prince looks away sadly. Knowing that your course is far away and that you must run and climb quickly, you remove the mail shirt and return it to the Aerdian prince. “I have your feature as a souvenir of meeting you. Take this as a souvenir of your encounter with me.”
        
Your steely thews carry you swiftly toward the mountains.`,
        choices: [
            {
                btnText: 'Onward!',
                sectionId: 'the-frost-fighters'
            }
        ],
        updates: {
            xp: 4,
            gear: [
                {
                    name: "Mail shirt",
                    remove: true
                }
            ]
        }
    },
    {
        section: 57,
        id: 'wounded-by-the-aerdian-warriors',
        title: 'Wounded by the Aerdian Warriors',
        text: `You lie on the ground, dazed and hurt. A dark silhouette hovers above you. You hear the rustling of
armor. “Send the Ratikkan dog to his barbarian gods.”

Dimly, you see the Aerdian above you raise his sword. You are powerless to stop him.
        
“Spare him by my command!” The voice you hear is that of the Plumed Knight.
        
“Your Highness, if we allow him to live, he will grow to be a fierce enemy of our kingdom.”
        
“He showed mercy to me, I shall do the same for him. Strip him of my mail shirt, for I need it more than he. Leave nourishment for him, and let him keep my plume. He has earned it.”
        
For two days, you recover from the fight. Regain **12 HP** and gain **1 XP**.`,
        choices: [
            {
                btnText: 'Your quest continues',
                sectionId: 'the-frost-fighters'
            }
        ],
        updates: {
            hp: 12,
            xp: 1,
            gear: [
                {
                    name: "Mail shirt",
                    remove: true
                }
            ]
        }
    },
    {
        section: 58,
        id: 'beating-the-medigian-traders',
        title: 'Beating the Medigian Traders',
        text: `The Medigian Traders lie in the dirt. Turning to free the Ratikkan woman, you see that she is
completely transformed. She has released herself from the cage and wears the scanty garb of the Valkyrie, a creature you have only heard of in myth.

Her stature approaches that of the Amazons of legend, but her beauty surpasses all you have seen. Her eyes are bright blue, and her long blond hair falls to her ample breastplate.
        
“I have watched you, and you have fought valiantly, Sagard. For that, I shall reward you with strength.” Your full barbarian strength returns. You regain **all HP**.
        
She throws the sword to you. It passes through the air like a streak of blue lightning and falls at your feet. You pick it up. It is a powerful **weapon**. As long as you carry the **sword**, you will do 1 extra point of damage in each round of combat. You gain **3 XP**.
        
You step toward her, simply desiring to touch a creature of such beauty, but your hand passes through her. “Find the Ice Dragon, Sagard. Take his heart. You shall be the greatest warrior of all. One warning, Sagard: thus far, I have watched over you and would have protected you had you been hurt. I must depart now. From this moment on, your stakes are life or death.” You are filled with her mystical strength. She vanishes.
        
You stand for a moment, glowing, and then turn to leave.`,
        choices: [
            {
                btnText: 'Search for the Ice Dragon',
                sectionId: 'in-search-of-the-sage'
            }
        ],
        updates: {
            hp: 20,
            xp: 3,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ]
        }
    },
    {
        section: 59,
        id: 'in-search-of-the-sage',
        title: 'In Search of the Sage',
        text: `Not knowing where the Ice Dragon’s lair might be, you trek northward to the hut of the Frusti Sage.
You have been to this hut once before, but never have you seen the sage, for you were young and the elders made you wait outside. The sage is a man of great knowledge, but you have also heard dark tales about him.

At first, the hut is a mere speck at the top of a tall, unnatural mound, but as you climb, the hut grows larger.
        
The hut, which is of haphazard construction, is blanketed in a swirling mist. At first you knock softly, then you bang on the door. For several moments you hear nothing but a strange creaking on the other side. Impatient, you enter the hut. It is dark and gloomy inside.
        
Strange text, maps, and objects of witchcraft litter the room, which seems to have no order. Seeing nobody in the hut, you step to a table where a map lies open. Before you reach the map, however, a cold hand reaches out of the gloom and grabs your shoulder.
        
“Do not turn around, Ratikkan. What is it that brings you to my hut?”
        
A shiver runs up your spine. “I am in search of the Ice Dragon,” you respond.
        
“And you thought you could spy the information from my map without paying the cost,” the deep, gravelly voice says.
        
You resist the urge to turn around. “There was no answer at your door. I will pay your cost if it be reasonable.”
        
“That sword will do nicely,” the sage says eagerly.
        
“It was given to me by a Valkyrie. You overvalue your information.”
        
A low, rumbling laugh comes from behind you. “If you do not give it to me, you will have to fight me for it.”
        
Your eyes struggle vainly for a mirror or another object that will tell you how mighty he is, but you see none. Knowing nothing of this menacing Frusti, you must make the decision of whether to fight or give him the sword.`,
        choices: [
            {
                btnText: 'Fight the sage',
                sectionId: '/battle/fighting-the-frusti-sage'
            },
            {
                btnText: 'Give him the sword',
                sectionId: 'giving-over-the-sword'
            }
        ]
    },
    {
        section: 62,
        id: 'giving-over-the-sword',
        title: 'Giving Over the Sword',
        text: `Fearing the Frusti Sage, you carefully hand the sword back to him. He takes it and laughs crazily. “No
true warrior would ever surrender his sword.” He gives you a kick in the seat and sends you sprawling across the room; you topple a table and end up seated.

Before you stands the sage. He is a giant of a man with a fiery red beard and a wild tangle of red hair which hangs down onto his furred cape and bare chest. In his hand is an enormous two-handed axe. A deep, bellowing laugh comes from his chest. “If you are such a fool as to try to find the Ice Dragon, you will find him in the tallest mountain of the Rakers. Take this spear with you - it may help you catch fish.”
        
He hands you a spear and laughs at you again. Now that you have seen him, you may want to fight him.`,
        choices: [
            {
                btnText: 'Fight!',
                sectionId: '/battle/fighting-for-your-sword'
            },
            {
                btnText: 'Leave',
                sectionId: 'submitting-to-the-frusti-sage'
            }
        ],
        updates: {
            gear: [
                {
                    name: 'Sword',
                    remove: true
                }
            ]
        }
    },
    {
        section: 62,
        id: 'beating-the-frusti-sage',
        title: 'Beating the Frusti Sage',
        text: `The Frusti Sage lies bleeding. After sheathing your sword, you take a **map** from the shelf. It indicates that the Ice Dragon is located in the highest mountain in the Rakers. Resting at the hut, you heal all of your wounds. You gain **3 XP**.

As the sun glows red on the horizon, you continue on your journey.`,
        choices: [
            {
                btnText: 'Carry on',
                sectionId: 'search-for-the-ice-dragon'
            }
        ],
        updates: {
            hp: 20,
            xp: 3,
            gear: [
                {
                    name: 'Sword',
                    effect: '+1 damage to attacks',
                    points: 4
                }
            ],
            trophies: [
                {
                    name: 'Frusti Sage\'s map',
                    points: 3
                }
            ]
        }
    },
    {
        section: 64,
        id: 'submitting-to-the-frusti-sage',
        title: 'Submitting to the Frusti Sage',
        text: `Without your sword, you leave the Frusti Sage. His rumbling laughter tumbles out of the hut as you step down the hill. You are humiliated, but still alive.`,
        choices: [
            {
                btnText: 'Walk away in shame',
                sectionId: 'search-for-the-ice-dragon'
            }
        ]
    },
    {
        section: 65,
        id: 'with-glanda',
        title: 'With Glanda',
        text: `Your heart flutters as you look into Glanda’s pretty eyes. “I could think of nobody I would rather find the Ice Dragon with, Sagard,” she says.

“Then let us depart,” you say.
        
“Unfortunately, I do not know where it is,” she says, smiling.
        
Your spirits drop. The best quest of your life, and this girl doesn’t even know where to take you. You ponder this for a moment, until a voice cuts through the morning mist.
        
“Glanda! I have been searching all over for you.”
        
You whirl around to see a Ratikkan boy. He doesn’t seem to notice you as he steps toward Glanda.
        
“How dare you follow me!” she says. “This is my quest,” she says, hands on hips.
        
He stiffens. “Who is he?” he asks, pointing at me.
        
“I am Sagard. I have just met her this moment,” you say.
        
“Then you will take no offense if I ask you to leave,” he responds.
        
“But Sagard has agreed to join me in searching for the Ice Dragon.”
        
“Then he will do so over my frozen corpse.” The Ratikkan boy draws his sword and faces you off.
        
You can either fight or make a graceful exit. In this issue, you are of two minds. The test of manhood is supposed to be a solo mission, and yet Glanda has created a strange feeling in your chest. The feeling is soft and warm, and you want to be close to Glanda. You fight this feeling for a moment, because it seems dangerously like magic.`,
        choices: [
            {
                btnText: 'Fight the Ratikkan boy',
                sectionId: '/battle/fighting-the-ratikkan-boy'
            },
            {
                btnText: 'Leave gracefully',
                sectionId: 'leaving-glanda'
            }
        ]
    },
    {
        section: 66,
        id: 'leaving-glanda',
        title: 'Leaving Glanda',
        text: `“I don’t have time for this,” you say. “How you two settle your affairs is your business. I must go!”

“You are no man if you will not fight for my heart,” Glanda says.
        
“You are no woman if you would have a man die for you,” you retort. With that, you leave. It was wise to do so. The girl would have endangered your mission. You gain **2 XP**.`,
        choices: [
            {
                btnText: 'Your journey continues',
                sectionId: 'the-medigian-traders'
            }
        ],
        updates: {
            xp: 2
        }
    },
    {
        section: 68,
        id: 'beating-the-ratikkan-boy',
        title: 'Beating the Ratikkan Boy',
        text: `You raise your sword to crush the life out of the Ratikkan boy. Glanda, who had cheered for both of you during the fight, stands up and shouts, “Do not kill him. I love him!”

You wheel in your tracks and see her dashing for the Ratikkan boy. You are disgusted by this display. “I will spare him, for he fought well. I wish him full recovery of his health and his common sense. A man of his courage should have a woman that is his equal.
        
You only receive **1 XP** for this fight and you do not heal any wounds. You have learned something important about the ways of a warrior: Sagard shall never fight for the amusement of anyone. In a later book, this knowledge shall come in handy.`,
        choices: [
            {
                btnText: 'Move on, wiser now',
                sectionId: 'the-medigian-traders'
            }
        ],
        updates: {
            xp: 1
        }
    },
    {
        section: 69,
        id: 'losing-to-the-ratikkan-boy',
        title: 'Losing to the Ratikkan Boy',
        text: `The Ratikkan boy stands over you with his sword raised, about to slay you. Glanda dives over your body. “Do not kill him! I love him!”

The Ratikkan boy walks away in disgust. You are alone in the dirt with Glanda. After building a small fire, she tends to your wounds.
        
“Why did you spare me?” you ask, when you recover enough to talk.
        
“I am different from other women. Most women love only those who win in battles. You, however, have lost; therefore, I love you.”
        
For three days you recover, and you regain your full **20 HP**. Then, the stale taste of being a loser fills your mouth. You sneak off into the distance, regaining a bit of your self-respect.`,
        choices: [
            {
                btnText: 'Your journey continues',
                sectionId: 'the-medigian-traders'
            }
        ],
        updates: {
            hp: 20
        }
    },
    {
        section: 70,
        id: 'beating-the-bats',
        title: 'Beating the Bats',
        text: `The Bats are lying dead on the ground, and you gain **2 XP**. You creep further down the cave. It is dark, and a slight chill touches you. It is not the evil chill of the undead, but a chill of cooled air from inside the cave. Still, the air is unnaturally cold, even for Ratik. Striking your flint to steel, you build a small fire.

In the flickering light of the new fire, you survey the crevasse. It is not the natural, rough wall of stone that might be expected. Its construction is the work of human hands. Great blocks of granite have been stacked one on top of another to create this cavern. Over the centuries since they were built, they have crumbled and fallen toward one another. Small bits of fabric litter the floor. Gazing at them, you shudder. These fabrics are the shredded remnants of men’s clothing!
        
Something hideous has happened here, but the silence of the walls gives no hint about what this building might have been or might still be. From deep inside the cave, you hear the low hum of voices, but you can’t understand the individual words they speak.`,
        choices: [
            {
                btnText: 'Proceed forward',
                sectionId: 'the-kobolds'
            },
            {
                btnText: 'Exit the cave',
                sectionId: 'the-valleys-end'
            }
        ]
    },
    {
        section: 70.1,
        id: 'the-kobolds',
        title: 'The Kobolds',
        text: `Making a torch of the torn fragments and a thick branch which must have fallen into the crevasse during a storm, you proceed down the crevasse, which you now realize was once a corridor.

Forty feet from where you made the torch, you discover a small room. In the distance, you still hear the voices. Entering the room, you find the carcasses of several strange black and white birds without feathers. You have heard of these birds before, but you have never seen one.
                
Cautiously advancing, you take one of the birds from the rack, smell the meat to determine that it is not tainted, and proceed to devour it. The meat is cold and gamy, but nourishing. You regain **5HP**.
                
As you finish the bird, a high-pitched, guttural sound pierces your ears. Wheeling around, you see a short creature with a dark, scaly, rusty-brown hide and an almost doggish face standing at the door - a hideous mixture of races. In one hand this beast carries a pitchfork, and in the other a long, serrated, piercing dagger. Hanging from his neck are several small necklaces, and on his fingers are several rings. You know this animal as a Kobold, junk master of ancient refuse. He calls out in his piercing voice again, and three more Kobolds appear.`,
        choices: [
            {
                btnText: 'Defend yourself!',
                sectionId: '/battle/fighting-the-kobolds'
            }
        ],
        updates: {
            hp: 5
        }
    },
    {
        section: 71,
        id: 'beating-the-kobolds',
        title: 'Beating the Kobolds',
        text: `After defeating the Kobolds, you build a fire in the hearth and rest. They weren’t much of a fight, but you gain **1 XP**. 

Rested, you leave the room. The corridor ends at a set of stone stairs which lead downward. Carefully, you descend the stairs. With each step, you get colder and begin to shiver.`,
        choices: [
            {
                btnText: 'Get out now',
                sectionId: 'the-valleys-end'
            },
            {
                btnText: 'Continue down the stairs',
                sectionId: 'the-kobold-garbage-heap'
            }
        ],
        updates: {
            hp: 20,
            xp: 1
        }
    },
    {
        section: 71.1,
        id: 'the-kobold-garbage-heap',
        title: 'The Kobold Garbage Heap',
        text: `Proceeding down the stairs, you find yourself in a hideous room. Your torchlight shines on a terrible tangle of bones, pelts, broken weapons, and clothing. These gruesome artifacts are carelessly piled in the center of the room like garbage. Here and there is a stray pelt or item that has been rifled by the Kobolds. A quick scan of the room reveals there is nothing of value in it. It is a garbage heap.

Above is a large hole in the wall. Behind the hole, you see the shape of a chute leading upward. Reasoning tells you that the things in this room have been dropped here from the hole.
        
Knowing that the chute leads to another structure, you are tempted to climb it. However, the carnage in the room suggests that many have never lived to tell of such an adventure.`,
        choices: [
            {
                btnText: 'Go back now with your trophies and experience',
                sectionId: 'the-valleys-end'
            },
            {
                btnText: 'Ascend the chute',
                sectionId: 'the-gateway'
            }
        ]
    },
    {
        section: 72,
        id: 'the-gateway',
        title: 'The Gateway',
        text: `Everything around you glows in a shimmering, cold light. You are in a gigantic, cavernous room covered in ice. Before you is a massive wooden doorway with strange Gondorian runes carved in the icy walls on either side of it. A bridge leads to the doorway. Under the bridge, an icy river rushes by.

Looking over your shoulder, you see a circular dome of ice that looks like a frozen fountain. You haven’t come this far to turn around, so you set out to see what is behind the gigantic door.
        
While crossing the bridge that leads to the door, you hear a strange creaking. Suddenly, the bridge gives way!
        
In a desperate leap, you jump to the far side of the bridge. Feet firmly on the ground, you turn to see the bridge plummet into the icy abyss below.
        
You are trapped on the far side of the river. There is no way back.
        
At the bottom of the door is a massive keyhole. Only a fool would have trouble opening it. Using the tip of your dagger, you release each tumbler, turn the handle, and pull the door toward you.
        
No sooner do you open the door than a windy, low-pitched roar, like wind across an icy plain, rumbles forth.
        
There stands the most deadly creature you have ever seen: the Ice Golem!
        
Its massive structure nearly fills the doorway. It is made of ice and is transparent, except for its glowing blue eyes. In its hands, it holds a massive, dagger-sharp icicle, which it is ready to drive through your body!
        
There is no way to flee the Ice Golem. In combat, it would destroy you. Strong magic or allies will be needed if you ever hope to fight it. Your only hope is to slide past it. Your only advantage is speed.
        
As it lumbers toward you with its deadly icicle, you plot a way to slip between its legs and into the unknown room beyond, from which you can only see an eerie green glow.`,
        choices: [
            {
                btnText: 'Prepare to evade the golem',
                sectionId: '/battle/the-ice-golem'
            }
        ]
    },
    {
        section: 75,
        id: 'fighting-the-ghosts',
        title: 'Fighting the Ghosts',
        text: `You swing at the first Ghost. Your sword passes harmlessly through him. The second Ghost, his face drawn in a screaming rictus, swings at you. Expecting to feel the sharp pain of cold steel ripping your flesh, you feel nothing except a slight chill as the phantom sword cuts through your body.

The Ghosts swing harmlessly at you as you investigate the room. By all appearances, you are in an ancient crypt, probably pre-Gondorian.
        
You feel watched; turning, you see bright, glowing eyes staring at you from a doorway at the far end of the tomb. You step toward the glowing eyes and see white, almost skeletal hands beckoning you.`,
        choices: [
            {
                btnText: 'Follow the beckoning of the hands',
                sectionId: 'past-the-ghost-fighters'
            },
            {
                btnText: 'Leave the stench of this magical tomb behind',
                sectionId: 'the-valleys-end'
            }
        ]
    },
    {
        section: 76,
        id: 'past-the-ghost-fighters',
        title: 'Past the Ghost Fighters',
        text: `You step toward the beckoning hands. As you draw closer, they recede into the darkness. Slowly, you follow them into a deep underground cavern that seems to glow with a light that comes from the walls. Touching the walls, you feel a strange moss.

Turning, you shudder to see several of the pale creatures staring at you. They stand in a semicircle, closing in on you. None of them appears to be armed, and their bulbous eyes seem to be pleading to you. However, they say nothing, and the silence is more chilling than anything these haunted creatures could say.
        
“Who are you?” you ask, but they give no response. The circle closes, their long, bony hands touching you, their gaunt, cadaverous faces turning toward you. You do not know how to handle them. You reach for your sword, but it is not in your code to wantonly slaughter the weak and helpless. These creatures, if they aren’t dead already, are certainly helpless. Looking closer, you realize that they have no ears.
        
In moments the crowd parts, and standing before you is a pale man, different from the others. Your eyes meet. His eyes are as dark as death itself.
        
Then he mutters in a language you don’t understand. A strange transformation occurs in the crowd. They drop to their knees and stare up at you in awe.
        
“For centuries we have waited for the man who would defeat the ghosts of Aldilusia. You are that man. We offer all that we have.”
        
“I did nothing,” you say. “They are ghosts. I am flesh. That which is not made of matter cannot harm that which is.”
        
“You are our savior. Now we can leave this place where we have been trapped for generations.”
        
A strange procession begins. The cloistered people pass before you with trinkets of their squalid existence: mushrooms, batskins, various mosses, and pale fruits and vegetables. None of the things they bring you is of any particular value, save for a weird type of **glowmoss**. It has been their sustenance in these times - a powerful protein substance that will immediately restore you to your full strength of **20 HP** when you eat it. Glowmoss will work only one time; only use it when you are in most desperate need.
        
So as not to offend these timid and gentle people, you take several of their offerings before leading them out of the cave. Once outside, the pale people shield their eyes from the great light, break into song, and proceed up the valley after once again expressing their gratitude.
        
Except for a **stuffed bat** which you will keep as a trophy, you discard all of the other things they have given you. When they are gone, you are right back where you began. You gain **1 XP**.`,
        choices: [
            {
                btnText: 'Continue your quest',
                sectionId: 'the-valleys-end'
            }
        ],
        updates: {
            xp: 1,
            trophies: [
                {
                    name: 'Glowmoss',
                    points: 2,
                    usable: true,
                    add: true
                },
                {
                    name: 'Stuffed bat',
                    points: 1,
                    add: true
                }
            ]
        }
    },
    {
        section: 77,
        id: 'beating-the-ice-golem',
        title: 'Beating the Ice Golem',
        text: `You are winded and tired from the hideous fight. What had been the Ice Golem is now a hundred shards of melting ice. Even as you watch, the water from the shards flows together in an unnatural manner, as if pushed by an invisible hand.

This reeks of dark magic and your barbarian instincts tingle. Passing through the gate and into the building beyond, you look over your shoulder. The water has flowed back into the shape of the Ice Golem again and is beginning to freeze.
        
Not wanting to encounter this horrifying creature again, you dash into the distance. You gain **7 XP**.`,
        choices: [
            {
                btnText: 'Your quest continues',
                sectionId: 'entering-the-ancient-structure'
            }
        ],
        updates: {
            xp: 7
        }
    },
    {
        section: 78,
        id: 'entering-the-ancient-structure',
        title: 'Entering the Ancient Structure',
        text: `With the Ice Golem a safe distance behind, you slow down. Looking around, you realize that you are in an ancient building of masterful workmanship. All is coated with ice, but you suspect that this was not the intention when this structure was built.

You pass through a large room and down a series of corridors. In the corridors are several small cells. Some of them are barred; some are shielded in glass. Some of the rooms are empty, their massive doors open; others contain the remains of a variety of creatures: the knotted vertebrae and diamond-shaped skulls of ancient snakes, the feathered skeleton of an ancient hawk, the cell-like rib cages and murderous jaws of great lions.
        
Walking onward, you cannot help but wonder what purpose this structure served when the Gondorians ruled the world. Suddenly, you hear a strange bleating sound and see several comical-looking birds waddling toward you. You have seen these before, and you know that they are good for eating.
        
Quickly, you draw your sword and slay two of them. Taking refuge in one of the cells whose door has been removed, you devour them. They taste horrible but are nourishing. You regain **6 HP**.`,
        choices: [
            {
                btnText: 'Continue exploring',
                sectionId: '/battle/the-great-white-beast'
            }
        ],
        updates: {
            hp: 6
        }
    },
    {
        section: 80,
        id: 'fleeing-the-snow-tiger',
        title: 'Fleeing the Snow Tiger',
        text: `Slamming the cage door shut in the face of the Snow Tiger, you dive into the hallway and skid across the icy floor.

Inside the cage, the tiger growls in frustration. You are cut and hurt, but alive. After resting for an hour in the hallway, regaining **4 HP**, you proceed down the hallway.
        
At the intersection of two corridors, you hear human voices, speaking in a northern tongue. Curiosity grips you as you proceed down the hallway.`,
        choices: [
            {
                btnText: 'Investigate the voices',
                sectionId: 'the-yeti'
            }
        ],
        updates: {
            hp: 4
        }
    },
    {
        section: 81,
        id: 'beating-the-snow-tiger',
        title: 'Beating the Snow Tiger',
        text: `The massive Snow Tiger lies silent on the cage floor. You gain **3 XP**. Tearing the tiger’s lethal **teeth** from its jaw, you gain a trophy. Resting in the cave after your victory, you regain **8 HP**.

While resting, you hear the distant murmurings of human voices. Surprised that hideous beasts are not the only inhabitants of this place, you creep stealthily toward the voices.`,
        choices: [
            {
                btnText: 'Stalk silently',
                sectionId: 'the-yeti'
            }
        ],
        updates: {
            hp: 8,
            xp: 3,
            trophies: [
                {
                    name: 'Snow Tiger\'s teeth',
                    points: 3,
                    add: true
                }
            ]
        }
    },
    {
        section: 82,
        id: 'the-yeti',
        title: 'The Yeti',
        text: `Had you grown up in civilization, the sound of human voices would have escaped your ears, but as a child of the woods, tuned to the subtle whispers of nature, you hear the voices - even when they drop to a soft hush.

Following the faint whispers through the labyrinthine trail of the corridors, you come upon a large, open area.
        
The ice-encrusted remains of dozens of tables litter the room. In the far corner stands a very long table with cooking implements hung on the wall behind it. At one time Gondorians took their meals here.
        
Stalking quietly, you see two humans huddling behind the remains of a broken table. They do not see you; their attention is fixed on a doorway on the opposite side of the room.
        
You can make out very little of the two men. They are dressed all in white and hold long spears and nets.
        
It is not long before you see why they are lying in wait. Blocking out the far doorway, like a cloud over the sun, is the massive structure of a furred beast. Your heart pounds, for you had believed that this beast only existed in legends of the deep snow countries. It is white… terrible… a Yeti!
        
The Yeti is nearly the size of the Ice Golem and is part human, part bear, and part something else. As its burning yellow eyes scan the room, you get the cold feeling that it sees you.
        
The two hunters suddenly stand up and hurl their spears, striking the massive beast. The Yeti screams in rage and rips at the air with its claws. A terrible battle is about to begin, pitting men against the Yeti - an angry, tough, and desperate opponent.
        
The pelt of the Yeti would be a trophy to hang proudly in the hunters’ cabin; however, it will be a fight to the death. A Yeti, which prizes the secrecy of its own race above all, will never let any human who discovers it escape.`,
        choices: [
            {
                btnText: 'Fight for your trophy',
                sectionId: '/battle/fighting-the-yeti'
            }
        ],
        roll: [
            {
                btnText: 'Attempt to get out',
                sectionId: 'escape-from-the-yeti'
            },
            {
                btnText: 'Attempt to get out',
                sectionId: '/battle/fighting-the-yeti'
            }
        ]
    },
    {
        section: 83,
        id: 'escape-from-the-yeti',
        title: 'Escape from the Yeti',
        text: `You turn and dash for the door. For a moment, your eyes meet the Yeti’s. You could not describe in words the horrible hatred in his face. With goose bumps rising in your flesh, you run.`,
        choices: [
            {
                btnText: 'Dash away',
                sectionId: 'the-treacherous-floor'
            }
        ]
    },
    {
        section: 85,
        id: 'defeating-the-yeti',
        title: 'Defeating the Yeti',
        text: `The Yeti is dead. You gain **5 XP**. But what of the Men in White?`,
        updates: {
            xp: 5
        }
    },
    {
        section: 86,
        id: 'refusing-glanda',
        title: 'Refusing Glanda',
        text: `“No,” you say. “I intend to survive my test of courage. I will not become the unholy dinner of the Ice Dragon.”

Glanda’s face falls. “Too bad. I had thought you to be a man.”
        
You sit up in anger. How dare a young girl question your manhood! Your tongue works faster than your brain. “I will take the heart from the Ice Dragon and shatter him with my sword.”`,
        choices: [
            {
                btnText: 'Continue',
                sectionId: 'plotting-the-mission'
            }
        ]
    },
    {
        section: 89,
        id: 'fleeing-the-men-in-white',
        title: 'Fleeing the Men in White',
        text:  `A Man in White jabs at you with his spear. You dodge in the nick of time but realize that one more strike will kill you. Taking advantage of your superior speed, you turn and run.

Shouting guttural oaths, the Man in White chases after you. His spear blade swishes at your heels, but you skid across the floor and out of the ancient room.
        
He does not follow you into the dark corridor you now find yourself in. You have learned a bit about Poachers, which is what the Men in White clearly were. Give yourself **1 XP**.`,
        choices: [
            {
                btnText: 'Carry on, a bit wiser than before',
                sectionId: 'the-treacherous-floor'
            }
        ],
        updates: {
            xp: 1
        }
    },
    {
        section: 90,
        id: 'after-the-yeti-battle',
        title: 'After the Yeti Battle',
        text: `The Men in White, who you now realize were Poachers, lie dead. Pulling your dagger from your belt, you stalk over to the carcass of the Yeti. With the hunting skill you have learned as a Ratikkan tribesman, you take the pelt, dress it, and wrap yourself in it. The **Yeti pelt** is a valuable trophy. 

Stepping over to the Men in White, you rummage through their packs. You find a full ration of food. Eating it and resting in the pelt afterward rejuvenates you. You gain **10 HP**.
        
Hours later, you wake up and continue your quest. You gain **2 XP**.`,
        choices: [
            {
                btnText: 'Continue on your quest',
                sectionId: 'closing-in-on-the-ice-dragon'
            }
        ],
        updates: {
            hp: 10,
            xp: 2,
            trophies: [
                {
                    name: 'Yeti pelt',
                    points: 4,
                    add: true
                }
            ]
        }
    },
    {
        section: 91,
        id: 'the-treacherous-floor',
        title: 'The Treacherous Floor',
        text: `At the end of the corridor through which you avoided The Conflict, you turn and look back. Vaguely, you see several of the Poachers slowly drift into the room. Together, they light a fire and begin cutting apart the Yeti.

Huddling in the corridor, you eat the last of your rations, then rest, regaining **8 HP**. Suddenly, you hear a loud shout: “There’s the Ratikkan dog!”
        
Startled from your sleep, you look back. Four of the Poachers chase after you. Knowing that you cannot beat four of these tough, husky men, you run down the corridor to a stout door at the end.
        
Their shouts echo in your ears. “Surrender and die, Ratikkan!” For a moment, you contemplate fighting them, but that would be foolish - a great warrior knows the time for retreat.
        
With a harsh jerk, you open the great door. The room you have entered is circular. Around the perimeter of the circle are the toppled remains of arena-like seats. On the walls, through the thin layer of ice, there are several paintings of fish, many of them species you have never seen before.
        
Before you is a circle of ice. A strange blue glow comes from below the ice, as if it is lit by a hidden source.
        
The Poachers draw closer and are now breathing down your neck. You dash across the glowing circle of ice.`,
        roll: [
            {
                btnText: 'Try your luck on the ice',
                sectionId: 'cracking-through-the-ice'
            },
            {
                btnText: 'Try your luck on the ice',
                sectionId: 'eluding-the-poachers'
            }
        ],
        updates: {
            hp: 8
        }
    },
    {
        section: 92,
        id: 'cracking-through-the-ice',
        title: 'Cracking Through the Ice',
        text: `While running across the circle of ice, you hear several high-pitched squeaks, then a shattering crash! The circle of ice cracks, and you plummet into a pool of water.

At the upper surface, the water is freezing, but as you plunge deeper it grows warmer. At the far end of the lighted pool grow beautiful underwater plants.
        
The presence of sunlight informs you that swimming to the glow will take you out of the building - if you want to go. However, if you leave, you will not be able to reenter because the hole you crashed through will freeze up.
        
You can now exit the ancient building with the trophies you possess. Or you can swim back up the hole to reenter the building, knowing that the Poachers might attack you.`,
        choices: [
            {
                btnText: 'Leave the building',
                sectionId: 'escaping-the-underwater-building'
            },
            {
                btnText: 'Go back through the hole and reenter the ancient structure',
                sectionId: 'going-back-up'
            }
        ]
    },
    {
        section: 93,
        id: 'escaping-the-underwater-building',
        title: 'Escaping the Underwater Building',
        text: `Taking advantage of an air pocket between the water and the icy layer on top, you take a deep breath and swim toward the light. As you get closer, you can see more.

The river floor below is covered with human and animal bones, which over the centuries have calcified together to form a strange and hideous sculpture.
        
You barbarian instincts tingle. There is something terrible down here.`,
        choices: [
            {
                btnText: 'Find out what is down here',
                sectionId: '/battle/guardian-of-the-river'
            }
        ]
    },
    {
        section: 94,
        id: 'going-back-up',
        title: 'Going Back Up',
        text:  `You find an air pocket under the ice, giving enough time for the Poachers to believe you’ve drowned. Swimming in the frigid waters of the pool, so similar to those of your Ratikkan mountain streams, you thrust yourself through the hole. You are back in the ancient building.`,
        choices: [
            {
                btnText: 'Brush yourself dry and carry on',
                sectionId: 'closing-in-on-the-ice-dragon'
            }
        ]
    },
    {
        section: 95,
        id: 'shattered-ice',
        title: 'Shattered Ice',
        text: `With a mighty lunge, you strike the Ice Golem in the chest. You gain **4 XP**. He cracks into thousands of shards and, with a loud scream, shatters into a pile. Stepping back, you begin your long jump to make it across the river below, which rushes with a new fury.

Running up, you jump.`,
        choices: [
            {
                btnText: 'Your journey continues',
                sectionId: 'jumping-across-the-bridge'
            }
        ],
        updates: {
            xp: 4
        }
    },
    {
        section: 97,
        id: 'fleeing-the-river-monster',
        title: 'Fleeing the River Monster',
        text: `The River Monster strikes at you, missing. Its triangular, reptilian head vanishes into the muddy bank of the river. Seizing your chance, you swim away to the source of the light.

Your lungs begging for air, you scramble for the surface. When your head breaks through the water, you splash quickly to the shore and lunge to the land, panting and drawing air into your lungs as quickly as possible.
        
Just as you start to feel safe, you hear a sloshing behind you and a horrible hiss. Spinning around, you see the River Monster’s head rise from the water, its burning eyes piercing you. Using the last of your strength, you scramble  up the bank. You are safe from the deadly creature.
        
For just a moment, you turn and look back. The River Monster trembles in rage, but it is stuck in the water. Stumbling a few feet further, you realize that you are in a peaceful fern forest. Graceful, spiny leaves flutter in the air, and beautiful, multicolored birds chirp sweet songs. You are not more than a hundred miles from your home, and yet this place looks like something from a tale you have heard about the distant South.
        
Just a few feet away, you spot a beautiful tree covered with bright, luscious fruit. Crawling toward it, you pick a piece of fruit, drink of its succulent juices, and peer around you. Not far away is a cave. A metallic grating shields its mouth, and from the cave comes a warm wind.
        
Before dropping off into a deep sleep, you wonder for what purpose the Gondorians created this place.`,
        choices: [
            {
                btnText: 'Rest well and continue your quest',
                sectionId: 'returning-to-the-tribe'
            }
        ]
    },
    {
        section: 98,
        id: 'beating-the-river-monster',
        title: 'Beating the River Monster',
        text: `You fight in a mad flurry of bubbles and silt. The River Monster lunges and you strike. It suddenly stops, as if the life has gone out of it. Suspecting that it might be a trick, you hack several more times at the monster, but it does not move. After hacking away a **piece of the River Monster’s scaly spine** as a trophy, you swim toward the shore.

Triumphant, you scramble for the surface. Reaching it, you splash quickly to shore and scuttle to the riverbank, panting and drawing air into your lungs as quickly as you can. You gain **4 XP**.
        
Suddenly, you hear a sloshing behind you and a horrible hiss. Spinning around, you see the River Monster’s gashed head rise from the water. Its burning eyes pierce you. Using the last of your strength, you scramble  up the bank. You are safe.
        
For just a moment, you turn and look back. The River Monster, bleeding, hisses in rage, but it cannot leave its element - the water. Stumbling a few feet further, you realize that you are in a peaceful fern forest. Graceful, spiny leaves flutter in the air, and beautiful, multicolored birds chirp sweet songs. You are not more than a hundred miles from your home, and yet this place looks like something from a tale you have heard about the distant South.
        
A few feet away, you spot a beautiful tree covered with bright, luscious fruit. You pick a piece, drink of its succulent juices, and peer around. Not far away is a cave. An iron grating shields its mouth, and a warm wind blows from it.
        
Before dropping off into a deep sleep, you wonder why the Gondorians created this place and what purpose it had.`,
        choices: [
            {
                btnText: 'Rest well and continue your quest',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            xp: 4,
            trophies: [
                {
                    name: 'River Monster\'s spine',
                    points: 5,
                    add: true
                }
            ]
        }
    },
    {
        section: 99,
        id: 'closing-in-on-the-ice-dragon',
        title: 'Closing in on the Ice Dragon',
        text: `You travel for several hours down the labyrinthine corridors and pass more cells. You see no living creatures - only the remains of those that have been killed, picked of their meat, and left to freeze.

As you venture deeper into this strange, ancient building, you hear a throbbing - first a low, distant rumble which would have escaped civilized ears, and then, as you draw closer, a clear, loud rumbling, like the soft snore of a very powerful beast.
        
You pass through a door and into a very different part of the vast complex. The corridors are narrow, and there are no more paintings of animals, just directional signs and Gondorian runes. 
        
As you face down a long catwalk, the rumble grows very loud. You are coming close to the Ice Dragon.
        
You heart leaps and your muscles tense. The danger and power of the Ice Dragon are near.
        
You enter the last corridor. It is a long, narrow passageway. At the far end is a large metal door. Before the door stand four men clad in furs and holding long, pointed weapons.
        
The men see you.
        
“Who dares to test the will of the Zokapers and threaten the Ice Dragon? Surrender now or be cut to ribbons!” one of the men shoults.
        
Your muscles tense. You do not take orders from men. “I am Sagard. If you want me, you will have to come and get me.”
        
Suddenly, the four men charge. You draw your gleaming sword and brace for the attack. It will be a desperate battle, but the Ice Dragon rests on the other side of it.`,
        choices: [
            {
                btnText: 'Onward to glory!',
                sectionId: '/battle/fighting-the-zokapers'
            }
        ]
    },
    {
        section: 101,
        id: 'defeating-the-zokapers',
        title: 'Defeating the Zokapers',
        text: `With the Zokapers defeated, you gain **1 XP**. Now nothing stands between you and the lair of the Ice Dragon. Still, you have been wounded by the fight, and you know that the Ice Dragon will be a mighty opponent.

A Zokaper, lying wounded on the ground, mutters to you. “If you promise not to harm the Ice Dragon, I will tell you of a secret way out of here.”
        
You gaze down at him. You already have enough trophies to impress your tribe. A duel with the Ice Dragon could be lethal.
        
“If you cut the heart from the Ice Dragon, all here will be destroyed,” the wounded Zokaper mutters. “Do you know yet what this place is?”
        
You contemplate the question. For what purpose did the Gondorians build this unnatural hall of ice? What has caused it to sustain itself for all of the centuries since the destruction of Gondoria? What might the Ice Dragon be?
        
“What is this place?” you ask the defeated Zokaper.
        
“That I cannot tell you. I have been sworn to secrecy. I will only tell you how to escape from it.”
        
Though you are a barbarian, you are true to your code. If you promise this dying man that you will leave and not attack the Ice Dragon, you must do so.`,
        choices: [
            {
                btnText: 'Agree and leave',
                sectionId: 'getting-out'
            },
            {
                btnText: 'Confront the Ice Dragon',
                sectionId: 'the-ice-dragons-lair'
            }
        ],
        updates: {
            xp: 1
        }
    },
    {
        section: 102,
        id: 'getting-out',
        title: 'Getting Out',
        text: `“Give me directions, and I will leave the Ice Dragon in peace,” you say.

“Proceed through that door,” the Zokaper says. “Take my key. It will take you away, but no key will let you back in.”
        
You take the **key** as a trophy and pace to the door. As you open it, sunlight floods through the door, nearly blinding you. From deep inside the cave, the roar of the Ice Dragon grows louder. It is as if the heat from opening the door made him angry.
        
On stepping into the brilliant sunlight of a warm winter afternoon in Ratik, you understand the nature of the Ice Dragon’s lair.`,
        choices: [
            {
                btnText: 'Your journey continues',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            trophies: [
                {
                    name: 'Zokaper\'s key',
                    points: 1,
                    add: true
                }
            ]
        }
    },
    {
        section: 103,
        id: 'the-ice-dragons-lair',
        title: 'The Ice Dragon\'s Lair',
        text: `Ignoring warnings from the Zokaper, you proceed down the corridor. On the other side of a massive iron door, which you assume was built to keep the Ice Dragon in, you hear a soft, purring roar. It sounds as if the Ice Dragon is asleep.

Gently, you open the door, which, much to your surprise, is neither locked nor very heavy. Certainly no such door would contain a demon as menacing as the Ice Dragon.
        
Peering in, you see the Ice Dragon. Reclining at the far side of the room, the Ice Dragon has no fur, scales, or flesh. Nor does it have legs, though several arms rise from its body and attach to the wall, looking more like metal tentacles than animal limbs.
        
Your entrance has not disturbed the Ice Dragon’s slumber; it still rests, and from the dust on the floor, you guess it has not moved in a very long time, if ever.
        
In the center of the Ice Dragon, sealed in a crystal box, you see its heart. It is a brilliantly glowing ruby of enormous size. From a hole in the roof nearly a hundred feet up come several rays of light which shine on the gigantic jewel from above. From the bottom of the heart beams a single intense ray of light which hits a spinning platform.
        
Puzzled, you realize that the Ice Dragon is not a creation of nature, but something fashioned by the clever hands of the Gondorians. Somehow, though your mind does not truly comprehend the physical marvels of the ancients, the smell of magic fills the place. You feel that the Ice Dragon is responsible for the chill of this strange building you have been in.
        
As you contemplate how you might steal the jewel, several fists pound on a door not far from you, and you hear a shout: “Let us out!”
        
“Who are you that I should let you out?” you call back.
        
“We are the Teknikans, keepers of the Ice Dragon. We mean you no harm. We are prisoners.”
        
You have been tricked by the pleas of men before. It would be easy to steal the heart of the Ice Dragon and flee, but the warning of the Zokaper rings in your ears. “If you cut the heart from the Ice Dragon, all here will be destroyed.”`,
        choices: [
            {
                btnText: 'Steal the heart of the Ice Dragon',
                sectionId: 'stealing-the-heart'
            },
            {
                btnText: 'Answer the call of the Teknikans',
                sectionId: 'releasing-the-teknikans'
            }
        ]
    },
    {
        section: 104,
        id: 'stealing-the-heart',
        title: 'Stealing the Heart',
        text: `The Teknikans call, “Please release us!” but you ignore them.

Climbing atop the Ice Dragon confirms your suspicions that it is not a living creature - at least, not living in the way that animals of the forest live. Reaching the heart, you discover that it is held in place only by two metal rods. Brandishing your sword, you hack first at one bolt, then the other, and the throbbing stops. The Ice Dragon is dead.
        
Catching the ruby, which is nearly the size of your fist, you jump off the dragon and race for the door.
        
You hear the Teknikans call to you. “You have killed the Ice Dragon. It will be the end for us if you do not let us out now. You know not what you have done.”
        
Hearing the pleading voices, your heart knows pity, an emotion almost totally foreign to you. You consider saving them. Stopping at the door and contemplating, you hear sounds from inside the massive structure.
        
In the far distance, you hear loud cracking sounds. It is as if, when the Ice Dragon died, the whole place came to life. Terror seizes you.`,
        choices: [
            {
                btnText: 'Dash for your life',
                sectionId: '/battle/dashing-for-your-life'
            },
            {
                btnText: 'Save the Teknikans',
                sectionId: 'saving-the-teknikans'
            }
        ]
    },
    {
        section: 106,
        id: 'out-of-the-roiling-river',
        title: 'Out of the Roiling River',
        text: `A warm winter sun beats down on you. The sound of rushing water fills your ears, but you are dry. Straining your aching muscles, you sit up and notice that you are alone on a riverbank. Somehow the roiling river discarded you alive and relatively unhurt upon its banks. All the trophies you gathered in the ancient building are gone, except for your sword, which still lies in your sheath - and you are still alive. Your heart sinks. You have had a great adventure, but now you have very little proof for the warriors, only your sword and the trophies you stashed before exploring the Ice Dragon's lair.

A red glow in the river catches your eye. You rise and step toward it. Reaching into the water, your hand comes up with the **heart of the Ice Dragon**. Alone in the wilderness, you shout for joy.
        
Later, you make your way back to where you stashed your other trophies. You pick them up and head back to your tribe.`,
        choices: [
            {
                btnText: 'Begin the trek home',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            trophies: [
                {
                    name: 'Heart of the Ice Dragon',
                    points: 20,
                    add: true
                },
                {
                    name: 'Stuffed bat',
                    remove: true
                },
                {
                    name: 'Snow Tiger\'s teeth',
                    remove: true
                },
                {
                    name: 'Yeti pelt',
                    remove: true
                },
                {
                    name: 'River Monster\'s spine',
                    remove: true
                },
                {
                    name: 'Zokaper\'s key',
                    remove: true
                },
                {
                    name: 'Glowmoss',
                    remove: true
                },
                {
                    name: 'Mountain Lion\'s pelt',
                    stash: false
                },
                {
                    name: 'Knight\'s Plume',
                    stash: false
                },
                {
                    name: 'Raven from shield',
                    stash: false
                },
                {
                    name: 'Devil-Bear\'s claw',
                    stash: false
                },
                {
                    name: 'Frusti Sage\'s map',
                    stash: false
                }
            ]
        }
    },
    {
        section: 107,
        id: 'jumping-across-the-bridge',
        title: 'Jumping Across the Bridge',
        text: `You run up to the side of the river. As you strike a patch of glare ice, your feet slip out from under. Panicked, you streak across the roiling river. In terror, you close your eyes, expecting to fall into it, but your feet and then your back strike ground on the other side. You skid onward across the now mushy field that leads to the great gate of the Ice Dragon.

Dashing forward out of the gloom, you see the sun’s rays shining through a large hole. You run to the hole and find yourself in the place near the three caves, where your adventure in the lair of the Ice Dragon began.
        
It is a warm, sunny day, and you are free and victorious! 
        
Picking up the items you had cached before you entered, you head back to your tribe, whistling a happy song.`,
        choices: [
            {
                btnText: 'Begin the journey home',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            trophies: [
                {
                    name: 'Mountain Lion\'s pelt',
                    stash: false
                },
                {
                    name: 'Knight\'s Plume',
                    stash: false
                },
                {
                    name: 'Raven from shield',
                    stash: false
                },
                {
                    name: 'Devil-Bear\'s claw',
                    stash: false
                },
                {
                    name: 'Frusti Sage\'s map',
                    stash: false
                }
            ]
        }
    },
    {
        section: 108,
        id: 'releasing-the-teknikans',
        title: 'Releasing the Teknikans',
        text: `Your good sense triumphs over greed. You run to the door, and with a mighty kick you crash it open. Inside the room are six Teknikans. They are little men with large heads and bulbous eyes, fitting the mythical descriptions of ancient Gondorians.

At first they are startled to see a human so massive and rippling with such muscles, but eventually one of them speaks. “I suppose you have come for what you primitives call the heart of the Ice Dragon.”
        
“That is my quest,” you say.
        
“We shall remove it for you if you will help us in battle with the Ice Golem,” he says.
        
“That is a fair exchange,” you say.
        
“You look as if you have been wounded. Let us apply our medical techniques to you.”
        
“Keep your magic away from me!” you respond.
        
“This is not magic. This is science,” one of the Teknikans protests. Before you can respond, he rubs some kind of healing salve on your wounds.
        
At first it stings, and you bitterly complain; however, in a few minutes your wounds recover, and you regain your full strength of **20 HP**. 
        
Meanwhile, the little men remove the stone from the Ice Dragon. When this is done, the loud throbbing stops.
        
“The Ice Dragon is dead?” you ask.
        
The head Teknikan casts you a sympathetic look and replies, “Yes, he is dead.”
        
A loud crack echoes through the structure, followed by several softer ones. “We had best get out now,” the Teknikan says. “Soon this building will flood.”
        
The Teknikans lead you through the building, stopping now and then to debate among themselves about what is the quickest route. As you run, the cracking sound grows louder and louder. You realize that this sound comes from the massive sheets of ice on the walls, overhead, and on the ground below you, cracking and falling.
        
A warm wind blows through the corridors. Already, water is beginning to flood the corridor. From the gloomy depths of this place come the shrill cries of hundreds of animals. In the distance, you see their small, terrified forms running as they would from a fire demon. A lone white squirrel chirps accusingly as it skitters past you.
        
Dashing along, the Teknikans lead you to the main corridor through which you entered. Now the field of ice is soft and mushy.
        
Halfway across the field of ice, you see the hulking shape of the Ice Golem. He looms in the doorway like an immobile boulder. There is no choice but to fight him and destroy him, and you know that the Teknikans will be of little help.
        
Drawing closer to the Ice Golem, you see that he is melting like the rest of the building. His exterior, which before was hard and shiny, is now moist and rutted. Fighting the Ice Golem will be difficult but, unlike before, this time you have a chance.`,
        choices: [
            {
                btnText: 'Prepare to do battle',
                sectionId: '/battle/rematch-with-the-ice-golem'
            }
        ],
        updates: {
            hp: 20
        }
    },
    {
        section: 110,
        id: 'saving-the-teknikans',
        title: 'Saving the Teknikans',
        text: `Compassion will not let you leave the Teknikans to die. You dash to the door and crash it open with a mighty kick. Inside the room are six Teknikans. They are little men with large heads and bulbous eyes, looking exactly like the mythical descriptions of ancient Gondorians.

At first they are startled to see a human so massive and rippling with such muscles, but eventually one of them speaks. “You are wounded and will need to be strong again before you can fight the Ice Golem.”
        
“I have no intention of fighting the Ice Golem again,” you say.
        
“You must, if you hope to escape. He blocks the only exit,” the Teknikan responds.
        
Though you hate the smell of any kind of magic, you acquiesce and allow him to rub a healing salve on your wounds.
        
At first it stings, and you bitterly complain; however, in a few minutes your wounds recover, and you regain your full strength of **20 HP**. 
        
A loud crack echoes through the structure, followed by several softer ones. “We had best get out now,” the Teknikan says. “Soon this building will get warm and flood.”
        
The Teknikans lead you through the building, stopping now and then to debate among themselves about what is the quickest route. As you run, the cracking sound grows louder and louder. You realize that this sound comes from the massive sheets of ice on the walls, overhead, and on the ground below you, cracking and falling.
        
A warm wind blows through the corridors. Already a small puddle of water floods the corridor. From the gloomy depths of this place come the shrill cries of hundreds of animals. In the distance, you see their small, terrified forms running as they would from a fire demon.
        
Dashing along, the Teknikans lead you to the main corridor through which you entered. Now the field of ice is soft and mushy.
        
Halfway across the field of ice, you see the hulking shape of the Ice Golem. He looms in the doorway like an immobile boulder. There is no choice but to fight him and destroy him, and you know that the Teknikans will be of little help.
        
Drawing closer to the Ice Golem, you see that he is melting like the rest of the building. His exterior, which before was hard and shiny, is now moist and rutted. Fighting the Ice Golem will be difficult but, unlike before, this time you have a chance.`,
        choices: [
            {
                btnText: 'Brace yourself',
                sectionId: '/battle/rematch-with-the-ice-golem'
            }
        ]
    },
    {
        section: 111,
        id: 'beating-the-ice-golem',
        title: 'Beating the Ice Golem',
        text: `With a last mighty lunge, the Ice Golem swings at you, pulling you off your feet and sending you through the air. You travel through the darkness and, looking down, you see the water rushing below. Closing your eyes in terror, you await your plummet to the roaring river. Surprisingly, you land on mushy, icy ground. The Ice Golem knocked you across the river.

You peer back and see the Ice Golem slowly melt into a slushy mass. You gain **7 XP**. Looking harder, you try to spot the Teknikans, but they are nowhere to be seen. You may never know for certain what became of these creatures, but one of them would have been a marvelous trophy to show to your tribe.
        
A loud crack, followed by the sound of rushing water, jars you to your senses.
        
Dashing forward out of the gloom, you see the sun’s rays shining through a large hole. You run through the hole and find yourself in the place near the three caves, where your adventure in the lair of the Ice Dragon began. It is a warm, sunny day, and you are free and victorious!
        
Picking up the items you cached before you entered, you head back to your tribe in triumph.`,
        choices: [
            {
                btnText: 'Begin your trek home',
                sectionId: 'returning-to-the-tribe'
            }
        ],
        updates: {
            xp: 7,
            trophies: [
                {
                    name: 'Mountain Lion\'s pelt',
                    stash: false
                },
                {
                    name: 'Knight\'s Plume',
                    stash: false
                },
                {
                    name: 'Raven from shield',
                    stash: false
                },
                {
                    name: 'Devil-Bear\'s claw',
                    stash: false
                },
                {
                    name: 'Frusti Sage\'s map',
                    stash: false
                }
            ]
        }
    },
    {
        section: 112,
        id: 'returning-to-the-tribe',
        title: 'Returning to the Tribe',
        text: `Days pass as you head toward home. It has been a hazardous journey. In a moment of clarity, you realize what the Ice Dragon’s lair really was. It was a place where the ancient Gondorians kept prize animals. In future times, this place would be called a zoo.

Approaching your tribe, you tally up your trophies.`,
        choices: [
            {
                btnText: 'Count up your trophies',
                sectionId: 'counting-your-trophies'
            }
        ]
    },
    {
        section: 113,
        id: 'killed-in-the-ice-kingdom',
        title: '"Killed" in the Ice Kingdom',
        text: `For days, your ears ring and your brain is in a turgid gloom. You march endlessly across a vast set of moors, weapon clutched firmly in hand, seeing no one and eating nothing. This, you assume, is the great misty place one goes to after death.

Numbness slowly turns to aching pain, the mist in your head becomes a throbbing headache, and the blur about your eyes clears. In the distance, there is a most familiar mountain, but in your state of wretchedness you do not recognize it.
        
For a brief instance, clarity overtakes you. Somehow, you left the lair of the Ice Dragon, picked up the trophies you had hidden outside the lair, and marched homeward, guided by instinct. Now you drop, exhausted, to the ground.
        
When you next awaken, you are in the Warriors’ Lodge. The warriors sit around you in a great circle. They are passing judgment on your Ordeal of Courage.`,
        choices: [
            {
                btnText: 'Await your judgment',
                sectionId: 'counting-your-trophies'
            }
        ],
        updates: {
            trophies: [
                {
                    name: 'Mountain Lion\'s pelt',
                    stash: false
                },
                {
                    name: 'Knight\'s Plume',
                    stash: false
                },
                {
                    name: 'Raven from shield',
                    stash: false
                },
                {
                    name: 'Devil-Bear\'s claw',
                    stash: false
                },
                {
                    name: 'Frusti Sage\'s map',
                    stash: false
                }
            ]
        }
    },
    {
        section: 114,
        id: 'counting-your-trophies',
        title: 'Counting Your Trophies',
        text: `The firelight flickers in the lodge. The faces of the elders are stern; they puff on their pipes and eye you as the sacred bowl passes around the room. As the bowl passes each man, he drops a small pebble into it. A black pebble means that he is with you; a white pebble means that his vote is against you.

This is the moment of truth: Are you a man? Or are you a kwad?`
    },
    {
        section: 115,
        id: '1-13-trophy-points',
        title: '1 - 13 Trophy Points',
        text: `The Elder eyes you. “Sagard, we have looked at your trophies.” He pauses, his eyes are hard, and there is a stern frown upon his countenance. “Were you a Frusti, this bounty might be enough, but you are a Ratikkan and thus a disgrace.” He waves his hand in disgust. “You are a kwad and must leave this lodge, never to return, unless you bring us the heart of the Ice Dragon.”

With that, the men of the tribe rise and approach you. At first you struggle, but they quickly subdue you. There is a confused flurry of activity as they carry you out of the lodge and deep into the woods. Then, tying your hands behind your back and dropping you into a deep snowdrift, they leave, berating you with loud jeers and catcalls.
        
Alone in the woods, and without any of your possessions, you wrestle with your bonds. Soon you will be free of them. Forget all you have done thus far and begin this book again. This time, do not fail to come back with a superior prize.`,
        choices: [
            {
                btnText: 'Start again',
                sectionId: 'introduction'
            }
        ]
    },
    {
        section: 116,
        id: '14-26-trophy-points',
        title: '14 - 26 Trophy Points',
        text: `The Elder looks at you sternly, the firelight playing on his rugged countenance. His lips curl into a harsh scowl. “Sagard, we have looked at your trophies. Some have done better, most have done worse. One day you might be a great warrior, but you still have much to learn. Give us all of your trophies, except your warrior’s weapon, so that we may hang them on the wall of honor. Tomorrow, you shall journey with a small band in search of plunder.”

The Elder turns to the other warriors. “Rise so that we might welcome Sagard to the Warriors’ Lodge.”
        
A warm glow fills you while your heart pounds, and a foaming goblet of warm ale is passed into your hands. The warriors cheer.

Congratulations!`
    },
    {
        section: 117,
        id: '27-trophy-points-and-up',
        title: '27 Trophy Points and Up',
        text: `The Elder looks at you and trembles slightly. “Never before, except in tales from the forgotten past, has one so young brought back so much. One day, Sagard, your name may be known throughout the Flanaess of all Oerth. It is with humble respect that I turn over the chieftainship of the tribe to you.”

As the Elder walks toward you, bearing the Sword of Steel, symbol of chieftainship, a surge of wild fury bubbles in your blood.
        
“I can accept no such prize,” you say, “for my fate is not to be tied to one tribe forever. I must roam the world as the wolf does, not stand in one place like the cow. Take these things I have brought to you and place them on the wall of honor, so that I shall be remembered.
        
“For tonight, I shall quaff with you, but when the sun rises I shall take my weapon and depart.”`
    },
    {
        section: 118,
        id: 'losing-to-the-frost-fighters',
        title: 'Losing to the Frost Fighters',
        text: `The Frost Fighters’ sharpened icicles blur in the frosty air. Backing up, you feel the ground slip from under your feet. You fall backward and slide down a long, snow-covered slope, the cold night wind whistling through your hair. As you fall, you realize you are descending to a deep valley. Suddenly, your head strikes something and all goes black.

Later, you feel a warm wind blowing on you. Groggy, you crawl to a mountain stream and drink of its fresh mineral waters before returning to a deep slumber. You regain **5 HP**.`,
        choices: [
            {
                btnText: 'Continue on your journey',
                sectionId: 'shadow-in-the-mist'
            }
        ],
        updates: {
            hp: 5
        }
    },
    {
        section: 119,
        id: 'eluding-the-poachers',
        title: 'Eluding the Poachers',
        text: `You dash across the ice. Near the center of it, you hear a loud crack. Turning to look behind you, you see the Poachers coming after you. As they step on the ice, you hear another loud crack. You realize that you are running across a frozen pool.

“Prepare to die, Ratikkan!” a voice calls. You hear another crack and then several loud splashes. Turning, you see the Poachers sinking under the broken ice. Summoning all of your strength and grace, you broadjump to the far side of the pool.
        
Arriving on the other side and skidding to a stop, you turn to see what has become of the Poachers. Only one head is above the water. He is frantically screaming, “For Grimluk’s sake, Ratikkan, save me!”
        
Before you can move a muscle, you see his head violently jerked under the water.`,
        choices: [
            {
                btnText: 'Save him',
                sectionId: 'saving-the-poacher'
            },
            {
                btnText: 'Continue on your journey',
                sectionId: 'closing-in-on-the-ice-dragon'
            }
        ]
    },
    {
        section: 120,
        id: 'saving-the-poacher',
        title: 'Saving the Poacher',
        text: `On a mission of mercy, you dive into the frozen lake. The freezing water chills you to the bone, and you see no trace of the Poachers. They have mysteriously vanished.

In the distance there is a glowing light. Thinking that the men will be there, you swim toward it. You cannot figure out where the men have gone, but you are intrigued with finding the source of the light.`,
        choices: [
            {
                btnText: 'Swim toward the light',
                sectionId: '/battle/guardian-of-the-river'
            }
        ]
    }
]

export default sections;