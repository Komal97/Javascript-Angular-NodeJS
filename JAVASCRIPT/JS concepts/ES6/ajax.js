// 1) Traditional way of AJAX using setTimeout
// function getRecipe() {

//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         setTimeout((id) => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe2 = { title: 'Italian Pizza', publisher: 'Jonas' };
//                 console.log(recipe2);
//             }, 1500, recipe.publisher);

//         }, 1000, recipeID[2]);

//     }, 1500);
// }

// getRecipe();

// 2) Use 'Promise'

// produce promise
let getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

let getRecipe = (recId) => {

    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recId);
    });
};

let getRelated = (pulisher) => {

    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, pulisher);
    });
}

// consume promise
// getIds.then((ids) => {
//     console.log(ids);
//     return getRecipe(ids[2]);
// }).then((recipe) => {
//     console.log(recipe);
//     return getRelated('Jonas');
// }).then((recipe) => {
//     console.log(recipe);
// }).catch((error) => {
//     console.log(error);
// });

// consume promise using async/await

async function getRecipes() {

    const ids = await getIds;
    console.log(ids);
    const recipe = await getRecipe(ids[2]);
    console.log(recipe);
    const related = await getRecipe('Jonas')
    console.log(related);

    return recipe;
}

getRecipes().then(result => console.log(`${result} is the best ever!`));