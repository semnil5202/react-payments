import { useRef, useState } from 'react';
import styled from 'styled-components';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

const CardNumbers = () => {
  const refObject: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  const [typing, setTyping] = useState<any>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }

    setTyping({ ...typing, [currentOrder]: e.target.value });

    if (refObject[currentOrder].current?.value.length === 4) {
      if (currentOrder === 3) return;
      refObject[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="카드 번호" />
      <Wrapper>
        <CardInput
          type="text"
          maxLength={4}
          ref={refObject[0]}
          onChange={handleCardInputChange}
          value={typing[0]}
          order={0}
        />
        {refObject[0].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="text"
          maxLength={4}
          ref={refObject[1]}
          onChange={handleCardInputChange}
          value={typing[1]}
          order={1}
        />
        {refObject[1].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="password"
          maxLength={4}
          ref={refObject[2]}
          onChange={handleCardInputChange}
          value={typing[2]}
          order={2}
        />
        {refObject[2].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="password"
          maxLength={4}
          ref={refObject[3]}
          onChange={handleCardInputChange}
          value={typing[3]}
          order={3}
        />
      </Wrapper>
    </>
  );
};

export default CardNumbers;
