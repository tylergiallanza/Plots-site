title: Scatter Plots and Bubble Charts
slug: scatter-plots
category: charts
date: 2018-04-18
modified: 2018-04-18
description: Scatter plots and bubble charts are very versatile plots that allow for comparison between datapoints, analysis of the distribution of a data, and trends/relationships between variables. Scatter plots and bubble charts show all of the datapoints, allowing for simple anomaly/outlier detection.
subsections: Scatter plots,Colored scatter plots,Bubble charts,Colored bubble charts
subsectionids: scatp,cscatp,bubp,cbubp

Scatter plots|
Scatter plots show the relationship between two columns by plotting every single datapoint as its own circle on a graph. Since scatter plots show every datapoint, they can also be used to reveal the distribution of the data.|
scatp.png|
2,numeric,numeric


\Colored scatter plots|
Colored scatter plots extend scatter plots by introducting color. Every datapoint is given a color that is determined by a categorical variable. Colored scatter plots thus allow for comparision of three different columns, two numeric and one categorical.|
scatp.png|
3,numeric,numeric,categorical

\Bubble charts|
Bubble charts are similar to colored scatter plots, but instead of introducing color as an additional variable bubble charts use the size of the circle. Every datapoint is then represented by three numeric columns: one for the x axis, one for the y axis, and one for the size of the bubble.|
bubp.png|
3,numeric,numeric,numeric

\Colored bubble charts|
Colored bubble charts combine colored scatter plots with bubble charts. Colored bubble charts represent each datapoint using four columns: one numeric column for the x axis, one numeric column for the y axis, one numeric column for the bubble size, and one categorical column for the bubble color.|
cbubp.png
4,numeric,numeric,numeric,categorical
