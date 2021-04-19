import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BurgerIngredientTypes from '../../enums/BurgerIngredientTypes'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={BurgerIngredientTypes.BreadTop} />
      {transformedIngredients}
      <BurgerIngredient type={BurgerIngredientTypes.BreadBottom} />
    </div>
  )
}

export default burger
