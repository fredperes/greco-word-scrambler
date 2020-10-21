import ClipboardJS from 'clipboard'

const destination = document.querySelector(".destination")
const origin = document.querySelector(".origin")
const process = document.querySelector(".process")

const slider = document.querySelector(".slider")
let syllableCount

const getSliderValue = () => {
    slider.closest('.syllableCount').querySelector('span').textContent = slider.value+' sílaba'+(slider.value > 1 ? 's' : '')
    syllableCount = slider.value
}
slider.addEventListener('change', getSliderValue)
getSliderValue()

const clipboard = new ClipboardJS('.btn--copy');
clipboard.on('success', (e) => {
    e.trigger.classList.add('success')
})
clipboard.on('error', (e) => {
    e.trigger.classList.add('error')
})

const wordSections = {
    cultura: [
        ["A","ba","po","ru"],
        ["A","cli","ma","ção"],
        ["An","gé","li","ca"],
        ["A","ni","ta","Mal","fa","tti"],
        ["An","tro","po","fa","gia"],
        ["Ar","ri","go"],
        ["Ar","te"],
        ["Au","gus","ta"],
        ["Ava","nhan","da","va"],
        ["Ba","la","da"],
        ["Ba","ta","ta"],
        ["Bat","man"],
        ["Bi","bi"],
        ["Bo","tâ","ni","co"],
        ["Ca","lix","to"],
        ["Cam","pos"],
        ["Ce","cí","lia"],
        ["Chá"],
        ["Con","cre","ta"],
        ["Con","so","la","ção"],
        ["Co","pan"],
        ["Co","rin","thi","ans"],
        ["Cri","o","lo"],
        ["Gui","a","cu","í"],
        ["Hi","gi","e","nó","po","lis"],
        ["I","bi","ra","pu","era"],
        ["In","de","pen","dên","cia"],
        ["I","pi","ran","ga"],
        ["I","tá","lia"],
        ["I","ta","pu","ra"],
        ["Ju","ven","tus"],
        ["La","er","te"],
        ["Lar","go"],
        ["Le","nk"],
        ["Li","ber","da","de"],
        ["Li","na","Bo","Bar","di"],
        ["Li","ra","Pau","lis","ta","na"],
        ["Luz"],
        ["Ma","ri","a","na"],
        ["Mar","ti","ne","lli"],
        ["Ma","ta","raz","zo"],
        ["Mo","der","nis","ta"],
        ["Mo","e","ma"],
        ["Mo","o","ca"],
        ["Mu","tan","tes"],
        ["O","be","lis","co"],
        ["O","ca"],
        ["Os","car","Frei","re"],
        ["Pa","ca","em","bu"],
        ["Pa","gu"],
        ["Pal","mei","ras"],
        ["Pat","teo"],
        ["Pau","li","céia"],
        ["Pau","lis","ta‎"],
        ["Per","di","zes"],
        ["Pig","na","ta","ri"],
        ["Pi","na","co","te","ca"],
        ["Pin","hei","ros"],
        ["Pom","peia"],
        ["Por","tu","gue","sa"],
        ["Re","bou","ças"],
        ["Re","pú","bli","ca"],
        ["Re","ti","ran","tes"],
        ["Ri","ta"],
        ["Ro","ck"],
        ["Roo","se","velt"],
        ["San","ta"],
        ["Sé"],
        ["Su","ma","ré"],
        ["Tel","les"],
        ["Ti","tãs"],
        ["To","mie","Oh","ta","ke"],
        ["Tria","non"],
        ["Tu","cu","ru","vi"],
        ["Vi","lla","Lo","bos"],
        ["Vol","pi"],
        ["Xê","pa"]
    ],
    bioma: [
        ["A","na","na","í"],
        ["An","do","ri","nha"],
        ["A","ra","pon","ga"],
        ["A","rau","cá","ria"],
        ["A","ri","can","du","va"],
        ["A","sa","bran","ca"],
        ["A","tlân","ti","ca"],
        ["A","vo","an","te"],
        ["Bei","ja","flor"],
        ["Bem","te","vi"],
        ["Be","sou","rin","ho"],
        ["Bi","co","de","la","cre"],
        ["Bi","guá"],
        ["Bi","gua","tin","ga"],
        ["Bra","sil"],
        ["Cam","ba","ci","ca"],
        ["Ca","ná","rio"],
        ["Ca","ra","ca","rá"],
        ["Car","deal"],
        ["Cer","ra","do"],
        ["Co","lei","rin","ho"],
        ["Co","ru","ja"],
        ["Gar","ça"],
        ["Gua","ra","pi","ran","ga"],
        ["I","pê","A","mar","elo"],
        ["Ipi","ran","ga"],
        ["I","re","rê"],
        ["I","to","ro","ró"],
        ["Ja","ça","nã"],
        ["Ja","cu","Gua","çu"],
        ["Jo","ão","de","bar","ro"],
        ["Ju","ru","vi","ara"],
        ["La","va","dei","ra","Mas","ca","ra","da"],
        ["Mar"],
        ["Ma","ra","ca","nã","Pe","que","na"],
        ["Ma","ri","qui","ta"],
        ["Mar","tim"],
        ["Ma","ta"],
        ["Nei","nei"],
        ["Pal","mei","ra","Je","ri","vá"],
        ["Pa","pa","gai","o"],
        ["Pa","vão"],
        ["Pei","ti","ca"],
        ["Pe","ri","qui","tão","Ma","ra","ca","nã"],
        ["Pi","ca","Pau"],
        ["Pin","tas","sil","go"],
        ["Pi","tan","guei","ra"],
        ["Pi","ti","gua","ri"],
        ["Pomb","o"],
        ["Qua","res","mei","ra"],
        ["Que","ro","Que","ro"],
        ["Qui","ri","Qui","ri"],
        ["Ri","bei","rão"],
        ["Ri","sa","din","ha"],
        ["Ro","lin","ha"],
        ["Sa","biá"],
        ["Saí"],
        ["San","ha","çu"],
        ["Sa","va","cu"],
        ["Ser","ra"],
        ["So","co","zin","ho"],
        ["Sui","ri","ri"],
        ["Ta","man","dua","teí"],
        ["Tan","ga","rá"],
        ["Te","sou","ra"],
        ["Ti","co","Ti","co"],
        ["Tiê"],
        ["Ti","e","tê"],
        ["Ti","ri","ba"],
        ["Trin","ca","Fer","ro"],
        ["Tu","ca","no"],
        ["Tu","im"]
    ]
}

