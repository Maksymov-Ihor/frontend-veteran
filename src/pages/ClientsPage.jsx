import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "../components/Box/Box";

import ClientForm from '../components/ClientForm';
import Filter from '../components/Filter';
import ClientsList from "../components/ClientsList";

import { listClients } from "../redux/clients/clientsOperation";

const ClientsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            listClients()
        )
    }, [dispatch]);

    return (
        <Box
            pt={5}
        >
            <ClientForm />
            <Filter />
            <ClientsList />
        </Box>
    )
}

export default ClientsPage;