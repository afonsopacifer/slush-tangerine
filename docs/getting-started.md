# Getting Started

## 1 - Install
*install the basics dependencies*

- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)

*Clone this repository*
```sh
$ git clone git://github.com/afonsopacifer/new-game.git new_project
```

*Install dependencies*
```sh
$ cd new_project
$ npm install
```
<hr>

## 2 - Set the global configs

*Open the `config.json` file and add your global information and preferences:*

```json
{
  "site_url":"https://exemple.com/",
  "share_img_url":"https://exemple.com/logo.jpg",
  "twitter_card_type":"summary_large_image",
  "open_graph_type":"website"
}
```

`site_url`: Will be used for social sharing meta tags.<br>
`share_img_url`: Will be used for social sharing meta tags.<br>
`twitter_card_type`: More Info on [Twitte Cards Types](https://dev.twitter.com/cards/types).<br>
`open_graph_type`: More Info on [Open Graph Reference](https://developers.facebook.com/docs/reference/opengraph/).

<hr>

## 3 - Create your first page

*Go to `src/` directory and create your `.jade` file:*

`exemple.jade`

```jade
extends ./layouts/default.jade

block page_infos
	-var title = "Exemple title"
	-var description = "Cool description"
	-var keywords = "Your keywords"

block content
	div Hello World
```
`title`: Will be used for social sharing and SEO meta tags.<br>
`description`: Will be used for social sharing and SEO meta tags.<br>
`keywords`: Will be used for SEO meta tag.

<hr>

## 4 - Run
*Watch the files to build and run a static server on http://localhost:8080/*
```sh
$ gulp serve
```
