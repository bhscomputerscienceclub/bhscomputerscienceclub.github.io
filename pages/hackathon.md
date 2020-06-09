---
layout: default
permalink: /hackathons/
title: Hackathons we have participated in

---


   <ol>
      {% for item in site.data.hackathon %}
      <li>
        {{ item.name }}{% if item.rank %} - Rank {{item.rank}}  - Percentile {{ item.rank | times:100 | divided_by: item.total }}% {% else %} - did not win{% endif %} - Our project <a href="{{item.projecturl}}">{{ item.projectname }}</a> - Location: {{item.location}}
      </li>
      {% endfor %}
    </ol>


this page will look better soon