import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";

const List = ({ results }) => {
  const listItemsArr = [];

  Object.entries(results).forEach((entry) => {
    const [, resVal] = entry;

    listItemsArr.push(
      <Card key={resVal.data[0].nasa_id}>
        <Link
          to={{
            pathname: `/asset/${resVal.data[0].nasa_id}`,
            result: resVal,
          }}
        >
          {resVal.data[0].media_type === "image" ? (
            <Image
              src={resVal.links[0].href}
              ui={false}
              style={{ height: "100%", width: "100%" }}
            />
          ) : null}

          {resVal.data[0].media_type === "video" ? (
            <Image
              src={resVal.links[0].href}
              ui={false}
              style={{ height: "100%", width: "100%" }}
            />
          ) : null}

          {resVal.data[0].media_type === "audio" ? (
            <Image
              src="https://bioprocessintl.com/wp-content/uploads/2014/06/audio.jpg"
              ui={false}
              style={{ height: "100%", width: "100%" }}
            />
          ) : null}
        </Link>
      </Card>
    );
  });

  return <Card.Group itemsPerRow={4}>{listItemsArr}</Card.Group>;
};

export default List;
