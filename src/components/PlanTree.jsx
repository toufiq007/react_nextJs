import NextPlan from "./NextPlan";

const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      <ol>
        {childPlaces.length > 0 &&
          childPlaces.map((item) => <PlaceTree key={item.id} place={item} />)}
      </ol>
    </li>
  );
};

export default PlaceTree;
