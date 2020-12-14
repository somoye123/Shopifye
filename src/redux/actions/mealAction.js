import { toast } from 'react-toastify';
import * as types from './actionTypes';
import * as mealApi from '../../api/mealApi';

export const loadMealSuccess = meal => ({ type: types.SET_MEAL, meal });

export function loadMeal(id) {
  return async dispatch => {
    try {
      const data = await mealApi.getMeal(id);
      const { meals } = data;
      if (meals) {
        const {
          strMeal: name,
          strMealThumb: image,
          strArea: info,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1, strIngredient2,
          strIngredient3, strIngredient4,
          strIngredient5,
        } = meals[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newMeal = {
          name,
          image,
          info,
          category,
          instructions,
          ingredients,
        };
        dispatch(loadMealSuccess(newMeal));
      } else {
        dispatch(loadMealSuccess(null));
      }
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };
}
