import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    //const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    console.log(posts)

    return (
      <Layout location={this.props.location}>
        {/*<Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        />
        <ArticlePreview posts={posts} />*/}

        <a href="/contact">
          <h2>Go to see the contact</h2>
        </a>

        {posts.map(post => {
          return (<div>
            <h3>{post.title}</h3>
            <a href={`blog/${post.slug}`}>Read More</a>
          </div>);
        })}

      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost { #(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        # publishDate(formatString: "MMMM Do, YYYY")
        # tags
        # heroImage {
        #   gatsbyImageData(
        #     layout: FULL_WIDTH
        #     placeholder: BLURRED
        #     width: 424
        #     height: 212
        #   )
        # }
        description {
          #childMarkdownRemark {
          #  html
          #}
          raw
        }
      }
    }
    #allContentfulPerson(
    #  filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    #) {
    #  nodes {
    #    name
    #    shortBio {
    #      shortBio
    #    }
    #    title
    #    heroImage: image {
    #      gatsbyImageData(
    #        layout: CONSTRAINED
    #        placeholder: BLURRED
    #        width: 1180
    #      )
    #    }
    #  }
    #}
  }
`
