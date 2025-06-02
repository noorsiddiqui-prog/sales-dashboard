'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { createFlagIcon } from '@/helpers/utils';

// Fix default Leaflet icon issue for Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// Type for a user with location
interface UserLocation {
  ip: string;
  country: string;
  lat: number;
  lon: number;
}

const UserMap: React.FC = () => {
  const [users, setUsers] = useState<UserLocation[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // Example static users — replace with API call later
      const sampleUsers: UserLocation[] = [
        { ip: '8.8.8.8', country: 'US', lat: 37.751, lon: -97.822 },
        { ip: '91.198.174.192', country: 'NL', lat: 52.1326, lon: 5.2913 },
        { ip: '203.0.113.5', country: 'IN', lat: 20.5937, lon: 78.9629 },
      ];
      setUsers(sampleUsers);
    };

    fetchUsers();
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '320px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {users.map((user, index) => (
        <Marker
          key={index}
          position={[user.lat, user.lon]}
          icon={createFlagIcon(user.country)}
        >
          <Popup>
            User from <strong>{user.country}</strong><br />IP: {user.ip}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default UserMap;
