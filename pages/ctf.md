---
layout: default
permalink: /ctfs
title: CTFs we have participated in
---

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">
  
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>
<script>
    $(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>

# CTFs we have participated in

<table class="display" id="table_id">
    <thead>
        <tr>
            <th>CTF Name</th>
            <th>Rank</th>
            <th>Percentile</th>
            <th>Team Name</th>
        </tr>for possible later reuse (or you can then git stash drop it). 
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