import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
 const [users, setUsers] = useState([]);

  const getusers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }

  useEffect(() => {
      getusers()
  }, [])

  return (
    <>
    <h2>List of User</h2>
        <Row className="mt-5">

          {
            users.map((curElem) => {
              return(
                <Col md="4" key={curElem.id}>      
                <div className="card p-2 my-3">
                    <div className="d-flex align-items-center">
                        <img src={curElem.avatar_url} alt="dummy"/>
                        <div className="card-right ml-3">
                            <h4 className="name">{curElem.login}</h4>
                            <span className="designation">{curElem.nod_id}</span>
                            <span className="designation">{curElem.type}</span>

    
                            <div className="bg-secondary p-2 mt-2 d-flex rounded justify-content-between text-white">
                                <div className="d-flex flex-column">
                                    <span className="article">Articles</span>
                                    <span className="number">34</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="article">Follwers</span>
                                    <span className="number">34</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="article">Blogs</span>
                                    <span className="number">34</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </Col>
              )
            })
          }
         
        </Row>
    
      
    </>
  )
}

export default Home
