import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.module.css'

import BurgerIngredientTypes from '../../../enums/BurgerIngredientTypes'

class BurgerIngredient extends Component {
  render() {
    let ingredient

    switch (this.props.type) {
      case BurgerIngredientTypes.BreadTop.type:
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        )
        break
      case BurgerIngredientTypes.BreadBottom.type:
        ingredient = <div className={classes.BreadBottom} />
        break
      case BurgerIngredientTypes.Meat.type:
        ingredient = <div className={classes.Meat} />
        break
      case BurgerIngredientTypes.Cheese.type:
        ingredient = <div className={classes.Cheese} />
        break
      case BurgerIngredientTypes.Bacon.type:
        ingredient = <div className={classes.Bacon} />
        break
      case BurgerIngredientTypes.Salad.type:
        ingredient = <div className={classes.Salad} />
        break
      case BurgerIngredientTypes.Tomato.type:
        ingredient = <div className={classes.Tomato} />
        break
      case BurgerIngredientTypes.Pickle.type:
        ingredient = (
          <div className={classes['Pickle-wrapper']}>
            <div className={classes.Pickle} />
            <div className={classes.Pickle} />
            <div className={classes.Pickle} />
            <div className={classes.Pickle} />
          </div>
        )
        break
      default:
        ingredient = null
    }
    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient
