---
layout: tablepage
permalink: /hackathons/
title: Hackathons we have participated in

---


<table class="display" id="table_id">
    <thead>
        <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Project</th>
            <th>Year</th>

        </tr>
    </thead>
    <tbody>
        {% for item in site.data.hackathon limit: 1000 %}
            {% capture projectname %}
                {% if item.projecturl != false %}
                    <a href="{{item.projecturl}}">{{ item.projectname }}</a>
                {% else %}
                    {{item.projectname}}
                {% endif %}
            {% endcapture %}

            {%capture rank%}
                {% if item.rank %}
                    {{item.rank}}
                {% else %}
                    Did not win
                {% endif %}
                {%endcapture%}

                <tr>
                    <td>{{ item.name }}</td>
                    <td>{{rank}}</td>
                    <td>{{projectname}}</td>
                    <td data-order="{{item.endtime}}">{{ item.endtime | divided_by: 31556926 | plus: 1970 }}</td>
                </tr>
            {% endfor %}
        </tbody>
</table>

