title: Box and Violin Plots
slug: plots/box-plots
category: charts
date: 2018-04-18
modified: 2018-04-18
description: Box and violin plots are used to analyze the distribution of your data. Some variations allow for comparision, seeing how the distribution of the data changes based on a certain variable.
subsections: Box plots,Violin plots,Multi-box plots,Multi-violin plots,Stacked box plots,Stacked/Split violin plots,Swarm plots,KDE plots
subsectionids: boxp,viop,mboxp,mviop,sboxp,sviop,swarmp,kdep

Box plots|
Box plots visualize the distribution of your data. Box plots take in one column of numeric data and display the 25th, 50th, and 75th percentile of the data. This allows you to get a general idea of how your data is distributed, but it is not a very detailed view because it only shows quartiles and not what is in between.|
boxp.png|
1|numeric

\Violin plots|
Violin plots perform the same function as box plots: visualizing the distribution of your data. Violin plots, however, use a technique called Kernal Denisty Estimation (KDE) to get a smooth estimate of the distribution. This means that, unlike with a box plot, you can see what the distribution of your data looks like at all points, not just the quartiles.|
viop.png|
1|numeric


\Multi-box plots|
Multi-box plots perform the same function as box plots, but allow for comparison across an additional categorical column. Multi-box plots demonstrate the distribution of one column in your data based on the values in another column - for example, demonstrating the distribution of income grouped by the highest degree that each college offers.|
mboxp.png|
2|numeric and categorical

\Multi-violin plots|
Multi-violin plots perform the same function as multi-box plots, but use a KDE to show the distribution of the data rather than simply the quartiles.|
mviop.png|
2|numeric and categorical

\Stacked box plots|
Stacked box plots further extend multi-box plots, by grouping some of the plots together. Stacked box plots thus allow for using 2 categorical variables to group the box plots. For example, you can demonstrate the distribution of income for the highest degree each school offers, and further sub-divide that by if the school is public or private.|
sboxp.png|
3|numeric,categorical and categorical

\Stacked/split violin plots|
Stacked/split violin plots perform the same function as stacked box plots, but use a KDE to show the distribution of the data rather than simply the quartiles. The "split" variety of the violin plot is a special subcase of the "stacked" violin plot. Split plots are used with binary categorical values (like gender), whereas stacked plots are used with multi-class categorical values (like race).|
sviop.png|
3|numeric,categorical and categorical

\Swarm plots|
Swarm plots perform the same function as stacked/split violin plots but provide a different visualization: instead of showing the KDE for the data, the swarm plot shows a dot for every data point. The numeric column is displayed along the x axis, one of the categorical columns is displayed along the y axis, and the other categorical column is used to set the color of each dot on the graph. Swarm plots provide greater granularity than violin plots because they show the actual data rather than an estimate of how the data is distributed. However, for large datasets it may be better to use a violin plot because showing every individual data point can be overwhelming.| 
swarmp.png|
3|numeric,categorical and categorical

\KDE plots|
KDE plots show bivariate distributions (the distribution of your data with respect to two columns) grouped by a categorical column. For example, a KDE plot could show the distribution of admit rate and median family income for different colleges, broken up by if the college is public or private.|
kdep.png|
3|numeric,numeric and categorical
