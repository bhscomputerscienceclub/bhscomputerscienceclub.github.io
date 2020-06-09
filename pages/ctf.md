---
layout: default
permalink: /ctfs/
title: CTFs we have participated in
---

<link href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css" rel="stylesheet" type="text/css">

<script charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js" type="text/javascript"></script>
<script>
    $(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>


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
            </tr>
        {% endfor %}

    </tbody>
</table>

~~this page will look better soon~~
this page will look nicer later