import React, { useState, useEffect } from 'react'
import Card from './Card'

const Dashboard = () => {

  // State to hold the cards data
  const [cards, setCards] = useState([])


  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/cards')
      const result = await response.json()
      setCards(result)
      console.log('Fetched cards:', result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  // Fetch data when the function fetchData is called using
  //  the useEffect hook.
  useEffect(() => {
    fetchData();
  }, [])

 return (
    <section className='dashboard section'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                    {/* Map through the cards and display them*/} 
                        {cards && cards.length > 0 &&
                          cards.map(card =><Card key={card._id} card={card} />
                          ) 
                        } 
                          
                    </div>
                </div>


                {/* Placeholder for content - rows of 4 column */}
                <div className='col-lg-4'></div>
            </div>
    </section>
  ) 
 
}

export default Dashboard