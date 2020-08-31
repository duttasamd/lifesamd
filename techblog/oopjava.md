## Object Oriented Programming tutorial using Java and a capstone project.
<br />
Here we learn the basics of Object Oriented Programming assuming previous experience in programming in C like languages. We use Java as the language of choice. The tutorial assumes familiarity with syntax though the first chapter gives an overview of the basic syntax in Java.

---


### CHAPTER 1 - Syntax Cheatsheet


#### 1.0 Comments

Single line comments in Java start with ```//```. Multi-line comments should be wrapped between ```/*``` and ```*/```
###### Example :

```java
// this is a single line comment

/* This is a
multi line
comment */
```

#### 1.1 Classes And Objects
##### (Later in more detail)
Classes are the encapsulations which contain almost all of the code in a java program. They can be thought of as **blueprints** for creating **objects**.
Before building apartments, we plan the floor design. How big a room should be, how one room connects to the other, what purpose each room serves etc. All this information is stored in a 'blueprint' which can be used to actually build multiple such apartments with same specifications. 
Classes work in a similar way. They store information of the properties of an object (class/instance variables) and it's behavior (methods).

**Objects** are instantiations of a class. Analogous to the brick and mortar apartments built to a specification. They are simply data in the heap memory of the computer. Objects are not directly accessible to the developer. They are interacted with, using a 'reference variable'.
More on this later.

###### Example :

```java
class Dog {         //class declaration
	int numLegs; 	//class variable (property)
	String name;	//declaration [see 1.2]
}
```

```java
class Test {         
	Dog dog = new Dog();
	/* new Dog() creates an instance of the class 
	Dog and stores it in the heap memory.
	It's reference is then assigned to a 
	reference variable dog of data type Dog */
}
```


#### 1.2 Variable declaration and assignment

```
<Type> <name>;
```

###### Examples :
```java
int exampleNumber;
String exampleString;
float exampleFloat;
double exampleDouble;
```

Variables can be declared and assigned a value in the same line or in another line later.
'=' is the assignment operator in Java.

```
<Type> <name> = <data of type Type>;
```

###### Examples :
```java
int exampleNumber = 3;
String exampleString = "Hello World!";
float exampleFloat;
double exampleDouble = 3.0;
exampleFloat = 3.0f;		//This can be done inside a method
```

#### 1.3 Methods
**Methods** are encapsulations that define the behavior of an object.  
They are a set of statements that are executed sequentially when the method is called.
Methods can be declared sometimes, defined and invoked/called.

##### 1.3.1 Method declaration
Method declaration has 3 basic elements :
```
<return type> <method name>(<parameters>);
``` 
This is also called the method signature. Conventionally we start the method name with a lowercase. The name is generally in camelCase.
###### Example : 
```java
int sum(int num1, int num2);
```

##### 1.3.2 Method definition
Method definition is providing the method signature with a body : set of statements to be executed written within '{}'.
###### Example : 
```java
int sum(int num1, int num2) {
	return num1 + num2;
}
```

##### 1.3.2 Method invocation/call
Methods can be invoked from other methods. This is done by writing the method and passing the parameters followed by a semicolon.  
[**NOTE**
 : the *main* method is invoked automatically by the JVM - more on this later.]

###### Example : 
```java
int summation = sum(2 + 3);
/* We execute the method sum using 2 as num1 and 3 as num2 and store 
the result in a variable summation. After execution, summation == 5. */
```

#### 1.4 Packages

#### 1.5 Access Modifiers
As the name suggests, access modifiers regulate access to methods and variables of a class from outside classes.  
There are 4 levels of access modifiers:  

  - *private* : accessible only from inside the class.  
  - *no-modifier* : accessible inside the class, and from any class in the same package.  
  - *protected* : accessible inside the class, all classes in the package and any subclass outside the package.  
  - *public* : accessible everywhere.  

Access modifiers can regulate access to Classes, Methods and Variables.

###### Example :

```java
package petshop;

public class Dog {          //This class is visible everywhere 
	private int numLegs;	//Property only accessible inside this class
	String name;	        //Accessible in this class and anywhere in package petshop
	protected String breed; //Accessible in this class and any subclass of petshop.Dog

	public void getNumLegs() {  //Accessible from everywhere

	}
}
```


