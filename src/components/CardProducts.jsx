import React from 'react';
import PropTypes from 'prop-types';

function CardProducts(props) {
  const { location: { pathname } } = props;
  if (pathname.includes('/foods')) {
    return <p>Oi</p>;
  }
  return (
    <div>
      A rota atual é
      {' '}
      {rotaAtual}
    </div>
  );
}

CardProducts.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default CardProducts;

// Foods/Drinks---------"/foods ou /drinks"
// Foto (Thumb) - strMealThumb, / strDrinkThumb
// Nome do produto - strMeal / strDrink,

// Recommended---------"/foods/:id"
// Foto - strMealThumb, / strDrinkThumb
// Se drink, alcolico ou nao - strAlcoholic | Se comida, categoria - strCategory
// Nome - strMeal / strDrink,

// Foods/Drinks---------"/foods ou /drinks"
// Recommended---------"/foods/:id"
// {
//   "meals":[
//       {
//         "idMeal":"52882",
//         "strMeal":"Three Fish Pie",
//         "strDrinkAlternate":null,
//         "strCategory":"Seafood",
//         "strArea":"British",
//         "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
//         "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
//         "strTags":"Fish,Seafood,Dairy,Pie",
//         "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
//         "strIngredient1":"Potatoes",
//         "strIngredient2":"Butter",
//         "strIngredient3":"Milk",
//         "strIngredient4":"Gruy\u00e8re",
//         "strIngredient5":"Butter",
//         "strIngredient6":"Leek",
//         "strIngredient7":"Plain Flour",
//         "strIngredient8":"White Wine",
//         "strIngredient9":"Milk",
//         "strIngredient10":"Parsley",
//         "strIngredient11":"Salmon",
//         "strIngredient12":"Haddock",
//         "strIngredient13":"Smoked Haddock",
//         "strIngredient14":"Eggs",
//         "strIngredient15":"",
//         "strIngredient16":"",
//         "strIngredient17":"",
//         "strIngredient18":"",
//         "strIngredient19":"",
//         "strIngredient20":"",
//         "strMeasure1":"1kg",
//         "strMeasure2":"Knob",
//         "strMeasure3":"Dash",
//         "strMeasure4":"50g",
//         "strMeasure5":"75g",
//         "strMeasure6":"2 sliced",
//         "strMeasure7":"75g",
//         "strMeasure8":"150ml",
//         "strMeasure9":"568ml",
//         "strMeasure10":"2 tbs chopped",
//         "strMeasure11":"250g",
//         "strMeasure12":"250g",
//         "strMeasure13":"250g",
//         "strMeasure14":"6",
//         "strMeasure15":"",
//         "strMeasure16":"",
//         "strMeasure17":"",
//         "strMeasure18":"",
//         "strMeasure19":"",
//         "strMeasure20":"",
//         "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
//         "dateModified":null
//       }
//   ]
// }

// {
//   "drinks":[
//       {
//         "idDrink":"17256",
//         "strDrink":"Martinez 2",
//         "strDrinkAlternate":null,
//         "strDrinkES":null,
//         "strDrinkDE":null,
//         "strDrinkFR":null,
//         "strDrinkZH-HANS":null,
//         "strDrinkZH-HANT":null,
//         "strTags":null,
//         "strVideo":null,
//         "strCategory":"Cocktail",
//         "strIBA":null,
//         "strAlcoholic":"Alcoholic",
//         "strGlass":"Cocktail glass",
//         "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
//         "strInstructionsES":null,
//         "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
//         "strInstructionsFR":null,
//         "strInstructionsZH-HANS":null,
//         "strInstructionsZH-HANT":null,
//         "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
//         "strIngredient1":"Gin",
//         "strIngredient2":"Sweet Vermouth",
//         "strIngredient3":"Maraschino Liqueur",
//         "strIngredient4":"Angostura Bitters",
//         "strIngredient5":null,
//         "strIngredient6":null,
//         "strIngredient7":null,
//         "strIngredient8":null,
//         "strIngredient9":null,
//         "strIngredient10":null,
//         "strIngredient11":null,
//         "strIngredient12":null,
//         "strIngredient13":null,
//         "strIngredient14":null,
//         "strIngredient15":null,
//         "strMeasure1":"1 1\/2 oz",
//         "strMeasure2":"1 1\/2 oz",
//         "strMeasure3":"1 tsp",
//         "strMeasure4":"2 dashes",
//         "strMeasure5":null,
//         "strMeasure6":null,
//         "strMeasure7":null,
//         "strMeasure8":null,
//         "strMeasure9":null,
//         "strMeasure10":null,
//         "strMeasure11":null,
//         "strMeasure12":null,
//         "strMeasure13":null,
//         "strMeasure14":null,
//         "strMeasure15":null,
//         "strCreativeCommonsConfirmed":"No",
//         "dateModified":"2017-12-19 18:34:15"
//       }
//   ]
// }

// Done Recipes---------
// Food:
// foto
// nome
// categoria
// nacionalidade
// data em que a pessoa fez a receita
// 2 primeiras tags retornadas pela API
// um botão de compartilhar

// Drink:
// foto da receita,
// o nome,
// se é alcoólica,
// a data em que a pessoa fez a receita
// e um botão de compartilhar
// Share URL tela de detalhes da receita /src/images/shareIcon.svg

// Done Recipes---------
// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita,
//   doneDate: quando-a-receita-foi-concluida,
//   tags: array-de-tags-da-receita-ou-array-vazio
// }]

// Favorite Recipes---------
// Food:
// foto
// nome
// categoria
// nacionalidade
// botão de compartilhar
// um de "desfavoritar"

// Drink: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
// Share URL tela de detalhes da receita /src/images/shareIcon.svg
// botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do localStorage e da tela

// Favorite Recipes---------
// [{
//   id: id-da-receita,
//   type: food-ou-drink,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }]
