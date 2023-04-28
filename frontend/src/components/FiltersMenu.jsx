import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SportCultureMenu from "./SportCultureMenu";
import PlaceEventsMenu from "./PlaceEventsMenu";
import DateFilter from "./DateFilter";
import "./FiltersMenu.css";
import TagsFilter from "./TagsFilter";
import ApplyButton from "./ApplyButton";

function FiltersMenu({
  fetchedResult,
  isLoaded,
  setFinalResult,
  setIsFiltersMenuVisible,
}) {
  const [isSportChecked, setIsSportChecked] = useState(false);
  const [isCultureChecked, setIsCultureChecked] = useState(false);
  const [isPlaceChecked, setIsPlaceChecked] = useState(false);
  const [isEventChecked, setIsEventChecked] = useState(false);
  const [dateFilter, setDateFilter] = useState();

  // FilterTags related components
  // selectedFilterTags : array of tags that have been chosen by user by clicking on corresponding buttons
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);
  // filteredResult : array of objects that have been filtered according to different filters
  const [filteredResult, setFilteredResult] = useState([]);

  // We define a state that filters the fetched data for each type of filter. Then, when we click on another filter, we apply the new filter to the previous

  // firstLineResult is about the sport/culture filter
  const [firstLineResult, setFirstLineResult] = useState(fetchedResult);
  // secondLineResult is about the place/event filter
  const [secondLineResult, setSecondLineResult] = useState(fetchedResult);

  const [mainFilterResult, setMainFilterResult] = useState(fetchedResult);

  // Define the first line result
  const handleFirstLineResult = () => {
    if (isSportChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "sport"));
    } else if (isCultureChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "culture"));
    } else {
      setFirstLineResult(fetchedResult);
    }
  };

  // Define the second line result
  const handleSecondLineResult = () => {
    if (isPlaceChecked) {
      setSecondLineResult(fetchedResult.filter((el) => el.isPlace === true));
    } else if (isEventChecked) {
      setSecondLineResult(fetchedResult.filter((el) => el.isPlace === false));
    } else {
      setSecondLineResult(fetchedResult);
    }
  };

  // Define the main result when clicking on the first row
  const handleMainResFirstLineClick = () => {
    let newResult = [];

    if (isCultureChecked) {
      newResult = secondLineResult.filter((el) => el.nature === "culture");
    } else if (isSportChecked) {
      newResult = secondLineResult.filter((el) => el.nature === "sport");
    } else {
      newResult = secondLineResult;
    }

    setMainFilterResult(newResult);
  };

  // Define the main result when clicking on the second row
  const handleMainResSecondLineClick = () => {
    let newResult = [];

    if (isPlaceChecked) {
      newResult = firstLineResult.filter((el) => el.isPlace === true);
    } else if (isEventChecked) {
      newResult = firstLineResult.filter((el) => el.isPlace === false);
    } else {
      newResult = firstLineResult;
    }

    setMainFilterResult(newResult);
  };

  useEffect(() => {
    if (isLoaded) {
      handleFirstLineResult();
      handleSecondLineResult();
      handleMainResFirstLineClick();
    }
  }, [isSportChecked, isCultureChecked, fetchedResult]);

  useEffect(() => {
    if (isLoaded) {
      handleFirstLineResult();
      handleSecondLineResult();
      handleMainResSecondLineClick();
    }
  }, [isPlaceChecked, isEventChecked, fetchedResult]);

  return (
    <div className="filtersMenu">
      <div className="crossContainer">
        <button type="button" onClick={() => setIsFiltersMenuVisible(false)}>
          <img
            src="/assets/close_icon.svg"
            alt="Croix de fermeture"
            className="closingCross"
          />
        </button>
      </div>
      <h3>Je suis amateur de :</h3>
      <SportCultureMenu
        isSportChecked={isSportChecked}
        setIsSportChecked={setIsSportChecked}
        isCultureChecked={isCultureChecked}
        setIsCultureChecked={setIsCultureChecked}
      />
      <hr />
      <h3>Je cherche :</h3>
      <PlaceEventsMenu
        isPlaceChecked={isPlaceChecked}
        setIsPlaceChecked={setIsPlaceChecked}
        isEventChecked={isEventChecked}
        setIsEventChecked={setIsEventChecked}
      />
      <hr />
      <DateFilter setDateFilter={setDateFilter} />
      <p>{dateFilter}</p>
      <p>{mainFilterResult.length ? mainFilterResult[0].name : null}</p>
      <hr />
      <TagsFilter
        mainFilterResult={mainFilterResult}
        setFilteredResult={setFilteredResult}
        selectedFilterTags={selectedFilterTags}
        setSelectedFilterTags={setSelectedFilterTags}
      />
      <ApplyButton
        filteredResult={filteredResult}
        setFinalResult={setFinalResult}
        setIsFiltersMenuVisible={setIsFiltersMenuVisible}
      />
    </div>
  );
}

FiltersMenu.propTypes = {
  fetchedResult: PropTypes.arrayOf(
    PropTypes.shape({
      nature: PropTypes.string.isRequired,
      isPlace: PropTypes.bool.isRequired,
    })
  ).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  setFinalResult: PropTypes.func.isRequired,
  setIsFiltersMenuVisible: PropTypes.func.isRequired,
};

export default FiltersMenu;
