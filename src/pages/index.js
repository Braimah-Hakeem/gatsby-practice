import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage(){
  return(
      <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/Ella_the_Cavapoo_puppy.jpeg" 
      alt="An image of a beautiful Cavapoo dog"
      />
    </Layout>
  )
}