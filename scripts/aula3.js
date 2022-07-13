// Transfomar notas escolares

// let score = 90

// function getScore(score) {
//   let scoreA = score >= 90 && score <= 100
//   let scoreB = score >= 80 && score <= 89
//   let scoreC = score >= 70 && score <= 79
//   let scoreD = score >= 60 && score <= 69
//   let scoreF = score < 60 && score >= 0

//   let scoreFinal

//   if (scoreA) {
//     scoreFinal = 'A'
//   } else if (scoreB) {
//     scoreFinal = 'B'
//   } else if (scoreC) {
//     scoreFinal = 'C'
//   } else if (scoreD) {
//     scoreFinal = 'D'
//   } else if (scoreF) {
//     scoreFinal = 'F'
//   } else {
//     scoreFinal = 'Nota inválida'
//   }
//   return scoreFinal
//   // console.log(scoreFinal)
// }

// console.log(getScore(90))

// -----------------------------------------------------------------------

// Sistema de gastos familiar

// let family = {
//   incomes: [1200, 1200, 250.43, 360.45],
//   expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
// }

// function sum(array){
//   let total = 0;

//   for(let value of array){
//     total += value
//   }

//   return total
// }

// function calculateBalance(){
//    const calculateIncomes = sum(family.incomes)
//    const calculateExpenses = sum(family.expenses)

//    const total = calculateIncomes - calculateExpenses

//    const itsOk = total >= 0

//    let balanceText = "negativo"
//    if(itsOk){
//      balanceText = "positivo"
//    }
//   console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
// }

// calculateBalance()

// -----------------------------------------------------------------------

// Celsius em fahrenheit

// function transformDegree(degree) {
//   const celciusExistes = degree.toUpperCase().includes('C')
//   const fahrenheitExistes = degree.toUpperCase().includes('F')

//   // fluco de error
//   if (!celciusExistes && !fahrenheitExistes) {
//     throw new Error('Grau não identificadoo')
//   }

//   // fluxo ideal, F -> C
//   let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
//   let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
//   let degreeSign = 'C'

//   //  fluxo alternativo C -> F
//   if (celciusExistes) {
//     updatedDegree = Number(degree.toUpperCase().replace('C', ''))
//     formula = celcius => (celcius * 9) / 5 + 32
//     degreeSign = 'F'
//   }

//   return formula(updatedDegree) + degreeSign
// }

// try {
//   console.log(transformDegree('10C'))
//   console.log(transformDegree('50F'))

// } catch (error) {
//   console.log(error.message)
// }

// --------------------------------------------------------------------------

// Buscando e contando dados em arrays

// const booksByCategory = [
//   {
//     category: 'Riqueza',
//     books: [
//       {
//         title: 'Os segredos da mente milionária',
//         author: 'T. Harvy Eker'
//       },
//       {
//         title: 'O homem mais rico da Babilônia',
//         author: 'George S. Clason'
//       },
//       {
//         title: 'Pai rico, pai pobre',
//         author: 'Robet T. Kiyosaki e Sharon L. Lechter'
//       }
//     ]
//   },
//   {
//     category: 'Inteligência Emocional',
//     books: [
//       {
//         title: 'Você é Insubstituível',
//         author: 'Augusto Cury'
//       },
//       {
//         title: 'Ansiedade = Como enfrentar o mal do Século',
//         author: 'Augusto Cury'
//       },
//       {
//         title: 'Os 7 hábitos das pessoas altamente eficazes',
//         author: 'Stephen R. Covey'
//       }
//     ]
//   }
// ]

// const totalCategories = booksByCategory.length

// for (let category of booksByCategory) {
//   console.log('Total de livros da categoria: ', category.category)
//   console.log(category.books.length)
// }

// function countAuthors() {
//   let authors = []

//   for (let category of booksByCategory) {
//     for (let book of category.books) {
//       if (authors.indexOf(book.author) == -1) {
//         authors.push(book.author)
//       }
//     }
//   }
//   console.log("Total de autores:", authors.length)
// }

// countAuthors();

// function booksOfAuthor(author) {
//   let books = []

//   for (let category of booksByCategory) {
//     for (let book of category.books) {
//        if(book.author === author) {
//         books.push(book.title)
//       }
//     }
//   }
//   console.log(`Livros do autor ${author}: ${books.join(", ")}`)
// }

// booksOfAuthor("")