import React from 'react';
import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { Autocomplete } from "@mui/material";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const keywords = ["video", "photo", "text", "gift", "family", "friends", "other"];

    const handleChange = (event, newValue) => {
        setSearchTerm(newValue);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Autocomplete
                id="search"
                freeSolo
                options={keywords}
                renderInput={(params) => (
                    <TextField {...params}
                        label="Search"
                        onChange={handleChange}
                        sx={{ width: 600 }}
                    />
                )}
            />
        </Container>
    );
}

export default SearchBar;
