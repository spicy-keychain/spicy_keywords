class keyword {
	constructor(kwname, kwcolor, kwbgcolor, kwicon) {
		//should probably do a map() attribute to define the color instead of manual input
		//will rewrite the code later
		this.name = kwname;
		this.color = kwcolor;
		this.bgcolor = kwbgcolor;
		this.icon = kwicon;
	}
}

let KeywordDictionary = new Map();
//misc
KeywordDictionary.set('difficulty check', new keyword('difficulty check', 'black','#9C9C77','')); 
KeywordDictionary.set('checks', new keyword('checks', 'black','#F4F177','')); 
KeywordDictionary.set('check', new keyword('check', 'black','#F4F177','')); 
KeywordDictionary.set('saving throws', new keyword('saving throws', 'black','#F4F177','')); 
KeywordDictionary.set('saving throw', new keyword('saving throw', 'black','#F4F177','')); 
KeywordDictionary.set('disadvantage', new keyword('disadvantage', 'black','#F6A2A2','')); 
KeywordDictionary.set('advantage', new keyword('advantage', 'black','#AAE170','')); 
//KeywordDictionary.set('ac', new keyword('ac', '#AE8F90','','')); //will not work without really good regex
//KeywordDictionary.set('dc', new keyword('dc', '','#9C9C77','')); //needs slight adjustment to regex
//conditions
KeywordDictionary.set('blinded', new keyword('blinded', '#E69D70','','')); //bad
KeywordDictionary.set('charmed', new keyword('charmed', '#E69D70','','')); //bad
KeywordDictionary.set('deafened', new keyword('deafened', '#E69D70','','')); //bad
KeywordDictionary.set('frightened', new keyword('frightened', '#E69D70','','')); //bad
KeywordDictionary.set('grappled', new keyword('grappled', '#E69D70','','')); //bad
KeywordDictionary.set('incapacitated', new keyword('incapacitated', '#E67470','','')); //danger
KeywordDictionary.set('invisible', new keyword('invisible', '#ABDBE5','','')); //good
KeywordDictionary.set('paralyzed', new keyword('paralyzed', '#E67470','','')); //danger
KeywordDictionary.set('petrified', new keyword('petrified', '#E67470','','')); //danger
KeywordDictionary.set('poisoned', new keyword('poisoned', '#E69D70','','')); //bad
KeywordDictionary.set('prone', new keyword('prone', '#E69D70','','')); //bad
KeywordDictionary.set('restrained', new keyword('restrained', '#E69D70','','')); //bad
KeywordDictionary.set('stunned', new keyword('stunned', '#E67470','','')); //danger
KeywordDictionary.set('unconscious', new keyword('unconscious', '#E67470','','')); //danger
//effects
KeywordDictionary.set('diseases', new keyword('diseases', '#B470C9','','')); 
KeywordDictionary.set('disease', new keyword('disease', '#B470C9','','')); 
KeywordDictionary.set('exhaustion', new keyword('exhaustion', '#B470C9','','')); 
KeywordDictionary.set('conditions', new keyword('conditions', '#B470C9','','')); 
KeywordDictionary.set('condition', new keyword('condition', '#B470C9','','')); 
//abilities
KeywordDictionary.set('ability', new keyword('ability', '#C3C86F','','')); 
KeywordDictionary.set('strength', new keyword('strength', '#C3C86F','','')); 
KeywordDictionary.set('dexterity', new keyword('dexterity', '#C3C86F','','')); 
KeywordDictionary.set('constitution', new keyword('constitution', '#C3C86F','','')); 
KeywordDictionary.set('intelligence', new keyword('intelligence', '#C3C86F','','')); 
KeywordDictionary.set('wisdom', new keyword('wisdom', '#C3C86F','','')); 
KeywordDictionary.set('charisma', new keyword('charisma', '#C3C86F','','')); 
