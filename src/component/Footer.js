import styled from 'styled-components'

const StyleFooter = styled.footer`
  background-color: #fff9f9;
  width: 100%;
  height: 100px;
`
const StyleSection = styled.section`
  margin-left: 15%;
`
const StyleH6 = styled.h6`
  color: #858585;
`

export const Footer = () => {

  return (
    <StyleFooter>
      <StyleSection>
        <StyleH6>Copyright @ 2022 Todo-List</StyleH6>
        <h5>사업명 : Todo-List | 사업장주소 :  경기도 용인시 반짝반짝빌딩 1101층 | 주식회사 : 오늘의 나에게Todo-List</h5>
      </StyleSection>
    </StyleFooter>
  );
}