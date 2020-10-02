// import React from "react";
// import { Card, Avatar, Col, Typography, Row } from "antd";
// import { IMAGE_BASE_URL } from "../../Config";

// const GridCards = () => {
//   return (
//     <Col lg={6} md={8} xs={24}>
//       <div style={{ position: "relative" }}>
//         <img style={{ width: "100%", height: "320px" }} />
//       </div>
//     </Col>
//   );
// };

// export default GridCards;

import React from "react";
import { Col } from "antd";

const GridCards = (props) => {
  let { image, movieId, movieName } = props;

  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${movieId}`}>
          <img
            style={{ width: "100%", height: "320px" }}
            alt={movieName}
            src={image}
          />
        </a>
      </div>
    </Col>
  );
};

export default GridCards;
