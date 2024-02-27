import gitLogo from '../assets/bg.png'
import Input from '../components/input';
import ItemRepo from '../components/itemrepo';
import { useState } from 'react';
import Button from '../components/button';
import { api } from '../services/api.js';
import { Container } from './syles';

const Wiki = () => {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)
      if (!isExist){
      setRepos(prev => [...prev, data])
      setCurrentRepo('')
      return
      }
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id))
  }

  return (    
      <Container>
        <img src={gitLogo} width={72} height={72} alt='GitHub logo' />
        <Input value={currentRepo} onChange={(event) => setCurrentRepo(event.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      </Container>
  );
}
export default Wiki;
