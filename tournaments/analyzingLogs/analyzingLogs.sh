#!/bin/bash
#awk -F\| '$2=="ERROR" {print $3}' ~/d*/*/*.l* \
# | sort \
# | uniq -c \
# | sed -r 's/ *(.+) (.+)/\2 \1/' \
# | sort -t \  -k 2nr

#awk -F\| '$2=="ERROR"  { a[$3]++ } END { for (f in a) print f, a[f] }' ~/*/*/*g | sort -t \  -k 2nr

#awk -F\| '$2 && $2<"F" { a[$3]++ } END { for (f in a) print f, a[f] }' ~/*/*/*g | sort -t \  -k 2nr

#awk -F\| '$2 ~ /^E/    { a[$3]++ } END { for (f in a) print f, a[f] }' ~/*/*/*g | sort -t\  -k2nr

 awk -F\| '$2 ~ /^E/    { a[$3]++ } END { for (f in a) print f, a[f] }' ~/*/*/*g | sort -k2nr
