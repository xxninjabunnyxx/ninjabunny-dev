import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Social from './Social'
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            socials {
              icon
              link
            }
          }
        }
      }
    `)

    const socials = data.site.siteMetadata.socials.map(s => <Social icon={s.icon} link={s.link} key={uuidv4()} />)
    
    return (
        <div className="grid grid-cols-1 grid-rows-2 navbar__image gap-2">
            <div className="flex justify-center flex-auto">
                <div className="top-font text-white text-6xl items-center pt-3 transition-all duration-300 transform hover:scale-95">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div>
            </div>
            <div className="flex justify-center flex-row flex-auto text-white text-3xl items-center">
                {socials}
            </div>
        </div>
    )
}

export default Navbar