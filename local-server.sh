#!/bin/bash
## File Name: local-server.sh
## Author:  shen.szr   mail: shen.szr@alibaba-inc.com
## Description: 
## Created Time: Tue 05 Apr 2016 09:56:05 PM CST

#!/bin/sh

rm -rf _site/*
jekyll serve -H 0.0.0.0


#检查错误
#jekyll build --trace
