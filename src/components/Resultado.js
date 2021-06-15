import React from 'react'

export default function Resultado({title, link, key}) {
  // const truncateLink = (link) => link.length > 50 ? `${link.slice(0, 50)}...` : link;

  return (
    <div key={key} className="resultado">
      <h1>{title}</h1>
      <a href={link} target='_blank'>{`${link.slice(0, 50)}...`}</a>
      <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
    </div>
  )
}
