import { gql } from "graphql-request";

export const GET_ABOUT = gql`
    query MyQuery {
      about(where: {id: "cm52c6zv6ad4808mfaezsaytc"}) {
        id
        bio {
          markdown
          html
        }
        otherExperience {
          markdown
          html
        }
      }
    }
  `;  

export const GET_PROJECTS = gql`
    query MyQuery {
      projects(orderBy: publishedAt_DESC) {
        id
        overview
        title
        github
        demoLink
        publishedAt
      }
  }
  `;

export const GET_LANGUAGES = gql`
    query MyQuery {
      languages(orderBy: order_ASC) {
          id
          name
          order
          publishedAt
        }
    }
  `;

export const GET_TIMELINE = gql`
    query MyQuery {
      timelines(orderBy: date_DESC) {
        id
        date
        endDate
        title
        description
      }
    }
  `;