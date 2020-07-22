import { styled } from 'frontity';

export const AllCategoriesContainer = styled.div`
    position: absolute;
    top: 0;
    right:1rem;
    z-index: 1;
    @media (max-width: 767px) {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }
`;
export const AllCategoriesHeader = styled.div`
    background: linear-gradient(273.94deg, #3FA54A 3.6%, #216628 97.69%);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: .875rem;
    line-height: 0.875rem;
    letter-spacing: 0.02rem;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
    padding: 1.125rem 1.25rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 1);
      pointer-events: none;
      transition: all .3s ease-in-out;
    }
    &:hover {
      &:before {
        opacity: .1;
      }
    }
    &:after {
        cursor: pointer;
        display:inline-block;
        margin-left:1rem;
        content: '';
        width: 8px;
        height: 8px;
        border-left: 2px solid  #FFFFFF;
        border-top: 2px solid  #FFFFFF;
        position: relative;
        top: -2px;
        transition: all 0.3s ease-in-out;
        transform: rotate(${(props) => (props.isOpen ? '45deg' : '-135deg')});
        @media (max-width: 767px) {
            position:absolute;
            right:5%;
            transform: translateY(-31%) rotate(${(props) => (props.isOpen ? '45deg' : '-135deg')});
            top: 42%;
        }
    }
`;

export const AllCategoriesContent = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    padding: 1.125rem ;
    padding-bottom:0.5rem;
`;

export const AllCategoriesItem = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 0.875rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #222222;
    padding-bottom:0.56rem;
    cursor: pointer;
    : hover {
        color: #333555;
    }
`;
