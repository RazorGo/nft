import './App.css';
import Header from './components/Header';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData]= useState([])
  const [selectedPunk, setSelectedPunk]= useState(0)
  

  useEffect(()=> {
    const getMynfts = async () =>{
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xE9d13c57D52CAd22083E284697B0D770ac4FfbDc&order_direction=asc'
        )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    } 
    return getMynfts()

  },[])
  
  return (
  <div className='app'>
    <Header/>
    
                    {
                    /* 
                    <CollectionCard 
                      id={0}
                      name={'Bandana Punk'}
                      traits={[{'value':7}]} 
                      image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'
                    /> 
                    */
                    }
    {punkListData.length > 0 && (
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>                
        <Punklist 
          punkListData={punkListData} 
          setSelectedPunk={setSelectedPunk}
        />

      </>
    )}                
   
    </div>
    )
}

export default App;
