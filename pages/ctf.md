---
layout: tablepage
permalink: /ctfs/
title: CTFs we have participated in
---


<table class="display" id="table_id">
    <thead>
        <tr>
            <th>CTF Name</th>
            <th>Rank</th>
            <th>Percentile</th>
            <th>Team Name</th>
            <th>Year</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        {% for item in site.data.ctf limit: 1000%}
            <tr>

                {% capture teamname%}
                    {% if item.teamname %}
                        (Team
                        {{item.teamname}})
                    {% endif %}
                {% endcapture %}
                <td>{{ item.name }}</td>
                <td>{{item.rank}}</td>
                <td>
                    {{ item.rank|minus: 1 | times:-100 | divided_by: item.total | plus: 100}}%
                </td>
                <td>{{item.teamname}}</td>
                <td data-order="{{item.endtime}}">{{ item.endtime | divided_by: 31556926 | plus: 1970 }}</td>
                <td data-order="{{item.points|times:1.0|divided_by:item.totalpoints}}" >{{item.points}}/{{item.totalpoints}}</td>
            </tr>
        {% endfor %}

    </tbody>
</table>

# Our CTF Calendar
<br>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YmVhY2h3b29kc2Nob29scy5vcmdfbWxvN2s0ZmFva2UwZnEzbWo0dWYxMDJqNWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300&amp;showDate=1&amp;title=CTFs%20for%20High%20School%20Students" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>