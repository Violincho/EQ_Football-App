import { api } from "../services/api";
import { useEffect, useState } from "react";

export const usePlayers = (searchTerm) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                 console.log("Fetching players...");
                const response = searchTerm
                ? await api.get(`/Players/search?q=${searchTerm}`)
                : await api.get("/Players");
                setPlayers(response.data);
                console.log("Fetched players:", response.data);
        } catch (error) {
            console.error("Error fetching players:", error);
        }
    };
    fetchPlayers();
}, [searchTerm]);

    return players; 
};
