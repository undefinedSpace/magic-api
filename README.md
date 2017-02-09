# unefinedSpace

## Installation

1. Install dependencies: `npm install`

## Commands

`node server/start`

> Graphql server, остального пока нет.
> Тест запрос http://127.0.0.1:3000/graphql?query=%7B%0A%09projects(id%3A%202)%20%7B%0A%09%20%20id%0A%20%20%20%20token%0A%20%20%20%20hostname%0A%20%20%20%20ip%0A%09%7D%0A%7D