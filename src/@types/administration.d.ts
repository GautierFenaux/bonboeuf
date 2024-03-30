export interface Adresse {
        type_adresse: string;
        complement1: string;
        complement2: string;
        numero_voie: string;
        service_distribution: string;
        code_postal: string;
        nom_commune: string;
        pays: string;
        continent: string;
        longitude: string;
        latitude: string;
        accessibilite: string;
        note_accessibilite: string;
 }

//  export interface Adresse2 {
//         type_adresse: string;
//         complement1: string;
//         complement2: string;
//         numero_voie: string;
//         service_distribution: string;
//         code_postal: string;
//         nom_commune: string;
//         pays: string;
//         continent: string;
//         longitude: string;
//         latitude: string;
//         accessibilite: string;
//         note_accessibilite: string;
//  }













interface SiteInternet {
    libelle: string;
    valeur: string;
}

export interface Administration {
    nom: string,
    adresse: string;
}
