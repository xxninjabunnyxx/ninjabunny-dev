import React from 'react'
import { FaSkull } from '@react-icons/all-files/fa/FaSkull'
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'

const Social = ({icon, link, id}) => {
    let socialIcon

    switch(icon) {
        case 'github':
            socialIcon = <FaGithubAlt />
            break
        case 'instagram':
            socialIcon = <FaInstagram />
            break
        case 'twitter':
            socialIcon = <FaTwitter />
            break
        default:
            socialIcon = <FaSkull />
    }

    return (
        <a href={link} className="px-3 text-white text-3xl items-center hover:text-indigo-300 transition-all duration-300 transform hover:scale-110" target="_blank" rel="noreferrer" key={id}>{socialIcon}</a>
    )
}

export default Social