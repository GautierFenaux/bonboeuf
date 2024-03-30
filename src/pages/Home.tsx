import { useEffect, useState } from 'react';
import { Administration, Adresse } from '../@types/administration';
import { useFetch } from '../hooks/useFetch';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet';

// function Home() {

//   // ajouter scroll avec souris sur la map
//   const [administration, setAdministration] = useState<Administration[] | undefined>();

//   const data = useFetch<Administration[]>();
//   const [latitudes, setLatitudes] = useState<string[]>([]);
//   const [longitudes, setLongitudes] = useState<string[]>([]);


//   useEffect(() => {
//     // console.log( {data})
//     if (data) setAdministration(data);
//   }, [data]);
//   // console.log(<Administration/>)
//   if (data)
//   console.log(data);
//   //   Object.values(JSON.parse(item.adresse)).forEach((values: unknown) => {

//   // Je reçois un tableau d'objet d'administration
//   data?.map((item: Administration, idx: number) => {
//     // Les valeurs de ce tableau sont des chaînes de caractère. Je les convertis en objet afin de pouvoir itérer dessus 
//     // console.log(item.nom)
//     // console.log(typeof item.adresse)
//     const newObject = [...longitudes, item.nom];
//     setLatitudes(newObject);
//     console.log(latitudes)
//     // console.log(JSON.parse(item.adresse))
//     // Object.values(JSON.parse(item.adresse)).forEach((values: unknown) => {
//     //   console.log(idx, values)
//     //   const parsedValues = values as Adresse;
//     //   // console.log(parsedValues);
//     //   // setLatitude(Number(parsedValues.latitude));
//     //   // setLongitude(Number(parsedValues.longitude));
//     //   // console.log(parsedValues.latitude, parsedValues.longitude);
//     //   // JSON.parse(values).map((test: Adresse) => {
//     //   //   console.log('adresse2 ==> ', test.latitude)
//     //   // })
//     // });
//   });

//   return (
//     // <div className='home'>
//     //   <h1>Home</h1>
//     //   {administration && administration.map((admin, index) => (
//     //     <div key={index}>
//     //       <p>{admin.nom}</p>
//     //       {Array.isArray(admin.adresse) && admin.adresse.map((address, addrIndex) => (
//     //         <div key={addrIndex}>
//     //           <p>Address:</p>
//     //           {Object.entries(address).map(([key, value]) => (
//     //             <p key={key}>
//     //               <strong>{key}:</strong> {value}
//     //             </p>
//     //           ))}
//     //           {/* If latitude is directly available in the address object */}
//     //           {/* Uncomment the following lines if latitude is directly available */}
//     //           {address.latitude && (
//     //             <p>Latitude: {address.latitude}</p>
//     //           )}
//     //         </div>
//     //       ))}
//     //     </div>
//     //   ))}
//     // </div>
//     <div className="leaftlet">
//       <MapContainer center={[38.505, -0.45]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[48.856857, 2.350401]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//         <Marker position={[44.856857, 2.380401]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

// export default Home;


function Home() {
  
  const [administration, setAdministration] = useState<Administration[] | undefined>();
  const [latitudes, setLatitudes] = useState<string[]>([]);
  const [longitudes, setLongitudes] = useState<string[]>([]);

  const data = useFetch<Administration[]>(); // Assuming useFetch handles fetching Administration data

  useEffect(() => {
    if (data) {
      setAdministration(data);
    }
  }, [data]);

  useEffect(() => {
    if (administration) {
      const newLatitudes = administration.map(item => {
        return JSON.parse(item.adresse)[0].latitude
      })


      const newLongitudes = administration.map(item => {
        return JSON.parse(item.adresse)[0].longitude      
      });




      setLatitudes(newLatitudes);
      setLongitudes(newLongitudes);
    }
  }, [administration]);

  // console.log(latitudes)

  return (
    <div className="leaftlet">
      <MapContainer center={[38.505, -0.45]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Render markers based on latitudes and longitudes */}
        {latitudes.map((latitude, idx) => (
          <Marker key={idx} position={[parseFloat(latitude), parseFloat(longitudes[idx])]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Home;

