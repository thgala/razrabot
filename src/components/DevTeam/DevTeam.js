import React, { Component } from 'react'
import './DevTeam.css'

import LayoutContainer from '../LayoutContainer'

class DevTeam extends Component {
  render() {
    const { list } = this.props

    return (
      <div className='DevTeam'>
        <LayoutContainer>
          <h2>Development team</h2>
          <div className='DevTeam__section'>
            {list.map((person, i) => {
              const { linkedin, github, instagram, } = person && person.socialLinks

              return (
                <div className='DevTeam__person' key={i}>
                  <div
                    className='DevTeam__personImage'
                    style={{
                      backgroundImage: `url(${person.imageUrl})`
                    }}
                  />
                  <div className='DevTeam__personName'>
                    {person.name}
                  </div>
                  <div className='DevTeam__personPosition'>
                    {person.position}
                  </div>
                  <div className='DevTeam__personSocial'>
                    {linkedin && <a href={linkedin} target='_blank'>LinkedIn</a>}
                    {github && <a href={github} target='_blank'>Github</a>}
                    {instagram && <a href={instagram} target='_blank'>Instagram</a>}
                  </div>
                </div>
              )
            })}
          </div>
        </LayoutContainer>
      </div>
    )
  }
}

DevTeam.defaultProps = {
  list: [],
}

export default DevTeam
