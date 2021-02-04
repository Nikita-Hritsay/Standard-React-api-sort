import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './Table/table'
import Loader from './loader/loader'
import _ from 'lodash'

function App() {
  

  const smallURL = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"

  const [smallData, setSmallData] = useState([])

  const [loading, setLoading] = useState(true)

  let [sort, setSort] = ('asc')

  

  useEffect(()=>{
    axios.get(smallURL)
    .then(
      (res)=>{
        setSmallData(res.data)
        setLoading(false)
      }
    )
    }, [])

  let onSort = (sortField) => {
    const cloned = smallData.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    setSort(sort = sortType)

    const orderedData = _.orderBy(cloned, sortField, sortType)

    setSmallData(orderedData);

  } 

  return (
    <div className="container">
      {
        loading ? 
        <Loader />
        :
        <Table smallData={smallData} onSort={onSort}/>
      }
      </div>
  );
}

export default App;
