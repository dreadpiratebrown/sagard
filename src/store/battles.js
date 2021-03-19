const battles = [
    {
        section: 3,
        id: 'fighting-the-mountain-lion',
        title: 'Fighting the Mountain Lion',
        foes: [
            {
                name: "Mountain Lion",
                level: 2,
                hp: 10,
                icon: 'saber-toothed-cat-head.svg'
            }
        ],
        success: {
            text: "You have beaten the Mountain Lion",
            target: '/section/the-mountain-lions-cave'
        },
        failure: {
            text: "You are too badly wounded to continue",
            target: '/section/beaten-by-the-mountain-lion'
        },
        canFlee: true,
        flee: '/section/the-frost-fighters'
    },
    {
        section: 5,
        id: 'attacking-the-frost-fighters',
        title: 'Attacking the Frost Fighters',
        text: `You spring over the hill, shaking your spear. Never before have the Frost Fighters been
surprised by a human on a mountain trail. This gives you an attack advantage of 4 free rolls before your attack roll. The best strategy is to take out as many of them as possible before they get to strike, because every surviving Frost Fighter will counterattack before your next attack. You will find that, though they are ferocious in the attack, they quickly shatter when you hit them. You may _not_ flee the Frost Fighters.`,
        foes: [
            {
                name: 'Frost Fighter 1',
                level: 1,
                hp: 3,
                hold: 5,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 2',
                level: 1,
                hp: 3,
                hold: 5,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 3',
                level: 1,
                hp: 3,
                hold: 5,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 4',
                level: 1,
                hp: 3,
                hold: 5,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 5',
                level: 1,
                hp: 3,
                hold: 5,
                icon: 'ice-golem.svg'
            }
        ],
        success: {
            text: "You have defeated the Frost Fighters",
            target: '/section/the-wreckage-of-the-frost-fighters'
        },
        failure: {
            text: "You are too badly wounded to continue",
            target: '/section/losing-to-the-frost-fighters'
        }
    },
    {
        section: 6,
        id: 'fighting-the-frost-fighters-one-by-one',
        title: 'Fighting the Frost Fighters One by One',
        text: `You adopt a defensive stance in the crevasse. The Frost Fighters quickly sense your heat
and charge toward you. Fortunately, they can only strike you one at a time. You may _not_ flee the Frost Fighters.`,
        foes: [
            {
                name: 'Frost Fighter 1',
                level: 1,
                hp: 3,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 2',
                level: 1,
                hp: 3,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 3',
                level: 1,
                hp: 3,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 4',
                level: 1,
                hp: 3,
                icon: 'ice-golem.svg'
            },
            {
                name: 'Frost Fighter 5',
                level: 1,
                hp: 3,
                icon: 'ice-golem.svg'
            }
        ],
        oneByOne: true,
        success: {
            text: "You have defeated the Frost Fighters",
            target: '/section/the-wreckage-of-the-frost-fighters'
        },
        failure: {
            text: "You are too badly wounded to continue",
            target: '/section/losing-to-the-frost-fighters'
        }
    },
    {
        section: 13,
        id: 'striking-at-the-shadow',
        title: 'Striking at the Shadow',
        text: `You strike at the figure in the mist. Before discovering what the creature is, you strike again. The
creature strikes back with a barbed whip.

As the whip cracks out you realize that your opponent is a young girl about your age. Like you, she is a Ratikkan, and she is very pretty.

She strikes once; then you have the option of either breaking off the attack or continuing. You may _not_ flee from the Ratikkan Girl.`,
        foes: [
            {
                name: 'Ratikkan Girl',
                level: 1,
                hp: 10,
                icon: 'whip.svg'
            }
        ],
        event: {
            rounds: 1,
            text: 'Do you wish to break off the attack?',
            choices: [
                {
                    btnText: 'Break off',
                    target: '/section/breaking-off-the-attack'
                }
            ],
            closeBtn: 'Continue the attack'
        },
        success: {
            text: 'You have defeated the Ratikkan girl',
            target: '/section/defeating-the-ratikkan-girl'
        },
        failure: {
            text: 'You are too badly wounded to continue',
            target: '/section/losing-to-the-ratikkan-girl'
        }
    },
    {
        section: 28.1,
        id: 'fighting-the-medigian-traders',
        title: 'Fighting the Medigian Traders',
        text: `The Medigian Traders have the advantage and attack first!`,
        foes: [
            {
                name: 'Grizzled Trader',
                level: 1,
                hp: 12,
                icon: 'cowled.svg',
                goFirst: true
            },
            {
                name: 'Young Trader',
                level: 1,
                hp: 12,
                icon: 'cowled.svg',
                goFirst: true
            }
        ],
        success: {
            text: 'You have defeated the Medigian traders',
            target: '/section/beating-the-medigian-traders'
        },
        failure: {
            text: 'You are unconscious',
            target: '/section/the-face-in-the-mist'
        },
        canFlee: true,
        flee: '/section/fleeing-the-medigian-traders'
    },
    {
        section: 28.2,
        id: 'surprising-the-medigian-traders',
        title: 'Fighting the Medigian Traders',
        text: `You surprise the Medigian Traders and get 4 free attacks!`,
        foes: [
            {
                name: 'Grizzled Trader',
                level: 1,
                hp: 12,
                hold: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Young Trader',
                level: 1,
                hp: 12,
                hold: 5,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have defeated the Medigian traders',
            target: '/section/beating-the-medigian-traders'
        },
        failure: {
            text: 'You are unconscious',
            target: '/section/the-face-in-the-mist'
        },
        canFlee: true,
        flee: '/section/fleeing-the-medigian-traders'
    },
    {
        section: 33,
        id: 'breaking-free-of-the-cage',
        title: 'Breaking Free of the Cage',
        text: `Summoning all of your strength, you snap the lock that binds your cage. The stoic Medigian Trader looks
up but, fleet of foot, you somersault away from the blurring arc of his sword. Making for the woods, you jump over the other trader, who slowly awakens.

The night is dark, but a sliver of moonlight guides you into the woods. Close behind you, you hear one Medigian Trader yelling to the other. Looking over your shoulder, you see the awakened trader rise and reach for his bow. The first trader sill dogs your heels, screaming foreign curses after you.
        
You scramble over a rock, just in time to hear the hissing of an arrow as it passes overhead and cracks into a stout pine. You aren’t in the clear yet.
        
Before you stretches a broad glade. Your primitive senses scream in alarm. There is something unnatural about this place. Nevertheless, given the choice between possible death at the hands of whatever may be lurking in this strange area and certain death from the sharp weapons of the Medigian Traders, you press on.
        
As you run farther, a soft, growling rumble reaches your ears. You look and see nothing. Before you stands what appears to be a large fir tree. You run toward it. Suddenly, as if summoned by some demon, burning eyes light up near the top of the fir and ignite the scene with an unholy reddish glow.
        
In the light of the glowing eyes, you see that the fir is, in fact, a huge bear, nearly twenty feet in height. He lets out a horrifying roar and flashes his cruel white claws.
        
Your enemies stop in their tracks. Growling ursine curses, red fire burning in its eyes, the bear advances toward you. The battle has shifted. The two traders, who were once your enemies, are now your allies. The bowman hands you his sword. “For now, we are friends.” Then he raises his bow. You have no choice but to fight the Devil-Bear!`,
        foes: [
            {
                name: 'Devil-Bear',
                level: 5,
                hp: 30,
                icon: 'bear-face.svg'
            }
        ],
        allies: [
            {
                name: 'Trader 1',
                level: 1,
                hp: 10,
                icon: 'cowled.svg'
            },
            {
                name: 'Trader 2',
                level: 1,
                hp: 10,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have defeated the Devil-Bear',
            target: '/section/defeating-the-devil-bear'
        },
        failure: {
            text: 'You are too badly wounded to continue',
            target: '/section/vanquished'
        },
    },
    {
        section: 36,
        id: 'fighting-the-medigian-traders-2',
        title: 'Fighting the Medigian Traders',
        text: `You whisper to the Ratikkan woman, “I will fight them. In the meantime, you make your escape.” She
smiles, unafraid. In one mighty motion, you move your arm to crush the lock and dive toward the sleeping Medigian Trader. Somersaulting to him, you reach his sword before he can. Meanwhile, the trader standing watch charges you, shouting ancient oaths.

With surprise on your side, you strike first. For the first three rounds of combat, only the standing trader will fight back. Commencing with the fourth round, you will also fight the sleeping trader.`,
        foes: [
            {
                name: 'Watching Trader',
                level: 1,
                hp: 12,
                icon: 'cowled.svg'
            },
            {
                name: 'Sleeping Trader',
                level: 1,
                hp: 12,
                hold: 4,
                disableOnHold: true,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have defeated the Medigian Traders',
            target: '/section/crushing-the-medigian-traders'
        },
        failure: {
            text: 'You are too badly wounded to continue',
            target: '/section/losing-to-the-medigian-traders'
        },
        canFlee: true,
        flee: '/section/vanquished'
    },
    {
        section: 41,
        id: 'two-tehnites-in-the-mist',
        title: 'Two Tehnites in the Mist',
        text: `Two steps away from the shield, you look up. It is a trap. Two Tehnites stand in the mist, their weapons
drawn.`,
        foes: [
            {
                name: 'Tehnite 1',
                level: 2,
                hp: 8,
                icon: 'swordman.svg'
            },
            {
                name: 'Tehnite 2',
                level: 2,
                hp: 8,
                icon: 'swordman.svg'
            }
        ],
        success: {
            text: 'You have defeated the Tehnites',
            target: '/section/defeating-the-tehnites'
        },
        failure: {
            text: 'Your quest is terminated. Start over.',
            target: '/section/introduction'
        },
        canFlee: true,
        flee: '/section/fleeing-the-tehnites'
    },
    {
        section: 45,
        id: 'the-furred-snake',
        title: 'The Furred Snake',
        text: `The afternoon passes as you cross the long valley. Out of the corner of your eye, you see a soft fur
pelt of black and white. Thinking that it might be a small animal to cook for dinner, you creep slowly toward it. Suddenly it moves - not in the quick manner of a wolf or a raccoon, but in a slow, stealthy, coiling manner. Shuddering, you realize this is the rare and hideous Furred Snake!

The serpent rises from the ground, and its burning red eyes glare at you. You are too close to run away from this swift and deadly cross between reptile and mammal. You must fight it.`,
        foes: [
            {
                name: 'Furred Snake',
                level: 4,
                hp: 8,
                icon: 'snake-tongue.svg'
            }
        ],
        success: {
            text: "The Furred Snake is defeated",
            target: '/section/killing-the-furred-snake'
        },
        failure: {
            text: "Your quest is over. Start again.",
            target: '/section/introduction'
        }
    },
    {
        section: 48,
        id: 'the-crevasse',
        title: 'The Crevasse',
        text: `You venture ten feet into the crevasse. It is pitch dark and eerie. All you hear is the low moan of
wind rushing at you from the darkness beyond. There is a slight musky smell, as if the air has somehow become tainted inside the mountain. Further on, you enter a small chamber. It is dark, lit only by diffused light from outside. Leaning down, you strike your flint and steel and build a small fire. Suddenly, you hear the high-pitched scream of bats! They are weak fighters, but there are fifteen of them.`,
        foes: [
            {
                name: 'Bats',
                level: 1,
                hp: 15,
                icon: 'bat.svg'
            },
        ],
        success: {
            text: 'You have defeated the Bats',
            target: '/section/beating-the-bats'
        },
        failure: {
            text: 'You are finished. Your quest is over. Start again.',
            target: '/section/introduction'
        },
        canFlee: true,
        flee: '/section/the-valleys-end'
    },
    {
        section: 51,
        id: 'fighting-the-plumed-knight',
        title: 'Fighting the Plumed Knight',
        text: `You may _not_ flee from the Plumed Knight.`,
        foes: [
            {
                name: "Plumed Knight",
                level: 1,
                hp: 15,
                icon: 'elf-helmet.svg'
            }
        ],
        success: {
            text: "You have defeated the Plumed Knight",
            target: '/section/beating-the-plumed-knight'
        },
        failure: {
            text: "You are too badly wounded to continue",
            target: '/section/losing-to-the-plumed-knight'
        },
    },
    {
        section: 55,
        id: 'the-young-aerdian-warriors',
        title: 'The Young Aerdian Warriors',
        text: `Four young Aerdian Warriors are dashing toward you. One of them yells, “Ah, a young Ratikkan. He will
make a marvelous decoration at the end of my spear.”

You turn to fight. There are four of them and only one of you; however, as they are running, you get to strike first. It will be a hard fight. If your strength drops below 5 and the warriors appear strong, attempt to flee.`,
        foes: [
            {
                name: 'Warrior 1',
                level: 2,
                hp: 10,
                icon: 'light-helm.svg'
            },
            {
                name: 'Warrior 2',
                level: 2,
                hp: 10,
                icon: 'light-helm.svg'
            },
            {
                name: 'Warrior 3',
                level: 2,
                hp: 10,
                icon: 'light-helm.svg'
            },
            {
                name: 'Warrior 4',
                level: 2,
                hp: 10,
                icon: 'light-helm.svg'
            }
        ],
        success: {
            text: "You have defeated the Aerdian Warriors",
            target: '/section/beating-the-aerdian-warriors'
        },
        failure: {
            text: "You are too badly wounded to continue",
            target: '/section/wounded-by-the-aerdian-warriors'
        },
        canFlee: true,
        flee: '/section/fleeing-the-aerdian-warriors'
    },
    {
        section: 60,
        id: 'fighting-the-frusti-sage',
        title: 'Fighting the Frusti Sage',
        text: `Jerking the sword from your belt, you whirl around and face the Frusti Sage. He is a giant of a man
with a fiery red beard and a wild tangle of red hair which hangs down onto his furred cape and bare chest. In his hand is an enormous two-handed axe. A deep, bellowing laugh comes from his chest. “You are a fool, Ratikkan!”

He swings the axe. You dive away from its cutting arc. The savage blade cleaves a shelf, tumbling a pile of scrolls. He is tough; he is a Frusti Berserker. He has no regard for his own safety, and no armor. You may _not_ flee from the Frusti Sage.`,
        foes: [
            {
                name: 'Frusti Sage',
                level: 5,
                hp: 8,
                icon: 'battle-axe.svg'
            }
        ],
        success: {
            text: 'The Frusti Sage is vanquished. Your reward awaits you.',
            target: '/section/beating-the-frusti-sage'
        },
        failure: {
            text: 'You have failed in your mission. Start again, if you dare.',
            target: '/section/introduction'
        },
    },
    {
        section: 63,
        id: 'fighting-for-your-sword',
        title: 'Fighting for Your Sword',
        text: `The Frusti Sage is surprised when you lunge after him with the spear. You strike first. But now _he_
has the bonus of the Valkyrie’s sword. You may _not_ flee from the Frusti Sage.`,
        foes: [
            {
                name: 'Frusti Sage',
                level: 5,
                hp: 8,
                icon: 'battle-axe.svg'
            }
        ],
        success: {
            text: 'You have beaten the Frusti Sage.',
            target: '/section/beating-the-frusti-sage'
        },
        failure: {
            text: 'You have failed in your mission. Start again, if you dare.',
            target: '/section/introduction'
        },
    },
    {
        section: 67,
        id: 'fighting-the-ratikkan-boy',
        title: 'Fighting the Ratikkan Boy',
        text: `You draw your sword. Glanda steps over to a rock to watch. You are mildly annoyed that she would take such a passive role; nevertheless, you are forced to deal with another suitor. He is almost as tough as you.`,
        foes: [
            {
                name: 'Ratikkan Boy',
                level: 2,
                hp: 15,
                icon: 'barbarian.svg'
            }
        ],
        success: {
            text: 'You have defeated the Ratikkan boy',
            target: '/section/beating-the-ratikkan-boy'
        },
        failure: {
            text: "You have been humiliated by the Ratikkan boy",
            target: '/section/losing-to-the-ratikkan-boy'
        },
        canFlee: true,
        flee: '/section/fleeing-the-ratikkan-boy'
    },
    {
        section: 70.2,
        id: 'fighting-the-kobolds',
        title: 'Fighting the Kobolds',
        text: `The four Kobolds attack you. They are Level 1 fighters, but each one only requires two hits to kill.`,
        foes: [
            {
                name: 'Kobold 1',
                level: 1,
                hp: 2,
                icon: 'horned-reptile.svg',
                goFirst: true
            },
            {
                name: 'Kobold 2',
                level: 1,
                hp: 2,
                icon: 'horned-reptile.svg',
                goFirst: true
            },
            {
                name: 'Kobold 3',
                level: 1,
                hp: 2,
                icon: 'horned-reptile.svg',
                goFirst: true
            },
            {
                name: 'Kobold 4',
                level: 1,
                hp: 2,
                icon: 'horned-reptile.svg',
                goFirst: true
            }
        ],
        success: {
            text: 'The kobolds are dead',
            target: '/section/beating-the-kobolds'
        },
        failure: {
            text: 'You have failed to accomplish your mission. Start again.',
            target: '/section/introduction'
        },
        canFlee: true,
        flee: '/section/the-valleys-end'
    },
    {
        section: 73,
        id: 'the-ice-golem',
        title: 'The Ice Golem',
        text: `You must kill the Ice Golem in order to escape this place. If this is your first encounter with him, your chances for success are minimal; however, you may find in the mysterious room the resources with which to fight him. Finding the proper resources will take a great deal of cunning and insight, but for now your problem is simply slipping past him. In order to slip past the Ice Golem, you have to roll a 4.

If you are unsuccessful, the Ice Golem attacks you. He is a Level 5 fighter with 50 hit points. Remember, you have little chance of beating him.`,
        foes: [
            {
                name: 'Ice Golem',
                level: 5,
                hp: 50,
                icon: 'ice-golem.svg'
            }
        ],
        success: {
            text: 'The Ice Golem is shattered!',
            target: '/section/beating-the-ice-golem'
        },
        failure: {
            text: 'You have failed in your first mission. Start again.',
            target: '/section/introduction'
        },
        special: {
            type: 'roll',
            button: 'Attempt to slip past the Ice Golem',
            rollNeeded: [4],
            target: '/section/entering-the-ancient-structure',
            attackAfterRoll: false,
            failText: 'Your attempt failed'
        }
    },
    {
        section: 74,
        id: 'the-zokapers',
        title: 'The Zokapers',
        text: `You slide down the waterfall onto a field of ice. It is unnaturally cold here, even for the mountains of Ratik. The icy wind rustles through your hair as you speed through the blue darkness. Your heart pounds, for you have never traveled so quickly; should you run into an errant icicle, you will be impaled.

On the other side of a broad caven, you hit what appears to be another frozen waterfall and slide up it, just barely clearing it before losing your momentum. At the top of the second waterfall, you stop.
        
Standing on top of the second ridge, you peer around. Suddenly, you hear a speedy, swishing sound, and a voice calls to you.
        
“Death to those who would defy the Zokapers.” Out of the gloom appear two men. Thin rails of iron are attached to their boots, and in their hands are deadly barbed whips. They come at you with blinding speed.
        
You draw your sword from your belt and hold it up. As the Zokapers draw nearer, you see that they are small men with pale faces and dark hair that blows back in the wind. They wear strange-looking uniforms that appear to be made of ancient cloth that has been patched hundreds of times in the past centuries, as if handed down from man to man.

You may _not_ flee the Zokapers.`,
        foes: [
            {
                name: 'Zokaper 1',
                level: 1,
                hp: 8,
                icon: 'whip.svg'
            },
            {
                name: 'Zokaper 2',
                level: 1,
                hp: 8,
                icon: 'whip.svg'
            }
        ],
        success: {
            text: 'You have defeated the Zokapers',
            target: '/section/beating-the-zokapers'
        },
        failure: {
            text: 'You have failed in your first mission. Start again.',
            target: '/section/introduction'
        },
    },
    {
        section: 79,
        id: 'the-great-white-beast',
        title: 'The Great White Beast',
        text: `Your hunger sated, you proceed down the widest of the labyrinthine corridors before you.

Engraved on the wall next to each cage are Gondorian runes. Near the runes are artistic depictions of animals. Some of them are ancient and hideous, unlike anything you have seen before. Other paintings depict familiar animals. On one wall, you stop to admire a lifelike diorama of a massive black and white striped tiger with long, curling teeth protruding from its muzzle.
        
You thank Telchur that you encountered this beast in death!
        
Peering into the cage to inspect its bones, you hear a loud growl and realize that this beast is alive! Primitive instinct sizzles, and you draw your sword. The beast lunges!
        
It is an arctic Snow Tiger - a deadly foe.`,
        foes: [
            {
                name: 'Snow Tiger',
                level: 3,
                hp: 14,
                icon: 'tiger-head.svg'
            }
        ],
        success: {
            text: 'You have defeated the Snow Tiger',
            target: '/section/beating-the-snow-tiger'
        },
        failure: {
            text: 'You have failed in your first mission. Start again.',
            target: '/section/introduction'
        },
        canFlee: true,
        flee: '/section/fleeing-the-snow-tiger'
    },
    {
        section: 84,
        id: 'fighting-the-yeti',
        title: 'Fighting the Yeti',
        text: `You have never spoken to the two Men in White, nor do you know anything about them, but you may be bound to eternity with them. You and the Men in White strike first. You may _not_ flee the Yeti.`,
        foes: [
            {
                name: 'Yeti',
                level: 4,
                hp: 35,
                icon: 'sasquatch.svg'
            }
        ],
        allies: [
            {
                name: 'Man in White 1',
                level: 2,
                hp: 10,
                icon: 'cowled.svg'
            },
            {
                name: 'Man in White 2',
                level: 3,
                hp: 20,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the Yeti',
            target: '/section/defeating-the-yeti'
        },
        failure: {
            text: 'You may fight no more',
            target: '/section/killed-in-the-ice-kingdom'
        },
    },
    {
        section: 87,
        id: 'the-man-in-white',
        title: 'The Man in White',
        text: `As you step up to the dead Yeti, the remaining Man in White rises from the ground. “That pelt is mine!”

With that, he jumps up and attacks you, wielding his knife. Anger and desire drive him toward you. No matter how damaged or undamaged he was in the last conflict, he is now a Level 3 fighter with 8 HP.
        
You may flee the Man in White, but it will mean that you lose the trophy.`,
        foes: [
            {
                name: 'Man in White',
                level: 3,
                hp: 8,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the Man in White',
            target: '/section/after-the-yeti-battle'
        },
        failure: {
            text: 'You may fight no more',
            target: '/section/killed-in-the-ice-kingdom'
        },
        canFlee: true,
        flee: '/section/fleeing-the-men-in-white'
    },
    {
        section: 88,
        id: 'the-men-in-white',
        title: 'The Men in White',
        text: `You rise to inspect the Yeti’s pelt. Suddenly, the two Men in White jump for you. “You will have that pelt over our dead bodies.” The two men stagger to their feet. Anger has merged with desire in their fetid souls.

You can either concede the Yeti’s pelt to them, or fight them for it.`,
        foes: [
            {
                name: 'Man in White 1',
                level: 2,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Man in White 2',
                level: 3,
                hp: 4,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the Men in White',
            target: '/section/after-the-yeti-battle'
        },
        failure: {
            text: 'You may fight no more',
            target: '/section/killed-in-the-ice-kingdom'
        },
        canFlee: true,
        flee: '/section/fleeing-the-men-in-white'
    },
    {
        section: 96,
        id: 'the-guardian-of-the-river',
        title: 'The Guardian of the River',
        text: `Suddenly, you see the flickering of a scaly tail, then the jaws, razor-sharp teeth, and glowing eyes of some kind of massive River Monster. It lunges toward you, and you dodge. It misses, but you spin in the swirling water after its attack. There is no going back.

The River Monster is a formidable enemy. Once it has sensed you, it will not break off the fight until either you or it is dead, or until you escape.
        
The only way to evade the River Monster is to swim past it. To do this, you will have to roll a 4 at the beginning of any turn. If you fail to get a 4, proceed with your turn normally.`,
        foes: [
            {
                name: 'River Monster',
                level: 4,
                hp: 25,
                icon: 'croc-jaws.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the River Monster',
            target: '/section/beating-the-river-monster'
        },
        failure: {
            text: 'Your mission is terminated',
            target: '/section/killed-in-the-ice-kingdom'
        },
        special: {
            type: 'roll',
            button: 'Attempt to evade the River Monster',
            rollNeeded: [4],
            target: '/section/fleeing-the-river-monster',
            attackAfterRoll: true,
            failText: 'Your attempt to evade failed'
        }
    },
    {
        section: 100,
        id: 'fighting-the-zokapers',
        title: 'Fighting the Zokapers',
        text: `The Zokapers charge. Individually, they would be easy prey, but four at a time will be tough. You may _not_ flee the Zokapers.`,
        foes: [
            {
                name: 'Zokaper 1',
                level: 1,
                hp: 8,
                icon: 'cowled.svg'
            },
            {
                name: 'Zokaper 2',
                level: 1,
                hp: 8,
                icon: 'cowled.svg'
            },
            {
                name: 'Zokaper 3',
                level: 1,
                hp: 8,
                icon: 'cowled.svg'
            },
            {
                name: 'Zokaper 4',
                level: 1,
                hp: 8,
                icon: 'cowled.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the Zokapers',
            target: '/section/defeating-the-zokapers'
        },
        failure: {
            text: 'You have failed',
            target: '/section/killed-in-the-ice-kingdom'
        }
    },
    {
        section: 105,
        id: 'dashing-for-your-life',
        title: 'Dashing for Your Life',
        text: `Leaving the Teknikans to fend for themselves, you turn and run down the long corridor. As you run, the cracking sound grows louder and louder. You realize that this sound comes from the massive sheets of ice on the walls overhead and on the ground below you, cracking and falling. When you killed the Ice Dragon, the mysterious force that cooled this ancient building was destroyed.

A warm wind blows through the corridors. Already, a small puddle of water floods the corridor. From the gloomy depths of the place come the shrill cries of hundreds of animals. In the distance, you see their small, terrified forms running as they would from a fire demon. A lone white squirrel chirps at you, almost accusingly, as it skitters past.
        
Dashing along, you come to the main corridor through which you entered. Now the field of ice is soft and mushy. Sloshing along, you see the gate where the Ice Golem stood. It is your only way out, and you charge toward it.
        
Passing through the gate, you skid to a stop. The bridge, which collapsed as you came across, is still broken. The far ends seem to look tauntingly at you. Thinking that you may be able to jump the bridge, you back up and run straight into something hard.
        
Turning, you see the Ice Golem leering down at you. He is not nearly as formidable as he was the last time you saw him, for already he is beginning to melt and deform. Nevertheless, he is still a dangerous opponent. Your only hope is to defeat him in combat.`,
        foes: [
            {
                name: 'Ice Golem',
                level: 4,
                hp: 25,
                icon: 'ice-golem.svg'
            }
        ],
        success: {
            text: 'You have successfully defeated the Ice Golem',
            target: '/section/shattered-ice'
        },
        failure: {
            text: 'You may fight no more',
            target: '/section/icicle-teeth'
        }
    },
    {
        section: 109,
        id: 'rematch-with-the-ice-golem',
        title: 'Rematch with the Ice Golem',
        foes: [
            {
                name: 'Ice Golem',
                level: 5,
                hp: 50,
                icon: 'ice-golem.svg'
            }
        ],
        allies: [
            {
                name: 'Teknikan 1',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Teknikan 2',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Teknikan 3',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Teknikan 4',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Teknikan 5',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
            {
                name: 'Teknikan 6',
                level: 1,
                hp: 5,
                icon: 'cowled.svg'
            },
        ],
        success: {
            text: 'You have successfully defeated the Ice Golem',
            target: '/section/beating-the-ice-golem-2'
        },
        failure: {
            text: 'You may fight no more',
            target: '/section/icicle-teeth'
        }
    }
]

export default battles;