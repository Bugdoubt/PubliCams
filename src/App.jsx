import { useState } from 'react';
import WebcamMap from './components/WebcamMap';

function App() {
  const [selectedCam, setSelectedCam] = useState(null);

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <main className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Live Cams – Aberdeen</h1>
        {selectedCam ? (
          <div>
            <h2 className="text-lg font-semibold mb-2">{selectedCam.title}</h2>
            <img
              src={selectedCam.streamUrl}
              alt={selectedCam.title}
              className="rounded w-full mb-2 cursor-pointer hover:opacity-90 transition"
              onClick={() => openInNewTab(selectedCam.streamUrl)}
            />
            <p className="text-sm text-gray-400">{selectedCam.location}</p>
            <p className="text-xs text-gray-500 mt-1">(Click image to view full screen)</p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Select a camera on the map.</p>
        )}
      </div>
      <div className="flex-1">
        <WebcamMap onSelectCam={setSelectedCam} />
      </div>
    </main>
  );
}

export default App;