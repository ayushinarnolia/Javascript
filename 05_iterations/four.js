const myObj={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//forin
for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`);
}

//for in can by used in array but it gives the key/index value not the value in the array but we use arr[key]

//for in cannot be used in map as map isnt iterable!