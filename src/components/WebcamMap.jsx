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

export default function WebcamMap({ onSelectCam }) {
  return (
    <MapContainer center={[57.1497, -2.0943]} zoom={13} scrollWheelZoom={true} className="h-full w-full z-10">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {webcams.map((cam) => (
        <Marker key={cam.id} position={[cam.latitude, cam.longitude]} eventHandlers={{
          click: () => {
            onSelectCam(cam);
          }
        }}>
          <Popup>
            <h2 className="font-bold mb-1">{cam.title}</h2>
            <p className="text-xs">{cam.location}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}