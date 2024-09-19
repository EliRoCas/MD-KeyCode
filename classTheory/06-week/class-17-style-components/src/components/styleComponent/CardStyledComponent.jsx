import styled from "styled-components";

const StyleCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 300px;

  background-color: rgb(56, 56, 56);
  border-radius: 15px;
`;

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyleFigure = styled.figure`
  width: 100%;
  padding: 20px;
`;

const StyleImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const StyleH3 = styled.h3`
  margin: 0;
`;

const CardStyledComponent = () => {
  return (
    <StyleCard>
      <h2>Styled Component Card</h2>
      <StyleDiv>
        <StyleFigure>
          <StyleImg
            src="https://img.freepik.com/vector-gratis/ejemplo-lindo-historieta-ordenador-portatil-funcionamiento-fox_138676-2743.jpg?t=st=1726703659~exp=1726707259~hmac=5444fdcbcc782bd9ec3d787cba7ba2d6fe0e96bcf6c0a216e7bb897910db77bd&w=740"
            alt="dog with a laptop"
          />
        </StyleFigure>
      </StyleDiv>
      <StyleH3>Animals</StyleH3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        repudiandae in delectus cumque dolores nesciunt odit consequuntur
        recusandae ratione. Similique nisi est tempora sint mollitia? Illum
        ratione repudiandae molestias maiores.
      </p>
    </StyleCard>
  );
};

export default CardStyledComponent;
