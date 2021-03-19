# sagard

In 1985, Gary Gygax and Flint Dille published "Sagard the Barbarian #1 - The Ice Dragon". In 1993, my family moved into a rented house in Timonium, MD, and I found a copy of "Sagard the Barbarian #2 - the Green Hydra" in the basement. I loved it.

"Sagard the Barbarian" is a series of solo RPG books in the "choose your own adventure" style. You read along, make choices, fight battles, win trophies, and try to stay alive. Sometimes this is not the easiest thing to do.

When I learned VueJS, I needed a project to make, to strenghten my skills. I remembered the Sagard books and went looking for them, and lo and behold, I found them on the [Home of the Underdogs](http://www.homeoftheunderdogs.net/). I decided to see if I could adapt the first book to the computer age using Vue. Here is my attempt.

Note: I claim no ownership over the Sagard content. IANAL, but I assume the copyright still stands since the books are less than 30 years old, even though they're out of print. If there is a copyright dispute, I'll happily take this down and write my own book.

## Install

```
npm install
```

### Run

```
npm run serve
```

### Roadmap

V 0.1 - complete

To Do:

- Save current section in local storage so users can come back to it later. Alternatively: add auth functionality?
- Put the story and battle content in a database and use fetch calls to retrieve it. Right now it's all loaded in two static JSON files and 170K of JSON feels like a lot.
- Prevent page refresh from resetting battles and multiplying XP gains.
- Write a more robust event engine so there aren't so many singleton listeners. The goal is to have a text game engine that can use any story and battle data, rather than a discrete application per book. Note: this may not be possible. Since the writers could put literally any conditions in the book, it would be up to the reader to follow the instructions. I'll know better once I start on Book 2.
- Better icons for battles.
- Better battle UI.
- Annotations. The writing is, how do you say? Ah yes. Not so good. I want to add my own comments & criticisms in an unobtrusive way.
- Responsive styles so it works on phones and other small devices.

### Contribute

Open an issue or submit a PR.

### License

MIT © Joshua Brown 2021
