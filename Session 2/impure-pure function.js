//impure function
//impure hjælper med at ændre på ting uden for sin egen scope
/*
You cann't avoud impure function
const numbers=[1,2,3]
functtion addElementToArray(element){
	  numbers.push(element)
}
*/
//pure function
//pure function can avoid impure function
/*
functtion addElementToArray(array, element){
	return [...array, element]
}
*/