import React from "react"
import { Link } from "gatsby"
import { container,navItems,navListItem,siteTitle } from "./layout.module.css"
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
                <ul className={navItems}>
                    <li className={navListItem}><Link to="/">Home</Link></li>
                    <li className={navListItem}><Link to="/about">About</Link></li>
                    <li className={navListItem}><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
    </div>
    )
}