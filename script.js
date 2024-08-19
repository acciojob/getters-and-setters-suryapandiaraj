//complete this code
class Person {
	Person(name, age){
		this.name = name
		this.age = age
	}
	function getName(){
		return this.name
	}
	function setAge(age){
		this.age = age
	}	
}

class Student extends Person {
	function study(){
		console.log(this.getName() + "is studying")
	}
}

class Teacher extends Person {
	function teach(){
		console.log(this.getName() + "is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
