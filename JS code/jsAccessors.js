//get accessor:
const personGet = {
    name: "Joe",
    age: 65,
    languageGet: "en",

    //get accessor:
    get langGet() {
        return this.languageGet;
    }
};

console.log(personGet.langGet);


//set accessor:
const personSet = {
    name: "Joe",
    age: 65,
    language: "",

    //set accessor:
    set lang(lang) {
        this.language = lang;
    }
};
personSet.lang = "en";

console.log(personSet.language);