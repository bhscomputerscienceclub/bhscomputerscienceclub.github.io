---
layout: default
permalink: /ctfs
---

# CTFs we have participated in


<ol>
    {% for item in site.data.ctf limit: 5%}
        {% capture teamname%}
            {% if item.teamname %}
                (Team
                {{item.teamname}})
            {% endif %}
        {% endcapture %}
        <li>
            {{ item.name }}{{teamname}}
            - Rank
            {{ item.rank }}
            - Percentile
            {{ item.rank | times:100 | divided_by: item.total }}%
        </li>
    {% endfor %}

</ol>


this page will look better soon