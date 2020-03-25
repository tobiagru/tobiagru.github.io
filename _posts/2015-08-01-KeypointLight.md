---
type: ds-project
layout: inner
position: right
title: 'Landmark Detection in Changing Light'
date: 2015-08-01 15:56:00
categories: project
tags: C++ Python OpenCV  
featured_image: '/img/posts/2015-08-01-KeypointLight.png'
project_link: 'https://github.com/tobiagru/LandmarkDetectionLightConditions'
button_icon: 'github'
button_text: 'Visit Project'
lead_text: 'Exploring the impact of changing light conditions on landmark detection. Benchmarking different keypoint & descriptor algorithms against different light conditions and evaluating the impact of those changes on the extracted keypoints, descriptors and landmarks. Collected a dataset of differing light conditions from a broad set of stable webcams. Light conditions included scenarios as change of day-time, season, shadows, weather changes, and artificial lightning. Evaluation showed that algorithms are extremely susceptiple to even small changes in light and recognition fell below 5%. The solution is to have different keypoints & descriptors depending on time to recognize landmarks, this however leads to an explosion of the lookup database. Developed a solution to build efficient landmark lookups with datetime segmented descriptor databases.'
---
