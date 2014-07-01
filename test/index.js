var Gaffa = require('gaffa'),
    ForEach = require('../'),
    Set = require('gaffa-set'),
    Text = require('gaffa-text'),
    gaffa = new Gaffa();

// Register used viewItems with gaffa
gaffa.registerConstructor(ForEach);
gaffa.registerConstructor(Set);
gaffa.registerConstructor(Text);

var joinedItems = new Text();
joinedItems.text.binding = '(apply (partial join " ") [items])';

var doubleValue = new Set();
doubleValue.source.binding = '(* [] 2)';
doubleValue.target.binding = '[]';

var forEachItem = new ForEach();
forEachItem.target.binding = '[items]';
forEachItem.actions.forEach = [doubleValue];

joinedItems.actions.load = [forEachItem];

// An example model
gaffa.model.set({
    items:[
        1,
        2,
        3
    ]
})

// Add the view on load.
window.onload = function(){
    gaffa.views.add([
        joinedItems
    ]);
};

// Globalise gaffa for easy debugging.
window.gaffa = gaffa;