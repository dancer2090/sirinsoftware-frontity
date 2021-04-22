import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import {
  Container,
  HeaderFilter,
  FilterItem,
  CaseWrapper,
  ItemBlock,
  LastItem,
  LastItemFrame,
  LastItemTitle,
  LastItemDescription,
  ItemWrapper,
  ItemTitle,
  ItemLabel,
  ItemDescription,
  CaseItemTitle,
  CaseContent,
  CaseItemWrapper,
} from './styles';
import CaseBox from '../../../../img/case-box.svg';
import Breadcrumbs from '../../../Breadcrumbs';
import Link from '../../../link';

const CaseStudies = ({ state, actions, libraries }) => {
  const [active, setActive] = useState(-1);
  const [filter, setFilter] = useState({});
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const data = [];
  const dataCat = [];
  dataCat[0] = 'All';

  const { acf: optionsAcf = {} } = state.options;
  const { cs_text = '', cs_title = '' } = optionsAcf;
  let megaItems = [];
  megaItems = state.theme.cases;
  if (megaItems.length > 0) {
    megaItems.map((item, k) => {
      const post = state.source.get(`${item.link}`);
      const p_item = state.source[post.type][post.id];
      const { acf = {} } = p_item;
      const {
        category_for_green_line = '',
        post_featured_image = '',
        short_description = '',
      } = acf;
      let check = true;
      let keyCat = dataCat.length;

      dataCat.map((catItem, k) => {
        if (catItem.toUpperCase() === category_for_green_line.toUpperCase()) {
          check = false;
          keyCat = k;
        }
      });
      if (check) {
        dataCat.push(category_for_green_line);
      }
      data.push({
        src: post_featured_image,
        title: category_for_green_line,
        key: keyCat,
        content: p_item.title.rendered,
        link: p_item.link,
        back: {
          label: category_for_green_line,
          title: p_item.title.rendered,
          content: short_description,
        },
      });
    });
  }

  const catNull = [];
  dataCat.map((item, k) => {
    if (item !== '') catNull.push({ title: item, key: k });
  });

  const filters = (item, index) => {
    if (index === 0) {
      setActive(-1);
      setFilter({});
    } else {
      setFilter(item);
      setActive(index);
    }
  };

  useEffect(() => {
    actions.source.fetch('caseHandler');
  }, []);

  const filterData = filter.key ? data.filter((el) => el.key === filter.key) : data;

  return (
    <Container>
      <Breadcrumbs links={[{ name: 'Case studies', link: '#' }]} />
      <HeaderFilter>
        {
        catNull.map((item, index) => (
          <FilterItem
            onClick={() => filters(item, index)}
            active={active === index}
            min={catNull.length > 6}
            key={index}
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        ))
      }
      </HeaderFilter>
      <CaseWrapper>
        { filterData.map((item, index) => {
          const { back = {} } = item;
          const { label: bLabel = '', title: bTitle = '', content: bContent = '' } = back;
          return (
              <ItemBlock
                key={index}
                link={urlCheck(item.link, replaces)}
              >
                <CaseItemWrapper
                  src={imageUrlCheck(item.src, urlsWithLocal)}
                  link={urlCheck(item.link, replaces)}
                >
                  <CaseItemTitle>
                    { item.title }
                  </CaseItemTitle>
                  <CaseContent>
                    { item.content }
                  </CaseContent>
                </CaseItemWrapper>

                <ItemWrapper>
                  <ItemLabel> 
                    { bLabel }
                  </ItemLabel>
                  <Link link={urlCheck(item.link, replaces)}>
                    <ItemTitle>
                      { bTitle }
                    </ItemTitle>
                  </Link>
                  <ItemDescription>
                    { bContent }
                  </ItemDescription>
                </ItemWrapper>
              </ItemBlock>
          );
        })}
        {filterData.length % 2 !== 0 && (
          <LastItem>
            <LastItemFrame src={CaseBox} />
            <LastItemTitle>{cs_title}</LastItemTitle>
            <LastItemDescription>
              {cs_text}
            </LastItemDescription>
          </LastItem>
        )}
      </CaseWrapper>
    </Container>
  );
};

export default connect(CaseStudies);
