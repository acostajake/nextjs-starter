import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

import { getNewShowData } from '../../helpers/filterData';


const TypedInput = ({ classes, setData, updateSelection, updateShowName }) => {
    const [typedShowName, setTypedName] = useState('');
    
    const typeInput = e => {
        setTypedName(e.target.value);
    };

    const tryTypedSearch = async () => {
        const avatar = 'https://media.giphy.com/media/ECtLJKdGj8jfy/giphy.gif'
        const results = await getNewShowData(typedShowName);
        updateShowName(typedShowName);
        setData({ data: results });
        updateSelection(results[0], avatar);
    }
    
    return (
        <>
            <TextField
                className={classes.halfWidth}
                id="outlined-show-input"
                label="Show-Name"
                type="text"
                autoComplete="name organization-title"
                onChange={e => typeInput(e)}
                variant="outlined"
            />
            <Button onClick={() => tryTypedSearch()} type="submit" disabled={!typedShowName}>
                Search
            </Button>
        </>
    );
};

export default TypedInput;