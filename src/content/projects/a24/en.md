---
title: The dynamics and success of A24 films in data
type: data visualisation
tags: [data visualisation, Python, film]
lead: >-
  How budgets, box office and ratings of A24 films relate to each other, and how the studio has changed over time.
links:
  - { label: HSE Design, href: 'https://hsedesign.ru/project/24bba4ecb17947e5879bf838bb9e8fd3' }
  - { label: Dataset, href: 'https://www.kaggle.com/datasets/sebastiansuliborski/a24-studio-movies-dataset', note: 'Kaggle' }
  - { label: Notebook and data, href: 'https://drive.google.com/drive/folders/1b9YHTqxbLUkm2mmFedtAhzDrguhP-SEK?usp=sharing' }
texts:
  about:
    label: About the project
    body: |-
      Data visualisation, HSE School of Design, 2025.
  sora:
    body: Generated with Sora
  intro:
    label: Introduction
    body: |-
      A24 has become an important figure in contemporary cinema thanks to its innovative approach to making and distributing films. Its pictures often become cult classics, admired by critics and audiences alike.

      For this research I used a dataset with detailed information on A24 films: titles, release dates, budgets, box office, ratings and the number of votes on IMDb. It covers about 100 of the studio’s films from recent years in CSV format. The data makes it possible to study the link between commercial performance and audience ratings and to trace how the studio has changed over time.

      I chose the topic because I am interested in the film industry. I want to understand how independent studios like A24 shape current film trends. In this research I look at how commercial performance and audience ratings are connected.

      Data analysis helps to find patterns in the studio’s budgets and box office. I look at which ratings A24 films get most often and how they relate to budgets, how the number of films and their ratings change over time, and whether budget, box office and ratings are connected.
  viz:
    body: |-
      For the project I chose several types of visualisation.

      Histograms — for the distribution of ratings and budgets.

      Bar charts — to compare the number of films and average ratings.

      Line charts — for the dynamics of releases and changes in average rating over time.

      Correlation heatmaps — for the relationships between key metrics.

      This set of charts gives a full and clear picture of the data, and styling inspired by A24’s aesthetics makes the project coherent.
  load:
    label: Loading and processing the data
    body: |-
      First I loaded the necessary libraries and the CSV dataset with Pandas and examined its structure: column names, data types and the number of missing values.
  clean:
    body: |-
      After importing, I cleaned the data of missing values and duplicates. The dataset turned out to have no genres, but it had other interesting fields: director, Metascore, Rotten Tomatoes rating and running time in minutes. I also extracted the year from the release date to make time-based analysis easier.
  style:
    label: Styling
    body: |-
      Next I set up the styling of the charts to convey the studio’s atmosphere.

      With ChatGPT I identified the key associations with A24: minimalism, darkness and refinement. Hence the dark background, restrained typography and careful colour accents. Deep blue became the main colour: it is associated with the dark aesthetics and visual restraint of A24 films.

      All the charts share one style: the same typeface, concise axis and data labels. This makes the information read more clearly and keeps the whole project coherent, as befits a theme of independent auteur cinema.
  metrics:
    label: Key metrics
    body: |-
      For the visualisations I analysed the main numerical indicators: IMDb rating, Metascore, Rotten Tomatoes rating and running time. I looked at how ratings relate to running time and to release year to find trends and patterns.
  metrics2:
    body: |-
      IMDb: most A24 films score between 6 and 7.5 — a stable average rating.

      Metascore: critics’ scores are mostly high, around 75–85 — the studio is well received.

      Rotten Tomatoes: ratings are unevenly distributed, critics and audiences disagree.

      Running time: usually between an hour and a half and two hours, the familiar length of a feature film.
  money:
    body: |-
      Budgets: most films have a small budget of up to $10 million, typical of independent film. Only a few projects reach around $100 million.

      Box office: as with budgets, most films take up to $10 million. Occasionally the takings are much higher, which points to a few commercially successful films.
  compare:
    label: Comparative analysis
    body: |-
      Then I compared the number of A24 films and their average ratings by year. This shows how the output changed and how audiences responded.
  compare2:
    body: |-
      The first chart shows how the studio scaled up production: from single releases at the start to a peak by 2017. In 2020 there is a visible drop, most likely due to the pandemic.

      The second chart shows that while the number of films grew, the average IMDb score stayed stable, between 6.3 and 7.0. It seems the growth in production did not change how audiences perceive the films.
  time:
    label: Dynamics over time
    body: |-
      Next I analysed how the number of A24 films and their average IMDb rating changed over time. To do this I extracted each film’s release year and grouped the data.

      I chose a combined chart: the number of films as bars, the average IMDb rating as a line. It clearly shows how the studio developed and how audiences’ attitude to its films changed.
  time2:
    body: |-
      A24 gradually increased the number of films and peaked in 2017. After that output fluctuated, with a noticeable drop in 2020, probably due to the pandemic.

      The average IMDb rating stays around 6.5–7.0 with small fluctuations. The highest average came in 2020–2021, even though there were relatively few films then.

      The number of films changed, while audience perception stayed stable and in some years even improved. This speaks of the studio’s maturity and resilience.
  corr:
    label: Relationships
    body: |-
      To study how budget, box office and ratings are related, I built a correlation heatmap. It lets you check, for example, whether bigger budgets really bring bigger takings.
  corr2:
    body: |-
      The heatmap shows several patterns.

      The strongest links are between Metascore and Rotten Tomatoes (0.94), Metascore and IMDb (0.75), and IMDb and Rotten Tomatoes (0.74). Ratings agree across systems.

      Box office is moderately linked to ratings, especially Metascore (0.42) and IMDb (0.40). Film quality may influence commercial success.

      Budget is almost unrelated to box office (0.06) and weakly related to ratings. A negative link between budget and critics’ ratings suggests that expensive projects do not always get high scores.
  outro:
    label: Conclusion
    body: |-
      I studied the main indicators of A24 films: budgets, box office, ratings and release dynamics by year. My conclusions are these.

      The studio is actively scaling up. Since entering the market A24 has steadily released more films: only a few in the first years, and 15–20 or more a year by the end of the 2010s. The studio has secured a firm place in the industry as an independent player.

      Quality holds as quantity grows. The average IMDb score stays within 6.3–7.0 with no sharp drops: the studio kept its standard after expanding.

      Ratings across platforms are linked. IMDb, Metascore and Rotten Tomatoes correlate strongly (0.7–0.9): audiences and critics agree in their judgements.

      Box office depends more on ratings than on budget. A moderate correlation between takings and ratings (about 0.4) shows that audience perception matters more than the size of funding. Budget is weakly linked to box office and even negatively linked to Metascore and Rotten Tomatoes (−0.3 to −0.4). This highlights A24’s independent, non-commercial approach.

      A24 is an example of an independent studio that invests in an auteur approach to film instead of large-scale special effects. With moderate budgets its films earn high ratings and resonate with audiences. The growing number of releases confirms the studio’s reputation and its ability to keep up quality. A24 is an example of a successful balance between business and artistry.
  ai:
    label: Generative models
    body: |-
      I used ChatGPT to define the project’s style, choose colour codes and help with the code, and the Sora neural network for design elements.
---
