import React, {useState, useEffect} from 'react';
import EstablishmentsService from '../../services/establishments_service';

const Establishment = (props) => {
  const [Establishment, setEstablishment] = useState([]);
  const { REACT_APP_GOOGLE_API_KEY } = process.env;

  useEffect(() => {
    getEstablishmentDetails();
  }, [props.place])

  async function getEstablishmentDetails() {
    try {
      const response = await EstablishmentsService.show(props.place.place_id);
      setEstablishment(response.data.result);
    } catch (error) {
      setEstablishment([]);
    }
  }

  return (
    <div>

    </div>
  )
}

export default Establishment;
