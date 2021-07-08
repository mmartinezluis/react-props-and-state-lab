import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// import pets from 'src/data/pets'

class App extends React.Component {
  constructor() { 
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    let type = event.target.value
    this.setState({
      filters: { type: type }
    })
  }

  onFindPetsClick = () => {
    let url = ""
    if (this.state.filters.type === 'all') {
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  onAdoptPet = (id) => {
    let pet = this.state.pets.find( pet => pet.id === id)
    pet.isAdopted = true

  }
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType = {event => this.onChangeType(event)}
                onFindPetsClick = {this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets = {this.state.pets}
                onAdoptPet = { this.onAdoptPet }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
