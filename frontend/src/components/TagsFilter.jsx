import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./TagsFilter.css";

function TagsFilter({
  mainFilterResult,
  selectedFilterTags,
  setSelectedFilterTags,
  setFilteredResult,
}) {
  // useState definitions
  // allMainFilters : tags obtained from mainFilterResult
  const [allMainFilterTags, setAllMainFilterTags] = useState([]);

  useEffect(() => {
    // if mainFilterResult changes, selectedFilterTags are unselected
    setSelectedFilterTags([]);
    // create an array from all tags in mainFilterResult.tags array, no duplicates
    const allTags = [];
    mainFilterResult.forEach((el) => {
      if (el.tags) {
        el.tags.forEach((tag) => {
          // exclude the undefined tag
          if (!allTags.includes(tag) && tag) {
            allTags.push(tag);
          }
        });
      }
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
          // checks the existence of the tag in the item.tags array
          if (item.tags) {
            return item.tags.includes(tag);
          }
          // prevent ESlint from returning an error in case of no return
          return false;
        });
      });
    } else {
      filteredByTags = mainFilterResult;
    }

    setFilteredResult(filteredByTags);
  }, [selectedFilterTags]);

  // return a list of tags from allMainFilterTags, with a button for each tag
  return (
    <div>
      {allMainFilterTags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => handleTagClick(tag)}
          className={
            selectedFilterTags.includes(tag)
              ? "tagButton selectedTag"
              : "tagButton unselectedTag"
          }
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
  setFilteredResult: PropTypes.func.isRequired,
  selectedFilterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedFilterTags: PropTypes.func.isRequired,
};

export default TagsFilter;
