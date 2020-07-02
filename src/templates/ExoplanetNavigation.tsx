import React, { ReactElement, Fragment } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import kebabCase from "lodash/kebabCase";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import "./Navigation.less";

interface IndexProps {
  data: {
    scenarios: {
      edges: {
        node: {
          type: string;
          discoveryFacility: string;
          name: string;
          fields: {
            scenarioImage: {
              childImageSharp: {
                fixed: any;
              };
            };
          };
        };
      }[];
    };
    file: {
      childImageSharp: {
        fluid: any;
      };
    };
    categories: {
      group: { fieldValue: string }[];
    };
  };
  pageContext: {
    limit: number;
    skip: number;
    discoveryFacility: string;
    numPages: number;
    currentPage: number;
    currentPageName: string;
    pagePath: string;
  };
  location: any;
}

export default ({ data, pageContext, location }: IndexProps): ReactElement => {
  const categories = data.categories.group;
  const discoveryFacilities = data.discoveryFacilities.discoveryFacilities;
  const scenarios = data.scenarios.edges;

  return (
    <Fragment>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ position: "fixed", top: 0, bottom: 0, width: "100%" }}
      />
      <Header
        pageTitle={pageContext.currentPageName}
        pageDescription="3D Gravity Simulator. Simulate the solar system, exoplanets and even colliding galaxies. You can add, delete and modify any mass in a simulation."
        location={location}
      />
      <section className="scenarios-wrapper">
        <Nav
          css={{
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
            fontWeight: "bold"
          }}
        >
          <Link to={`/`}>
            <NavItem active={pageContext.currentPageName === "All"}>
              All
            </NavItem>
          </Link>
          {categories.map(category => (
            <Link
              to={
                category.fieldValue !== "Exoplanets"
                  ? `/${kebabCase(category.fieldValue)}`
                  : `/${kebabCase(category.fieldValue)}/all`
              }
            >
              <NavItem
                active={
                  kebabCase(pageContext.currentPageName) ===
                    kebabCase(category.fieldValue) ||
                  category.fieldValue === "Exoplanets"
                }
              >
                {category.fieldValue}
              </NavItem>
            </Link>
          ))}
        </Nav>

        {pageContext.type === "Exoplanets" && (
          <Nav
            css={{
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              fontWeight: "bold",
              overflowX: "scroll",
              width: "100%",
              padding: "15px",
              justifyContent: "flex-start"
            }}
          >
            {discoveryFacilities?.map(discoveryFacility => (
              <Link
                to={`/exoplanets/${kebabCase(discoveryFacility.fieldValue)}`}
              >
                <NavItem
                  active={
                    kebabCase(pageContext.currentPageName) ===
                    kebabCase(discoveryFacility.fieldValue)
                  }
                >
                  {discoveryFacility.fieldValue}
                </NavItem>
              </Link>
            ))}
          </Nav>
        )}

        {pageContext.numPages > 1 && (
          <Pagination
            pagination={{
              start: pageContext.skip,
              end: pageContext.currentPage * pageContext.limit,
              count: pageContext.numPages,
              page: pageContext.currentPage,
              path: pageContext.pagePath
            }}
            itemsPerPage={pageContext.limit}
          />
        )}
        <div className="scenarios-gallery">
          {scenarios.map(({ node }) => (
            <Link to={`/${kebabCase(node.type)}/${kebabCase(node.name)}`}>
              <div className="scenario-link">
                <Img fixed={node.fields.scenarioImage.childImageSharp.fixed} />
                <p className="scenario-name">{node.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export const pageQuery = graphql`
  query($discoveryFacility: String, $limit: Int, $skip: Int) {
    scenarios: allScenariosJson(
      filter: { discoveryFacility: { eq: $discoveryFacility } }
      sort: { order: ASC, fields: [sortOrder] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          type
          discoveryFacility
          name
          pl_pnum
          fields {
            scenarioImage {
              childImageSharp {
                fixed(width: 200, height: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    categories: allScenariosJson {
      group(field: type) {
        fieldValue
      }
    }
    discoveryFacilities: allScenariosJson {
      discoveryFacilities: group(field: discoveryFacility) {
        fieldValue
      }
    }
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;