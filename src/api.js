import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

const getFilteredCategories = async (categories) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categories);
    return await response.json();
}

export {getAllCategories, getMealById, getFilteredCategories};