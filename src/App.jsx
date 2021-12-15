import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './App.css';
import Player from './components/Player/Player';
import PurchasedPlayer from './components/PurchasedPlayer/PurchasedPlayer';
import './dist/css/bootstrap.min.css';
import fakeData from './fakeData/fakedata.json';

function App() {
  const [players, setPlayers] = useState([]);
  const [addedPlayer, setAddedPlayer] = useState([]);

  useEffect(() => {
    setPlayers(fakeData);
  }, [])

  const checkIfDuplicateExists = arr => new Set(arr).size !== arr.length;

  const buyPlayerHandler = (player) => {
    const newPlayer = [...addedPlayer, player];
    if(checkIfDuplicateExists(newPlayer) === false){
      if(newPlayer.length <= 11){
        setAddedPlayer(newPlayer);
      } else {
        alert('You can not buy more than 11 players');
      }
    } else {
      alert('Please! add a new player.');
    }
  }

  const displayTableData = {display: 'none'};
  if(addedPlayer.length > 0){
    displayTableData.display = 'table';
  }

  const playerSalary = addedPlayer.map(player => player.salary);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="playerContainer">
            <h2>Players: {players.length}</h2>
            <div className="addedPlayer">
                <h3>Purchased Player: {addedPlayer.length}</h3>
                <h3>Total Cost: ${playerSalary.reduce((total, budget) => total + budget, 0)}</h3>
              <Row>
                <Col md={12}>
                  <Table style={displayTableData} className="playerInformation">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Salary</th>
                        <th>PlayerRole</th>
                        <th>Photo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        addedPlayer.map(addPlayer => <PurchasedPlayer addPlayer={addPlayer}></PurchasedPlayer>)
                      }
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>

            <div className="players">
                <Row>
                  {
                    players.map(player => {
                      return(
                        <Col md={4}>
                          <Player buyPlayerHandler={buyPlayerHandler} key={player.id} players={player}></Player>
                        </Col>
                      )
                    })
                  }
                </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
