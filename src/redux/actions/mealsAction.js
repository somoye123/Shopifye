import { toast } from 'react-toastify';
import * as types from './actionTypes';
import * as mealApi from '../../api/mealApi';

export const loadMealsSuccess = meals => ({ type: types.SET_MEALS, meals });

export function loadMeals(searchTerm) {
  return async dispatch => {
    try {
      const data = await mealApi.getMeals(searchTerm);
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map(item => {
          const {
            idMeal, strMeal, strMealThumb, strCategory, strArea,
          } = item;
          return {
            id: idMeal, name: strMeal, image: strMealThumb, info: strCategory, area: strArea,
          };
        });
        dispatch(loadMealsSuccess(newMeals));
      } else {
        dispatch(loadMealsSuccess(null));
      }
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };
}
