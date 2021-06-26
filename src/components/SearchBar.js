import axios from "axios";
import React, { useState } from "react";
import { Grid, Segment, Checkbox, Form, Button } from "semantic-ui-react";

import List from "./List";

const SearchBar = () => {
  const [results, setResults] = useState({});

  const [media, setMedia] = useState({
    image: true,
    audio: false,
    video: false,
  });

  const [searchValue, setSearchValue] = useState("");

  const apiUrl = "https://images-api.nasa.gov";

  const getData = async () => {
    try {
      const mediaArr = [];
      Object.entries(media).forEach((entry) => {
        const [key, value] = entry;

        if (value) {
          mediaArr.push(key);
        }
      });

      const response = await axios.get(
        `${apiUrl}/search?&media_type=${mediaArr.toString()}&q=${searchValue}`
      );

      setResults(response.data.collection.items);
    } catch (err) {
      setResults({});
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCheckBox = (type) => {
    if (type === "image") {
      return;
    }

    setMedia((prev) => ({
      ...prev,
      [type]: !media[type],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <Grid>
      <Grid.Column width={16}>
        <Segment>
          <Form>
            <Form.Field onChange={handleSearchChange}>
              <label>Search</label>
              <input placeholder="Example: Orion" />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="Images"
                checked={media.image}
                onChange={() => handleCheckBox("image")}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="Video"
                checked={media.video}
                onChange={() => handleCheckBox("video")}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="Audio"
                checked={media.audio}
                onChange={() => handleCheckBox("audio")}
              />
            </Form.Field>
            <Button type="submit" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Segment>

        <Segment>
          <List results={results} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SearchBar;
