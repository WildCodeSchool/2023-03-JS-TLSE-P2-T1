import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import FiltersMenu from "./components/FiltersMenu";
import Card from "./components/Card";
import PrimaryCheckboxButton from "./components/PrimaryCheckboxButton";
import Footer from "./components/Footer";

function App() {
  const [fetchedResult, setFetchedResult] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [eventsNbr, setEventsNbr] = useState(0);
  const [eventsResult, setEventResult] = useState();

  const [stadiumsNbr, setStadiumsNbr] = useState(0);
  const [stadiumsResult, setStadiumsResult] = useState();

  const [cinemasNbr, setCinemasNbr] = useState(0);
  const [cinemasResult, setCinemasResult] = useState();

  const [finalResult, setFinalResult] = useState([]);

  const [isFiltersMenuVisible, setIsFiltersMenuVisible] = useState(false);

  // Navbar Filters related states
  const [navbarDisplayedTags, setNavbarDisplayedTags] = useState([]);

  // FilterTags related states
  // selectedFilterTags : array of tags that have been chosen by user by clicking on corresponding buttons
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);

  // PrimaryCheckboxButtons related states
  // defining two states for the buttons to know if they are clicked or not
  const [sportButtonClicked, setSportButtonClicked] = useState(false);
  const [cultureButtonClicked, setCultureButtonClicked] = useState(false);

  // Defining number of events
  useEffect(() => {
    axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=0&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation"
      )
      .then((res) => setEventsNbr(res.data.nhits))
      .catch((err) => console.error(err));
  }, []);

  // Fetching the API with rows equal to number of events, putting result into a result object
  useEffect(() => {
    if (eventsNbr > 0) {
      axios
        .get(
          `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=${eventsNbr}&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation`
        )
        .then((res) => {
          const data = res.data.records.map((el) => ({
            api: "events",
            name: el.fields.nom_de_la_manifestation,
            shortDescription: el.fields.descriptif_court,
            longDescription: el.fields.descriptif_long,
            // Sport nature depends whether "Sport" is declared in "categorie de la manifestation". If not, it is a cultural event
            nature:
              el.fields.categorie_de_la_manifestation &&
              el.fields.categorie_de_la_manifestation.includes("Sport")
                ? "sport"
                : "culture",
            isPlace: false,
            id: el.fields.identifiant,
            coordinates: el.fields.geo_point,
            // defining the adress result as 'XX rue de XXX, 31XXX SOMECITY"
            adress: `${
              el.fields.lieu_adresse_2
            }, ${el.fields.code_postal.toString()} ${el.fields.commune}`,
            // defining the tags result as an array of tags, split by comma, from el.fields.theme_de_la_manifestation, only if it exists
            tags:
              el.fields.theme_de_la_manifestation &&
              el.fields.theme_de_la_manifestation.split(", "),
            schedules: el.fields.dates_affichage_horaires,
            phone: el.fields.reservation_telephone,
            email: el.fields.reservation_email,
            startingDate: el.fields.date_debut,
            endingDate: el.fields.date_fin,
            access: el.fields.station_metro_tram_a_proximite,
          }));
          setEventResult(data);
        });
    }
  }, [eventsNbr]);

  // Defining number of stadiums
  useEffect(() => {
    axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=0"
      )
      .then((res) => setStadiumsNbr(res.data.nhits))
      .catch((err) => console.error(err));
  }, []);

  // Fetching the API with rows equal to number of stadiums, putting result into a result object
  useEffect(() => {
    if (stadiumsNbr > 0) {
      axios
        .get(
          `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=${stadiumsNbr}`
        )
        .then((res) => {
          const data = res.data.records.map((el) => ({
            api: "stadiums",
            name: el.fields.ins_nom,
            shortDescription: el.fields.ins_complexe_nom,
            longDescription: el.fields.ins_detail_equ,
            // Sport nature depends whether "Sport" is declared in "categorie de la manifestation". If not, it is a cultural event
            nature: "sport",
            isPlace: true,
            id: el.recordid,
            coordinates: el.fields.geo_point_2d,
            // getting adress from API. If it doesn't exist, developer must write a condition that returns sector instead
            adress: `${
              el.fields.ins_adresse
            }, ${el.fields.ins_codepostal.toString()}`,
            tags: ["Stade"],
          }));
          setStadiumsResult(data);
        });
    }
  }, [stadiumsNbr]);

  // Defining number of cinemas
  useEffect(() => {
    axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=cinemas&q=&rows=0"
      )
      .then((res) => setCinemasNbr(res.data.nhits))
      .catch((err) => console.error(err));
  }, []);

  // Fetching the API with rows equal to number of cinemas, putting result into a result object
  useEffect(() => {
    if (cinemasNbr > 0) {
      axios
        .get(
          `https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=cinemas&q=&rows=${cinemasNbr}`
        )
        .then((res) => {
          const data = res.data.records.map((el) => ({
            api: "cinemas",
            name: el.fields.eq_nom_equipement,
            nature: "culture",
            isPlace: true,
            id: el.recordid,
            coordinates: el.fields.geo_point_2d,
            adress: `${el.fields.numero} ${
              el.fields.lib_off
            }, ${el.fields.id_secteur_postal.toString()} ${el.fields.eq_ville}`,
            tags: ["Cinéma"],
          }));
          setCinemasResult(data);
        });
    }
  }, [cinemasNbr]);

  // Concatinating all results into fetchedResult
  useEffect(() => {
    if (eventsResult && cinemasResult && stadiumsResult) {
      // sort elements from minimum difference between (starting date or ending date) and today to maximum difference, then by nature
      const sortedByDate = [
        ...eventsResult,
        ...cinemasResult,
        ...stadiumsResult,
      ].sort((a, b) => {
        // declaring now as today's date
        const now = new Date().getTime();

        // declaring aDate as the minimum difference between (starting date or ending date) and today
        let aDate = null;
        // if both starting date and ending date exist, aDate is the minimum difference between both and today
        if (a.startingDate && a.endingDate) {
          const diff1 = Math.abs(new Date(a.startingDate).getTime() - now);
          const diff2 = Math.abs(new Date(a.endingDate).getTime() - now);
          aDate = Math.min(diff1, diff2);
          // if only starting date exists, aDate is the difference between starting date and today
        } else if (a.startingDate) {
          aDate = Math.abs(new Date(a.startingDate).getTime() - now);
          // if only ending date exists, aDate is the difference between ending date and today
        } else if (a.endingDate) {
          aDate = Math.abs(new Date(a.endingDate).getTime() - now);
        }
        // declaring bDate as the minimum difference between (starting date or ending date) and today
        let bDate = null;
        // if both starting date and ending date exist, bDate is the minimum difference between both and today
        if (b.startingDate && b.endingDate) {
          const diff1 = Math.abs(new Date(b.startingDate).getTime() - now);
          const diff2 = Math.abs(new Date(b.endingDate).getTime() - now);
          bDate = Math.min(diff1, diff2);
          // if only starting date exists, bDate is the difference between starting date and today
        } else if (b.startingDate) {
          bDate = Math.abs(new Date(b.startingDate).getTime() - now);
          // if only ending date exists, bDate is the difference between ending date and today
        } else if (b.endingDate) {
          bDate = Math.abs(new Date(b.endingDate).getTime() - now);
        }
        // if both aDate and bDate exist, sort by minimum difference between both and today
        return aDate !== null && bDate !== null
          ? aDate - bDate
          : // if only aDate exists, sort by aDate
            (aDate === null ? 1 : -1) || a.nature.localeCompare(b.nature);
      });

      setFetchedResult(sortedByDate);
    }
  }, [eventsResult, cinemasResult, stadiumsResult]);

  // Initial finalResult set from fetchedResult
  useEffect(() => {
    if (fetchedResult) {
      setFinalResult(fetchedResult);
      setIsLoaded(true);
    }
  }, [fetchedResult]);

  // list all unfiltered cards by map finalResul in a component Card
  return (
    <div className="App">
      <NavBar
        isFiltersMenuVisible={isFiltersMenuVisible}
        setIsFiltersMenuVisible={setIsFiltersMenuVisible}
        navbarDisplayedTags={navbarDisplayedTags}
      />
      {isFiltersMenuVisible ? (
        <FiltersMenu
          fetchedResult={fetchedResult}
          isLoaded={isLoaded}
          setFinalResult={setFinalResult}
          setIsFiltersMenuVisible={setIsFiltersMenuVisible}
          setNavbarDisplayedTags={setNavbarDisplayedTags}
          selectedFilterTags={selectedFilterTags}
          setSelectedFilterTags={setSelectedFilterTags}
          setCultureButtonClicked={setCultureButtonClicked}
          setSportButtonClicked={setSportButtonClicked}
        />
      ) : null}
      {/* the beneath div corresponds to the header section */}
      <header>
        <PrimaryCheckboxButton
          isFiltersMenuVisible={isFiltersMenuVisible}
          setFinalResult={setFinalResult}
          fetchedResult={fetchedResult}
          setSelectedFilterTags={setSelectedFilterTags}
          setNavbarDisplayedTags={setNavbarDisplayedTags}
          sportButtonClicked={sportButtonClicked}
          cultureButtonClicked={cultureButtonClicked}
          setSportButtonClicked={setSportButtonClicked}
          setCultureButtonClicked={setCultureButtonClicked}
        />
      </header>
      <main>
        <div
          className={`listContainer ${isFiltersMenuVisible ? "hidden" : ""}`}
        >
          {isLoaded
            ? finalResult.map((el) => (
                <Card
                  isFiltersMenuVisible={isFiltersMenuVisible}
                  key={el.id}
                  api={el.api}
                  name={el.name}
                  shortDescription={el.shortDescription}
                  tags={el.tags}
                  address={el.address}
                  schedules={el.schedules}
                />
              ))
            : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
