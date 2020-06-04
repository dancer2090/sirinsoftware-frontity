import { styled } from 'frontity';

export const  AllCategoriesContainer = styled.div`
    position: absolute;
    top: 0;
    right:0;
    z-index: 2;
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
    padding: 1.125rem 1.25rem;
    ::after {
        cursor: pointer;
        display:inline-block;
        margin-left: 1rem;
        content: '';
        width: 8px;
        height: 8px;
        border-left: 2px solid  #FFFFFF;
        border-top: 2px solid  #FFFFFF;
        transform: rotate(${ (props) => ( props.isOpen ? '45deg' : '-135deg') });
        
    }
`;

export const AllCategoriesContent = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    display: ${ (props) => ( props.isOpen ? 'block': 'none') };
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
