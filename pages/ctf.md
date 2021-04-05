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
            <th>High School Only</th>
            <th>Year</th>
            <th>Points</th>
            <th>Team Name</th>
            <th>Comments</th>

        </tr>
    </thead>
    <tbody>
        {% for item in site.data.ctf limit: 1000%}
            <tr>


                <td>{{ item.name }}</td>
                <td data-order="{{item.rank}}">{{item.rank}}/{{item.total}}</td>
                <td>
                    {{ item.rank|minus: 1 | times:-1000 | divided_by: item.total | divided_by: 10.0 | plus: 100}}%
                </td>
                <td>
                    {% if item.high_school%}High School Only{%else %}Not High School Only{%endif%}</td>
                <td data-order="{{item.endtime}}">{{ item.endtime | divided_by: 31556926 | plus: 1970 }}</td>
                <td data-order="{{item.points|times:1.0|divided_by:item.totalpoints}}">{{item.points}}/{{item.totalpoints}}</td>
                <td>{{item.teamname}}</td>
                <td>{{item.comment}}</td>

            </tr>
        {% endfor %}

    </tbody>
</table>

### Our CTFtime page at [ctftime.org](https://ctftime.org/team/108190){:target="_blank"}
‎‎‎‏‏‎ 
And our other CTFtime page [ctftime.org](https://ctftime.org/team/91398){:target="_blank"}

# Our CTF Calendar


{% include calendar/ctf.html %}
