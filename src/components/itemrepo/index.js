import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, handleRemoveRepo}) => {
const handleRemove = () => {
  handleRemoveRepo(repo.id)
}
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div>
          <button className='seeRepo'>
            <a href={repo.html_url} className='linkRepo' target='_blank' rel='noreferrer'>Ver repositório</a><br />
          </button>
          <button className='remove'>
            <a href={handleRemoveRepo}>Remover</a>
          </button>
        </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo
