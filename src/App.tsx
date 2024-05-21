import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import marker from './marker.svg';

const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [24, 48],
  iconAnchor: [12, 48],
});

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="map-wrapper">
        <h2 className="map-title">Как до нас добраться?</h2>
        <div className="map-text">
          <p>
            <span>Особая экономическая зона «Алабуга»</span> — является крупным инвестиционным
            проектом в масштабах России и Республики Татарстан. В ОЭЗ ППТ «Алабуга» зарегистрировано
            64 компаний-резидентов, из них 38 компаний уже осуществляют промышленно-производственную
            деятельность, среди них такие мировые копании, как Kastamonu, Aurus, Armstromg,
            Транснефть-Синтез, Sollers, Rockwool и другие.
          </p>
          <p>
            <span>Алабуга — мудрый и терпеливый наставник для молодого поколения.</span> В «Алабуга
            Политех» более 2000 студентов получают прикладные знания из рук опытных
            инженеров-наставников, работают и реализуют свои первые проекты бок о бок с сотрудниками
            резидентов и уже с первого курса становятся настоящими специалистами и бойцами.Мы
            обучаем с нуля молодых специалистов без опыта и знаний, давая им все инструменты для
            получения стабильной работы, приобретения профессиональных навыков и становления в
            жизни.
          </p>
        </div>
        <MapContainer center={[55.8206, 52.0663]} zoom={7}>
          {/* <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
          <Marker position={[55.8206, 52.0663]} icon={myIcon} />
        </MapContainer>
      </div>

      <Footer />
    </>
  );
}

export default App;
