import { useEffect, useState } from "react";
import { Grid, Header, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Asset = ({ location }) => {
  console.log(location);
  let history = useHistory();
  const { data, href, links } = location?.result;

  const [assets, setAssets] = useState({});

  useEffect(() => {
    getAssets();
  }, [location]);

  const getAssets = async () => {
    try {
      const response = await axios.get(href);

      console.log(response.data);

      console.log(data);

      setAssets(response.data);
    } catch (err) {
      setAssets(null);
      history.push("/search");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid>
        <Grid.Column width={16}>
          <Link
            to={{
              pathname: `/search`,
            }}
          >
            Back to Search
          </Link>
          <Header as="h1" style={{ marginTop: "20px" }}>
            {data[0].title}
          </Header>

          <Segment>
            <p>{data[0].description}</p>
          </Segment>

          <Segment>
            {data[0].media_type === "image" ? (
              <Image
                src={assets[0]}
                ui={false}
                style={{ height: "100%", width: "100%" }}
              />
            ) : null}

            {data[0].media_type === "video" ? (
              <video width="320" height="240" controls>
                <source src={assets[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}

            {data[0].media_type === "audio" ? (
              <audio controls>
                <source src={assets[0]} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            ) : null}
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Asset;
