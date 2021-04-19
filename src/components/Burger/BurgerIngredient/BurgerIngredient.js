import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {
  render() {
    let ingredient

    switch (this.props.type) {
      case 'BreadTop':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        )
        break
      case 'BreadBottom':
        ingredient = <div className={classes.BreadBottom} />
        break
      case 'Meat':
        ingredient = <div className={classes.Meat} />
        break
      case 'Cheese':
        ingredient = <div className={classes.Cheese} />
        break
      case 'Bacon':
        ingredient = <div className={classes.Bacon} />
        break
      case 'Salad':
        ingredient = <div className={classes.Salad} />
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
