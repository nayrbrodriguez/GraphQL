var Schema = require('graph.ql')
var schema = Schema('
	scalar Date

	type Character{
		name: String!
		homeworld: Planet
		films: [Film]
	}

	type Film{
		title: String!
		producers: [String]
		characters: [Character]
		release_date: Date 
	}

	type Planet{
		name: String!
		population: Int
	}

	type Query{
		find_film (id:Int):Film
		find_person (id:Int): Character
	}

	',{
		Date: {

			},
		Character: {

			},
		Film: {

			},
		Planet{

			},
		Query:{

			},

		})




// schema(<query>,<variables>)
// 	.then(function (res){
// 		console.log(res)
// 	})
