import React from 'react'

import Aux from '../../../hoc/Auxilary'
import SideBar from '../SideBar'

const layout = (props) => (
  <Aux>
    <SideBar />
    <main>
      <div>Toolbar, Backdrop</div>
      {props.children}
    </main>
  </Aux>
)

export default layout
