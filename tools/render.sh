#!/bin/bash
# render.sh URL OUTFILE  -- dumps rendered DOM with a hard 45s cap, own profile per call
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
P=$(mktemp -d /tmp/chromeprof.XXXX)
"$C" --headless=new --disable-gpu --no-first-run --user-data-dir=$P --dump-dom --virtual-time-budget=12000 "$1" > "$2" 2>/dev/null &
PID=$!
for i in $(seq 1 45); do sleep 1; kill -0 $PID 2>/dev/null || break; done
kill $PID 2>/dev/null; rm -rf $P
echo "$(wc -c < "$2") $1"
