import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useRef, useState } from 'react';
import * as Styled from './SecurityCode.styles';

interface SecurityCodeProps {
  securityCode: string;
  isSetSecurityCode: (value: string) => boolean;
}

const SecurityCode = ({
  securityCode,
  isSetSecurityCode,
}: SecurityCodeProps) => {
  const securityCodeRef = useRef<HTMLInputElement>(null);
  const [isShowToolTip, setIsShowToolTip] = useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isSetSecurityCode(e.target.value)) return;
  };

  return (
    <>
      <CardLabel labelText="보안 코드(CVC/CVV)" />
      <Styled.Wrapper>
        <Styled.InputWrapper>
          <CardInput
            type="password"
            maxLength={3}
            ref={securityCodeRef}
            onChange={handleCardInputChange}
            value={securityCode}
            placeholder="•••"
            required={true}
          />
        </Styled.InputWrapper>
        {isShowToolTip ? (
          <Styled.ToolTip
            onClick={() => {
              setIsShowToolTip(false);
            }}
          >
            카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리를 적어주세요.
          </Styled.ToolTip>
        ) : (
          <Styled.QuestionButton
            type="button"
            tabIndex={-1}
            onClick={() => {
              setIsShowToolTip(true);
            }}
          >
            ?
          </Styled.QuestionButton>
        )}
      </Styled.Wrapper>
    </>
  );
};

export default SecurityCode;
