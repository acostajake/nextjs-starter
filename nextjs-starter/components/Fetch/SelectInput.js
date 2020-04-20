import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';

import { showsToSearch } from '../../lib/shows';
import { getAvatar, getNewShowData } from '../../helpers/filterData';

const SelectInput = ({ classes, setData, updateSelection, updateShowName }) => {
    const [showName, setShowName] = useState('Batman');

    const selectMenuItem = async e => {
        e.preventDefault();
        const show = e.target.value;
        const avatar = getAvatar(show);
        const results = await getNewShowData(show);
        setShowName(show);
        setData({ data: results });
        updateSelection(results[0], avatar);
      };

  return (
    <Select
      className={classes.halfWidth}
      autoWidth
      labelId="select-name-label"
      label="Select a show"
      id="show-name"
      variant="outlined"
      value={showName}
      onChange={e => selectMenuItem(e)}
    >
      {showsToSearch.map(each => (
        <MenuItem dense key={each.avatar} value={each.name}>
          {each.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;