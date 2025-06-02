import L from "leaflet";

export const createFlagIcon = (countryCode: string): L.DivIcon => {
  return L.divIcon({
    className: "",
    html: `
        <div style="
          width: 28px;
          height: 28px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
          border: 1px solid white;
        ">
          <img
            src="https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
      `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
};
