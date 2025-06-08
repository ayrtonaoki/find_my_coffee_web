import React, { useEffect, useState } from 'react';
import StoreService from '../../services/store_service';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const RightBar = styled.div`
  width: 250px;
  position: absolute;
  color: white;
  right: 0;
  top: 0;
`

const Head = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 2px;
  text-align: center;
  margin: 10px;
`

const Body = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 20px;
  height: 450px;
  overflow-y: auto;
  margin: 10px;
`

const Footer = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 10px 20px 20px 20px;
  font-size: 0.8em;
  margin: 10px;
`

const EstablishmentItem = styled.div`
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 18px;
  color: rgba(220, 110, 50, 0.7);
`

const Paragraph = styled.p`
  font-size: 13px;
  line-height: 14px;
`

const NearstCoffees = (props) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    loadNearstStores();
  }, [props.latitude]);

  async function loadNearstStores() {
    const response = await StoreService.index(props.latitude, props.longitude);
    setStores(response.data);
  }

  return (
    <RightBar>
      <Head>
        <h3>Find My Coffee</h3>
      </Head>

      <Body>
        <strong>Mais amados na região</strong>
        <hr/>
        {
          stores.map(store => {
            return (
              <EstablishmentItem key={store.name}>
                <Title>{store.name}</Title>
                <Paragraph>{store.address}</Paragraph>
                { store.ratings_count || 0 } Opiniões
                <ReactStars
                  count={5}
                  value={Number(store.ratings_average) || 0}
                  size={20}
                  activeColor="#ffd700"
                  edit={false}
                  emptyIcon={<i className="far fa-star" />}
                  filledIcon={<i className="fas fa-star" />}
                />
                <hr/>
              </EstablishmentItem>
            )
          })
        }
      </Body>

      <Footer>
        <h2>Ayrton Aoki</h2>
        <Paragraph>
          Project created with Ruby on Rails and React.js only for study proposes
        </Paragraph>
      </Footer>
    </RightBar>
  )
}

export default NearstCoffees;
