import React from 'react';
import PropTypes from 'prop-types';

export default function Discription(props) {
  return (
    <div>
      <div className=" container">
        <div className="discription">
          <div className="title">
            <h3>welcome to</h3>
            <h2>{props.name}</h2>
            <span className="line"></span>
            <p>
              We are the leader with 25 years of experience in the construction
              market!
            </p>
          </div>
          <div className="dis">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non
              adipisci nisi facere ex recusandae maiores blanditiis. Porro nihil
              vitae veritatis itaque, doloribus fuga quam magnam perspiciatis
              quod voluptate, illum fugit quae autem recusandae amet eum
              assumenda et. Blanditiis repellendus corporis rem, dolores
              provident sed voluptas iusto neque quod eaque? Nostrum quidem
              rerum iste illum laudantium nobis, totam exercitationem tempora
              quam dolores harum vel libero et quia vero doloremque labore ipsum
              maiores? Accusantium quae, soluta dolore voluptatibus iste
              accusamus eos! Sit nobis et quaerat, nostrum quisquam corporis in
              ullam quas dolorem id? Ea repudiandae saepe, ipsa necessitatibus
              dicta omnis nisi cumque aperiam laborum, numquam harum
              voluptatibus? Perferendis, voluptatibus nostrum at omnis autem
              nihil. Totam laborum alias ad eos ipsam nisi. Voluptatibus,
              commodi mollitia. Odio provident reprehenderit ut eos voluptatem
              beatae error incidunt modi ex velit, quos commodi ab quaerat nobis
              deserunt dignissimos. Placeat cum sed fugit magni. Quas dolor enim
              illo! Nihil quis magnam ex tempore dicta voluptatum hic voluptatem
              fugiat. Deleniti ipsum dolorem placeat non nisi animi eius ipsam
              voluptatem illo corporis? Modi qui odio nostrum animi id
              veritatis, libero excepturi possimus quisquam facere est,
              recusandae ullam eligendi ducimus aperiam voluptates vitae ratione
              ipsa. Vero repellendus unde nostrum in illo commodi? Rerum magnam
              nostrum, porro ipsam dolore illo neque in dolores similique
              delectus! Dolores odio voluptate quo perspiciatis quis provident,
              tenetur consequatur, reprehenderit natus ratione a accusantium
              libero iusto corrupti facere quisquam, fugiat earum. Expedita
              nesciunt iusto vitae tempora aspernatur libero earum aperiam
              ducimus quod? Sit explicabo officia aspernatur distinctio
              reiciendis nam soluta, nesciunt adipisci ipsam sint eaque, rem
              debitis! Debitis quam illo sequi, eveniet dolor iure ab, facere
              sapiente, corrupti incidunt dolores! Tempore perspiciatis, earum,
              deserunt ducimus debitis iure vitae harum dolores non minus,
              quibusdam architecto distinctio est maiores quidem magni quisquam
              deleniti minima accusantium consectetur ullam. Esse.
            </p>
            <div className="btn">
              <a href="/" className="button1">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Discription.propTypes = {
  name: PropTypes.string,
};
Discription.defaultProps = {
  name: "Add name here",
};