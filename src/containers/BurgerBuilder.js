import React, { Component } from 'react'

import Aux from '../hoc/Auxilary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import BurgerIngredientTypes from '../enums/BurgerIngredientTypes'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [BurgerIngredientTypes.Salad.type]: 0,
      [BurgerIngredientTypes.Bacon.type]: 0,
      [BurgerIngredientTypes.Cheese.type]: 0,
      [BurgerIngredientTypes.Meat.type]: 0,
      [BurgerIngredientTypes.Tomato.type]: 0,
      [BurgerIngredientTypes.Pickle.type]: 0,
    },
    totalPrice: 4,
    purchasable: false,
  }

  updatePurchaseState(ingredients) {
    // const ingredients = { ...this.state.ingredients }
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] += 1
    const newPrice = this.state.totalPrice + BurgerIngredientTypes[type].price
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients }
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] -= 1
      const newPrice = this.state.totalPrice - BurgerIngredientTypes[type].price
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
      this.updatePurchaseState(updatedIngredients)
    }
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
