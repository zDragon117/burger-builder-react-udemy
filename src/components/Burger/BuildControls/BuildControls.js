import React from 'react'

import classes from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'
import BurgerIngredientTypes from '../../../enums/BurgerIngredientTypes'

const controls = [
  { label: BurgerIngredientTypes.Bacon, type: BurgerIngredientTypes.Bacon },
  { label: BurgerIngredientTypes.Salad, type: BurgerIngredientTypes.Salad },
  { label: BurgerIngredientTypes.Cheese, type: BurgerIngredientTypes.Cheese },
  { label: BurgerIngredientTypes.Meat, type: BurgerIngredientTypes.Meat },
  { label: BurgerIngredientTypes.Tomato, type: BurgerIngredientTypes.Tomato },
  { label: BurgerIngredientTypes.Pickle, type: BurgerIngredientTypes.Pickle },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((control) => (
      <BuildControl key={control.label} label={control.label} />
    ))}
  </div>
)

export default buildControls
