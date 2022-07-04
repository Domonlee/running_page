#!/bin/bash
for i in `ls ./*.gpx`
	do curl -X POST https://www.strava.com/api/v3/uploads -H "Authorization: Bearer 05dfdaec8d9d9f7ec7909e2d7b59b09370244110" -F file=@"$i" -F data_type="gpx"
done
