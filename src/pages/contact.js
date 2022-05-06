import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


function ContactPage(props) {
  console.log(props);

  const { title } = props.data.contactPage;
  const iconicCardsSection = props.data.contactPage.iconic_cards_section;

  return (
    <Layout location={props.location}>
      <h1>{title}</h1>
      <div style={{border: '1px solid grey'}}>
        <h2>{iconicCardsSection[0].title}</h2>
        {iconicCardsSection.map(icc => {
          return icc.iconic_cards.map(icc0 => {
            console.log(icc0)
            return (<div style={{border: '1px dotted cyan'}}>
              <h3>{icc0.title}</h3>
            </div>);
          })
        })}
      </div>
    </Layout>
  );
}

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
    contactPage: contentfulPage(name: {eq: "contact"}) {
      iconic_cards_section {
        iconic_cards {
          title
        }
        title
      }
      slug
      title
    }
  }
`
