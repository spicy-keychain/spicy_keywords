const KeywordMap = KeywordDictionary;

const SpanID = "spicykeyword";

//scan recursively the node in search of our spicy keywords
function KeywordSearch(element, callback) {
    for (var c_i = element.childNodes.length; c_i-->0;) {
        var child = element.childNodes[c_i];
        if (child.nodeType==1) {
            KeywordSearch(child, callback);
        } else if (child.nodeType==3) {
			for (let [word, wordValues] of KeywordMap) {
				const pattern = RegExp(word, 'gi');
				var matches = [];
				var match;
				//iterate over each regex return values and push them to a new array
				while (match = pattern.exec(child.data))
					matches.push(match);
				//iterate over each regex match and apply callback function 
				for (var m_i = matches.length; m_i-->0;)
					callback.call(window, child, matches[m_i], word.length, wordValues.color, wordValues.bgcolor); //modified here
				
			}
        }
    }
}
//inserts a child span node for the keyword with new styling
function ModifiyStyling(node, match, wordOffset, editValueColor, editValueBGColor) { 
    var span = document.createElement('span');
    span.id = SpanID;
    span.style.color = editValueColor;
    span.style.backgroundColor = editValueBGColor; //modified here
    node.splitText(match.index + wordOffset);
    span.appendChild(node.splitText(match.index));
    node.parentNode.insertBefore(span, node.nextSibling);
}



const ObsConfig = {
  childList: true,
  subtree: true
  };

const ObsCallback = (Mutations) => {
  Mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        if (newNode.id == SpanID) {continue;}
        KeywordSearch(newNode, ModifiyStyling);
      }
    }
  });
}
const Observer = new MutationObserver(ObsCallback);

KeywordSearch(document.body, ModifiyStyling);

Observer.observe(document.body, ObsConfig);
