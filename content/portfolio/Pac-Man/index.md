---
title: Unity Pac-man Clone
summary: Pac-man Clone made in unity using old-style nodes
tags:
- Unity
date: "2018-12-01T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption:
  focal_point:
  show: false

links:
- icon: unity
  icon_pack: fab
  name: FullScreen Play
  url: https://jdiogobc.github.io/Pacman-Unity2D/pac_man_web_build/index.html
##url_code: ""
#url_pdf: ""
#url_slides: ""
#url_video: "https://drive.google.com/file/d/1suOxIbtWvBjfJXruSN6QMRr_7jiWpFZt/preview"

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---

<div style="width: 100%; position: relative; padding-bottom: 56.25%;">
<iframe src="https://jdiogobc.github.io/Pacman-Unity2D/pac_man_web_build/index.html" width="100%" height="100%" style="position: absolute; top: 0; left: 0;"></iframe>
</div>

This was a really fun 5-day project. <br>
I used old-style nodes for navigation and A-start algorithm for the ghosts to find the best path in the maze. In modern game-design one would use collisions/Raycasting and Nav Mesh to calculate where the player can go
and to calculate the shortest route between two points.<br>
This is nice and easy when you have a ton o computing power (as we all have in our pockets).
But I though it was a fun project to go back to the basics on the way the old-masters used to jam

Some details in the game difficulty scaling are not fine-tuned to mimic the original perfectly.<br>
I used information from:

http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior <br>
http://www.gamasutra.com/view/feature/3938/the_pacman_dossier.php?print=1

Inspired by:

https://github.com/vilbeyli/Pacmam <br>
https://github.com/davecusatis/A-Star-Sharp
