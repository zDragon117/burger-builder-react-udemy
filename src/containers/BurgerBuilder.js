import React, { Component } from 'react'

import Aux from '../hoc/Auxilary'
import Burger from '../components/Burger/Burger'
import BurgerIngredientTypes from '../enums/BurgerIngredientTypes'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [BurgerIngredientTypes.Salad]: 0,
      [BurgerIngredientTypes.Bacon]: 0,
      [BurgerIngredientTypes.Cheese]: 0,
      [BurgerIngredientTypes.Meat]: 0,
    },
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
