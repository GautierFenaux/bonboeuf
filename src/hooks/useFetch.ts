import { useEffect, useState } from "react"

// Ajout d'un Generic Type avec <T> à la fonction useFetch 
export const useFetch = <T>() => {
    // Ajout de <T> afin d'avoir un type généralisé sur l'état data
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api-lannuaire.service-public.fr/api/explore/v2.1/catalog/datasets/api-lannuaire-administration/records?select=nom,adresse&limit=5&where=code_insee_commune=75056')
            .then(response => response.json())
            .then(data => setData(data.results))
        }, 1000);
    }, []);

    return data;
}