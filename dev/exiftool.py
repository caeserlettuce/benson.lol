#!/usr/bin/env python3
import json
import os
import sys
import subprocess
#import xxhash

def WalkDir(path):
    result = []
#    xx = xxhash.xxh64()

    exifdata = {}
    ## Run exiftool on the files
    cmd = ["exiftool", "-json", "-q", "-c", "%0.6f", path]
    try:
        out = subprocess.check_output(cmd)
        j = json.loads(out)
        exifdata[path] = j
    except subprocess.CalledProcessError:
        pass

    return exifdata


import time
