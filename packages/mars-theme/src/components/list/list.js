import React from "react";
import { connect,  decode } from "frontity";
import Item from "./Item/index.js";
import Pagination from "./pagination";
import AllCAtegories from './allCategories';
import { Container, Header } from './styles';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      <AllCAtegories />
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }, index) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} index={index} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

// const Container = styled.section`
//   width: 960px;
//   margin: 0;
//   margin-top: 30px;
//   padding: 1rem;
//   padding-top: 1.75rem;
//   list-style: none;
//   display: flex;
//   justify-content:space-between;
//   flex-wrap: wrap;
//   position: relative;
//   @media (max-width: 767px) {
//     margin-top: 60px;
//   }
// `;

// const Header = styled.h3`
//   font-weight: 300;
//   text-transform: capitalize;
//   color: rgba(12, 17, 43, 0.9);
// `;
