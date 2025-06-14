class Meal {
    constructor(
      id,
      categoryIds,
      title,
      affordability,
      complexity,
      imageUrl,
      duration,
      estadisticas,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.estadisticas = estadisticas;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
    }
  }
  
  export default Meal;