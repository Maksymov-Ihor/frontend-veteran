import { useSelector, useDispatch } from "react-redux";

import { getClients, getFilter } from '../../redux/clients/clientsSelectors';
import { deleteClient } from "../../redux/clients/clientsOperation";

import { Item } from "./ClientsListStyled";

const ClientsList = () => {

    const clients = useSelector(getClients);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleClients = () => {
        const normalizeClient = filter.toLowerCase();
        return clients.filter(client => client.name.toLowerCase().includes(normalizeClient));
    }

    const filterClients = visibleClients();

    return (
        <div>
            <ul>
                {filterClients.map(({ _id, name, email, phone }) => 
                    <Item key={_id}>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <button type='button' onClick={() => dispatch(deleteClient(_id))}>Delete</button>
                    </Item>
                )}
            </ul>
        </div>
    )
}

export default ClientsList;