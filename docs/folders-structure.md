## Folders Structure
	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENSE.md
	├── src/
	|   ├── assets/
	|   ├── includes/
	|   ├── partials/
	|   ├── layouts/
	|   └── index.jade
	├── out/
	├── config.json
	├── gulpfile.js
	├── package.json
	└── .gitignore

### config.json

```json
{
  "site_url":"https://exemple.com/",
  "share_img_url":"https://exemple.com/logo.jpg",
  "twitter_card_type":"summary_large_image",
  "open_graph_type":"website"
}
```
### src/
### src/assets/
### src/includes/
### src/partials/
### src/layouts/
### src/index.jade

```jade
extends ./layouts/default.jade

block page_infos
	-var title = ""
	-var description = ""
	-var keywords = ""

block content
	main main
```
### out/
