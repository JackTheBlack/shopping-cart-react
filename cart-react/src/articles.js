import React from "react";

function ARTICLES({ products }) {
  return (
    <div>
      <div>
        {products &&
          products.map((i, index) => {
            return (
              <section>
                <img
                  src={i.img}
                  alt="Girl in a jacket"
                  width="500"
                  height="600"
                />
                <br />
                <p>{i.name}</p>
              </section>
            );
          })}
      </div>
    </div>
  );
}

export default ARTICLES;
