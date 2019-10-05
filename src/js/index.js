import Search from './models/Search';

/* Global state of the app
** search object
**current recipe
**shopping list obj
**list recipes
*/
const state = {};

const controlSearch = async () => {
    //query from view
    const query = 'pizza'

    if(query){
        // new search obj
        state.search = new Search(query); 

        // rrepare UI for results

        //  search for recipes
        await state.search.getResults();

        // render for recipes
        console.log(state.search.result)
        
    }
      
};

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();

}) 







  