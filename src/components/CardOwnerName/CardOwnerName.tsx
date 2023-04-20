import { useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface CardOwnerNameProps {
  ownerName: string;
  setOwnerName: React.Dispatch<React.SetStateAction<string>>;
}

const CardOwnerName = ({ ownerName, setOwnerName }: CardOwnerNameProps) => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.target.value.length === 0) setOwnerName('');
    if (!/[A-Za-z\s]+$/.test(e.target.value)) return;

    setOwnerName(e.target.value.toUpperCase());
  };

  return (
    <>
      <LabelContainer>
        <CardLabel labelText="카드 소유자 이름(선택)" />
        <CardLabel labelText={`${nameRef.current?.value.length || 0} / 30`} />
      </LabelContainer>
      <Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={nameRef}
          onChange={handleCardInputChange}
          value={ownerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
        />
      </Wrapper>
    </>
  );
};

export default CardOwnerName;