Object.entries(wordSections).forEach(entry => {
    const [key, value] = entry
    let originSection = document.createElement('aside')
    originSection.textContent = key
    origin.appendChild(originSection)
    value.forEach(word => {
        let originWord = document.createElement('div')
        originWord.className = 'container'
        originWord.innerHTML = `<span class="word" data-syllables='${JSON.stringify(word)}'>${word.join('')}</span>`
        origin.appendChild(originWord)
    })
})

const updateActions = () => {
    [destination, origin, process].forEach(section => {
        const sectionActions = section.closest('.section').querySelector('.actions')
        sectionActions.classList.remove('enabled')
        if (section.textContent.trim().length) sectionActions.classList.add('enabled')
    })
}
updateActions()

const words = origin.querySelectorAll(".word")

let isAnimating = false; // bool to prevent competing animations (clicking a word before the previous word has finished moving)

// FLIP technique animation (First Last Invert Play)
const flip = (word, settings) => {
	// calculate the difference in position between where the word started and where it ended (First - Last = Invert)
	const invert = {
		x: settings.first.left - settings.last.left,
		y: settings.first.top - settings.last.top
	};

	// do the animation (Play) from the original (Invert) position to the final current position
	let animation = word.animate(
		[
			{ transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)` },
			{ transform: `scale(1,1) translate(0, 0)` }
		],
		{
			duration: 300,
			easing: "ease"
		}
	);

	// signify that animation has completed
	animation.onfinish = () => (isAnimating = false);
};

// move the word from the origin to the destination
const move = (word) => {
	const id = Math.random(); // random number used to link the word to its container (used in the putback function)
	const container = word.closest(".container"); // the selected word's container element
	let rect = word.getBoundingClientRect(); // selected word's DOM rect
	let first, last; // containers for the initial and final (First and Last) positions of the element

	isAnimating = true; //signify an animation has started (or is about to)

	// give both the container and the word a data-id (used in the putback function) (using data-id and not a var because you can query for a data-attribute)
	container.dataset.id = id;
	word.dataset.id = id;

	// set the container to the heighth width of the word (so it stays visible when empty)
	container.style.height = `${word.offsetHeight}px`;
	container.style.width = `${word.offsetWidth}px`;

	// assign the initial top/left px values of the word -> move the word to the destination -> recaculate the the word's DOM rect in new position -> assign the final top/left values
	first = { top: rect.top, left: rect.left };
	destination.insertAdjacentElement("beforeend", word);
	rect = word.getBoundingClientRect();
	last = { top: rect.top, left: rect.left };

	// send word, and its caculated vales to the flip funciton
    flip(word, { first, last });
};

const putback = (word) => {
	const id = word.dataset.id; // get the ID of the current word
	const container = origin.querySelector(`[data-id="${id}"]`); // query for the container w/ the matching ID
	const siblings = [...destination.querySelectorAll(".word")].filter(
		(sib) => sib !== word
	); // find the other word elements in the destination so we can animate them when the selected word is put back

	let rect = word.getBoundingClientRect(); // selected word's DOM rect
	let first, last; // containers for the initial and final (First and Last) positions of the element

	isAnimating = true; //signify an animation has started (or is about to)

	first = { top: rect.top, left: rect.left }; // assign the initial top/left px values

	// get the initial top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		// I am assigning this value as a property of the element object because trying to keep a
		// variable linked to this element inside a loop that we can use later  in a different loop
		// would be a real big pain. Best practice is not to modify objects/classes you don't own,
		// so to be safe and avoid overwriting an existing property value (ele.first or ele.last)
		// I am prefixing the property name with __
		sib.__first = { top: rect.top, left: rect.left };
	});

	container.insertAdjacentElement("beforeend", word); //move the word from the destination back to its original container

	rect = word.getBoundingClientRect(); // selected word's new DOM rect
	last = { top: rect.top, left: rect.left }; // assign the final top/left px values

	// get the final top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		sib.__last = { top: rect.top, left: rect.left };
	});

	flip(word, { first, last }); // animate the word

	siblings.forEach((sib) => flip(sib, { first: sib.__first, last: sib.__last })); // animate the siblings

	// clean up the junk we added during the move function()
	container.style.height = "";
	container.style.width = "";
	container.removeAttribute("data-id");
	word.removeAttribute("data-id");
};

// add a conditional eventListener to each word
words.forEach((word) => {
	const event = () => {
		if (isAnimating) return; // if we already have an animation playing, don't let the user start a new one
        word.closest(".container") ? move(word) : putback(word); // decide if we should use the move() or putback() functions based on the word's current location
        updateActions()
	};

	word.addEventListener("mouseup", event);
	word.addEventListener("touchend", event);
})

const clearDestination = () => {
    words.forEach((word) => {
        if (word.closest(".container")) return false
        putback(word)
    })
    process.querySelector('.result').innerHTML = ''
    updateActions()
}
document.querySelector('.btn--clear').addEventListener('click', clearDestination)

const randomiseWords = (e) => {
    e.preventDefault()
    clearDestination()
    let randomWords = remixArray([...document.querySelectorAll('.container')])
    randomWords.length = 2
    randomWords.forEach( container => move(container.querySelector('.word')) )
    // let wordCount = 0;
    // while (wordCount < 2) {
    //     words.forEach((word) => {
    //         if (wordCount >= 2) return false
    //         if (!word.closest(".container")) return false
    //         if (Math.random() > 0.9) { move(word); wordCount += 1; }
    //     })
    // }
    updateActions()
}
document.querySelector('.btn--random').addEventListener('click', (e) => randomiseWords(e) )

const addAllWords = (e) => {
    e.preventDefault()
    clearDestination()
    document.querySelectorAll('.container').forEach( container => move(container.querySelector('.word')) )
    updateActions()
}
document.querySelector('.btn--all').addEventListener('click', (e) => addAllWords(e) )

const remixArray = (array) => {
    return array
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const shuffleWord = () => {
    // let wordLength = {min: 2, max: 1}
    let allSyllables = []
    destination.querySelectorAll('.word').forEach(word => {
        const wordSyllables = JSON.parse(word.dataset.syllables)
        allSyllables = [...allSyllables, ...wordSyllables]
        // wordLength.min = Math.min(wordLength.min, wordSyllables.length)
        // wordLength.max = Math.max(wordLength.max, wordSyllables.length)
    })
    while (allSyllables.length < syllableCount) allSyllables = [...allSyllables, ...allSyllables]
    let newWord = remixArray(allSyllables)
    // newWord.length = Math.floor(wordLength.min + (Math.random() * (wordLength.min - wordLength.max)))
    newWord.length = syllableCount
    newWord = newWord.join('').toLowerCase()
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    process.querySelector('.result').textContent = newWord
    return newWord
}

const needsReshuffle = () => {
    let willNeed = false
    destination.querySelectorAll('.word').forEach(word => {
        if (word.textContent.toLowerCase() == process.querySelector('.result').textContent.toLowerCase()) {
            willNeed = true
        }
        if (destination.querySelectorAll('.word').length <= 1 && JSON.parse(word.dataset.syllables).length <= 1) willNeed = false
    })
    return willNeed
}

const sortear = function() {
    var counter = 1;

    (function foo() {
        shuffleWord()
        if (counter < 10 || needsReshuffle() ) {
            counter++;
            setTimeout(foo, 50);
        }
    })();
}

const remixDestination = () => {
    sortear()
    document.querySelector('.btn--copy').className = 'btn btn--copy'
    updateActions()
}

document.querySelector('.btn--remix').addEventListener('click', remixDestination)