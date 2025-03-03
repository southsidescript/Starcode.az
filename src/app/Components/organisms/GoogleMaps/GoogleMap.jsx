'use client'
import style from '@/styles/global.module.scss'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

const GoogleMap = () => {
    const API_KEY ='AIzaSyC9GsFdUVrs7AUcKtotRTmhPA1ZAxbg38E';
    const center = { lat: 55.751244, lng: 37.618423 };
    const poi = {key: 'operaHouse', location: { lat: 40.37524632878011, lng:49.85122659213514   }}
    return (
        <div>
                    
                    <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
                    <Map
                      defaultZoom={17}
                      defaultCenter={ { lat: 40.37524632878011, lng: 49.85122659213514 } }
                      onCameraChanged={ (ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                      }
                      style={{width:'80vw',height:'300px',borderRadius: 
                        '10px',overflow:'hidden'
                      }}
                      mapId='19eabc1e81a481d9'
                      >
                        
                        <AdvancedMarker
                          key={poi.key}
                          position={poi.location}
                        ></AdvancedMarker>
                    </Map>
                    </APIProvider>
            
        </div>
    )
}

export default GoogleMap;