import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  allPets = (pets) => {
    return pets.map( petObj => {
     return <Pet pet = {petObj} key = {petObj.id} onAdoptPet = {this.props.onAdoptPet} />
    })
  }

  render() {
    return <div className="ui cards"> 
      {this.allPets(this.props.pets)}
      </div>
  }
}
export default PetBrowser
