import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import webcams from '../data/webcams.json';
import L from 'leaflet';

// Fix leaflet icons not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

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
              <h2 className="font-bold mb-2">{cam.title}</h2>
              <img
                src={cam.streamUrl}
                alt={cam.title}
                width="320"
                height="180"
                className="rounded"
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}