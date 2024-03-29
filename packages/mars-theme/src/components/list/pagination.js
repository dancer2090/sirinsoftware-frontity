import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Link from '../link';
import { PaginationContainer, Text } from './styles';

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <PaginationContainer>
      {/* If there's a next page, render this link */}
      {next && (
        <Link link={next}>
          <Text>← Older posts</Text>
        </Link>
      )}

      {previous && next && ' - '}

      {/* If there's a previous page, render this link */}
      {previous && (
        <Link link={previous}>
          <Text>Newer posts →</Text>
        </Link>
      )}
    </PaginationContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

// const PaginationContainer = styled.div`
//   margin-top: 2.68rem;
//   width:100%;
//   display: flex;
//   justify-content: center;
// `;
// const Text = styled.em`

//   font-family: Belleza;
//   font-style: normal;
//   font-weight: 800;
//   font-size: 1rem;
//   line-height: 1.375rem;
//   text-align: center;
//   text-transform: uppercase;
//   color: #FFAD39;
//   @media (max-width: 767px) {
//     font-size: 1.5rem;
//     line-height:1.375rem
//   }
// `;
