import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="latest">
      <h1 className="page-title-desc">Insights</h1>

      <div className="article">
        <div className="latest">
          {data.allWordpressPost.edges.map(post => (
            <Link to={`/post/${post.node.slug}`}>
              <div className="post">
                <div className="post-meta">
                  <div className="input-class post-title">
                    <div className="post-author">
                      {/* {post._embedded.author[0].name} */}
                    </div>
                    <div className="post-time-date">{post.node.date}</div>

                    <div style={{ width: "75%" }}>
                      <h3
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                        style={{ marginBottom: 0 }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />

                <div className="post-image">
                  {/* <img
                  src={
                    post.node.featured_media.localFile.childImageSharp.sizes
                      .originalImg
                  }
                  alt={post.node.title}
                  style={{ width: "25%", marginRight: 20 }}
                /> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")

          featured_media {
            localFile {
              childImageSharp {
                sizes {
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`
