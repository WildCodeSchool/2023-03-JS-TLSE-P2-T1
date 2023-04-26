import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SportCultureMenu from "./SportCultureMenu";
import PlaceEventsMenu from "./PlaceEventsMenu";
import DateFilter from "./DateFilter";

function FiltersMenu({ fetchedResult, isLoaded }) {
  const [isSportChecked, setIsSportChecked] = useState(false);
  const [isCultureChecked, setIsCultureChecked] = useState(false);
  const [isPlaceChecked, setIsPlaceChecked] = useState(false);
  const [isEventChecked, setIsEventChecked] = useState(false);
  const [dateFilter, setDateFilter] = useState();

  const [firstLineResult, setFirstLineResult] = useState(fetchedResult);
  const [secondLineResult, setSecondLineResult] = useState(fetchedResult);

  const [mainFilterResult, setMainFilterResult] = useState(fetchedResult);

  // Define the first line
  const handleFirstLineResult = () => {
    if (isSportChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "sport"));
    } else if (isCultureChecked) {
      setFirstLineResult(fetchedResult.filter((el) => el.nature === "culture"));
    } else {
      setFirstLineResult(fetchedResult);
    }
  };

  // Define the second line
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
    <div>
      <SportCultureMenu
        isSportChecked={isSportChecked}
        setIsSportChecked={setIsSportChecked}
        isCultureChecked={isCultureChecked}
        setIsCultureChecked={setIsCultureChecked}
      />
      <PlaceEventsMenu
        isPlaceChecked={isPlaceChecked}
        setIsPlaceChecked={setIsPlaceChecked}
        isEventChecked={isEventChecked}
        setIsEventChecked={setIsEventChecked}
      />
      <DateFilter setDateFilter={setDateFilter} />
      <p>{dateFilter}</p>
      <p>{mainFilterResult.length ? mainFilterResult[0].name : null}</p>
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
};

export default FiltersMenu;
