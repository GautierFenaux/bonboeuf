
// https://api-lannuaire.service-public.fr/api/explore/v2.1/catalog/datasets/api-lannuaire-administration/records?select=nom,adresse,site_internet&limit=5&where=code_insee_commune=75056



export const fetchAdministrations = async () => {
    const response = await fetch('https://api-lannuaire.service-public.fr/api/explore/v2.1/catalog/datasets/api-lannuaire-administration/records?select=nom,adresse,site_internet&limit=5&where=code_insee_commune=75056')

    return await response.json();
}