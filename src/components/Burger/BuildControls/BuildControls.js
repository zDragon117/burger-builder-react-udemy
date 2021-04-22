import React from 'react'

import classes from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'
import BurgerIngredientTypes from '../../../enums/BurgerIngredientTypes'

const controls = [
  {
    label: BurgerIngredientTypes.Bacon.type,
    type: BurgerIngredientTypes.Bacon.type,
  },
  {
    label: BurgerIngredientTypes.Salad.type,
    type: BurgerIngredientTypes.Salad.type,
  },
  {
    label: BurgerIngredientTypes.Cheese.type,
    type: BurgerIngredientTypes.Cheese.type,
  },
  {
    label: BurgerIngredientTypes.Meat.type,
    type: BurgerIngredientTypes.Meat.type,
  },
  {
    label: BurgerIngredientTypes.Tomato.type,
    type: BurgerIngredientTypes.Tomato.type,
  },
  {
    label: BurgerIngredientTypes.Pickle.type,
    type: BurgerIngredientTypes.Pickle.type,
  },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current price:
      <span> </span>
      <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>
      ORDER NOW
    </button>
  </div>
)

export default buildControls
