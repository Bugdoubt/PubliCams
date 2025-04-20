
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import webcams from '../data/webcams.json';

export default function WebcamMap() {
  return (
    <div className="h-[80vh] rounded-xl overflow-hidden">
      <MapContainer center={[57.1497, -2.0943]} zoom={13} scrollWheelZoom={true} className="h-full w-full z-10">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {webcams.map((cam) => (
          <Marker key={cam.id} position={[cam.latitude, cam.longitude]}>
            <Popup>
              <h2 className="font-bold">{cam.title}</h2>
              <iframe
                src={cam.streamUrl}
                width="280"
                height="157"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={cam.title}
              ></iframe>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
