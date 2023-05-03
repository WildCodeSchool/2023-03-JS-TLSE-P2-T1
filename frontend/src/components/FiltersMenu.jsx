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
  selectedFilterTags,
  setSelectedFilterTags,
}) {
  const [isSportChecked, setIsSportChecked] = useState(false);
  const [isCultureChecked, setIsCultureChecked] = useState(false);
  const [isPlaceChecked, setIsPlaceChecked] = useState(false);
  const [isEventChecked, setIsEventChecked] = useState(false);
  const [isDateChosen, setIsDateChosen] = useState(false);
  const [dateChosen, setDateChosen] = useState("");

  // filteredResult : array of objects that have been filtered according to different filters
  const [filteredResult, setFilteredResult] = useState([]);

  // We define a state that filters the fetched data for each type of filter. Then, when we click on another filter, we apply the new filter to the previous

  // firstLineResult is about the sport/culture filter
  const [firstLineResult, setFirstLineResult] = useState(fetchedResult);
  // secondLineResult is about the place/event filter
  const [secondLineResult, setSecondLineResult] = useState(fetchedResult);
  // thirdLineResult is about the date filter
  const [thirdLineResult, setThirdLineResult] = useState(fetchedResult);

  const [mainFilterResult, setMainFilterResult] = useState(fetchedResult);

  // Define the first line result (sport/culture)
  const handleFirstLineResult = () => {
    if (isSportChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "sport"));
    } else if (isCultureChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "culture"));
    } else {
      setFirstLineResult(fetchedResult);
    }
  };

  // Define the second line result (lieu/event)
  const handleSecondLineResult = () => {
    if (isPlaceChecked) {
      setSecondLineResult(fetchedResult.filter((el) => el.isPlace === true));
    } else if (isEventChecked) {
      setSecondLineResult(fetchedResult.filter((el) => el.isPlace === false));
    } else {
      setSecondLineResult(fetchedResult);
    }
  };

  const handleThirdLineResult = () => {
    if (dateChosen && isDateChosen) {
      setThirdLineResult(
        fetchedResult.filter(
          (el) =>
            el.startingDate &&
            el.endingDate &&
            el.startingDate.split("-")[0] <= dateChosen.split("-")[0] &&
            dateChosen.split("-")[0] <= el.endingDate.split("-")[0] &&
            el.startingDate.split("-")[1] <= dateChosen.split("-")[1] &&
            dateChosen.split("-")[1] <= el.endingDate.split("-")[1] &&
            el.startingDate.split("-")[2] <= dateChosen.split("-")[2] &&
            dateChosen.split("-")[2] <= el.endingDate.split("-")[2]
        )
      );
    } else {
      setThirdLineResult(fetchedResult);
    }
  };

  // Define the main result when clicking on the first row
  const handleMainResFirstLineClick = () => {
    let twoLinesCondensed = [];

    if (dateChosen && isDateChosen) {
      twoLinesCondensed = secondLineResult.filter(
        (el) =>
          el.startingDate &&
          el.endingDate &&
          el.startingDate.split("-")[0] <= dateChosen.split("-")[0] &&
          dateChosen.split("-")[0] <= el.endingDate.split("-")[0] &&
          el.startingDate.split("-")[1] <= dateChosen.split("-")[1] &&
          dateChosen.split("-")[1] <= el.endingDate.split("-")[1] &&
          el.startingDate.split("-")[2] <= dateChosen.split("-")[2] &&
          dateChosen.split("-")[2] <= el.endingDate.split("-")[2]
      );
    } else {
      twoLinesCondensed = secondLineResult;
    }

    let newResult = [];

    if (isCultureChecked) {
      newResult = twoLinesCondensed.filter((el) => el.nature === "culture");
    } else if (isSportChecked) {
      newResult = twoLinesCondensed.filter((el) => el.nature === "sport");
    } else {
      newResult = twoLinesCondensed;
    }

    setMainFilterResult(newResult);
  };

  // Define the main result when clicking on the second row
  const handleMainResSecondLineClick = () => {
    let twoLinesCondensed = [];

    if (isCultureChecked) {
      twoLinesCondensed = thirdLineResult.filter(
        (el) => el.nature === "culture"
      );
    } else if (isSportChecked) {
      twoLinesCondensed = thirdLineResult.filter((el) => el.nature === "sport");
    } else {
      twoLinesCondensed = thirdLineResult;
    }

    let newResult = [];

    if (isPlaceChecked) {
      newResult = twoLinesCondensed.filter((el) => el.isPlace === true);
    } else if (isEventChecked) {
      newResult = twoLinesCondensed.filter((el) => el.isPlace === false);
    } else {
      newResult = twoLinesCondensed;
    }

    setMainFilterResult(newResult);
  };

  // Define the main result when clicking on the third row
  const handleMainResThirdLineClick = () => {
    let twoLinesCondensed = [];

    if (isPlaceChecked) {
      twoLinesCondensed = firstLineResult.filter((el) => el.isPlace === true);
    } else if (isEventChecked) {
      twoLinesCondensed = firstLineResult.filter((el) => el.isPlace === false);
    } else {
      twoLinesCondensed = firstLineResult;
    }

    let newResult = [];

    if (dateChosen && isDateChosen) {
      newResult = twoLinesCondensed.filter(
        (el) =>
          el.startingDate &&
          el.endingDate &&
          el.startingDate.split("-")[0] <= dateChosen.split("-")[0] &&
          dateChosen.split("-")[0] <= el.endingDate.split("-")[0] &&
          el.startingDate.split("-")[1] <= dateChosen.split("-")[1] &&
          dateChosen.split("-")[1] <= el.endingDate.split("-")[1] &&
          el.startingDate.split("-")[2] <= dateChosen.split("-")[2] &&
          dateChosen.split("-")[2] <= el.endingDate.split("-")[2]
      );
    } else {
      newResult = twoLinesCondensed;
    }

    setMainFilterResult(newResult);
  };

  useEffect(() => {
    if (isLoaded) {
      handleFirstLineResult();
      handleSecondLineResult();
      handleThirdLineResult();
      handleMainResFirstLineClick();
    }
  }, [isSportChecked, isCultureChecked, fetchedResult]);

  useEffect(() => {
    if (isLoaded) {
      handleFirstLineResult();
      handleSecondLineResult();
      handleThirdLineResult();
      handleMainResSecondLineClick();
    }
  }, [isPlaceChecked, isEventChecked, fetchedResult]);

  useEffect(() => {
    if (isLoaded) {
      handleFirstLineResult();
      handleSecondLineResult();
      handleThirdLineResult();
      handleMainResThirdLineClick();
    }
  }, [isDateChosen, dateChosen, fetchedResult]);

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
      <DateFilter
        isDateChosen={isDateChosen}
        setIsDateChosen={setIsDateChosen}
        dateChosen={dateChosen}
        setDateChosen={setDateChosen}
      />
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
  selectedFilterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedFilterTags: PropTypes.func.isRequired,
};

export default FiltersMenu;
