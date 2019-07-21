const baseURL = "http://www.dnd5eapi.co/api/classes/"
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('submit');


//RESULTS SECTION
const section = document.querySelector('section');
const classDesc = document.getElementById('classDesc');

searchForm.addEventListener('submit', fetchResults); 


function fetchResults(e) {
    e.preventDefault();
    url = baseURL + searchTerm.value;
    console.log(url);

    fetch(url)
    .then(function(result) {
        return result.json();
    }) .then (function(json) {
        displayResults(json);
    });
}

function displayResults(json) {
    let classInfo = json;
    console.log(classInfo);
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    for (let i=0; i < 1; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('span');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let link = document.createElement('a');

            // let current = classInfo[1];
           

            article.textContent = "Class -- ";
            for (let a = 0; a < classInfo.name.length; a++) {
                let span1 = document.createElement('span');
                span1.textContent += classInfo.name[a]; 
                article.appendChild(span1);
            }

            para1.textContent = `Hit Die -- d${classInfo.hit_die}`;
        
           
            // para3.textContent = "Saving Throws: "
            para2.textContent = "Weapon, Armor, or Kit Proficiencies --  ";
            for (let a = 0; a < classInfo.proficiencies.length; a++) {
                let span1 = document.createElement('span');
                span1.textContent += classInfo.proficiencies[a].name + ', ';
                para2.appendChild(span1);
            }
 
            para3.textContent = "Saving Throws --  ";
            for (let a = 0; a < classInfo.saving_throws.length; a++) {
                let span1 = document.createElement('span');
                span1.textContent += classInfo.saving_throws[a].name + ', ';
                para3.appendChild(span1);
            }      
            
        
            
            link.href = classInfo.web_url;

            article.appendChild(heading);
            article.appendChild(para1);
            article.appendChild(para2);
            article.appendChild(para3);
            section.appendChild(article);

            if (searchTerm.value === "barbarian") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Barbarian is a fierce warrior of primitive background who can enter a battle rage. They are for people who enjoy combat strategy and high-adrenaline fights. They rely on instinct, pick fights and often put themselves in risky situations."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "bard") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Bard is an inspiring magician whose power echoes the music of creation. They are for people who love to role-play and enjoy talking their way out of problems. They’re a good class for natural-born storytellers who don’t play D&D for the combat."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "cleric") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Cleric is a priestly champion who wields divine magic in service of a higher power. They are for people who love to have big goals and wield big weapons. They lean on D&D’s religion system to explore mortality and strong incentives for or against killing."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "druid") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Druid is a priest of the Old Faith, wielding the powers of nature—moonlight and plant growth, fire and lightning—and adopting animal forms. They are for people who love animals, enjoy resourceful, magic-based solutions to complicated questions and want to stand up for what they believe in."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "fighter") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Fighter is amaster of martial combat, skilled with a variety of weapons and armor. They are for players who enjoy experimenting with different combat styles and dealing lots of damage. Fighters are diverse—they can wield all sorts of weapons and come from all sorts of backgrounds—so they’re great for players who want to carve out their own path and not great for players who easily fall into role-playing ruts."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "monk") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Monk is a master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection. They are are for players who enjoy combining magic and physical strength, fighting only when it’s worth it, following cultural traditions and coming up with full and involved backstories."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "paladin") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Paladin is a holy warrior bound to a sacred oath. They are for players who want to have lots of HP and risk themselves to selflessly protect their allies. They’re good for people who want to role-play a crusader against evil and deal with questions of morality."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "ranger") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Ranger is a warrior who uses martial prowess and nature magic to combat threats on the edges of civilization. They are for tactically-minded players who might enjoy role-playing loners, fighting from a distance and using the game’s landscape to their advantage."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "rogue") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Rogue is a scoundrel who uses stealth and trickery to overcome obstacles and enemies. They are are for people who want to be the first to smell danger (i.e., sense traps), steal things, fight using precision and planning rather than brute strength and blur moral lines in role-play."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "sorcerer") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Sorcerer is a spellcaster who draws on inherent magic from a gift or bloodline. They are for people who may want to act impulsively, wield enormous power, weave an intricate backstory and customize their character’s personality based off a list of spells."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "warlock") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Warlock is a wielder of magic that is derived from a bargain with an extraplanar entity. They are for players who enjoy learning about D&D’s demons and interplanar beings, harboring secrets, and wielding great power."
                span.classList.add("classDesc");
                section.appendChild(span);
            } else if (searchTerm.value === "wizard") {
                let span = document.createElement('span');
                span.textContent = "Class Description -- A Wizard is a scholarly magic-user capable of manipulating the structures of reality. They are for players who enjoy appearing intelligent (not necessarily being intelligent), piecing together repertoires of spells, and offering knowledge on a variety of topics"
                span.classList.add("classDesc");
                section.appendChild(span);
            }
            
        }
    }


    



