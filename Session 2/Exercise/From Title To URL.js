function urlSlug(title) {
    return title.toLowerCase().split(/\W/).filter(x => x !== "").join("-")
    //join metoden laver et nyt array ud fra det gamle array, og bruger - som separator

    //trim fjerner whitespace fra begge ender af en string
    //split metoden laver et nyt array ud fra en string
    //toLowerCase laver alle bogstaverne i en string om til små bogstaver
    //split(/\W/) laver et nyt array ud fra en string, og fjerner alle non-word characters (alle tegn som ikke er bogstaver eller tal)

    //    return title.toLowerCase().trim().split(" ").join("-")

}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
// → a-mind-needs-books-like-a-sword-needs-a-whetstone