const getRecipes = async () => {
  const req = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const res = await req.json();
  return res;
};

export default getRecipes;
