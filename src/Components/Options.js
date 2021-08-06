import styled from 'styled-components';


const Options = ({ Icon, title, number, selected }) => {
    return(
        <Container>
            <Icon />
            <Spacing>
                <h3>{title}</h3>
            </Spacing>
            <p>{number}</p>
        </Container>
    )
}

const Container = styled.main`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;
`;
const Spacing = styled.div`
    margin-left: 15px;
    margin-right: 10px;
`;

export default Options;