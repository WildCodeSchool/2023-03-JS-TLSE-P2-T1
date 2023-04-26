import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./TagsFilter.css";

function TagsFilter({ mainFilterResult, setFinalResult }) {
  // useState definitions
  // allMainFilters : tags obtained from mainFilterResult
  const [allMainFilterTags, setAllMainFilterTags] = useState([]);

  // selectedFilterTags : array of tags that have been chosen by user by clicking on corresponding buttons
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);

  useEffect(() => {
    // if mainFilterResult changes, selectedFilterTags are unselected
    setSelectedFilterTags([]);
    // create an array from all tags in mainFilterResult.tags array, no duplicates
    const allTags = [];
    mainFilterResult.forEach((el) => {
      el.tags.forEach((tag) => {
        // exclude the undefined tag
        if (!allTags.includes(tag) && tag) {
          allTags.push(tag);
        }
      });
    });
    setAllMainFilterTags(allTags);
  }, [mainFilterResult]);

  // handleTagClick modifies the list of selected tags on click on tag, in order to apply filters depending on the selected tags

  const handleTagClick = (tag) => {
    // tag is already selected ? it is removed from selectedFilterTags
    if (selectedFilterTags.includes(tag)) {
      const newSelectedFilterTags = selectedFilterTags.filter(
        (el) => el !== tag
      );
      setSelectedFilterTags(newSelectedFilterTags);
      // tag is not selected yet, it is added
    } else {
      setSelectedFilterTags([...selectedFilterTags, tag]);
    }
  };

  // when selectedFilterTags changes, useEffect filters mainFilterResult according to the selected tags

  useEffect(() => {
    let filteredByTags = [];
    // checks if at least one tag is selected
    if (selectedFilterTags.length !== 0) {
      filteredByTags = mainFilterResult.filter((item) => {
        return selectedFilterTags.some((tag) => {
          return item.tags.includes(tag);
        });
      });
    } else {
      filteredByTags = mainFilterResult;
    }

    setFinalResult(filteredByTags);
  }, [selectedFilterTags]);

  // return a list of tags from allMainFilterTags, with a button for each tag
  return (
    <div>
      {allMainFilterTags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => handleTagClick(tag)}
          className={selectedFilterTags.includes(tag) ? "selected" : ""}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

TagsFilter.propTypes = {
  mainFilterResult: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  setFinalResult: PropTypes.func.isRequired,
};

export default TagsFilter;
