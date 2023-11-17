import styled from 'styled-components';

type ModalProps = {
    className?: string,
    blur?: boolean,
    animated?: boolean,
    theme?: 'dark' | 'light' | 'neutral' ,
    Content: JSX.Element
}

export default function Modal({ className, animated, blur, Content, theme }: ModalProps ) {
  
  return (
    <ModalStyled role='dialog' className={className} data-blur={blur} data-animated={animated} data-theme={theme}>
        <div className='modal-content'>
          { Content }
        </div>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
    position: fixed;
    display: grid;
    place-content: center;
    width: 100%;
    inset: 0;
    /* background-color: rgba(250,250,250, 0.9); */
    z-index: 100;
    opacity: 0;
    pointer-events: none;


    &[data-animated] {
      transition: opacity 100ms ease-out;
    }
    &[data-theme="dark"] {
      background-color: rgba(10,10,10, 0.6);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }
    &[data-theme="light"] {
      background-color: rgba(250,250,250, 0.6);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }
    &[data-theme="neutral"] {
      background-color: rgba(100,80, 80, 0.05);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
`;