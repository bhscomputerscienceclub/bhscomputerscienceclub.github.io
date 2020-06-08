---
layout: default
permalink: /ctfs
---

# CTFs we have participated in

<table class="display" id="table_id">
    <thead>
        <tr>
            <th>CTF Name</th>
            <th>Rank</th>
            <th>Percentile</th>
            <th>Team Name</th>
        </tr>
    </thead>
    <tbody>
            {% for item in site.data.ctf limit: 1000%}        <tr>

                {% capture teamname%}
                    {% if item.teamname %}
                        (Team
                        {{item.teamname}})
                    {% endif %}
                {% endcapture %}
        
                <td>{{ item.name }}</td>
                <td>{{item.rank}}</td>
                <td>
                    {{ item.rank | times:100 | divided_by: item.total }}%
                </td>
                <td>{{item.teamname}}</td>
                </tr>
    {% endfor %}

    </tbody>
</table>

this page will look better soon