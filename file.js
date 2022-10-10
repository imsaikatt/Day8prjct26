let obj = {
    book1 : 'JavaScript',
    book2 : 'Python',
    book3 : 'Ruby',
    book4 : 'Go',
    type1 : 'languages',
    type2 :  'isRewading',
    type3 : 'dificulty',
    type4 : 'isFun',
    books : ['JavaScript',
    'Python',
    'Ruby',
    'Go'
    ],
    Java : true,
    Marks : 7,
    Python : true
}
var keys = Object.keys(obj);

var filtered = keys.filter(function(key) {
    console.log( obj[key])
});
