
 AULAS INICIAS JS
  * * 
 console.log('bem vindos ao Starter')

  STRING

 console.log(`testizinho`)

  NUMBER

 console.log(33  3)
 console.log(12.5 * 3)
 console.log(33 + 3)
 console.log(33 - 3)
 console.log(Infinity)

  BOOLEAN

 console.log(false)
 console.log(true)

  NULL

  console.logo(undefined)
  console.log(null)

  OBJECT

 console.log({
   name:"Vitor",
   idade: 18,
   sexualidade:"Masculino",
   andar:function(){
     console.log('andar')
   }
 })

 *

 Object {
   andar: function(){
     console.log('');
   },
   idade: 18 ,
   name: "vitor"
   }

 *

  ARRAY

 console.log([
   "leite", 
   "ovos",
   1,
   2,

 ])

  VARIABLES

 var clima = "quente"
 clima = "frio"
 console.log(clima)

  SCOPE VAR

 var x 

 console.log('> existe x antes do bloco?', x)

 {
   x = 0
 }

 console.log('>existe x depois do bloco?', x)

  SCOPE LET E CONST

 let y = 1;

 {
   let y = 0 
   console.log('>existe y', y)
 }

 console.log('>existe y depois do bloco?', y)

  CRIAR NOMES

 let Alisson = 'Alisson'
 let Hello_world = 'Olá mundo'
 console.log(Alisson + " say " + Hello_world)
  let 1233 = 1233  * error *
  let Hello world - 'Olá mundo'   * error *

  PRATICE

 var name 
 name = "vitor"
 console.log(typeof name)

 let age, isHuman
 age = 18 
 isHuman = true

 console.log(name, age, isHuman)

 console.log('O ' + name + ' tem ' + age + ' anos.')

 console.log(`o ${name} tem ${age} anos`)

  OBJECT PRATICE

 const person = {
   name: "vitor",
   age:18, 
   weight:55.,
   isAdmin:true
 }

 console.log(person)
 console.log(person.name)
 console.log(`${person.name} tem ${person.age} anos`)

  ARRAY PRATICE

 const animals = [
   'lion',
   'monkey',
   {
     name: 'cat',
     age: 3
   }
 ]

 console.log(animals)
 console.log(animals.length)
 console.log(animals[2])

 EXERCISE

 1.Declare uma variável de nome weight 
 let weight = 92

  2.Que tipo de dado é a variável acima?
 console.log(typeof weight)

  3.Declare uma variável e atribua valores para cada um dos dados
 let name = 'sah'
 let age = 18 
 let stars = 9.9
 let isSubscribed = true


  4.A variável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:
 * <name> de idade <age> pesa <weight> kg. *
  
 let student = {
   name: 'sah',
   age: 18,
   weight:50,
   isSubscribed: true
 }

 console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

  5.Declare uma var array vazia

 let students = []

  6.Reatribua valor

 students = [
   student
 ]

 console.log(students)

  7.Coloque no console o valor da posição zero

 console.log(students[0])

  8.Crie um novo student e coloque na posição 1 do array students

 const Vitor = {
   name:'Vitor',
   age:18,
   weight:50,
   isSubscribed:false
 }

 students[1] = Vitor

 9.Qual resposta?

 console.log(a)
 var a = 1
 undefined


AULA 2 JS

 criar um aplicativo de frases motivacionais
 FUNCTIONS
  declaration 

 function createPhrases() {
   console.log('Estudar é muito bom')
   console.log('Paciência e persistência')
   console.log('Revisão é mãe do aprendizado')
  
 }

 executar a função

 createPhrases()

 ARGUMENT
 function expression  anonymous

 parameters
 const sum = function(sum1, sum2){
    console.log(number(sum[1]) + number(sum[2]))
    console.log(sum[1] - sum[2])
    console.log(sum[1] * sum[2])
    console.log(sum[1]  sum[2])
    total = number1 + number2
    return number1, number2

 }

 let number1 = 35
 let number2 = 25

 sum[1] = parseInt(prompt('Number'))
 sum[2] = parseInt(prompt('Number'))
 sum(sum[1], sum[2])
 arguments

 console.log(`o número 1 é ${number1}`)
 console.log(`o número 2 é ${number2}`)
 console.log(`a soma é ${sum(number1, number2)}`)

  FUNCTION SCOPE

 let subject = 'create video'
 function createThink(subject){
   subject = 'study'
   return subject
 }

 console.log(createThink(subject))
 console.log(subject)

 FUNCTION HOISTING

 function sayMyName(){
   console.log('Vitor')
 }

 sayMyName();

 ARROW FUNCTION

 const sayMyName = (name) => {
 
   console.log('name')
 }

 sayMyName('vitor')

 CALLBACK FUNCTION

 function sayMyName(name) {
   console.log('antes de executar a função callback')
   name()
   console.log('depois de executar a callback')
 }

 sayMyName(
   () => {
     console.log('estou em uma callback')
   }
 )

* FUNCTION() CONSTRUCTOR

*expressão new
*criar um novo objeto
*this keyword

*

 function Person(name){
   this.name = name
   this.walk = function(){
     return this.name + " está andando"
   }
 }
   const vitor = new Person('vitor')
   const sah = new Person('sah')
   console.log(vitor.walk())
   console.log(sah.walk())

   let name = new String('Vitor')
   console.log(name)

* PROTOTYPE

*prototype-based language
*prototype chain
*_proto_

*

 'vitor'.
 'vitor'.__proto__
 2.0.__proto__
 ['a', 'b'].

 TYPE CONVERSION VS TYPE COERSION
 *alteração de um tipo de dado para outro tipo 

 console.log(number('9') + 5)

 Manipulando Strings e números

 let string = "123"
 console.log(Number(string))

 let number = 321
 console.log(String(number))

 CONTAR CARACTERES E DIGITOS

 let word = 'paralelepipedo'
 console.log(word.length)
 let number = 1234
 console.log(String(number).length)

 TRANSFORMAÇÃO

 let number = 12.312312451
 console.log(number.toFixed(2).replace('.', ','))

 TRANSFORMAÇÃO

 let word = 'programar é legal'
 console.log(word.toUpperCase())
 console.log(word.toLowerCase())

 VERIFICAR

 let phrase = 'eu quero viver um amor'
 console.log(phrase.includes('amor'))

 MANIPULANDO STRINGS E ARRAYS

 let phrase = "eu quero comer"
 let myArray = phrase.split(' ')
 let phraseWithUnderscore = myArray.join('_')
 console.log(phraseWithUnderscore)

 MANIPULANDO ARRAYS

 let myArray = new Array('a', 'b', 'c')
 console.log(myArray)

 CONTAR ELEMENTOS

 console.log([
   'a', 'b', 'c'].length
   )

 TRANSFORMAÇÃO

 let word = 'manipulação'
 console.log(Array.from(word))

 MANIPULANDO ARRAYS

 let techs = ["html", 'css', 'js']

 adicionar um item no fim
 techs.push('nodejs')
 adicionar no começo 
 techs.unshift('sql')
 remover do Fim 
 techs.pop()
 remover do começo
 techs.shift()
 pegar somente alguns elementos do array 
 console.log(techs.slice(1, 3))
 remover 1 ou mais items em qualquer posicçao do array
 techs.splice(1, 2)
 encontrar a posição de um elemento no array
 let index = techs.indexOf('css')
 techs.splice(index, 1)

 console.log(index)