import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Kontakt = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="main">
        <h1>Kontakt Valgstyrelsen</h1>

        <p className="body-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat
          felis vehicula class ultricies mollis dictumst, aenean non a in donec
          nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet
          aliquam, integer placerat et turpis mi eros nec lobortis taciti,
          vehicula nisl litora tellus ligula porttitor metus. Vivamus integer
          non suscipit taciti mus etiam at primis tempor sagittis sit, euismod
          libero facilisi aptent elementum felis blandit cursus gravida sociis
          erat ante, eleifend lectus nullam dapibus netus feugiat curae
          curabitur est ad. Massa curae fringilla porttitor quam sollicitudin
          iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros
          etiam praesent erat volutpat posuere hac. Metus fringilla nec
          ullamcorper odio aliquam lacinia conubia mauris tempor, etiam
          ultricies proin quisque lectus sociis id tristique, integer phasellus
          taciti pretium adipiscing tortor sagittis ligula. Mollis pretium lorem
          primis senectus habitasse lectus scelerisque donec, ultricies tortor
          suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur
          mi risus molestie curae malesuada cum. Dignissim lacus convallis massa
          mauris enim ad mattis magnis senectus montes, mollis taciti phasellus
          accumsan bibendum semper blandit suspendisse faucibus nibh est, metus
          lobortis morbi cras magna vivamus per risus fermentum. Dapibus
          imperdiet praesent magnis ridiculus congue gravida curabitur dictum
          sagittis, enim et magna sit inceptos sodales parturient pharetra
          mollis, aenean vel nostra tellus commodo pretium sapien sociosqu.
        </p>
        <div className="button-container-horizontal">
          <Button
            className="button"
            bg={"var(--primary_blue)"}
            color="var(--secondary_blue)"
            width="6rem"
            onClick={() => navigate(-1)}
          >
            Tilbage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
