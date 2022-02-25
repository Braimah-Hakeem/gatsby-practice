import React from "react"
import { Link } from "gatsby"
import { container,siteTitle } from "./layout.module.css"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({pageTitle, children}){
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
      
    `)
    return(
        <div className={container}>
            <title>{pageTitle} | { data.site.siteMetadata.title } </title>
            <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
    </div>
    )
}